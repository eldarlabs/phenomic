import phenomicStatic from "@eldarlabs/phenomic/lib/static"

import metadata from "../src/metadata.js"
import routes from "../src/routes.js"
import store from "../src/store.js"

export default (options) =>
  phenomicStatic({ ...options, metadata, routes, store })
