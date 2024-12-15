import React, { useState, useEffect } from "react";
import Banner from "./Layout/Banner";
import FormButton from "./Layout/FormButton";
import Back from '../../assets/Registration/Back.png';
import ArrowBack from '../../assets/app/arrow-left.png'
import useOtp from '../../hooks/Registration/Forget'

function OtpForm() {
    const {sms, handleSubmit} = useOtp()

    return (
        <section className="flex justify-center items-center flex-col h-screen w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full ">
            <Banner />
            <div className="flex flex-col h-[466px] min-[470px]:w-[379px] max-[469px]:w-[80%] gap-[10px]">
                <p className="text-[30px]">Sifreni unutmusan?</p>
                <label htmlFor="accesspec" className="text-[14px]">
                    SMS Code
                </label>

                <div className="flex w-full items-center justify-between">
                    {sms.map((value, index) => (
                        <Block key={index} value={value} />
                    ))}
                </div>

                <div className="w-full flex items-center justify-between max-[1000px]:flex-col mt-2">
                    <a href="/signin" className="max-[1000px]:hidden">
                        <img src={Back} alt="" />
                    </a>
                    <a className="flex items-center justify-center w-full" href="/reset" onClick={e => handleSubmit}>
                        <FormButton content="Testiq et" style={{ bg: "#26264C", text: "#FFFFFF", border: "0px" }} method={undefined} />
                    </a>
                    <a href="/signin" className="max-[1000px]:flex hidden mt-3 text-[17px] gap-[10px] border border-gray-200 w-full h-full items-center justify-center py-2 rounded-md">
                        <img src={ArrowBack} alt="" /> <p>Geri qayit</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

function Block({ value }) {
    return (
        <div className="w-[20%] flex items-center justify-center h-[44px] border border-gray-300 z-2">
            {value == undefined ? "" : value}
        </div>
    );
}

export default OtpForm;
