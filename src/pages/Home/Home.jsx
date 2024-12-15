import Header from '../../components/home/Layout/Header';
import Navbar from '../../components/home/Layout/Navbar';
import ProductCategories from '../../components/home/Categories';
import { useSelector, useDispatch } from "react-redux";
import Categories from '../../components/home/Layout/Categories'
import CategorieDropdown from '../../components/home/Layout/CategorieDropdown';
import Shorts from '../../components/home/Stories';
import Carusel from '../../components/home/Carusel';
import Trends from '../../components/home/Trends';
import Book from '../../components/home/Book';
import BestSellers from '../../components/home/BestSellers';
import Brends from '../../components/home/Brends';
import BrendCard from '../../components/home/BrendCart'
import Services from '../../components/home/Services';
import Footer from '../../components/home/Layout/Footer';
import { useEffect, useState } from 'react';
import {WaitingAnimation} from '../../components/home/Animation'
import { fetchBrands, fetchCategories } from '../../features/Home/Categoryies';

function Home() {
    const category = useSelector(state => state.home.CategoryType);
    const status = useSelector((state) => state.home.status);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBrands());
    }, [dispatch]);

    return (
        <>
            {
                status == "succeeded" ? 
                <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
                    <Header />
                    <Navbar />
                    <Categories />
                    {
                        category != ""  && <CategorieDropdown />
                    }
                    <Shorts />
                    <Carusel/>
                    <Trends />
                    <Book />
                    <BestSellers />
                    <Brends />
                    <ProductCategories />
                    <BrendCard />
                    <Services />
                    <Footer />
                </section> : (status == "loading") ?   
                    <WaitingAnimation /> :
                    <div>Error</div>
            }
        </>
    );
}

export default Home;
