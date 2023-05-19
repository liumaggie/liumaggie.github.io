import * as React from "react"

const blackStyles = {
  color: "#ffffff",
}
const whiteStyles = {
  color: "#21293b"
}

const tabStyles = {
  display: "flex",
  justifyContent: "flex-end"
}

export default class Tabs extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 0
    }
  }

  render () {
    return (
      <div style={tabStyles}>
        <div>ME</div>
        <div>PROJECTS</div>
      </div>
    )
  }
}
