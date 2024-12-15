import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActiveCategory } from "../../../features/Home/Categoryies";

function CategorieDropdown() {
    const category = useSelector(state => state.home.ActiveCategory);
    const dispatch = useDispatch(); 
    
    const HandleClick = (item) => {
        console.log(HandleClick)
        window.location = `/products?gender=${category.main}&product=${item}` 
    }

    return (
        <section
            className={`flex w-[80%] z h-[502px] mt-[38px] items-start absolute justify-start bg-white max-[1200px]:w-full font-normal px-1 max-[768px]:hidden animation ${category == null ? 'hidden' : 'flex'}`}
            id="categoryd"
            onMouseEnter={(e) => dispatch(ActiveCategory(category))}
            onMouseLeave={e => dispatch(ActiveCategory(null))}
        >
            {category != null && category.categories != null && 
                category.categories.map((ct, index) => {
                    return (
                        <section key={index} className="flex flex-col items-start gap-5 max-h-[500px] p-3 w-[50%]">
                            <p className="text-[#F84568] font-bold text-lg">
                                {ct.title}
                            </p>
                            <section className="flex flex-col items-start justify-start flex-wrap max-h-[400px] w-full">
                                {ct.items.map((item, idx) => {
                                    return (
                                        <div key={idx} className="text-sm text-gray-700 p-3 transition-all duration-300 hover:scale-90 cursor-pointer" onClick={() => HandleClick(item)}>
                                            {item}
                                        </div>
                                    );
                                })}
                            </section>
                        </section>
                    );
                })
            }
        </section>
    );
}

export default CategorieDropdown;
