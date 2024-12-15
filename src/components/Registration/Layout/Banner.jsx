import Logo from '../../../assets/app/Logo.png'
import Flag from '../../../assets/app/Flag.png'

function Banner() {
    return (
        <div className="w-[80%] flex justify-between items-center mb-[50px]">
            
            <img src={Logo} alt="Left Image" className="" />
            <div className="w-[40px] h-[40px] border-[2px] flex items-center justify-center">
               <img src={Flag} alt="Right Image" className="" />
            
            </div>
        </div>
    );
}

export default Banner;
