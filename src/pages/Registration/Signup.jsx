import RightImage from "../../components/Registration/Layout/Desk-Right-Image.jsx";
import SignupForm from "../../components/Registration/SignupForm.jsx"

function Signup() {
    return (
        <section className="flex items-center justify-between fonr-[Roboto]">
            <SignupForm />
            <RightImage/>
        </section>
    )
}

export default Signup