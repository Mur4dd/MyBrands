import Navbar from "../../components/home/Layout/Navbar"
import Header from "../../components/home/Layout/Header"
import Footer from "../../components/home/Layout/Footer"
import WisitedPages from '../../components/home/Layout/WisitedPages'
import OrderFinishMain from '../../components/Profile/OrdersFinishMain.jsx'


function FinishOrder () {

    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Navbar />
            <Header />
            <WisitedPages pages={["Home", "Profile"]}/>
            <OrderFinishMain />
            <Footer />
        </section>
    )
}



export default FinishOrder;