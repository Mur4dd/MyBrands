import { useEffect, useState } from 'react';
import whiteHeart from '../../../assets/home/whiteH.svg';
import blackHeart from '../../../assets/home/blackH.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addProducttocard, removeProduct } from '../../../features/User/UserSlice.js';
import { Link } from 'react-router-dom';
import { setProduct } from '../../../features/User/UserSlice.js';
import '../style/style.css'

function Card({ product, type }) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.user.wishlist);
    const [liked, setLiked] = useState((wishlist.some(pr => pr.id == product.id)))

    useEffect(() => {
      if (wishlist.some(pr => pr.id == product.id)) {
        setLiked(true)
      }
    }, [liked, wishlist])

    const HandleDelete = async () => {
      const response = await fetch(`http://ec2-100-27-211-19.compute-1.amazonaws.com/account/api/wishlist/${product.id}`, {
        method:"DELETE",
      }) 

      if (response.ok || true) {
        dispatch(removeProduct(product))
        setLiked(!liked)
      }
      setLoading(false)
    }

    const HandleAdd = async () => {
      const response = await fetch(`http://ec2-100-27-211-19.compute-1.amazonaws.com/account/wishlist`, {
        method:"DELETE",
        body: {
          product
        }
      }) 

      if (response.ok || true) {
        dispatch(addProduct(product))
        setLiked(!liked)
      }

      setLoading(false)
    }

    const handleLike = e => {
      e.pereventDefault;
      setLoading(true);
      if (liked) {
        HandleDelete();
      } else {
        HandleAdd();
      }
    };

    return (
      <section 

        className={`${type == 1 ? "my-custom-card" : "my-custom-card2"}`}>
        
        <section 
            className="w-full max-h-[240px] max-[500px]:max-h-[230px]">
          <a href={`/products/product?id=${product.id}`}>
            <img src={product.images[0]} alt="" className="max-h-[240px] min-[500px]:min-h-[240px] max-[500px]:min-h-[200px] w-full max-[500px]:max-h-[200px]"/>
          </a>
          <button
            id='possitive1'
            className={`heart absolute top-2 right-2 ${liked && !loading ? 'bg-red-500' : 'bg-white'} rounded-full p-1 max-[500px]:hidden`}
            onClick={e => handleLike(product, liked)}
          > <div role="status">
              {
              loading ? 
                  <svg aria-hidden="true" className="inline w-[20px] h-[20px] text-white animate-spin" viewBox="0 0 100 101" fill="#26264C" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg> :
              <img src={liked ? whiteHeart : blackHeart} alt="heart" className=" w-[20px] h-[20px]" />
              }
            </div>
          </button>
        </section>

        <div className="relative  flex flex-col justify-center items-start w-full pl-2 py-2 max-[500px]:max-h-[120px] overflow-hidden">
          <p className='text-[18px] max-[500px]:text-[15px]'>{product.category}</p>
          <p className="text-xs text-gray-500">{product.title}</p>
          <p className="text-red-500">{product.price}$</p>
          <button
            id='possitive2'
            className={`heart absolute top-2 right-2 ${liked && !loading? 'bg-red-500' : 'bg-white'} rounded-full p-1 hidden max-[500px]:block`}
            onClick={e => handleLike(product, liked)}
          >
            <div role="status">
             {
              loading ? 
                  <svg aria-hidden="true" className="inline w-[20px] h-[20px] text-white animate-spin" viewBox="0 0 100 101" fill="#26264C" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg> :
              <img src={liked ? whiteHeart : blackHeart} alt="heart" className=" w-[20px] h-[20px]" />
             }
            </div>  
          </button>
        </div>
      </section>
    );
}

export default Card;
