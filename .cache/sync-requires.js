// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-slide-js": preferDefault(require("/Users/matiasurbano/dev/pianoenba/src/templates/slide.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/matiasurbano/dev/pianoenba/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/matiasurbano/dev/pianoenba/src/pages/index.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/matiasurbano/dev/pianoenba/src/pages/404.js"))
}

