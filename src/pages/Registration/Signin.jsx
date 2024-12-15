import SigninForm from "../../components/Registration/SigninForm"
import RightImage from "../../components/Registration/Layout/Desk-Right-Image"

function Signin() {
    return (    
        <section className="flex items-center justify-between fonr-[Roboto]">
            <SigninForm />
            <RightImage />
        </section>
    )
}

export default Signin