import BrokenH from '../../assets/profile/brokenh.png'
import { Link } from 'react-router-dom'

function EmptyLikedMain() {
    return (
        <section className="flex flex-col items-center justify-center gap-[10px] w-[400px] my-10">
            <img src={BrokenH} alt="" />
            <p>Hazırda seçilmişlər boşdur</p>
            <p className='text-center text-[#9B96B7]'>Bəyəndiyiniz məhsulları buraya əlavə edərək alış-verişə başlaya bilərsiniz.</p>
            <Link to={'/products'} className='bg-[#26264C] w-full text-white py-3 flex items-center justify-center'>
                Alış-verişə başla
            </Link>
        </section>
    )
}


export default EmptyLikedMain