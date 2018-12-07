import React from 'react'
import Link from 'next/link'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

class Index extends React.Component {

  static getInitialProps = async ({ query: { slug } }) => {
    const homePage = await client.fetch(`*[_type == "page" && title == "Homepage"][0]{
                                        title,
                                        body,
                                        mainImage
                                        }`)
    const navigationItems = await client.fetch(`*[_type == "navigation" && name == "Main"][0]{
                                               "navigationItems": links[]->{title, "url": slug.current}
                                        }`)
    return {...homePage, ...navigationItems}
  }

  render () {
    const {
      title = 'No Title',
      mainImage = '',
      body = '',
      navigationItems = [],
    } = this.props

    const mainImageUrl = urlFor(mainImage).url() + '?w=1000&h=1000&fit=max&fm=jpg';

    const navigationLinks = navigationItems.map((item, i) => {
      const url = "/" + item.url
      return (
        <div className="link" key={ i }>
          <Link href={ url }>
            <a className=''>{ item.title }</a>
          </Link>
        </div>
      )
    })

    return (
      <div className='page'>
        <style>{`
          .navigation {
          padding-top: 5rem;
          color: #F7642A;
          padding-left: 2rem;
          line-height: 1.5em;
          }
          h1 {
          font-family: "Source Serif Pro",sans-serif;
          font-size: 30px;
          padding-bottom: 4rem;
          }
          .sidePanel {
          position: absolute;
          top: 0;
          right: 0;
          height: 100vh;
          overflow: hidden;
          background-size: cover;
          background-image: url(${mainImageUrl});
          background-position: top center;
          background-repeat: no-repeat;
          }
          @media (min-width: 600px) {
          .navigation {
          width: 35vw;;
          }
          .sidePanel {
          width: 65vw;
          }
          }
          `}</style>
        <div className="navigation">
          <style>{`
            a {
            font-family: "Source Serif Pro",sans-serif;
            color: #F7642A;
            text-transform: uppercase;
            font-size: 18px;
            }
            .link {
            padding: .5rem 0;
            }
            a:hover {
            text-decoration: line-through;
            color: #F7642A;
            }
            `}</style>
          <h1>Asia Poklonsky</h1>
          { navigationLinks }
        </div>
        <div className="sidePanel">
        </div>
      </div>
    )
  }
}

export default Index
