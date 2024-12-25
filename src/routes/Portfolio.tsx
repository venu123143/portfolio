import Home from '../components/Home'
import Header from '../components/Header'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Cards from '../components/Cards'
import Contact from '../components/Contact'
import WaveHeader from '../ui/WaveHeader';
import PaperCutEffect from '../ui/PaperCut'

const Portfolio = () => {
    return (
        <div className='relative'>
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