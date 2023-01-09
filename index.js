const recognizedParams = ["fbclid", "q"]

function getQueryParam() {
  for (const item of recognizedParams) {
    let param = new URL(window.location.href).searchParams.get(item)
    if (param) return param
  }
}

function initSeeClient(config = {}) {
  if (config.disableEventListener === true) { return }
  // check if qyery param // put in sessionstorage
  // if not, create session id put in session storage
  const sessionId = getQueryParam() ??
    createSessionId()
  window.sessionStorage.setItem("id", sessionId);
  // rewrite url wo query param
  if(window.location.host !== "timesteader.com") {
    window.history.replaceState({}, "", window.location.origin)
  }

  initVisibilityChangeListener()
  initLinkClickListener()
  post({ action_type: "visit"})
}

async function see(itemToPost) {
  // console.log(itemToPost)
  post(itemToPost)
}  

function initVisibilityChangeListener() {
  window.addEventListener("visibilitychange", (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event
    if (document.visibilityState === 'visible') {
      post({ action_type: "re-enter" })
    } else if (document.visibilityState === 'hidden') {
      post({ action_type: "exit" })
    }
  })
}

// add event listener to window, post if click is href
function initLinkClickListener() {
  window.addEventListener("click", (event) => {
    const {
      localName
    } = event.target
    if (localName === "a") {
      const itemToPost = {
        action_type: "click",
        action: event.target.href,
        action_detail: `${event.target.innerText}`,
      }
      post(itemToPost)
    }
  })
}

async function post(itemToPost) {
  itemToPost = Object.assign(itemToPost, {
    source: window.location.href,
    sessionId: window.sessionStorage.getItem("id"),
    timestamp: new Date().toUTCString(),
    referrer: document.referrer,
  })

  navigator.sendBeacon(
    getApiUrl(),
    JSON.stringify(itemToPost)
  )
  // we don't really care if it fails
}

function createSessionId() {
  const length = 24
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getApiUrl() {
  return window.location.hostname === "127.0.0.1" ? "http://localhost:3000/api/see" : "https://client-eight-snowy.vercel.app/api/see"
}

module.exports = {
  see,
  initSeeClient
}