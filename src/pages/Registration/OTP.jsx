import RightImage from "../../components/Registration/Layout/Desk-Right-Image"
import OtpForm from '../../components/Registration/OtpForm'

function OTP() {
    return (
        <section className="flex items-center justify-between fonr-[Roboto]">
            <OtpForm />
            <RightImage />
        </section>
    )
}

export default OTP