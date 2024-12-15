import { useEffect, useState } from "react";
import Story from './Story';
import './style/style.css'

function Shorts() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(undefined);
    const [Loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10')
        .then(res => res.json())
        .then(json => {
            setData(json.products);
            setLoading(false);
        })
        .catch(err => console.error(err));
    }, []);

    const handleShort = (e, short) => {
        e.preventDefault();
        setOpen(!open);
        setClick(short);
    }

    return (
        <>
            {
                open ? 
                <Story data={click} setOpen={setOpen} /> :
                <section className="flex w-[80%] items-center justify-start max-[1200px]:w-[90%] font-normal h-[96px] mb-[20px] overflow-auto gap-[5px]">
                    {data.map((short, index) => (
                        <div className="flex items-center justify-center flex-col w-[82px] hover:scale-90 transition-all duration-300" key={index} onClick={e => handleShort(e, short)}>
                             {Loading ? 
                                <div className="loading-circle"> </div> : 
                                
                                <div className="flex items-center justify-center rounded-full w-[58px] h-[58px] p-[2px] border-[2px] border-red-500">
                                    <img src={short.images[0]} alt="" className="rounded-[50%] w-full h-full" />
                                </div>
                            }    
                        </div>
                    ))}
                </section>
            }
        </>
    );
}

export default Shorts;
