import { useDispatch } from "react-redux";
import { ChangeLoginMethod } from "../../../features/Registration/RegistrationSlice";


function FormButton({ content, style, method }) {

    const dispatch = useDispatch();

    const handleID = () => {
        if (content == "MyBrands karti ilə daxil ol" || content == "Nomre ile Daxil ol") {
            if (method == 1) dispatch(ChangeLoginMethod(2))
            else if (method == 2) dispatch(ChangeLoginMethod(1))
        }  
    };

    return (
        <button
            className={`w-full py-2 px-4 rounded-md font-bolder border-${style.border} border hover:opacity-[0.8]`}
            style={{ backgroundColor: style.bg, color: style.text }}
            onClick={handleID}
        >
            {content}
        </button>
    );
}

export default FormButton;
