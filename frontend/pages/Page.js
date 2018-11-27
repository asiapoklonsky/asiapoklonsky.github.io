import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

class Page extends React.Component {
  static pageTransitionDelayEnter = true

  static getInitialProps = async ({ query: { slug } }) => {
    const document = slug ? await client.fetch(`*[_type == "page" && slug.current == $slug][0]{
                                        title,
                                        body,
                                        mainImage
                                        }`, { slug }) : {}
    return document
  }

  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 100)
  }

  componentWillUnmount () {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  render () {
    const {
      title = 'No Title',
      mainImage = '',
      body = '',
    } = this.props

    console.log(this.props)

    if (!body) return null

    if (!this.state.loaded) return null

    const mainImageUrl = urlFor(mainImage).url()

    return (
      <div className='page'>
        <style>{`
          .header {
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-size: cover;
            background-image: url(${mainImageUrl});
            background-position: center center;
            background-repeat: no-repeat;
          }
          .mainTitle {
          position: fixed;
          top: 2rem;
          left: 2rem;
          }
          a, a:hover {
text-decoration: none;
          color: #F7642A;
          font-family: Source Serif Pro,sans-serif;

          font-size: 30px;

            line-height: 1.5em;
          }
        `}</style>
        <div className="header"></div>
        <div className="mainTitle">
          <Link href='/'>
            <a className=''>Asia Poklonsky</a>
          </Link>
        </div>
        <style>{`
        .box {
          background-color: #EBCDE5;
          color: #ED6B74;
          line-height: 1.8;
          font-size: 14pt;
          padding: 2rem 0;

          font-family: 'Adobe Ming Std L', serif;
        }
        h1 {
          padding: 3rem 0;
          font-size: 70px;
          text-transform: uppercase;
        }
        .container {
          max-width: 1000px;
        }
        figure {
          text-align: center;
        }
        img {
          max-width: 100%;
        }
        `}</style>
      <div className='box'>
        <div className='container'>
          <h1>{ title }</h1>
          <BlockContent
            blocks={body}
            projectId={client.clientConfig.projectId}
            dataset={client.clientConfig.dataset}
          />
        </div>
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func
}

Page.defaultProps = {
  pageTransitionReadyToEnter: () => {}
}

export default Page
