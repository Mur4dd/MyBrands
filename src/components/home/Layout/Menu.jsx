import Close from '../../../assets/home/back.png';
import SearchIcon from '../../../assets/home/Blacksearch.png';
import Profile from '../../../assets/home/profileWhite.png';
import useNavbar from '../../../hooks/Home/Menu';
import { setMenu } from '../../../features/Home/Categoryies';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import right from '../../../assets/home/leftb.png';
import { Link } from 'react-router-dom';
import { setGender } from '../../../features/User/UserSlice';
import '../style/style.css'

function MobileM() {
    const { dispatch } = useNavbar();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = useSelector(state => state.home.AllCategories);
    const gender = useSelector(state => state.user.gender);
    const [activeCategory, setActiveCategory] = useState(gender == 'kisi' ? 0 : gender == "qadin" ? 1 : 2);
    const [search, setSearch] = useState("");
    const [lastS, setLasts] = useState(JSON.parse(localStorage.getItem("lastsearch")) || []);

    // const handleCategoryClick = (index) => {
    //     setSelectedCategory(index);
    //     dispatch(ActiveCategory(categories[index]));
    //     setActiveCategory(index); // Update active category state
    // };

    const HandleGender = (e, gender) => {
        if (gender != "usaq") {
            dispatch(setMenu(false));
            dispatch(setGender(gender));
        }else {
            dispatch(setMenu(false));
        }
    }

    const HandleChild = (e, gender) => {
        
    }

    const HandleSearch = e => {
        if (search.trim() != "") {
            if (lastS.some(s => s !== search)) {
                const newHistory = [...lastS, search];
                localStorage.setItem("lastsearch", JSON.stringify(newHistory));
                setLasts(newHistory);
            }
            window.location = `/products?q=${search}`
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                if (lastS.some(s => s !== search)) {
                    const newHistory = [...lastS, search];
                    localStorage.setItem("lastsearch", JSON.stringify(newHistory));
                    setLasts(newHistory);
                }
                window.location = `/products?q=${search}`
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [search, lastS]);

    return (
        <section className="absolute top-[15px] left-0 w-screen bg-white items-center flex justify-start flex-col min-[768px]:hidden zindex max-w-screen h-screen overflow-scroll animatedMenu">
            <div className='w-[90%] flex items-center justify-between mt-[20px] border-b-[1px] pb-1 border-gray-100'>
                <p className='text-[20px]'>Menu</p>
                <img src={Close} alt="Close" onClick={() => dispatch(setMenu(false))} />
            </div>

            <div className='w-full flex items-center justify-center px-3 mt-[20px] pb-1'>
                <div className='w-full flex items-center justify-center px-2 py-2 h-[56px] border border-gray-100 rounded-md'>
                    <input type="text" className='h-[40px] w-full focus:outline-none pl-5' placeholder='Metni daxil edin' onChange={e => setSearch(e.target.value)}/>
                    <img src={SearchIcon} alt="Search" className='pr-2' onClick={e => HandleSearch(e)}/>
                </div>
            </div>

            <div className='flex items-center justify-center mt-[20px]'>
                <div className='flex items-center justify-center relative'>
                    <Link to={'/home'} className={`flex items-center  cursor-pointer justify-center border border-gray-100 w-[100px] py-3 ${activeCategory === 0 ? '' : ''}`} onClick={e=> HandleGender(e, "kisi")}>
                        KISI
                    </Link>
                    <Link to={'/home'} className={`flex items-center justify-center border border-gray-100 cursor-pointer  border-r-0 border-l-0 w-[100px] py-3 ${activeCategory === 1 ? '' : ''}`} onClick={e=> HandleGender(e, "qadin")}>
                        QADIN
                    </Link>
                    <Link className={`flex items-center  cursor-pointer justify-center border border-gray-100 w-[100px] py-3 ${activeCategory === 2 ? '' : ''}`} onClick={e=> HandleGender(e, "usaq")}>
                        USAQ
                    </Link>
                    <div className='w-[100px] h-[1px] bg-red-500 absolute bottom-0 transition-all duration-300' style={{ left: `${activeCategory * 100}px` }}>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center px-3 mt-[20px] pb-1'>
                {
                    categories.map((ctg, index) => {
                        return (
                            <CategoryDropdown category={ctg} key={index} gender={gender} dispatch={dispatch}/>
                        )
                    })
                }
            </div>

            <div className='w-full flex items-center justify-center px-3 mt-[20px] pb-1'>
                <Link
                    to={'/home/profile'} className='flex items-center justify-center bg-[#26264C] w-full h-[56px] hover:opacity-[0.7] transition-all rounded-sm'>
                    <div className='flex items-center justify-center text-white gap-[9px]'>
                        <img src={Profile} alt="Profile" />
                        Hesabim
                    </div>
                </Link>
            </div>
        </section>
    );
}


function CategoryDropdown({category, gender, dispatch}) {

    const [isopen, setIsopen] = useState(false);

    const HandleItemNavigation = item => {
        const i = item.toLowerCase();
        dispatch(setMenu(false))
        window.location = `/products?gender=${gender}&item=${i}`;
    }

    return (
        <section className='flex flex-col w-full'>
            <div className='w-full flex items-center justify-between p-3' onClick={e => setIsopen(!isopen)}>
                <p className='text-[18px]'>
                    {category.main}
                </p>
                <img src={right} alt="" className={`${isopen ? 'rotate-90' : 'rotate-0'} transition-all duration-300`}/>
            </div>
            {
                isopen ? 
                <div className='flex flex-col items-center justify-start'>
                    {
                        category.categories.map((ctg, index) => {
                            return (
                                <div className='w-full flex flex-col p-3'>
                                    <p className='text-[16px] text-red-500'>
                                        {ctg.title}
                                    </p>
                                    <div className={`flex flex-col w-full ${isopen ? "toggle" : ""}`} >
                                        {
                                            ctg.items.map((item, index) => {
                                                return (
                                                    <div className='flex w-full items-center justify-between py-3 border-b-1' key={index} onClick={() => HandleItemNavigation(item)}>
                                                        <p className='text-gray-500 text-[14px] hover:translate-x-2 transition-all duration-100 active:scale-90 w-full'>
                                                            {item}
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> :
                <>
                </>
            }
        </section>
    )
}

export default MobileM;
