import { useEffect, useState } from 'react';
import ProductsMain from './ProductsMain.jsx'
import SideBar from './Sidebar.jsx'
import { WaitingAnimation } from '../home/Animation.jsx';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductMain({setNumber, search}) {

    const [show, setShow] = useState(window.innerWidth >= 840);
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const gender = useSelector(state => state.user.gender)
  
    const item = searchParams.get('q');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 840) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        let url;
        if (item != null) {
            if (gender != "") {
                url = `https://dummyjson.com/products/search?q=${gender}`;
            }else {
                url = `https://dummyjson.com/products`;
            }
        }
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json.products);
                setLoading(false);
                setNumber(json.products.length)
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);


    return (
        <section className="w-[80%] flex items-start justify-center max-[1200px]:w-[90%] mt-[40px]">
            {
                loading ? 
                    <WaitingAnimation /> : 
                <>
                    <SideBar show={show} setShow={setShow}/>
                    <ProductsMain setShow={setShow} search={search} setNumber={setNumber} loading={loading} setLoading={setLoading} products={products}/>
                </>
            }
        </section>
    )
}

export default ProductMain
