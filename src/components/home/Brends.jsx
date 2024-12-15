import { brends } from "../../utils/Home/constants"

function Brends() {
    return (
        <section className="relative flex flex-col justify-start items-center w-[80%] max-[1200px]:w-[90%] px-1 mt-[50px] gap-[30px]">
            <div className="flex items-center justify-between w-full">
                <p className="text-[30px]">Brendler</p>
            </div>
            <div className="flex items-center justify-start w-full overflow-y-auto gap-[47px]  max-[500px]:gap-3">
                {
                    brends.map((brend, index) => {
                        return (
                            <Brend brend={brend} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

function Brend({brend}) {
    return (
        <img src={brend} alt="" className="w-[230px] h-[156px] px-3 bg-[#F9F8FC]"/>
    )
}

export default Brends