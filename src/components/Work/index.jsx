import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import MyTonesFront from '../../assets/images/MyTonesFront.png'
import Mergify from '../../assets/images/Mergify.png'
import MemeGenerator from '../../assets/images/MemeGenerator.png'
import MidiBaazar from '../../assets/images/MidiBaazar.png'
import AllinBeats from '../../assets/images/AllinBeats.png'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
              idx={15}
            />
          </h1>

          <div className="work-slides">
            <div>
              <a
                href="https://apps.shopify.com/bestapper-mergify"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Mergify} alt="Mergify Project" />
                <h2>MergifyProject</h2>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Ali-Nategh/mytones_proj"
                target="_blank"
                rel="noreferrer"
              >
                <img src={MyTonesFront} alt="MyTones Webpage" />
                <h2>MyTones Project</h2>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Ali-Nategh/react_practice_project_3"
                target="_blank"
                rel="noreferrer"
              >
                <img src={MemeGenerator} alt="Meme Generator" />
                <h2>Meme Generator</h2>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Ali-Nategh/odin_landing_page"
                target="_blank"
                rel="noreferrer"
              >
                <img src={MidiBaazar} alt="Midi Baazar" />
                <h2>Midi Baazar</h2>
              </a>
            </div>
            <div className="allin-beats">
              <a href="https://AllinBeats.com" target="_blank" rel="noreferrer">
                <img src={AllinBeats} alt="AllinBeats" />
                <h2>AllinBeats (coming soon)</h2>
              </a>
            </div>
          </div>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <br />
          <p>&nbsp;</p>
          <br />
          <p>&nbsp;</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
