// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-slide-js": () => import("/Users/matiasurbano/dev/pianoenba/src/templates/slide.js" /* webpackChunkName: "component---src-templates-slide-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/matiasurbano/dev/pianoenba/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Users/matiasurbano/dev/pianoenba/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-404-js": () => import("/Users/matiasurbano/dev/pianoenba/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import("/Users/matiasurbano/dev/pianoenba/.cache/data.json")

