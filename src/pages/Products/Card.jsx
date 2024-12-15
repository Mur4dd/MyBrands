import { useEffect, useState } from "react";
import { WaitingAnimation } from "../../components/home/Animation";
import Header from "../../components/home/Layout/Header";
import Footer from "../../components/home/Layout/Footer";
import Navbar from '../../components/home/Layout/Navbar';
import ProductOpenMain from "../../components/products/ProductOpenMain";
import WisitedPages from "../../components/home/Layout/WisitedPages";
import { useDispatch, useSelector } from "react-redux";
import CategorieDropdown from "../../components/home/Layout/CategorieDropdown";
import Categories from "../../components/home/Layout/Categories";
import { fetchCategories } from "../../features/Home/Categoryies";
import { useLocation, useSearchParams } from 'react-router-dom';

function ProductCard() {
    const [product, setProduct] = useState({});
    const [isloading, setIsloading] = useState(false);

    const [searchParams] = useSearchParams();
    const productId = searchParams.get('id');

    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json);
                setIsloading(true)
            })
            .catch(err => {
                setIsloading(true);
                setProduct({})
            })
    }, [])


    const category = useSelector(state => state.home.CategoryType);

    return (
        <>
        {
            isloading ? 
                <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
                    
                    <Header />
                    <Navbar />
                    <Categories />
                    {
                        category != "" && <CategorieDropdown />
                    }
                    <WisitedPages pages={['home', 'product']}/>
                    <ProductOpenMain product={product}/>
                    <Footer />
                </section>
                    :
                <WaitingAnimation />
        }
        </>
    )
}


export default ProductCard;