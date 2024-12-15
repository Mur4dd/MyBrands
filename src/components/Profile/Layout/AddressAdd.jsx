import { useState } from 'react';
import exitC from '../../../assets/profile/closeC.png';
import '../style/style.css';

function Adradd({ setNew, HandleAddAdr, adr, type }) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = e => {
        if(type == 'add') {
            const newaddress = {name: name, surname: surname, city: city, address: address, telephone: mobileNumber, id : undefined};
            HandleAddAdr(newaddress);
            setNew(false);
        }else if(type == 'edit') {
            const newaddress = {name: name, surname: surname, city: city, address: address, telephone: mobileNumber, id: adr.id};
            HandleAddAdr(newaddress);
            setNew(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 zindex">
            <section className="animate bg-white p-8 max-w-md w-[400px] flex flex-col items-between justify-center">
                <div className="w-full flex items-center justify-between border-b mb-4">
                    <p className="text-black text-center text-[20px] font-semibold">Unvan elave et</p>
                    <p
                        className="text-[12px] text-gray-400 flex items-center justify-center gap-[3px] bg-gray-100 px-3 py-2 rounded-2xl cursor-pointer"
                        onClick={() => setNew(false)}
                    >
                        <img src={exitC} alt="" className="w-[14px] mb-1 ml-1" />
                        Bagla
                    </p>
                </div>

                <div className="w-full flex flex-col gap-[20px]">
                    <div className="flex items-center justify-between w-full max-[500px]:flex-col gap-[20px]">
                        <div className="flex flex-col items-start justify-center max-[500px]:w-full mt-2">
                            <label htmlFor="ad" className="text-[14px] mb-1 ml-1">
                                Ad
                            </label>
                            <input
                                type="text"
                                id="ad"
                                className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center max-[500px]:w-full mt-2">
                            <label htmlFor="soyad" className="text-[14px] mb-1 ml-1">
                                Soyad
                            </label>
                            <input
                                type="text"
                                id="soyad"
                                className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                                onChange={(e) => setSurname(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <label htmlFor="" className='text-[14px] mb-1 ml-1'>Mobil nömrə</label>
                        <div className="flex border-gray-300 border rounded-md w-full px-2">
                            <span className="flex items-center justify-center py-2">+994</span>
                            <input
                                type="text"
                                placeholder="077 325 69 75"
                                className="w-full py-2 pl-2 focus:outline-none"
                                onChange={(e) => setMobileNumber(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <label htmlFor="" className='text-[14px] mb-1 ml-1'>Şəhər</label>
                        <select
                            className="flex border-gray-300 border rounded-md w-full px-2 py-2 focus:outline-none"
                            onChange={(e) => setCity(e.target.value)}
                            required
                        >
                            <option value="Baki">Baki</option>
                            <option value="Gence">Gence</option>
                            <option value="Zabrat">Zabrat</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full ">
                        <label htmlFor="" className='text-[14px] mb-1 ml-1'>Ünvan</label>
                        <input
                            type="text"
                            placeholder="Ünvan"
                            className="w-full py-2 pl-2 focus:outline-none border-gray-300 border rounded-md"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <button onClick={e => handleSubmit(e)}  className="flex items-center justify-center py-2 text-white gap-[5px] w-full bg-[#26264C] mb-[30px] cursor-pointer">
                        Yadda saxla
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Adradd;
