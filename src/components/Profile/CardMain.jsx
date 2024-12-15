import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import greentruck from '../../assets/products/greentruck.png'
import like from '../../assets/products/like.png'
import bin from '../../assets/products/bin.png'
import redM from '../../assets/products/redminus.png'
import blackM from '../../assets/products/blackminus.png'
import redplus from '../../assets/products/redplus.png'
import { UpdateProductcard, addProduct, removeProduct, removeProductfromcard, setProduct, AddOrder, resetCard } from "../../features/User/UserSlice";
import liked from '../../assets/products/likedC.png'
import EmptyCard from "./EmptyCard";
import info from '../../assets/products/info.png'
import dlt from '../../assets/products/delete.png'
import { Link } from "react-router-dom";

function CardMain() {

    const card = useSelector(state => state.user.userCard);
    const [totalCost, setTotalCost] = useState();
    const [productcost, setProductCost] = useState();
    const [animate, setAnimate] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        let total = 0;
        card.forEach(element => {
            total += element.price;
        });

        if(total > 100) {
            setTotalCost(Math.round(total))
            setProductCost(Math.round(total))
        }else {
            setTotalCost(Math.round(total) + Math.round(total) * 20 / 100)
            setProductCost(Math.round(total))
        }
    }, [card]);


    const HandleOrder = e => {
        e.preventDefault();
        setAnimate(true);
        setTimeout(() => {
            dispatch(AddOrder(card))
            dispatch(resetCard());
            setAnimate(false)
        }, 2000)
    }


    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">

            <div className="w-full flex items-center justify-between py-5 px-3 border border-gray-50 max-[500px]:gap-[20px]">
                <p className='text-[24px] max-[500px]:text-[20px]'>Səbət</p>        
            </div>

            {
                card.length > 0 ? 

                <div className="flex items-start justify-between w-full gap-[20px] mt-[30px] max-[1147px]:flex-col  max-[1147px]:gap-[30px]">
                
                    <div className="flex flex-col items-center justify-center w-full  gap-[20px]">
                        <div className="flex items-center justify-between w-full p-5 border ">
                            <p className="text-[18px] font-semibold">Səbətə əlavə edilmiş məhsullar</p>
                            <p className="text-[14px] text-[#484C52]">Səbətinizdə {card.length} məhsul var.</p>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[30px]">
                            {
                                card.map((order, index) => {
                                    return (
                                        <Order order={order} key={index} card={card}/>
                                    )
                                })
                            }
                        </div>
                    </div>  

                    <div className="flex flex-col items-center justify-center w-[50%] border border-[#F4F4F6] max-[1147px]:w-full ">
                        <div className="flex w-full items-center justify-start text-[18px] p-5">
                            Sifarişin detalları
                        </div>
                        <div className="w-full flex items-center justify-between p-5 border-t-[1px] border-[#F4F4F6]">
                            <p className="text-[16px] text-[#9B96B7]">
                                Məhsulun dəyəri:
                            </p>
                            <p className="text-[16px] text-[#9B96B7]">
                                {productcost} AZN
                            </p>
                        </div>
                        <div className="w-full flex flex-col  gap-[20px] items-center justify-between p-5 border-t-[1px] border-[#F4F4F6]">
                            <div className="w-full flex items-center justify-between ">
                                <p className="text-[20px] font-semibold ">
                                    Toplam məbləğ:
                                </p>
                                <p className="text-[20px] text-[#F84568]">
                                    {totalCost} AZN
                                </p>

                            </div>
                            <Link className="w-full flex items-center justify-center">
                                <button onClick={HandleOrder} className="w-full h-[48px] bg-[#26264C] text-white flex items-center justify-center gap-[10px] text-[16px] font-semibold transition-all duration-300 hover:rounded-xl active:scale-90">
                                    {animate ? 
                                    <div role="status">
                                        <svg aria-hidden="true" className="inline w-8 h-8 text-white animate-spin" viewBox="0 0 100 101" fill="#26264C" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    </div>
                                    : "Səbəti təsdiq et"}
                                </button>    
                            </Link>
                            <div className="w-full h-[77px] border border-[#14AE5C] bg-[#14AE5C] bg-opacity-5 flex flex-col items-start justify-center p-5">
                                <div className="flex items-center gap-[10px]">
                                    <p className="text-[#14AE5C] text-[18px]">Pulsuz çatdırılma!</p>
                                    <img src={greentruck} alt="" />
                                </div>
                                <div className="text-[14px]">
                                    100 Azn və üzəri sifarişlər ödənişsiz çatdırılır.
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div> :

                <EmptyCard />
            }
        </section>
    )
}

