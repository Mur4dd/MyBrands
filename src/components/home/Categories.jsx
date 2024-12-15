import { useEffect, useState } from "react";
import child from '../../assets/home/child.png';
import boy from '../../assets/home/boys.png';
import girls from '../../assets/home/girls.png';
import men from '../../assets/home/men.png';
import women from '../../assets/home/women.png';
import { useDispatch } from "react-redux";
import { setGender } from "../../features/User/UserSlice";
import { Link } from "react-router-dom";

function Categories() {
    const genders = [
        {
            image: men,
            name: "men"
        },
        {
            image: women,
            name: "women"
        },
        {
            image: child,
            name: "child"
        },
    ];

    const [isChild, setIschild] = useState(false);
    const dispatch = useDispatch();

    const HandleGender = (e, category) => {

        if (category.name === 'child' && !isChild) {
            setIschild(true);
        } else {
            dispatch(setGender(category.name));
        }
    }

    return (
        <section className="relative flex justify-between items-center w-[80%] max-[1200px]:w-[90%] px-1 mt-[30px] max-[500px]:flex-col max-[500px]:gap-[20px]">
            {!isChild ? 
                genders.map((category, index) => {
                    return (
                        <Link
                            key={index}
                            to="/home"
                            onClick={e => HandleGender(e, category)}
                            className="w-[30%] h-full flex items-center justify-center relative max-[500px]:w-full">
                            <img src={category.image} alt={category.name} className="w-full h-full" />
                        </Link>
                    );
                }) : 
                <section className="flex w-full items-center justify-between gap-[30px] max-[500px]:flex-col">
                    <Link
                        to="/home"
                        className="w-[50%] max-[500px]:w-full flex items-center justify-center h-full bg-red-500"
                        onClick={e => HandleGender(e, { name: 'boy' })} // Pass the correct category name
                    >
                        <img src={boy} alt="boy" className="w-full" />
                    </Link>
                    <Link
                        to="/home"
                        className="w-[50%] max-[500px]:w-full flex items-center justify-center"
                        onClick={e => HandleGender(e, { name: 'girl' })} // Pass the correct category name
                    >
                        <img src={girls} alt="girl" className="w-full" />
                    </Link>
                </section>
            }
        </section>
    );
}

export default Categories;
