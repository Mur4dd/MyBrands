import { useState, useEffect } from "react";
import filter from '../../assets/products/filter.png';
import { useSelector } from "react-redux";
import Card from '../home/Layout/Card';
import { WaitingAnimation } from "../home/Animation";
import './style/style.css'

function ProductMain({ search, setShow, setNumber, loading, setLoading, products }) {
    

    return (
        <section className="w-full flex flex-col items-center justify-start gap-5">
            {window.innerWidth <= 840 ? (
                <div className="w-full flex items-center justify-center">
                    <select
                        name=""
                        id=""
                        className="focus:outline-none flex items-center justify-center w-[50%] h-[50px] border border-gray-300 border-r-0 text-gray-400"
                    >
                        <option value="new">Əvvəlcə yeni</option>
                        <option value="bestsellers">Ən çox satılanlar</option>
                        <option value="trends">Hazırda trend</option>
                        <option value="discount">Endirimli məhsullar</option>
                    </select>
                    <div
                        className="flex items-center justify-center w-[50%] gap-2 cursor-pointer h-[50px] border border-gray-300 text-gray-400"
                        onClick={() => setShow(true)}
                    >
                        Filterlər
                        <img src={filter} alt="Filter icon" className="w-4 h-4" />
                    </div>
                </div>
            ) : null}

                <div className="grid">
                    {products.map((product, index) => (
                        <Card key={index} product={product} type={2}/>
                    ))}
                </div>
        </section>

    );
}

export default ProductMain;
