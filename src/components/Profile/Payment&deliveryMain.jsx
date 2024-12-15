import {paymentdeliverydata} from '../../utils/Profile/Constants'
import payment from '../../assets/profile/payment.png'
import { Link } from 'react-router-dom';
import GoBack from '../../assets/profile/goback.png';
import './style/style.css'; 
import { useState } from 'react';

function PandDMain() {
    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">
            <section className="w-full flex items-center justify-between py-5 px-2 border border-gray-50">
                <div className='flex items-center justify-start gap-[10px]'>
                    <img src={payment} alt="" />
                    <p className='text-[24px] max-[500px]:text-[20px]'>Ödəniş və çatdırılma</p>
                </div>
                <Link to={'/home/profile'} className='flex items-center justify-end gap-[10px]'>
                    <img src={GoBack} alt="" />
                    <p className='text-[14px] text-[#292D32]'>Geri qayit</p>
                </Link>
            </section>

            <section className='flex w-full items-start justify-between max-[600px]:flex-col mt-[30px] gap-[30px] max-[500px]:gap-0'>
                <div className='flex w-full flex-col items-start justify-center min-w-[49%] border'>
                    {paymentdeliverydata.slice(0, 2).map((row, index) => (
                        <Row data={row} key={index} />
                    ))}
                </div>
                <div className='w-full flex flex-col items-start justify-center min-w-[49%] border max-[500px]:border-t-0'>
                    {paymentdeliverydata.slice(2).map((row, index) => (
                        <Row data={row} key={index} />
                    ))}
                </div>
            </section>
        </section>
    );
}


function Row({ data }) {
    const [openIndexes, setOpenIndexes] = useState([]);

    const handleAccordionClick = (index) => {
        setOpenIndexes((prevOpenIndexes) => {
            if (prevOpenIndexes.includes(index)) {
                return prevOpenIndexes.filter((item) => item !== index);
            } else {
                return [...prevOpenIndexes, index];
            }
        });
    };

    return (
        <section className='felx flex-col w-full justify-center items-start'>
            {data.faqs.map((faq, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                    <div className='flex flex-col items-between justify-start w-full border border-gray-100 p-3 py-5' key={index}>
                        <div className='flex w-full items-center justify-between ' onClick={() => handleAccordionClick(index)}>
                            <p className=''>{faq.title}</p>
                            <p className='cursor-pointer text-[25px]'>{isOpen ? '-' : '+'}</p>
                        </div>
                        <div className={`accordionanimate ${isOpen ? 'open' : 'closed'}`}>
                            {
                               isOpen &&  
                                    faq.answer.map((answer, index) => {
                                        return (
                                            <p className='accordionanimate text-[#9B96B7] text-[14px] max-w-[500px] mt-[15px]'>
                                                {answer}
                                            </p>
                                        )
                                    })
                            }
                        </div>
                    </div>
                );
            })}
        </section>
    );
}


export default PandDMain;