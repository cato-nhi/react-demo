import React from "react"
import useBlink from "../lib/use-blink"

export default function ReRender() {
  const [count, setCount] = React.useState(0)

  console.log("ReRender: rendered")
  const wrapperRef = useBlink([count])

  return (
    <section className="re-render" ref={wrapperRef}>
      <h1>Re-render</h1>
      <button onClick={(_) => setCount((p) => p + 1)}>Click me!</button>
      <div>Count: {count}</div>
      {/* <Output count={count} /> */}
    </section>
  )
}

// eslint-disable-next-line no-unused-vars
function Output({ count }) {
  const [foo, setFoo] = React.useState(true)

  console.log("Output: rendered")
  const wrapperRef = useBlink([count, foo])

  return (
    <section className="re-render" ref={wrapperRef}>
      <div>Count: {count}</div>
      <button onClick={(_) => setFoo((p) => !p)}>Toggle foo</button>
      <div>Foo: {foo.toString()}</div>
    </section>
  )
}