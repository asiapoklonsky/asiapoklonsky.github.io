import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css'
            integrity='sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy'
            crossOrigin='anonymous'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Source+Serif+Pro:300,400,500,600,700'
            crossOrigin='anonymous'
          />
          <style>{`
            body {
              overflow-y: scroll;
              font-family: "Source Serif Pro",sans-serif;
            }
          `}</style>
            <style>{`
            .page {
              min-height: 100vh;
            }
            `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
