import { Link  } from "react-router-dom"

function Header() {
    return (
        <section className="flex w-[80%] items-center justify-between absolute top-0 bg-[#EBE7E7] max-[1200px]:w-[90%] font-normal">
            <div className="flex items-center justify-start gap-[10px] text-[14px]">
                <Link to={"/home/about"}>Haqqimizda</Link>
                <Link to="">Musteri xidmetleri</Link>
                <Link to="">Bloq</Link>
            </div>
            <div className="flex itemc-center justify-end">
                <select name="" id="" className="focus:outline-none text-[12px]">
                    <option value="AZ">AZ</option>
                    <option value="AZ">EN</option>
                    <option value="AZ">RU</option>
                </select>
            </div>
        </section>
    )
}

export default Header