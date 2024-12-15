import Navbar from "../../components/home/Layout/Navbar"
import Header from "../../components/home/Layout/Header"
import Footer from "../../components/home/Layout/Footer"
import WisitedPages from '../../components/home/Layout/WisitedPages'
import OrderMain from '../../components/Profile/OrdersMain.jsx'


function Orders () {

    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Navbar />
            <Header />
            <WisitedPages pages={["Home", "Profile"]}/>
            <OrderMain />
            <Footer />
        </section>
    )
}



export default Orders;