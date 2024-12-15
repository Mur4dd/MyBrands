import { Link } from 'react-router-dom';
import GoBack from '../../assets/profile/goback.png';
import box from '../../assets/profile/orders.png'
import { useState } from 'react';
import { orderfilters } from '../../utils/Profile/Constants';

function OrderMain() {

    const [activefilter, setActiveFilter] = useState("");
    const [orders, setOrders] = useState([]);

    const HandleFilter = (e, filtername) => {
        // fetch data

        setActiveFilter(filtername)
    }





    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">

            <article className="w-full flex items-center justify-between py-5 px-3 border border-gray-50">
                <div className='flex items-center justify-start gap-[10px]'>
                    <img src={box} alt="" />
                    <p className='text-[24px] max-[500px]:text-[20px]'>Sifarişlər</p>
                </div>
                <Link to={'/home/profile'} className='flex items-center justify-end gap-[10px]'>
                    <img src={GoBack} alt="" />
                    <p className='text-[14px] text-[#292D32]'>Geri qayit</p>
                </Link>
            </article>


            <article className='flex w-full flex-col items-start justify-start gap-[20px] overflow-auto'>
                
                <div className='flex items-center justify-start p-3 gap-[20px] text-[14px] overflow-auto'>
                    {
                        orderfilters.map((filter, index) => {
                            return (
                                <div
                                    onClick={e => HandleFilter(e, filter)} 
                                    className={`flex items-center justify-center  h-[42px] border min-w-[100px]  cursor-pointer rounded-[5px] transition-all duration-100  hover:scale-105 active:scale-95  ${filter == activefilter ? "border-[#F84568] text-[#F84568]" : "border-gray-100"}`}>
                                    {filter}
                                </div>

                            )
                        })
                    }
                </div>

                <div className='flex flex-col items-center justify-start gap-[10px]'>
                    {
                        orders.map((order, index) => {
                            return (
                                <div>
                                    order {index}
                                </div> 
                            )
                        })
                    }
                </div>
            
            </article>  

        </section>
    )
}


export default OrderMain;