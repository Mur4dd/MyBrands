import Banner from "./Layout/Banner"
import Back from '../../assets/Registration/Back.png'
import FormButton from "./Layout/FormButton"
import { useState } from "react"
import {isValidNumber} from '../../utils/Registration/helperfunctions'
import { useDispatch, useSelector } from "react-redux"
import { SetUserNumber } from "../../features/Registration/RegistrationSlice"

function ForgetForm() {

    const number = useSelector(state => state.register.usernumber)
    const dispatch = useDispatch()
    const [error, setError] = useState(false)

    const HandleSubmit = e => {
        const condition = isValidNumber(number)

        if (condition) {
            window.location = '/otp'
            setError(false)  
        }else if (!condition) {
            setError(true)
        }
    }


    return (
        <section className="flex justify-center items-center flex-col h-screen w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full ">
            <Banner />
            <div className="flex flex-col h-[466px] min-[470px]:w-[379px] max-[469px]:w-[80%] gap-[10px]">
                <p className="text-[30px]">Sifreni unutmusan?</p>
                <label htmlFor="accesspec" className="text-[14px]">
                    Mobil nomre
                </label>
                <div className={`flex border ${error ? 'border-red-400' : 'borderr-gray-300'} rounded-[3px] focus:outline-none py-2 pl-2`}>
                    <span>
                        +994
                    </span>
                    <input
                        onChange={e => dispatch(SetUserNumber(e.target.value))}
                        id="accesspec"
                        className="pl-2 focus:outline-none w-full h-full pb-[2px] "
                        type="text"
                        placeholder="70 234 23 23"
                    />
                </div>
                <div className="w-full flex items-center justify-between">
                    <a href="/signin"> 
                        <img src={Back} alt="" />
                    </a>
                    <div onClick={HandleSubmit} className="flex items-center justify-center w-full">
                        <FormButton content="Testiq et" style={{ bg: "#26264C", text: "#FFFFFF", border: "0px" }} method={undefined} />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ForgetForm