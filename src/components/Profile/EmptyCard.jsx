import card from '../../assets/profile/emptycard.png' 
import { Link } from 'react-router-dom'

function EmptyCard() {
    return (
        <section className="flex flex-col items-center justify-center gap-[10px] max-w-[400px] my-10 w-[90%] from-current ">
            <img src={card} alt="" />
            <p>Hazırda səbət boşdur</p>
            <p className='text-center text-[#9B96B7] w-[90%]'>Alış-verişə davam etmək üçün məhsulları seçə bilərsiniz.</p>
            <Link to={'/products'} className='bg-[#26264C] w-full text-white py-3 flex items-center justify-center'>
                Alış-verişə başla
            </Link>
        </section>
    )
}


export default EmptyCard