import html from "choo/html"
import raw from "choo/html/raw"
import {
  renderActionType,
  renderActionDetail
} from "../utils"
export default (state, emit) => {

  function renderEntry(dayArr) {
    let entries = ""
    dayArr.reverse()
    for (let i = 0; i < dayArr.length; i++) {
      let {
        timestamp,
        sessionId,
        action_type,
        action,
        action_detail,
        referrer,
        meta,
        source
      } = dayArr[i].data;

      const date = new Date(timestamp)
      // console.log(dayArr[i])
      entries += `
        <li>
            <div class="df fdr fww">
                <div class="mr4 fwb">
                    ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}
                </div>
                
                <div class="mr4">${renderSource(source)}</div>
                <div class="session mr4 ${sessionId ? '' : 'dn'}">
                  ${sessionId ? sessionId.slice(0,24) : ''}
                </div>
                <div class="uppercase mr4">
                    ${renderActionType(action_type, meta )}
                </div>
                <div class="mr4 ${action_type === "visit" ? 'dn' : ''}">-</div>

                ${action_detail ? renderActionDetail(action_detail) : ""}
                <div class="${action ? 'df ' : 'dn'}">
                    (${action ? renderAction(action) : ""})
                </div>
                <div class="${referrer ? 'df fdr' : 'dn'}">
                    Referrer: ${referrer}
                </div>
            </div>
        </li>
      `
    }

    return entries

  }

  function renderSource(source) {
    if (source.includes("time.claims")) {
      return "TC"
    } else {
      return "TS"
    }
  }
  function renderDay() {
    if (!state.data) return
    let days = ""

    const entries = Object.entries(state.data)
    for (let i = 0; i < entries.length; i++) {
      days += `
            <li>
              <div class="entry-date df fdr jcsb">
                <div class="mr4">${entries[i][0]}</div>
                <div class="df fdr" style="opacity: 0.5">
                  <div class="mr4">Visits: ${entries[i][1].meta.visits}, CT% ${Math.round(entries[i][1].meta.clickThroughs/entries[i][1].meta.visits* 100)}(${entries[i][1].meta.clickThroughs})</div>
                  <div>(From FB: ${entries[i][1].meta.fb}, From T: ${entries[i][1].meta.twit})</div>
                </div>
              
              </div>
              <ul>
                ${renderEntry(entries[i][1].data)}
              </ul>
            </li>
          `
    }

    return raw(days)
  }

  return html `
      <div>
        <ul>
          ${renderDay()}
        </ul>
      </div>
  `
}

function renderAction(action) {
  if(action.includes("time.claims")) {
    return `??? <div class='action df'> ${action}</div>`
    
  }

  return "??? " + action
  
}