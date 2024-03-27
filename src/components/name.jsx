import * as React from "react"

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

export default class Name extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      letters: "i'm maggie".split(""),
      currIdx: 0
    }
    this.animate = this.animate.bind(this)
  }

  componentDidMount () {
    setInterval(this.animate, 200)
  }

  animate () {
    if (this.state.currIdx === this.state.letters.length) return

    this.setState({ currIdx: this.state.currIdx + 1 })
  }

  render () {
    return (
      <h1 style={headerStyles}>
        {
          this.state.letters.map((letter, idx) => {
            return <span key={idx} style={this.state.currIdx >= idx ? blackStyles : whiteStyles}>{letter}</span>
          })
        }
      </h1>
    )
  }
}
