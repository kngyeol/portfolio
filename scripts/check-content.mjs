import { readdir, readFile } from "node:fs/promises"
import { extname, join } from "node:path"

const roots = ["app", "components", "lib", "README.md"]
const textExtensions = new Set([".js", ".jsx", ".md", ".mjs", ".ts", ".tsx"])
const deprecatedProjectName = ["Di", "very"].join("")
const matches = []

async function scan(path) {
  const entries = await readdir(path, { withFileTypes: true }).catch(() => null)

  if (entries) {
    for (const entry of entries) {
      await scan(join(path, entry.name))
    }
    return
  }

  if (!textExtensions.has(extname(path))) return

  const lines = (await readFile(path, "utf8")).split("\n")
  lines.forEach((line, index) => {
    if (line.includes(deprecatedProjectName)) {
      matches.push(`${path}:${index + 1}`)
    }
  })
}

for (const root of roots) {
  await scan(root)
}

if (matches.length > 0) {
  console.error(`Use the final project name Divary:\n${matches.join("\n")}`)
  process.exitCode = 1
} else {
  console.log("Content naming check passed: Divary")
}
