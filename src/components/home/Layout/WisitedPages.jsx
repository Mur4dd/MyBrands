import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import right from '../../../assets/home/rightT.png'

function WisitedPages({pages}) {

    return (
        <section className="w-[80%] max-[1200px]:w-[90%] flex items-center justify-start border border-gray-100 px-3 py-2 mt-5">
            {
                pages.map((Element, index) => {
                    return (
                        <a className="flex items-center gap-2 mr-2 justify-center text-gray-400" key={index}>
                            <p className="text-[14px] text-gray-700">
                                {Element}
                            </p>
                                {
                                    (index < pages.length - 1) ? <img className="w-[8px] h-[10px] mt-[5px] mb-1" src={right} alt="" /> : <></>
                                }
                        </a>
                    )
                })
            }
        </section>
    )
}

export default WisitedPages;
