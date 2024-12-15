import Navbar from "../../components/home/Layout/Navbar"
import Header from "../../components/home/Layout/Header"
import Footer from "../../components/home/Layout/Footer"
import WisitedPages from '../../components/home/Layout/WisitedPages'
import PandDMain from "../../components/Profile/Payment&deliveryMain.jsx"

function PaymentDelivery() {
    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Header />
            <Navbar />
            <WisitedPages pages={["Ana sehife", "Profile"]}/>
            <PandDMain />
            <Footer />
        </section>
    )
}

export default PaymentDelivery