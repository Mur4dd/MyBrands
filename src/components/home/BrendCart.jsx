import bg from '../../assets/home/Brends.png';
import { useState, useEffect } from 'react';
const list = [
    bg,
    bg,
    bg,
    bg,
    bg,
    bg,
];

function BrendCard() {

    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        const newIndex = (currentImage + 1) % list.length;
        setCurrentImage(newIndex);
      }, 6000);
    
      return () => clearTimeout(timer);
    }, [currentImage]);

    return (
        <section className="flex items-stretch justify-between w-[80%] max-[1200px]:w-[90%] mt-[100px]">
            <section className="bg-[#26264C] flex flex-col justify-center items-start w-[50%] pl-10 max-[500px]:hidden">
                <p className="text-[13px] text-[#9B96B7]">Krossovka | Kedlər</p>
                <p className='text-white text-[56px] max-[1000px]:text-[40px] max-[750px]:text-[30px] max-[650px]:text-[22px]'>Lacoste Krossovka</p>
                <button className="w-[35%] min-[800px]:h-[40px] max-[800px]:h-[30px] bg-white max-[700px]:text-[14px] mt-10">
                    Sifaris et
                </button>
            </section>
            <section className='relative flex items-stretch justify-start w-[50%] overflow-hidden max-[500px]:w-full'>
                {list.map((src, index) => (
                    <img key={index} src={src} alt="" className='flex-grow transition-all duration-500' style={{ transform: `translateX(-${currentImage * 100}%)` }}/>
                ))}
                <div className='hidden max-[500px]:flex flex-col items-center justify-center absolute w-full bottom-5'> 
                    <p className="text-[14px] text-[#9B96B7] w-[80%] p-0 m-0">Type</p>
                    <p className='text-white text-[30px] w-[80%] p-0 m-0'>General name</p>
                    <button className="w-[80%] max-[800px]:h-[40px] bg-white max-[700px]:text-[14px] h-[60px]">
                        
                    </button>
                </div>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center">
                    {list.map((_, index) => (
                    <div
                        key={index}
                        className={`inline-block w-8 h-[2px] mx-1 rounded-full ${index === currentImage ? 'bg-gray-500' : 'bg-gray-300'} max-[500px]:hidden`}
                    />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default BrendCard;
