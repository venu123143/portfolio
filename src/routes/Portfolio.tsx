import Home from '../components/Home'
import Header from '../components/Header'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Cards from '../components/Cards'
import Contact from '../components/Contact'
import WaveHeader from '../ui/WaveHeader';
import PaperCutEffect from '../ui/PaperCut'


{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
                <path d="M100 400c50-150 300-300 500-200s200 300 100 500-400 100-500-100-150-50-100-200z" fill="#286F6B" />
            </svg> */}
const Portfolio = () => {
    return (
        <div className='relative '>
            <WaveHeader />
            <Header />
            <Home />
            <Projects />
            <Cards />
            <Experience />
            <Contact />
            <PaperCutEffect />
        </div>
    )
}

export default Portfolio