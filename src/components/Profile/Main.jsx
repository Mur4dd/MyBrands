import { useDispatch, useSelector } from "react-redux";
import { services } from '../../utils/Profile/Constants'; 
import ProfileCard from "./Layout/ProfileCard";
import { useEffect, useState } from "react";
import Exit from './Layout/Exit';
import Referal from "./Layout/Referal";
import lock from '../../assets/profile/lock.png';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { setMenu } from "../../features/Home/Categoryies";
import { fetchUserAddress, fetchUserWishList } from "../../features/User/UserSlice";


function Main() {
    const name = useSelector(state => state.user.name);
    const [exit, setExit] = useState(false);
    const [referal, setReferal] = useState(false);
    const [isreg, setReg] = useState(false);
    const [cookies] = useCookies(['sessionid', 'csrftoken', 'access']);
    const menu = useSelector(state => state.home.menu);
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.user.wishlist)

    useEffect(() => {
        const access = true;
        if (access) {
            setReg(true);
            if (wishlist.lenght == 0) {
                dispatch(fetchUserWishList())
                dispatch(fetchUserAddress())
            }
        }
    }, [cookies]);

    useEffect(() => {
        if (menu == true) {
            dispatch(setMenu(false));
        }
    }, [])


    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%]">
            <div className="flex flex-col justify-start items-start w-full py-3 pl-4">
                <p className="text-[25px]">{name}</p>
                <p>
                    Xoş gəldin
                </p>
            </div>
            {
                isreg ?
                <div className="flex w-full items-center justify-start flex-wrap gap-[1%]">    
                    {
                        services.map((service, index) => {
                            return(
                                <ProfileCard service={service} key={index} setExit={setExit} setReferal={setReferal} />
                            )
                        })
                    }
                </div> :
                <div className="flex w-[400px] h-[300px] flex-col items-center justify-center gap-[20px] bg-white rounded-lg p-6">
                    <img src={lock} alt="Lock Icon" className="w-[50px] h-[50px]" />
                    <p className="text-lg font-semibold text-gray-700">
                        Please Login
                    </p>
                    <Link to={"/signin"}  className="bg-[#26264C] hover:bg-[#3B3B72] text-white animate-pulse flex items-center justify-center w-[60%] h-[50px] rounded-lg shadow-md transition-all duration-300 active:scale-90">
                        Register
                    </Link>
                </div>
            }
            {exit && <Exit setExit={setExit}/>}
            {referal && <Referal setReferal={setReferal}/>}
        </section>
    );
}

export default Main;
