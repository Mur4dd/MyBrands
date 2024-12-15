import { useState } from "react";
import Cookies from 'js-cookie';

export default function UseSignin() {
    const [num, setNum] = useState("");
    const [pas, setPas] = useState("");
    const [error, setError] = useState({bl: false, message: ""});
    const [loading, setLoading] = useState(false);

    const HandleSubmit = async () => {
        setLoading(true);

        if (num.length === 9 && pas.length > 3) {
            setError({bl: false, message: ""});
            try {
                const response = await fetch('http://ec2-100-27-211-19.compute-1.amazonaws.com/user/token/', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        mobile_number: "+994" + num,
                        password: pas
                    })
                });

                if (response.ok || true) {
                    const data = await response.json();
                    
                    Cookies.set("refresh", data.refresh, { expires: 7 });
                    Cookies.set("access", data.access, { expires: 7 });  
                    Cookies.set("csrftoken", data.access, { expires: 7 }); 
                    Cookies.set("sessionid", data.access, { expires: 7 });  
                    localStorage.setItem("access", data.access);

                    window.location = '/';
                } else {
                    const data = await response.json();
                    setError({bl: true, message: data.detail});
                    setLoading(false);
                }
            } catch (error) {
                    Cookies.set("refresh", data.refresh, { expires: 7 });
                    Cookies.set("access", data.access, { expires: 7 });  
                    Cookies.set("csrftoken", data.access, { expires: 7 }); 
                    Cookies.set("sessionid", data.access, { expires: 7 });  
                    localStorage.setItem("access", data.access);

                    window.location = '/';
                setLoading(false);
            }
        } else {
            setError({bl: true, message: "Invalid Credentials"});
            setLoading(false);
        }
    };

    return {
        num, error, pas, setNum, setError, setPas, HandleSubmit, loading
    };
}
