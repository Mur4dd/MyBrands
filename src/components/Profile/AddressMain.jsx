import adr from '../../assets/profile/address.png'
import { Link } from 'react-router-dom'
import GoBack from '../../assets/profile/goback.png';
import { useEffect, useState } from 'react';
import phone from '../../assets/profile/phone.png'
import bin from '../../assets/profile/bin.png'
import edit from '../../assets/profile/edit.png'
import redadd from '../../assets/profile/redplus.png'
import Adradd from './Layout/AddressAdd';
import { useDispatch, useSelector } from 'react-redux';
import { setAdr } from '../../features/User/UserSlice';

function AddressMain() {

    const address = useSelector(state => state.user.address);
    const [activeaddress, setActiveAddress] = useState({name: '', surname: '', mobile: '', id : 0, address: '', city : ''});
    const [New, setNew] = useState(false)
    const [type, setType] = useState('add')
    const dispatch = useDispatch();

    const HandleAddAdr = newadr => {
        const newaddress = address.map(adr => adr);
        if(type == 'add') {
            newadr.id = Math.floor(Math.random() * 100000);
            newaddress.push(newadr);
            dispatch(setAdr(newaddress));
            setType('edit');
        }else if(type == 'edit') {
            const index = address.findIndex(add => add.id == newadr.id);
            newaddress[index] = newadr;
            dispatch(setAdr(newaddress));
            setType('add'); 
            setActiveAddress({});
        }
    }

    const HandleDelete = adr => {
        const newaddress = address.filter(add => add.id != adr.id);
        dispatch(setAdr(newaddress))
    }

    const HandleEdit = adrss => {
        const newactiveaddress = address.find(adr => adrss.id == adr.id);
        setActiveAddress(newactiveaddress);
        setNew(true);
        setType('edit');
    }

    return(
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">
            <section className="w-full flex items-center justify-between py-5 px-3 border border-gray-50  max-[500px]:gap-[20px]">
                <div className='flex items-center justify-start gap-[10px] max-[500px]:w-full'>
                    <img src={adr} alt="" />
                    <p className='text-[24px] max-[500px]:text-[20px]'>Unvanlar</p>
                </div>
                <Link to={'/home/profile'} className='flex items-center justify-end gap-[10px] max-[500px]:w-full'>
                    <img src={GoBack} alt="" />
                    <p className='text-[14px] text-[#292D32]'> Geri qayit </p>
                </Link>
            </section>

            <div className='flex items-center justify-center gap-[10px] w-full'>
                <div className='hidden items-center justify-center bg-gray-50 p-3 gap-[8px] text-red-500 max-[500px]:flex max-[500px]:w-full cursor-pointer' onClick={() => setNew(true)}>
                    <img src={redadd} alt="" />
                    <p>Ünvan əlavə et</p>
                </div>
            </div>

            <section className="w-full flex items-center justify-start gap-[30px] mt-[30px] flex-wrap">
                <div className="w-[175px] h-[175px] flex flex-col justify-center items-center transition-all duration-300 border-dashed border border-red-400 text-[25px] text-red-400 hover:scale-110 max-[500px]:hidden" onClick={() => setNew(true)}>
                    <p className='text-[30px]'>+</p>
                    <p className='text-center text-[20px]'>
                        Ünvan <br />
                        əlavə et
                    </p>
                </div>
            
                    {
                        address.map((address, index) => {
                            return (
                                <div className='flex flex-col h-[175px] items-start justify-evenly border border-gray-100 px-3 w-[300px] max-[500px]:w-full' key={index}>
                                    <p className='text-red-400 text-[18px]'>{address.name + ' ' + address.surname}</p>
                                    <p className='text-[14px] text-[#9B96B7]'>{address.city}{', '} {address.address}</p>
                                    <div className='flex border items-center justify-start w-[80%] py-2 gap-[4px] pl-[10px]'>
                                        <img src={phone} alt="" />
                                        <p className='text-[14px]'>{address.telephone}</p>
                                    </div>
                                    <div className='w-full flex items-center justify-between'>
                                        <div onClick={e => HandleDelete(address)} className='w-[50%] flex items-center justify-center gap-[10px] border p-2 border-r-0 border-gray-100 cursor-pointer'>
                                            <img src={bin} alt="" />
                                            <p>Sil</p>
                                        </div>
                                        <div onClick={() => HandleEdit(address)} className='w-[50%] flex items-center justify-center gap-[10px] border p-2 border-gray-100 cursor-pointer'>
                                            <img src={edit} alt="" />
                                            <p>Redaktə et</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                {
                    New && <Adradd setNew={setNew} HandleAddAdr={HandleAddAdr} adr={activeaddress} type={type} />
                }
            </section>
        </section>
    )
}


export default AddressMain 