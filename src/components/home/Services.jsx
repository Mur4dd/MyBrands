import Truck from '../../assets/home/Truck.png'
import Stuff from '../../assets/home/Stuff.png'
import Emot from '../../assets/home/Emot.png'

function Services() {
    return (
        <section className="flex items-center justify-between w-[80%] mb-[-50px]  max-[1200px]:w-[90%] mt-[100px] max-[557px]:flex-col max-[557px]:gap-10">
            <div className='flex items-center justify-center flex-col gap-[10px]'>
                <img src={Emot} alt="" className='h-[]'/>
                <p>PULSUZ ÇATDIRILMA</p>
                <p className='text-[13px] text-[#484C52] max-w-[90%] text-center'>100 Azn və üzəri bütün sifarişlər 3 gün ərzində ödənişsiz çatdırılır.</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-[10px]'>
                <img src={Truck} alt="" className='mb-[6px]'/>
                <p>PULSUZ ÇATDIRILMA</p>
                <p className='text-[13px] text-[#484C52] max-w-[90%] text-center'>100 Azn və üzəri bütün sifarişlər 3 gün ərzində ödənişsiz çatdırılır.</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-[10px]'>
                <img src={Stuff} alt="" className='h-[]'/>
                <p>24/7 DƏSTƏK</p>
                <p className='text-[13px] text-[#484C52] max-w-[90%] text-center'>100 Azn və üzəri bütün sifarişlər 3 gün ərzində ödənişsiz çatdırılır.</p>
            </div>
        </section>
    )
}


export default Services