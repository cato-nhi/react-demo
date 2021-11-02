import React from "react"

export default function NoJSX() {
  const h1 = React.createElement("h1", { key: 1, children: "Header" })
  const p = React.createElement("h1", { key: 2, children: "Lorem ipsum paragraph" })
  const wrapper = React.createElement("section", { children: [h1, p] })

  return wrapper
}
