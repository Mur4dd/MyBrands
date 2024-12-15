import Navbar from "../../components/home/Layout/Navbar"
import Header from "../../components/home/Layout/Header"
import Footer from "../../components/home/Layout/Footer"
import WisitedPages from '../../components/home/Layout/WisitedPages'
import CustomerServiceMain from '../../components/Profile/CustomerServiceMain.jsx'

function CustomerService () {
    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Navbar />
            <Header />
            <WisitedPages pages={["Ana sehife", "Profile"]}/>
            <CustomerServiceMain />
            <Footer />
        </section>
    )
}



export default CustomerService