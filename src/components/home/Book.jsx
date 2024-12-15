import { useState, useEffect } from "react"
import {offers} from '../../utils/Home/constants'
import { useSelector } from "react-redux";

async function FetchBook() {
    try{
        const response = await fetch('http://ec2-100-27-211-19.compute-1.amazonaws.com/product', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("access")
            },
        })

        if (response.ok) {
            const data = await response.json();
            return data;
        }else{
            return false;
        }
    }catch(err) {
        return false
    }
} 

function Book() {

    const [data, setData] = useState([]);
    const {woman, man, child} = offers;
    const [images, setImages] = useState(man)
    const gender = useSelector(state => state.user.gender);

    useEffect(() => {
        if (gender == "men") {
            setImages(man)
        }else if (gender == "women") {
            setImages(woman)
        }else {
            setImages(child)
        }
    },[])

    return (
        <section className="flex items-center justify-between gap-[70px] w-[80%] max-[1200px]:w-[90%] mt-[70px] max-[898px]:flex-col max-[898px]:justify-center max-[898px]:gap-[40px]">
            <section className="w-[48%] h-[400px] flex items-center justify-center relative max-[898px]:w-[100%] max-[600px]:h-[300px] max-[400px]:h-[250px]" >
                <img src={images[0]} alt="" className="w-full h-full "/>
            </section>
            <section className="w-[48%] h-[400px] flex items-center justify-center relative max-[898px]:w-[100%] max-[600px]:h-[300px] max-[400px]:h-[250px]">
                <img src={images[1]} alt="" className="w-full h-full "/>
            </section>
        </section>
    )
}


export default Book
