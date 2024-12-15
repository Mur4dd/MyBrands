import FormButton from "./Layout/FormButton"
import Banner from "./Layout/Banner";

function SignupForm() {
    return (
        <section className="flex justify-center items-center flex-col h-screen w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full">
            <Banner />
            <div className="flex flex-col h-[466px] min-[470px]:w-[379px] max-[469px]:w-[80%] gap-[10px]">
                    <p className="text-[32px] text-[#292D32] font-bold mb-[20px]">
                        Daxil ol
                    </p>


                    <div className="flex items-center justify-between w-full max-[500px]:flex-col">
                        <div className="flex flex-col items-start justify-center max-[500px]:w-full mt-2">
                            <label htmlFor="ad" className="text-[15px]"> 
                                Ad
                            </label>
                            <input type="text" name="" id="ad" className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col items-start justify-center max-[500px]:w-full mt-2">
                            <label htmlFor="soyad" className="text-[15px]"> 
                                Soyad
                            </label>
                            <input type="text" name="" id="soyad" className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"/>
                        </div>
                    </div>
                    
                    <label htmlFor="accesspec" className="text-[15px]">
                        Sifre
                    </label>
                    <input type="password" className={`border border-gray-300 rounded-[3px] focus:outline-none py-2 pl-2`} placeholder="***********"/>
                    
                    <label htmlFor="sifre" className="text-[15px]">
                        Sifreni tesdiq et
                    </label>
                    <input type="password" className={`border border-gray-300 rounded-[3px] focus:outline-none py-2 pl-2`} placeholder="***********" />
                    
                    {/* send request to end point below button */}
                    
                    <a className="w-full mt-2" href="/home">
                        <FormButton
                            content="Daxil ol"
                            style={{ bg: "#26264C", text: "#FFFFFF", border: "0px" }}
                            method={undefined}
                        />
                    </a>
                </div>
        </section>
    )
}

export default SignupForm