import { useEffect, useState } from "react";
import Close from '../../../assets/home/back.png';
import Star from '../../../assets/home/star.png';
import Fire from '../../../assets/home/fire.png';
import '../style/style.css';
import axios from "axios";

function Search({ search }) {
    const [lastS, setLasts] = useState(JSON.parse(localStorage.getItem("lastsearch")) || []);
    const [mostS, setMost] = useState(['Canta', 'Kofta', 'Ayaqqabi']);
    const [trends, setTrends] = useState(['Canta', 'Kofta', 'Ayaqqabi']);

    // useEffect(() => {
    //     axios.get('http://ec2-100-27-211-19.compute-1.amazonaws.com/product/top-sold')
    //         .then(response => {
    //             setMost(response.data.results);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setMost(['Canta', 'Kofta', 'Ayaqqabi']);
    //             setTrends(['Canta', 'Kofta', 'Ayaqqabi']);
    //         });
    // }, [])

    const HandleLink = q => {
        const search = q.replaceAll(" ", "").toLowerCase();
        console.log(search)
        window.location = `/products?q=${search}`
    }

    const cleanHistory = () => {
        localStorage.setItem("lastsearch", JSON.stringify([]));
        setLasts([]);
    };

    const remoelement = element => {
        const newHistory = lastS.filter(el => el != element)
        localStorage.setItem("lastsearch", JSON.stringify(newHistory))
        setLasts(newHistory)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                if (lastS.some(s => s !== search)) {
                    const newHistory = [...lastS, search];
                    localStorage.setItem("lastsearch", JSON.stringify(newHistory));
                    setLasts(newHistory);
                }
                window.location = `/products?q=${search}`
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [search, lastS]);


    return (
        <section className="pb-5 flex w-[80%] items-center justify-between absolute translate-y-[-11px] pt-10 max-[1200px]:w-full borderserc animation bg-white max-[768px]:hidden zindex">
            <div className="w-[180px] min-w-[100px] inline bg-white"></div>
            <div className="flex flex-col items-end w-full mr-[30px]">

                <div className="flex flex-col items-end width justify-between gap-[20px]">
                    <div className="flex w-full justify-between items-center">
                        <p className="text-[16px] font-[500]">
                            Ən son axtarilanlar
                        </p>
                        <p className="text-[14px] text-red-600 cursor-pointer" onClick={cleanHistory}>
                            Təmizlə
                        </p>
                    </div>
                    <div className="w-full flex items-between flex-col justify-center ">
                        {
                            lastS.map((search, index) => (
                                <LastSearch msg={search} key={index} remoelement={remoelement}/>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col items-start width justify-between gap-[10px] mt-[20px] mb-[20px]">
                    <p className="text-[16px] font-[500]">
                        Ən çox axtarılanlar
                    </p>
                    <div className="flex gap-[15px]">
                        {
                            mostS.map((search, index) => (
                                <MostSearched name={search} type={"star"} key={index} HandleLink={HandleLink}/>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col items-start width justify-between gap-[10px] mt-[20px]">
                    <p className="text-[16px] font-[500]">
                        Ən çox axtarılanlar
                    </p>
                    <div className="flex gap-[15px]">
                        {
                            trends.map((search, index) => (
                                <MostSearched name={search} type={"fire"} key={index}  HandleLink={HandleLink}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="min-w-[190px] bg-blue-300 inline"></div>
        </section>
    );
}

function LastSearch({ msg, remoelement, HandleLink }) {
    console.log(HandleLink)
    return (
        <div className="flex w-full items-center justify-between border-b-[1px] py-2" onClick={() => HandleLink(msg)}>
            <p className="text-[#484C52] text-[14px]">{msg}</p>
            <img src={Close} className="w-[10px]" alt="Close" onClick={() => remoelement(msg)}/>
        </div>
    );
}

function MostSearched({ name, type, HandleLink }) {
    return (
        <div className="flex items-center justify-center gap-[7px] border border-[#f1f1f3] rounded-[30px] px-2 py-1 text-[14px] text-[#292D32]"  onClick={() => HandleLink(name)}>
            <img src={type === "star" ? Star : Fire} alt="" />
            <p>{name}</p>
        </div>
    );
}

export default Search;
