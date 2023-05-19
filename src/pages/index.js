import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Name from '../components/name.jsx'
import Tabs from '../components/tabs.jsx'
import '../styles/global.css';

const pageContainerStyles = {
  display: "flex",
  flexDirection: "column",
  padding: 30
}

const innerPageStyles = {
  padding: "10%"
}

const pageStyles = {
  color: "#ffffff",
  backgroundColor: "#21293b",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: "100%"
}

const listStyles = {
  display: "flex",
  paddingLeft: 0,
  listStyleType: "none",
  marginTop: 40
}

const listItemStyles = {
  marginRight: 20
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div style={pageContainerStyles}>
        <div style={innerPageStyles}>
          <h3>HELLO WORLD</h3>
          <Name />
          <p>
            Software Developer. NYC. CMU. a/A alum. Meural@Netgear. Impact. Travel. Food. 
          </p>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <a target="_blank" href="mailto:mliu0805@gmail.com">
                <StaticImage alt='email' src="../images/mail-white.png" width={30} placeholder="blurred" />
              </a>
            </li>
            <li style={listItemStyles}>
              <a target="_blank" href="https://github.com/liumaggie">
                <StaticImage alt='github' src="../images/github-white.png" width={30} placeholder="blurred" />
              </a>
              </li>
            <li style={listItemStyles}>
              <a target="_blank" href="https://www.linkedin.com/in/maggie-liu/">
                <StaticImage alt='linkedin' src="../images/linkedin-white.png" width={30} placeholder="blurred" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
