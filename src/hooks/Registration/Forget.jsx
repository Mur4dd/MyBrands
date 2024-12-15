import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


function UseOtp() {

    const [sms, setSms] = useState(Array(4).fill(undefined));
    const [error, setError] = useState(true)

    const handleSubmit = e => {
        // fetch sms to backend 
        // if res.ok then error = false 
        
    }   

    const handleKeyDown = (e) => {
        const { key } = e;
        if (key === "Backspace") {
        const newSms = [...sms];
            for (let i = newSms.length - 1; i >= 0; i--) {
                if (newSms[i] != undefined) {
                    newSms[i] = undefined;
                    break;
                }
            }
            setSms(newSms)
        }else if(key != "Backspace") {
            const newSms = [...sms];
            for (let i = 0; i < newSms.length; i++) {
                if (newSms[i] == undefined) {
                    newSms[i] = key;
                    break;
                }
            }
            setSms(newSms)
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [sms]);



    return { sms, setSms, error, handleSubmit }
}


export default UseOtp 