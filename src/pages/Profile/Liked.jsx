import Navbar from "../../components/home/Layout/Navbar"
import Header from "../../components/home/Layout/Header"
import Footer from "../../components/home/Layout/Footer"
import WisitedPages from '../../components/home/Layout/WisitedPages'
import LikedMain from '../../components/Profile/LikedMain.jsx'

function Liked () {

    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Navbar />
            <Header />
            <WisitedPages pages={["Home", "Profile"]}/>
            <LikedMain />
            <Footer />
        </section>
    )
}



export default Liked