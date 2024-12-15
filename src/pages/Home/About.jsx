import Header from "../../components/home/Layout/Header"
import Navbar from "../../components/home/Layout/Navbar"
import WisitedPages from "../../components/home/Layout/WisitedPages"
import Footer from "../../components/home/Layout/Footer"
import AboutMain from '../../components/home/AboutMain.jsx'

function About() {
    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Header />
            <Navbar />
            <WisitedPages pages={['Home', 'About']} />
            <AboutMain />
            <Footer />
        </section>
    )
}


export default About