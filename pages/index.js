import React from 'react'
import Link from 'next/link'

import img from './home.jpg'

const Index = () => (
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
              // background-size: 100%;
              background-image: url(/static/home.jpg);
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
      <div className="link">
        <Link href='/pink-matter'>
          <a className=''>Pink Matter</a>
        </Link>
      </div>
      <div className="link">
        <Link href='/pink-matter'>
          <a className=''>Previous Projects</a>
        </Link>
      </div>
      <div className="link">
        <Link href='/pink-matter'>
          <a className=''>Mood & Sketches</a>
        </Link>
      </div>
      <div className="link">
        <Link href='/pink-matter'>
          <a className=''>Press</a>
        </Link>
      </div>
      <div className="link">
        <Link href='/pink-matter'>
          <a className=''>About</a>
        </Link>
      </div>
    </div>
    <div className="sidePanel">
    </div>
  </div>
)

export default Index
