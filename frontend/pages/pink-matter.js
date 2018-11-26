import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class About extends React.Component {
  static pageTransitionDelayEnter = true

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
    if (!this.state.loaded) return null
    return (
      <div className='page'>
        <style>{`
          .header {
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-size: cover;
            background-image: url(/static/home.jpg);
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
        font-size: 84px;
        }
        .container {
          max-width: 1000px;
        }
        `}</style>
      <div className='box'>
        <div className='container'>
        <h1>PINK MATTER</h1>
        <p>
          The inspiration for my project has grown from the admiration of women
          who surround me in everyday life, famous women figures, writers and artists such as 
          Lena Donham, Petra Collins and Zoe Buckman. The difference between them is what 
      had interested me. All of them perceived by me as feminists but in a different way
      This is what attracted me in developing this collection. 
      Each of them presents a different aspect of feminist definition and presents it from 
      a different angle, leading me to the conclusion that the word "feminism" takes on a different
      face in every woman.</p>

    <p>We all aspire to freedom of self-determination,
      freedom from being burdened with body image.</p>

    <p>The beauty of modern women is the diversity of images she chooses to recreate
       and how fast she exchanges between them and the combinations that are created. 
      In this project I tried to concentrate on these images and the combinations between them.
       Romantic, masculine, childish, fragmented, seductive, repulsive, strange,
       dramatic or modest. The nature of this project has led me to techniques such as, 
      hand knitting, silk print on pressed acrylic cotton, and quilting in addition to
       fabrics such as silk velvet, satins with metal details, and 
      Russian prison tattoos as a reference to a roughness of my culture.</p>
  </div>
  </div>
      </div>
    )
  }
}

About.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func
}

About.defaultProps = {
  pageTransitionReadyToEnter: () => {}
}

export default About
