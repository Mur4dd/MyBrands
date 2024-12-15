import { Link } from 'react-router-dom';
import exitIcon from '../../../assets/profile/exit.png';
import React from 'react';
import '../style/style.css'

function Exit({ setExit }) {

    const HandleCookies = e => {
        // delete user cookies
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-1000000">
            <section className="animate  bg-white rounded-lg p-8 max-w-md">
                <img src={exitIcon} alt="Exit icon" className="mx-auto mb-4 w-[30px] h-[30px]" />
                <p className="text-white text-center mb-4">
                    Hesabdan çıxmaq istədiyinizdən əminsiniz?
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <button className="text-black bg-[#ECECEE] px-4 py-2 rounded transform hover:scale-110" onClick={() => setExit(false)}>Bağla</button>
                    <Link to={'/signin'} className="text-white bg-[#26264C] px-4 py-2 rounded transform hover:scale-110">Hesabdan çıx</Link>
                </div>
            </section>
        </div>
    );
}

export default Exit;
