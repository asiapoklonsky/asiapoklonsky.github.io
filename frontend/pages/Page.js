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

const BlockRenderer = props => {
  const style = props.node.style || 'normal'

  // if (/^h\d/.test(style)) {
  //   const level = style.replace(/[^\d]/g, '')
  //   return <h2 className={`my-heading level-${level}`}>{props.children}</h2>
  // }

  return style === 'with_background'
    ? <p className="withBackground">{props.children}</p>
    : <p>{props.children}</p>
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

    if (!this.state.loaded) return null

    const mainImageForMobileUrl = urlFor(mainImage).url() + '?w=800&h=800&fit=max&fm=jpg';
    const mainImageForDesktopUrl = urlFor(mainImage).url() + '?w=2000&h=2000&fit=max&fm=jpg';

    return (
      <div className='page'>
        <style>{`
          .header {
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-size: cover;
            background-image: url(${mainImageForMobileUrl});
            background-position: center center;
            background-repeat: no-repeat;
          }
          @media (min-width: 1024px) {
            .header {
              background-image: url(${mainImageForDesktopUrl});
            }
          }
          .mainTitle {
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 2;
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
          <Link href='/'>{ "Asia Poklonsky" }</Link>
        </div>
        <style>{`
        .withBackground::before,
        .box::before {
          content: '';
          height: 80vh;
          width: 100%;
          background-color: #EBCDE5;
          position: absolute;
          top: -10vh;
          left: 0;
          z-index: -1;
        }
        .box {
          position: relative;
          color: #ED6B74;
          line-height: 1.8;
          font-size: 20px;

          font-family: Source Serif Pro,sans-serif;
        }
        p {
          padding: 1% 5vw;
          @media (min-width: 600px) {
            padding: 10% 20vw;
          }
        }
        .withBackground {
          position: relative;
          background-color: #EBCDE5;
        }
        h1 {
          padding: 10% 5vw;
          @media (min-width: 600px) {
            padding: 10% 20vw;
          }
          font-size: 70px;
          text-transform: uppercase;
        }
        .container {
          max-width: 100%;
          padding: 0;
        }
        figure {
          text-align: center;
          margin: 0;
          padding: 1% 5vw;
          @media (min-width: 600px) {
            margin: 5% 0;
            padding: 10% 20vw;
          }
        }
        img {
          max-width: 100%;
        }
        `}</style>
      <div className='box'>
        <div className='container'>
          <h1>{ title }</h1>
          <BlockContent
            imageOptions={{w: 1000, h: 1000, fit: 'max', fm: 'jpg'}}
            blocks={body}
            serializers={{types: {block: BlockRenderer}}}
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
