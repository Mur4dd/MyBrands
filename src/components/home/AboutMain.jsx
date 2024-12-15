import aboutf from '../../assets/home/Aboutfirst.png'
import goals from '../../assets/home/Goals.png'
import woman from '../../assets/home/woman.png'
import child from '../../assets/home/category.png'

function AboutMain() {
    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">
            <section className="w-full flex flex-col items-center justify-center">
                <img src={aboutf} alt="" />
                <div className='flex flex-col items-center justify-center mt-[30px] gap-[20px] text-[16px]'>
                    <p className='text-center w-[50%] max-[600px]:w-full'>
                        NOVCO şirkətlər qrupuna məxsus olan mağazalar MyBrands çətiri altında birləşmişdir.
                        Şirkətin əsas fəaliyyət sahəsi pərakəndə ticarətdir.MYBRANDS.AZ saytı sizə dünya ölkələrindən dəbli məhsullar əldə etmək imkanı təqdim edir.
                    </p>
                    <p className='text-center w-[50%] max-[600px]:w-full'>
                        Şirkət Liu JO, Coccinelle, Tommy Hilfiger, Calvin Klein, Bebe, Adidas, Lacoste, Monnalisa, Pablosky, adL, Accessorize, Monsoon, United Colors of Benetton, Benetton Kids, Sisley, OVS, Atelier Rebul, Suwen kimi  məşhur brendləri bir şəbəkədə birləşdirir.
                    </p>
                    <p className='text-center w-[50%] max-[600px]:w-full'>
                        Dəbi, qlamur və şıqlıq kimi qəbul edən insanların nə düşünməsindən asılı olmayaraq, biz dünyanı fərqli görürük. Biz ən xırda detallarda belə mükəmməlliyə can atırıq, çünki onlar məhsulu əvəzsiz və dəyərli edir.
                    </p>
                    <p className='text-center w-[50%] max-[600px]:w-full'>
                        MYBRANDS.AZ – Azərbaycanda  ən böyük dəbli geyim və aksesuar  saytıdır.
                    </p>
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center mt-[50px] flex-wrap">
                <div className='flex flex-col items-center justify-center mt-[30px] mb-[30px]  gap-[20px] text-[16px]'>
                    <p className='text-[40px] font-bold'>
                        Məqsədimiz
                    </p>
                    <p className='text-center w-[50%] max-[600px]:w-full'>
                        Ən yüksək keyfiyyətli məhsullar təqdim edən dünya brendlərini geniş çeşiddə təqdim etmək. Təkliflərimizin keyfiyyətinə görə tam məsuliyyət daşıdığımız üçün Sizə yalnız etibarlı məhsullar təqdim etmək istəyirik.
                    </p>
                </div>
                <img src={goals} alt="" />
            </section>

            <section className='w-full flex items-start justify-center mt-[100px] gap-[30px] max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center max-[600px]:text-center'>
                <div className='felx flex-col flex-1'>
                    <p className='text-[40px] font-bold max-[1000px]:text-[30px]'>
                        Müştəri deyil, Dost
                    </p>
                    <p className='w-[80%] mt-2 max-[1200px]:w-full'>
                        Biz müştərilərimizə fərqli yanaşma qərarı alaraq yola çıxmışıq. Müştərilərimizin tələblərini tam şəkildə anlamaq və onların inamını doğrultmaqla imicimizi möhkəmləndirmək istəyirik. Biz hər bir müştərinin bizim dostumuz olduğu faktını tamamilə anlayırıq.
                    </p>
                </div>
                <div className='flex items-center justify-center flex-1'>
                    <img src={woman} alt="" />
                </div>
                <div className='flex items-center justify-center flex-1'>
                    <img src={child} alt="" />
                </div>
            </section>  
        </section>
    )
}


export default AboutMain;