function Order({ order, card }) {
    const [minuscolor, setMinusColor] = useState(card.length > 1 ? redM : blackM);
    const [count, setCount] = useState(order.quantity || 1);
    const [dl, setDelete] = useState(false)
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.user.wishlist);

    const handleCardChange = (e, order, delta) => {
        const newCount = count + delta;
        if (newCount >= 0) {
            setCount(newCount);
            dispatch(UpdateProductcard({ ...order, quantity: newCount }));
        }
    };

    const handleDelete = e => {
        dispatch(removeProductfromcard(order));
        setDelete(false)
    };

    return (
        <div className="flex flex-col min-h-[130px] border border-[#F4F4F6] w-full" key={order.id}>
            <div className="flex h-[130px] w-full" key={order.id}>
                <div className="bg-[#F9F8FC] flex items-center justify-center h-full min-w-[96px]">
                    <img src={order.thumbnail} alt={order.title} className="w-full h-full" />
                </div>
                <div className="w-full flex items-center justify-between pl-3">
                    <div className="flex flex-col items-start justify-between gap-[10px]">
                        <p className="max-[800px]:text-[12px]">{order.title}</p>
                        <div className="w-full flex items-center justify-start gap-[10px]">
                            <p className="text-[#F84568] max-[800px]:text-[12px]">{order.price} AZN</p>
                            {order.discountPercentage > 0 && (
                                <>
                                    <p className="text-[13px] text-[#9B96B7] line-through max-[800px]:text-[10px]">
                                        {Math.round(order.price * order.discountPercentage / 100)}
                                    </p>
                                    <p className="text-[#F84568] max-[800px]:text-[12px]">
                                        {Math.round(order.discountPercentage)}%
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-[30px] pr-5">
                        <div className="flex flex-col items-center justify-center max-[1147px]:hidden">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center cursor-pointer bg-[#FAFAFA] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90" onClick={e => handleCardChange(e, order, -1)}>
                                    <img src={minuscolor} alt="Decrease" />
                                </div>
                                <div className="flex items-center justify-center cursor-pointer bg-[#FFFFFF] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90">
                                    {count}
                                </div>
                                <div className="flex items-center justify-center cursor-pointer bg-[#FAFAFA] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90" onClick={e => handleCardChange(e, order, 1)}>
                                    <img src={redplus} alt="Increase" />
                                </div>
                            </div>
                        </div>
                        <div className="cardbox">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#FAFAFA]" onClick={e => setDelete(!dl)}>
                                <img src={bin} alt="Delete" className="w-[15px] h-[17px]" />
                            </div>
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#FAFAFA]">
                                {wishlist.some(p => p.title === order.title) ? (
                                    <img src={liked} alt="Remove from Wishlist" className="w-[27px] h-[27px]" onClick={() => dispatch(removeProduct(order))} />
                                ) : (
                                    <img src={like} alt="Add to Wishlist" className="w-[17px] h-[17px]" onClick={() => dispatch(addProduct(order))} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden max-[1147px]:flex items-center justify-end border-t border-[1px] py-1">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-[10px] px-3">
                        <img src={info} alt="Info" />
                        <p className="text-[14px] text-[#484C52]">
                            Son 3 məhsul
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center cursor-pointer bg-[#FAFAFA] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90 rounded-l-[20px]" onClick={e => handleCardChange(e, order, -1)}>
                            <img src={minuscolor} alt="Decrease" />
                        </div>
                        <div className="flex items-center justify-center cursor-pointer bg-[#FFFFFF] w-[40px]">
                            {count}
                        </div>
                        <div className="flex items-center justify-center cursor-pointer bg-[#FAFAFA] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90 rounded-r-[20px]" onClick={e => handleCardChange(e, order, 1)}>
                            <img src={redplus} alt="Increase" />
                        </div>
                    </div>
                </div>
            </div>
            {
                dl ? <Delete handleDelete={handleDelete} setDelete={setDelete}/> : <></>
            }
        </div>
    );
}

function Delete({ setDelete, handleDelete }) {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const handleClose = () => {
      setIsVisible(false);
      setTimeout(() => {
        setDelete(false);
      }, 500); // Matches the duration of the CSS transition
    };
  
    return (
      <section className={`bg-[#00000066] w-screen h-screen absolute top-0 left-0 flex items-center justify-center transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`w-[400px] flex flex-col items-center justify-center gap-[30px] bg-white h-[232px] transition-transform duration-200 transform ${isVisible ? 'scale-100' : 'scale-90'}`}>
          <img src={dlt} alt="Delete" />
          <p>
            Ünvanı silmək istədiyinizdən əminsiniz ?
          </p>
          <div className="flex items-center justify-center gap-[10px]">
            <button className="border border-gray-200 bg-white w-[176px] h-[40px]" onClick={handleClose}>
              Bağla
            </button>
            <button className="border-none bg-[#26264C] w-[176px] h-[40px] text-white" onClick={() => {
              handleDelete();
              handleClose();
            }}>
              Sil
            </button>
          </div>
        </div>
      </section>
    );
}

export default CardMain;