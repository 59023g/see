import html from "choo/html"

export default (state, emit) => {

  return html `
  <fieldset>
    <legend>Timezone:</legend>

    <div>
      <input type="radio" id="gmt" name="drone" value="gmt"
            checked>
      <label for="gmt">gmt</label>
    </div>

    <!--<div>
      <input type="radio" id="pst" name="drone" value="pst">
      <label for="pst">pst</label>
    </div>

    <div>
      <input type="radio" id="cst" name="drone" value="cst">
      <label for="cst">cst</label>
    </div>

    <div>
      <input type="radio" id="est" name="drone" value="est">
      <label for="est">est</label>
    </div> -->

  </fieldset>
  `
}