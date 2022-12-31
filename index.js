const { createClient } = require('@supabase/supabase-js')

let database 
let SUPABASE_TABLE_NAME

const recognizedParams = ["fbclid"]

// this needs to be a next function can get ip? and incorporate navigator
// switch to beacon so non-blocking https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
// https://support.google.com/google-ads/answer/2472708?hl=en

function initSeeClient(config) {
  if (!config.SUPABASE_ANON) throw "Missing Supabase"
  SUPABASE_TABLE_NAME = config.SUPABASE_TABLE_NAME
  
  database = createClient(
    config.SUPABASE_URL,
    config.SUPABASE_ANON
  )
  
  if(config.disableEventListener === true) { return }
  // check if qyery param // put in sessionstorage
  // if not, create session id put in session storage
  
  const sessionId = new URL(window.location.href).searchParams.get("fbclid") 
    ?? createSessionId()

  window.sessionStorage.setItem("id", sessionId);
  // rewrite url wo query param
  window.history.replaceState({}, "", window.location.origin)

  initVisibilityChangeListener()
  initLinkClickListener()
}

async function see (event) {
  post(event)
}

  // https://developer.chrome.com/blog/page-lifecycle-api/#event-visibilitychange

function initVisibilityChangeListener() {
  // will this request be made? https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
   window.addEventListener("visibilitychange", (event) => {
    post({
      action_type: "exit"
    })
  })
}


// add event listener to window, post if click is href
function initLinkClickListener() {
  window.addEventListener("click", (event) => {
    const { localName } = event.target
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


  // console.log(itemToPost)
  await database
    .from(SUPABASE_TABLE_NAME)
    .insert({data: itemToPost}, {
      returning: 'minimal'
    })

    // we don't really care if it fails
}

function createSessionId() {
    const length = 24
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = {
  see,
  initSeeClient
}