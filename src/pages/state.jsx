import React from "react"

export default function State() {
  const [count, setCount] = React.useState(0)

  console.log("render")

  return (
    <section>
      <h1>State</h1>
      <button onClick={(e) => setCount((p) => p + 1)}>Click me!</button>
      <div>Count: {count}</div>
    </section>
  )
}
