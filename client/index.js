// index.js

import("./static/app.css")
import { createClient } from '@supabase/supabase-js'
import config from "./config"
import {
  parseSource,
  getTwitRefs,
  getClickThroughs
} from './utils'

let database = createClient(
  config.SUPABASE_URL,
  config.SUPABASE_ANON
)

import choo from "choo"
const app = choo()

import home from "./views/home"
import ux from "./store/ux"

app.route("/", home)

app.use(ux)

app.use((state, emitter) => {
  emitter.on("DOMContentLoaded", async () => {

    let { data, error } = await database
      .from(config.SUPABASE_TABLE_NAME)
      .select('*')
      .order('id', {
        ascending: false
      })

    if (error) throw error

    let groups = data.reduce((groups, item) => {

      // timezone change here
      const tzDate = new Date(item.created_at).toLocaleString('en-US', {
        timeZone: 'America/New_York'
      })

      item.data.timestamp = tzDate
      const date = tzDate.split(',')[0];

      if (!groups[date]) {
        groups[date] = [];
      }

      groups[date].push(item);

      return groups;
    }, {});

    // console.log(groups)

    groups = getAnalytics(groups)
    // groups = groupBySession(groups)

    state.data = groups
    emitter.emit("render")

  })
})

app.mount("body")


function getAnalytics(groups) {
  // loop through groups
  let entries = Object.entries(groups)

  let newObj = {}

  for (let i = 0; i < entries.length; i++) {

    let visits = 0
    let fb = 0
    let twit = 0
    let clickThroughs = 0

    for (let d = 0; d < entries[i][1].length; d++) {
      const element = entries[i][1][d];
      if (element.data.action_type === "visit") {
        visits++
      }

      if (getClickThroughs(element.data)) {
        clickThroughs++
      }
      if (getTwitRefs(element.data.referrer)) {
        twit++
      }
      // pre-sessionId manual facebook get
      let fbclid = parseSource(element.data.source)
      if (fbclid) {
        element.data.sessionId = fbclid
        fb++
      }
    }
    entries[i].push({
      visits: visits,
      fb: fb,
      twit: twit,
      clickThroughs: clickThroughs
    })
    newObj[entries[i][0]] = {
      data: entries[i][1],
      meta: entries[i][2]
    }
  }

  return newObj


}

function groupBySession(groups) {
  // console.log(groups)
  for (const key in groups) {

    console.log(groups[key].data)
    let g = groups[key].data.reduce((group, item) => {

      console.log(item)
      if (!item.data.sessionId) {
        item.data.sessionId = "xyz"
      }

      console.log(item.data.sessionId, item.data.sessionId)
      if (!group[item.data.sessionId]) {
        group[item.data.sessionId] = [];
      }
      console.log(group)
      console.log(item.data.sessionId, group[item.data.sessionId])

      group[item.data.sessionId].push(item)

    return group

    }, {})

    // if (Object.hasOwnProperty.call(object, key)) {
    //   const element = object[key];
      
    // }
    return g
  }
  console.log(g)
  return groups
}