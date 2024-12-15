import React, { useEffect, useState } from 'react';
import './style/style.css';
import close from '../../assets/home/closewhite.png';
import { Link } from 'react-router-dom';

const Shorts = ({ data, setOpen }) => {
    const images = data.images;
    const [index, setIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, []);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            handleNext();
        }

        if (touchEndX - touchStartX > 50) {
            handlePrev();
        }
    };

    return (
        <section 
            className='z w-screen h-screen bg-gray-500 absolute top-0 flex items-center justify-center gap-[20px]'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div 
                onClick={handlePrev} 
                className='flex items-center justify-center w-[40px] h-[40px] text-white text-[20px] rounded-[50%] bg-gray-200 cursor-pointer max-[500px]:hidden'
            >
                {'<'}
            </div>

            <div className='relative flex items-center justify-center h-[652px] w-[400px] overflow-hidden max-[500px]:h-screen max-[500px]:w-screen'>
                <img src={images[index]} alt="" className='min-[500px]:w-[400px] max-[500px]:h-[50%] max-[500px]:w-[90%] h-[60%] w-[80%]' />
                
                <div className='flex items-center justify-between absolute top-9 w-[90%]'>
                    <div className="flex items-center justify-start gap-[10px]">
                        <div className="flex items-center justify-center rounded-[50%] w-[48px] h-[48px] p-[2px] border-[2px] border-red-500">
                            <img src={images[0]} alt="" className="rounded-[50%] w-full h-full" />
                        </div>
                        <p className='text-white font-semibold'>
                            {data.title}
                        </p>
                    </div>
                    <img src={close} alt="" className='cursor-pointer' onClick={() => setOpen(false)} />
                </div>

                <div className='absolute top-4 flex justify-center gap-[5px] w-[90%]'>
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-[4px] ${i === index ? 'bg-white' : 'bg-gray-400'} flex-1`}
                        />
                    ))}
                </div>

                <Link className='flex items-center justify-center w-[90%] bg-white h-[45px] absolute bottom-10 rounded-1' to={'/products'}>
                    Alış-verişə başla
                </Link>
            </div>

            <div 
                onClick={handleNext} 
                className='flex items-center justify-center w-[40px] h-[40px] text-white text-[20px] rounded-[50%] bg-gray-500 cursor-pointer max-[500px]:hidden'
            >
                {'>'}
            </div>
        </section>
    );
};

export default Shorts;
