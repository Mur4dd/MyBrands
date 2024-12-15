import top from '../../assets/products/top.png';
import bottom from '../../assets/products/bottom.png';
import {colors, sizes, ParentCategories, childs} from '../../utils/Products/Constants'
import exchange from '../../assets/products/exchange.jpg'
import './style/style.css';
import { useSideBar } from '../../hooks/Products/Query';
import filter from '../../assets/products/filter.png';

function SideBar({show, setShow}) {
    const {gender, price, category, subCategory, color, brand, size, brands, HandleBrand, HandleColor, HandleGender, HandleSize, HandlesubCategory, setBrand, setCategory, setColor, setGender, setPrice, setSize, setsubCategory} = useSideBar();

    return (
        <>
            {
                show && 
                <aside className={`flex flex-col min-w-[294px] bg-white  ${show ? 'expand' : 'collapse'} ${window.innerWidth <= 840 ? 'px-5 min-h-full min-w-full z-50 absolute items-start justify-start' : ''}`}>
                    
                    <div className={` flex items-center justify-end w-full py-4 px-2  ${window.innerWidth > 840 ? "hidden" : ""}`}  onClick={e => setShow(!show)}>
                        <img src={filter} alt=""/>
                    </div>


                    <section className="max-w-full min-w-full flex flex-col items-center justify-between bg-red border border-gray-300 px-3 p-4 gap-[20px]">
                        <div className='flex w-full items-center justify-between'>
                            <p>Cins</p>
                            <img
                                src={bottom}
                                alt=""
                                onClick={() => setGender({ ...gender, state: !gender.state })}
                                className={`${gender.state ? "rotate" : "rotateb"}`}
                            />
                        </div>    
                        <div className={`flex-col p-3 gap-[4px] w-full animate ${gender.state ? 'flex expandd' : 'hidden'}`}>
                            <div className="flex items-center me-4">
                                <input id="kisi" type="checkbox" value="kisi" name="gender-checkbox" className=' accent-white' onChange={e => HandleGender(e, e.target.value)} />
                                <label htmlFor="kisi" className="ms-2 text-[14px] text-gray-500">Kisi</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="qadin" type="checkbox" value="qadin" name="gender-checkbox" className=' accent-white' onChange={e => HandleGender(e, e.target.value)} />
                                <label htmlFor="qadin" className="ms-2 text-[14px] text-gray-500">Qadin</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="oglan" type="checkbox" value="oglan" name="gender-checkbox" className=' accent-white' onChange={e => HandleGender(e, e.target.value)} />
                                <label htmlFor="oglan" className="ms-2 text-[14px] text-gray-500">Oglan</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="qiz" type="checkbox" value="qiz" name="gender-checkbox" className=' accent-white' onChange={e => HandleGender(e, e.target.value)} />
                                <label htmlFor="qiz" className="ms-2 text-[14px] text-gray-500">Qiz</label>
                            </div>
                        </div>
                    </section>


                    <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                        <div className='flex w-full items-center justify-between'>
                            <p>Qiymət aralığı</p>
                            <img
                                src={bottom}
                                alt=""
                                onClick={() => setPrice({ ...price, state: !price.state })}
                                className={`${price.state ? "rotate" : "rotateb"}`}
                            />
                        </div>              
                        <div className={`flex items-center justify-around flex-wrap w-full animate ${price.state ? 'flex expandd' : 'hidden'}`}>
                            <div className='flex flex-col items-center justify-center p-1'>
                                <input type="text" name="min" id="min" placeholder="Min" className='w-[100px] p-2 bg-gray-100 text-black rounded-md focus:outline-none' onChange={e => setPrice({ ...price, min: e.target.value })} />
                            </div>
                            <img src={exchange} alt="" className='w-[20px] h-[20px]'/>
                            <div className='flex flex-col items-center justify-center p-1'>
                                <input type="text" name="max" id="max"  placeholder="Max" className='w-[100px] p-2 bg-gray-100 text-black rounded-md  focus:outline-none' onChange={e => setPrice({ ...price, max: e.target.value })} />
                            </div>
                        </div>
                    </section>


                    <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                        <div className='flex w-full items-center justify-between'>
                            <p>Brendler</p>
                            <img
                                src={bottom}
                                alt=""
                                onClick={() => setBrand({...brand, state : !brand.state})}
                                className={`${brand.state ? "rotate" : "rotateb"}`}
                            />
                        </div>  

                        <div className={`flex-col gap-[4px] w-full p-3 items-start justify-start ${brand.state ? 'flex' : 'hidden'}`}>
                            {
                                brands.map((brd, index) => {
                                    return (
                                        <div className='flex w-full gap-[7px] p-[1px] animate' key={index}>
                                            <input type="checkbox" className="accent-white" name={brd.name} id={brd.name} value={brd.name} onChange={e => HandleBrand(e, brd.name)}/>
                                            <label htmlFor={brd.name} className='text-[14px] text-gray-500'>{brd.name}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>


                    <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                        <div className='flex w-full items-center justify-between'>
                            <p>Rəng</p>
                            <img
                                src={bottom}
                                alt=""
                                onClick={() => setColor({...color, state : !color.state})}
                                className={`${color.state ? "rotate" : "rotateb"}`}
                            />
                        </div>  

                        <div className={`grid grid-cols-5 gap-[4px] w-full p-3 ${color.state ? 'flex' : 'hidden'}`}>
                            {
                                colors.map((clr, index) => {
                                    return (
                                        <div    className={`w-[32px] h-[32px] flex items-center justify-center border rounded-[50%] hover:opacity-60`} 
                                                style={{background: clr.hex}} 
                                                key={index}
                                                onClick={e => HandleColor(e, clr.name)}
                                        >
                                            <div className={`w-[13.33px] h-[13.33px] rounded-[50%] bg-white ${color.value.some(c => c == clr.name) ? 'inline animate' : 'hidden'}`}></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    
                    <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                        <div className='flex w-full items-center justify-between'>
                            <p>Ölçü</p>
                            <img
                                src={bottom}
                                alt=""
                                onClick={() => setSize({...size, state : !size.state})}
                                className={`${size.state ? "rotate" : "rotateb"}`}
                            />
                        </div>  

                        <div className={`w-full grid-cols-4 p-3 gap-[4px] ${size.state ? "grid" : "hidden"}`}>
                            {
                                sizes.map((sz, index) => {
                                    return (
                                        <div 
                                            className={`cursor-pointer animate flex items-center justify-center text-gray-500 border border-gray-100 py-1 px-2 rounded-md text-[13px] transition-all duration-300  ${size.value.some(s => s == sz) ? "bg-[#fb7b6d] text-white" : 'bg-white text-gray-500 hover:bg-[#fb7b6d41] hover:text-white'}`} 
                                            onClick={e => HandleSize(e, sz)}
                                            key={index}>
                                            {sz}
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </section>


                    <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                        <div className='flex w-full items-center justify-between'>
                            <p>Kateqoriyalar</p>
                            <img
                                src={bottom}
                                alt=""
                                onClick={() => setCategory({...category, state : !category.state})}
                                className={`${category.state ? "rotate" : "rotateb"}`}
                            />
                        </div>  

                        <div className={`w-full flex flex-col p-3 gap-[4px] animate ${category.state ? "flex" : "hidden"}`}>
                            {
                                ParentCategories.map((ctg, index) => {
                                    return (
                                        <div className='flex items-center w-full justify-start gap-[7px] p-[1px]' key={index} id={ctg}>
                                            <input value={ctg} type="radio" name="category" id={ctg} className='accent-gray-500 w-4 h-4' onChange={e => setCategory({...category, value: e.target.value})}/>
                                            <label htmlFor={ctg} className='text-gray-500 text-[14px] cursor-pointer'>
                                                {ctg}
                                            </label>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </section>


                    <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                        <div className='flex w-full items-center justify-between'>
                            <p>Brendler</p>
                            <img
                                src={bottom}
                                alt=""
                                onClick={() => setsubCategory({...subCategory, state : !subCategory.state})}
                                className={`${subCategory.state ? "rotate" : "rotateb"}`}
                            />
                        </div>  

                        <div className={`flex-col gap-[4px] w-full p-3 items-start justify-start ${subCategory.state ? 'flex animate' : 'hidden'}`}>
                            {
                                childs.map((ctg, index) => {
                                    return (
                                        <div className='flex w-full gap-[7px] p-[1px] animate' key={index}>
                                            <input type="checkbox" className="accent-white" name={ctg} id={ctg} value={ctg} onChange={e => HandlesubCategory(e, ctg)}/>
                                            <label htmlFor={ctg} className='text-[14px] text-gray-500'>{ctg}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                </aside>
            }
        </>
    );
}

export default SideBar;
