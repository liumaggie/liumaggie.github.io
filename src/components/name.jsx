import * as React from "react"
import { useState, useEffect } from "react"

const blackStyles = {
  color: "#8198eb",
}
const whiteStyles = {
  color: "#ebedf2"
}

const headerStyles = {
  fontSize: 64,
  marginTop: 10,
  marginBottom: 25
}

export default function Name () {
  const letters = "i'm maggie".split("")
  const [currIdx, setCurrIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currIdx === letters.length) {
        clearInterval(interval)
      } else {
        setCurrIdx(currIdx + 1)
      }
    }, 200)
    return () => clearInterval(interval)
  })

  return (
    <h1 style={headerStyles}>
      {
        letters.map((letter, idx) => {
          return <span key={idx} style={currIdx >= idx ? blackStyles : whiteStyles}>{letter}</span>
        })
      }
    </h1>
  )
}
