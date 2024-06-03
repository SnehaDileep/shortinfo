import './home.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/animated.js'
import Loader from 'react-loaders'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray =[ ' ','S','n', 'e', 'h','a']
    const jobArray =['W', 'e', 'b ', ' ', ' d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}`}>i,</span>
                    <br />
                    <span className={`${letterClass}`}>I</span>
                    <span className={`${letterClass}`}>'m</span>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray} 
                idx={15}
                />
                <br />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray} 
                idx={22}
                />
                </h1>
                <h2>Frontend Developer / Full Stack Developer</h2>
                <Link to="/about" className='flat-button'>ABOUT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>

    )
}


export default Home