const { createClient } = require('@supabase/supabase-js')

let database 
let SUPABASE_TABLE_NAME

function initSeeClient(config) {
  if (!config.SUPABASE_ANON) throw "Missing Supabase"
  SUPABASE_TABLE_NAME = config.SUPABASE_TABLE_NAME
  database = createClient(
    config.SUPABASE_URL,
    config.SUPABASE_ANON
  )
  if(config.disableEventListener === true) { return }
  initLinkClickListener()
}

async function see (event) {
  post(event)
}

// add event listener to window, post if click is href
function initLinkClickListener() {
  window.addEventListener("click", (event) => {
    const { localName } = event.target
    if (localName === "a") {
      const itemToPost = {
        action_type: "navigate",
        source: window.location.href,
        action: event.target.href, // url
        action_detail: `click ${event.target.innerText} link`,
        data: {
          source: window.location.href,
          timestamp: new Date().toUTCString(),
          action_type: "navigate",
          action: event.target.href,
          action_detail: `click ${event.target.innerText} link`,      
        }
      }
      post(itemToPost)
    }
  })
}

async function post(itemToPost) {
  await database
    .from(SUPABASE_TABLE_NAME)
    .insert(itemToPost, {
      returning: 'minimal'
    })

    // we don't really care if it fails
}

module.exports = {
  see,
  initSeeClient
}