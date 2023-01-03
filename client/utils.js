export function parseSource(source) {
  if (!source.includes("https")) {
    source = "https://" + source
  }
  let fbclid = new URL(source).searchParams.get("fbclid")
  if (fbclid) {
    return "FB " + fbclid
  }

  return

}

export function getTwitRefs(ref) {
  if (!ref) return false
  if(ref.includes('t.co')) {
    return true
  }
}

export function renderActionType (at) {
  // navigate is legacy
  if (at === "navigate") return "click"
  return at
}

export function renderActionDetail(ad) {
  // remove click and link
  // ad = '<div class="mr4">-</div>' + ad
  return ad.replace("click", "").replace("link", "")
}

export function getClickThroughs(data) {
  if (!data.action) return false
  if(data.action.includes("time.claims")) {
    return true
  }
}