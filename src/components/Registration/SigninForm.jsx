import Banner from "./Layout/Banner";
import UseSignin from "../../hooks/Registration/Signin";
import { Link } from "react-router-dom";

function SigninForm() {
    const {
        num, error,  pas, setNum, setPas, HandleSubmit, loading
    } = UseSignin()


    return (
        <section className="flex justify-center items-center flex-col h-screen w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full">
                <Banner />
                <div className="flex flex-col h-[466px] min-[470px]:w-[379px] max-[469px]:w-[80%] gap-[10px]">
                    <p className="text-[32px] text-[#292D32] font-bold mb-[20px]">
                    Daxil ol
                    </p>
                    <label htmlFor="number" className="text-[14px] mb-[-5px]">
                        Nomre
                    </label>
                    <div className={`flex items-center justify-start border border-[#ECECEE] h-[48px] ${error.bl ? "border-red-500" : "border-[#ECECEE]"}`}>
                        <p className="pl-2">+994</p>
                        <input
                            id="number" 
                            type="text" 
                            placeholder="70 325 69 75" 
                            className={`w-[80%] h-[46px] ml-3 focus:outline-none`}
                            onChange={e => setNum(e.target.value)}    
                        />
                    </div>
                    <label htmlFor="password" className="text-[14px] mb-[-5px]">
                        Password
                    </label>
                    <div  className={`flex items-center justify-start border border-[#ECECEE] h-[48px] ${error.bl ? "border-red-500" : "border-[#ECECEE]"}`}>
                        <input 
                        id="password" 
                        type="text"
                        value={pas}
                        placeholder="**********" 
                        className="w-[80%] h-[46px] ml-5 focus:outline-none"
                        onChange={e => setPas(e.target.value)}    
                    />
                    </div>
                    
                    <Link to={'/forget'} className="flex w-full items-center justify-end text-[14px] text-[#26264C] font-semibold mb-[-2px]">
                        Şifrəni unutmusan ?
                    </Link>
                    
                        {
                            error.bl ?
                            <p className="text-[10px] text-red-500">
                                {error.message}
                            </p> : <></>
                        }
                    <button 
                        className="bg-[#26264C] text-white h-[48px] mt-4 transition-all duration-200 hover:opacity-70 active:scale-90"
                        onClick={HandleSubmit}    
                    >              
                        {
                            loading ? 
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-white animate-spin" viewBox="0 0 100 101" fill="#26264C" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div> :
                                "Daxil ol" 
                        }       
                    </button>

                    <span className="text-[13px] text-[#9B96B7] w-full flex items-center justify-center gap-[3px] mt-[30px]">
                        Hesabiniz yoxdu?{" "}
                        <a className="text-[#26264C] underline font-semibold" href="/signup">
                            Qeydiyyatdan keç
                        </a>
                    </span>
                </div>
        </section>
  );
}

export default SigninForm;
