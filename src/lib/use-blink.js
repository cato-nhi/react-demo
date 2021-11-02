import React from "react"

export default function useBlink(deps) {
  const ref = React.useRef()

  React.useEffect(() => {
    const classes = ref.current.classList
    classes.add("blink")

    setTimeout(() => {
      classes.remove("blink")
    }, [250])
  }, [deps])

  return ref
}
