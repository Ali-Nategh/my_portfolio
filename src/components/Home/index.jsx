import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'i']
  const familyArray = ['N', 'a', 't', 'e', 'g', 'h']
  const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e']
  const jobArray2 = ['e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>&apos;</span>
            <span className={`${letterClass} _16`}>m&nbsp;</span>
            <span>
              <img src={LogoTitle} alt="A" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={17}
              />
              &nbsp;
              <AnimatedLetters
                letterClass={letterClass}
                strArray={familyArray}
                idx={19}
              />
            </span>
            <br />
            <span className={`${letterClass} _25`}>A&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={26}
            />
            &nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={33}
            />
          </h1>
          <h2>
            Backend Developer / Computer Science Student / Content Creator
          </h2>
          <Link to="/about" className="flat-button">
            ABOUT ME
          </Link>
          <br />
          <p>&nbsp;</p>
          <br />
          <p>&nbsp;</p>
          <br />
          <p>&nbsp;</p>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
