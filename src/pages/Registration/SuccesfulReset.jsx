import Frame from '../../assets/Registration/Frame.png'
import FormButton from '../../components/Registration/Layout/FormButton'

function Succesful() {
    return (
        <section className='w-screen h-screen flex items-center justify-center'>
            <section className="flex flex-col h-300px items-center justify-center gap-3">
                <img src={Frame}  className='w-[100px]'/>
                <p className='text-[20px]'>
                    Şifrəniz uğurla yeniləndi
                </p>
                <p className='text-[14px] text-gray-500 max-[400px]:text-[12px]'>
                    Artiq yeni şifrə ilə hesabiniza daxil ola bilərsiniz
                </p>
                <a className="min-[400px]:w-[110%] w-full" href="/signin">
                    <FormButton content="Daxil ol" style={{ bg: "#26264C", text: "#FFFFFF", border: "0px" }} method={undefined} />
                </a>
            </section>
        </section>
    )
}

export default Succesful