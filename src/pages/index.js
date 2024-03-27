import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Name from '../components/name.jsx'
import '../styles/global.css';

const pageContainerStyles = {
  display: "flex",
  flexDirection: "column",
  padding: 30,
  width: "100%",
  maxWidth: "750px"
}

const innerPageStyles = {
  padding: "10%",
  backgroundColor: "#ebedf2",
  borderRadius: "20px",
}

const pageStyles = {
  color: "#7F8083",
  backgroundColor: "#ffffff",
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

const listImageStyles = {
  width: 30,
  placeholder: 'blurred',
  style: { opacity: 0.5 }
}

const ListItem = (props) => {
  return (
    <li style={listItemStyles}>
      <a target="_blank" rel="noreferrer" href={props.href}>
        {props.image}
      </a>
  </li>
  )
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Maggie Liu</title>
      <div style={pageContainerStyles}>
        <div style={innerPageStyles}>
          <h3>HELLO WORLD</h3>
          <Name />
          <p>Software Developer from NYC, looking for new opportunities in Singapore/Asia. </p>
          <p>Ex-Meural@Netgear. Carnegie Mellon & App Academy alum. </p>
          <p>I enjoy making impactful products & traveling the world. </p>
          <ul style={listStyles}>
            <ListItem
              href="mailto:mliu0805@gmail.com"
              image={<StaticImage alt='email' src="../images/mail.png" {...listImageStyles} />}
            />
            <ListItem
              href="https://github.com/liumaggie"
              image={<StaticImage alt='github' src="../images/github-black.png" {...listImageStyles} />}
            />
            <ListItem
              href="https://www.linkedin.com/in/maggie-liu/"
              image={<StaticImage alt='linkedin' src="../images/linkedin.png"  {...listImageStyles} />}
            />
          </ul>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
