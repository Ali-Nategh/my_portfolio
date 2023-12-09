import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faJava,
  faLinux,
  faNodeJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

const About = () => {
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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a <span>Backend Developer</span> with experience in a few
            programming languages, SQL, and NoSQL databases, and a passion for
            learning new technologies and skills.
          </p>
          <p>
            Currently, I am pursuing a <span>Bachelor&apos;s</span> Degree in{' '}
            <span>Computer Science</span> at <span>York University</span>. I
            have been programming for <span>more than 2 years</span> and have
            learned various <span>skills</span>, languages, and technologies,
            such as Java, JavaScript, Python, C++, Git, Linux, Docker, APIs, Web
            Development, React.js, GraphQL, Postman, MongoDB, PostgreSQL, Redis,
            Documentation, Web Sockets, and Blockchain.
            <br />I have also completed the <span>CompTIA certificates</span> of
            the Network+ and A+ courses at the Tehran Institute of Technology,
            Also interested in Cyber Security, Machine Learning, and Game
            Development, and I have also worked with C# in Unity.
          </p>
          <p>
            I am span <span>proficient in English</span>, and Persian, know a
            bit of French, and have{' '}
            <span>excellent verbal and written communication skills</span>. I am
            eager to learn more, improve my skills, and contribute to innovative
            and impactful projects.
          </p>
          <h2>
            You Can See My <span>Projects</span> On My{' '}
            <a
              href="https://github.com/Ali-Nategh"
              target="_blank"
              rel="noreferrer"
            >
              Github Account
            </a>
            ,
            <br /> And My <span>Work Experience</span> On My{' '}
            <a
              href="https://www.linkedin.com/in/alinategh"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Account
            </a>
            .
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <br />
          <p>&nbsp;</p>
          <br />
          <p>&nbsp;</p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#a2f0dc" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#a2f0dc" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="#a2f0dc" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#a2f0dc" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#a2f0dc" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDatabase} color="#a2f0dc" />
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
