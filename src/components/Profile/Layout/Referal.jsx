import { useState } from 'react';
import exitC from '../../../assets/profile/closeC.png'
import copy from '../../../assets/profile/Copy.png'
import referal from '../../../assets/profile/referal.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import frame from '../../../assets/Registration/Frame.png'

function Referal({setReferal}) {

    const [state, setState] = useState({link : "https://mybrands.az/accounts/register?ref...", copied : false})

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-1000000">
            <section className="animate  bg-white p-8 max-w-md h-[450px] w-[400px] flex flex-col items-between justify-between">
                <div className='w-full flex items-center justify-end'>
                    <p className='text-[12px] text-gray-400 flex items-center justify-center gap-[3px] bg-gray-100 px-3 py-2 rounded-2xl cursor-pointer' onClick={() => setReferal(false)}>
                        <img src={exitC} alt="" className='w-[14px]'/>
                        Bagla
                    </p>
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <img src={referal} alt="Exit icon" className="mx-auto mb-4 w-[30px] h-[30px]" />
                    <p className="text-black text-center mb-4 text-[25px]">
                        Referal program
                    </p>
                </div>
                <div className='flex flex-col items-between justify-center gap-[7px]'>
                    <p>Link</p>
                    <input type="text" name="" id="" value={state.link} disabled className='w-full bg-gray-100 p-2 rounded-md pl-2'/>
                </div>
                {
                    state.copied ? 

                    <div className='w-full flex items-center justify-center'>
                        <img src={frame} />  
                    </div> :

                    <CopyToClipboard text={state.link} onCopy={() => setState({...state, copied: true})}>
                        <div className='flex items-center justify-center py-2 text-white gap-[5px] w-full bg-[#26264C] mb-[30px] cursor-pointer'>
                                <img src={copy} alt="" />
                                Copy
                        </div>
                    </CopyToClipboard>
                }
            </section>
        </div>
    )
}

export default Referal