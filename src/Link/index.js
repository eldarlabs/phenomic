// deprecated
import colors from "chalk"

import Link from "../components/Link"

console.log("⚠️ " + colors.yellow(
  "'@eldarlabs/phenomic/lib/Link' reference is deprecated.\n" +
  "Please use `import { Link } from \"phenomic\" instead`."
))

export { Link }
export default Link
