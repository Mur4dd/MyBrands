import "../style/Style.css"

function RightImage() {
    return (
        <section className="leftside flex justify-center items-center h-screen w-[60%] max-[1200px]:w-[50%] max-[1000px]:hidden">
            <div className="h-full text-white w-full flex flex-col justify-end items-start p-4">
                <p className="text-[34px] font-semibold">Lorem İpsum Dolor</p>
                <p className=""> 
                    Lorem ipsum dolor sit amet
                    consectetur. Amet nullam 
                    orci facilisis vulputate <br/> 
                    molestie ridiculus tincidunt neque.
                </p>
            </div>
        </section>
    )
}


export default RightImage