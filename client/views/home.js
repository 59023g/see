import html from "choo/html"

import entries from "./entries";

export default (state, emit) => {

  return html `
    <body>
      <main>
          <div>
            ${entries(state,emit)}
          </div>
      </main>
    </body>
  `
}