import { Link } from 'react-router-dom';
import GoBack from '../../assets/profile/goback.png';
import like from '../../assets/profile/liked.png';
import Card from '../home/Layout/Card';
import EmptyLikedMain from '../../components/Profile/EmptyLiked.jsx';
import { useSelector } from "react-redux";

function LikedMain() {  
    const products = useSelector(state => state.user.wishlist);

    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">
            <section className="w-full flex items-center justify-between py-5 px-3 border border-gray-50">
                <div className='flex items-center justify-start gap-[10px]'>
                    <img src={like} alt="" />
                    <p className='text-[24px] max-[500px]:text-[20px]'>Seçilmişlər</p>
                </div>
                <Link to={'/home/profile'} className='flex items-center justify-end gap-[10px]'>
                    <img src={GoBack} alt="" />
                    <p className='text-[14px] text-[#292D32]'>Geri qayit</p>
                </Link>
            </section>

            {
                products.length != 0 ? 
                    <section className="w-full mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center mt-10 mb-5">
                            {
                            products.map((product, index) => <Card key={index} product={product} type={2}/>)
                            }
                    </section> : 
                    
                    <div className='w-full flex items-center justify-center'>
                        <EmptyLikedMain />
                    </div>
            }
 
        </section>
    );
}

export default LikedMain;
