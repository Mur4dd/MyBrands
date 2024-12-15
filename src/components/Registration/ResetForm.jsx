import { useState } from "react";
import Banner from "./Layout/Banner";
import FormButton from "./Layout/FormButton";

function ResetForm() {

  
    return (
        <section className="flex justify-center items-center flex-col h-screen w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full ">
            <Banner />
            <div className="flex flex-col h-[466px] min-[470px]:w-[379px] max-[469px]:w-[80%] gap-[10px]">
                    <p className="text-[32px] text-[#292D32] font-bold mb-[20px]">
                        Şifrəni bərpa edin
                    </p>
                    
                    <label htmlFor="accesspec" className="text-[15px]">
                        Sifre
                    </label>
                    <input type="password" className={`border border-gray-300 rounded-[3px] focus:outline-none py-2 pl-2`} placeholder="***********"/>
                    
                    <label htmlFor="sifre" className="text-[15px]">
                        Sifreni tesdiq et
                    </label>
                    <input type="password" className={`border border-gray-300 rounded-[3px] focus:outline-none py-2 pl-2`} placeholder="***********" />
                    
                    {/* send request to end point below button */}
                    
                    <a className="w-full" href="/success">
                        <FormButton
                            content="Daxil ol"
                            style={{ bg: "#26264C", text: "#FFFFFF", border: "0px" }}
                            method={undefined}
                        />
                    </a>
                </div>
            
        </section>
    );
}

export default ResetForm;
