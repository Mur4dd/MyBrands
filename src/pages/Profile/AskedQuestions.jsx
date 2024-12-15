import Navbar from "../../components/home/Layout/Navbar"
import Header from "../../components/home/Layout/Header"
import Footer from "../../components/home/Layout/Footer"
import WisitedPages from '../../components/home/Layout/WisitedPages'
import QuestionsMain from '../../components/Profile/Question.jsx'

function AskedQuestions() {
    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Header />
            <Navbar />
            <WisitedPages pages={["Ana sehife", "Profile"]}/>
            <QuestionsMain />
            <Footer />
        </section>
    )
}

export default AskedQuestions