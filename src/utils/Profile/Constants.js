import profile from '../../assets/profile/profile.png'
import exit from '../../assets/profile/exit.png'
import address from '../../assets/profile/address.png'
// import bonus from '../../assets/profile/bonus.png'
import liked from '../../assets/profile/liked.png'
import payment from '../../assets/profile/payment.png'
import questions from '../../assets/profile/questions.png'
import refund from '../../assets/profile/refund.png'
import customerservice from '../../assets/profile/customerservice.png'
import referal from '../../assets/profile/referal.png'
import order from '../../assets/profile/orders.png'
import gears from '../../../public/texniki.svg'

export const services = [
    { name: "İSTIFADECI MELUMATLARI", src: profile, address:  "/profile/userinfo"},
    { name: "ÜNVANLAR", src: address , address: "/profile/address"},
    { name: "SEÇİLMİŞLƏR", src: liked , address: "/profile/liked"},
    { name: "ÖDƐNIŞ Ve ÇATDIRILMA", src: payment , address: "/profile/paymentdelivery"},
    { name: "TEZ-TEZ VERILEN SUALLAR", src: questions , address: "/profile/questions"},
    { name: "refund", src: refund , address: ""},
    { name: "Müştərİ Xİdmətlərİ", src: customerservice , address: "/profile/CustomerService"},
    { name: "REFERRAL PROGRAMI", src: referal , address: ""},
    { name: "SİFARİŞLƏR", src: order , address: "/profile/order"},
    { name: "HESABDAN ÇIX", src: exit , address: ""},
];

const questionsdata = [
    {
        title : "Umumi",
        faqs: [{
            question : "Necə sifariş etməli?",
            answer : undefined   
        },{
            question : "MyBrands kartını necə yeniləmək olar ?",
            answer : undefined 
        }]
    },
    {
        title : "Geri qaytarılma",
        faqs: [{
            question : "Məhsulu necə geri qaytara bilərəm?",
            answer : undefined   
        },{
            question : "Məhsulun geri qaytarılma müddəti neçə gündür?",
            answer : undefined 
        },{
            question : "Məhsulun qaytarılması halında ödəniş nə zaman geri qaytarılacaqdır?",
            answer : undefined 
        },{
            question : "Ölçü uyğun deyil. Məhsulu dəyişdirə bilərəm ?",
            answer : undefined 
        }]
    },
    {
        title : "Çatdırılma",
        faqs: [{
            question : "Sifariş neçə gün ərzində çatdırılır ? ",
            answer : undefined   
        },{
            question : "Çatdırılma ödənişlidir?",
            answer : undefined 
        },{
            question : "Mən sifarişi qəbul edə bilmədim. Yeni çatdırılma tarixi təyin edə bilərəm?",
            answer : undefined 
        }]
    },
    {
        title : "Ödəniş",
        faqs: [{
            question : "Ödənişi həyata keçirildiyi karta deyil, başqa karta qaytarmaq mümkündür?",
            answer : undefined   
        },{
            question : "Ödənişi həyata keçirildiyi deyil, digər üsulla qaytarmaq olar?",
            answer : undefined 
        },{
            question : "Rəqəmsal hədiyyə kartını harda istifadə edə bilərəm ?",
            answer : undefined 
        }]
    }
]

const paymentdeliverydata = [
    {
        faqs: [{
            title : "1. Ödəmə",
            answer : [
                "1.1. Alınan məhsulların və onların çatdırılmasının dəyərinin ödənilməsi Sifariş formasında göstərilən ödəmə üsulu ilə həyata keçirilməlidir. Heç bir halda ödəməni almaq üçün Satıcı tərəfindən müəyyən hallarda xərclənən əlavə ödəniş sizdən tutulmayacaq. "   
                , "1.2. Ödəmə kredit / debet kartı ( VISA və MasterCard )  ilə yerinə yetirildikdə siz müvafiq bankın ödəniş üçün nəzərdə tutulmuş səhifəsinə keçid alacaqsız. "
            ]
            }]
    },
    {
        faqs: [{
            title : "2. Promo-kodlar / Hədiyyə kartları / Bonus kartları",
            answer : [
                "2.1. Promo-kodlar mybrands.az saytında alış-veriş edərkən bonus qazanmağa imkan verən kodlardır.",
                `2.2. Hədiyyə kartlarının istifadəsi:

                Kart balansındakı məbləğ pula konvertasiya oluna bilməz.
                
                Hədiyyə kartının qüvvədə olma müddəti alış-veriş tarixindən etibarən 12 ay təşkil edir.
                
                Sahibi tərəfindən itirilmiş hədiyyə kartları bərpa olunmur.
                
                Hədiyyə kartları yalnız MYBRANDS mağazalar şəbəkəsində etibarlıdır və  bank kartları qismində və ya digər ödəmə növləri şəklində istifadə oluna bilməz.
                
                *Rəqəmsal hədiyyə kartı yalnız mybrands.az saytımızda etibarlıdır. Rəqəmsal hədiyyə kartı fiziki mağazalarımızda etibarlı deyil. `,
                `2.3. Bonus kartlarının istifadəsi 
                    MYBRANDS bonus kartınız varsa, “mybrands.az” saytında ödəmə həyata keçirərkən onu istifadə edə bilərsiniz. 
                `,
                "2.4. Hər hansı səbəbdən aldığınız sifarişdən məmnun qalmadığınız təqdirdə “Geri qaytarma siyasəti” bölməsində təsvir olunan standart geri qaytarma proseduruna riayət etməklə, dəyəri ödənilərkən kupondan istifadə olunan məhsulu geri qaytarmaq hüququna maliksiniz. Geri qaytarılan məhsullar Satıcı tərəfindən qəbul olunandan sonra müvafiq kuponun ilkin qiyməti bərpa olunacaq."  
            ]
            }]
    },
    {
        faqs: [{
            title : "3. Çatdırılma",
            answer : [
                "3.1. Məhsulların çatdırılması proseduru haqqında ətraflı məlumat “Müştəri xidməti” bölməsində verilmişdir. Həmin bölmə ilə diqqətlə tanış olmağı sizdən xahiş edirik. Bu bölmədə verilmiş məlumat hazırkı Ümumi müddəalar və satış şərtlərinin ayrılmaz hissəsidir və, deməli, tərəfinizdən Sifariş göndərildiyi halda həmin məlumatla tam şəkildə tanış olmuş və onu qəbul etmiş hesab olunursunuz."
            ]
            }]
    },
    {
        faqs: [{
            title : "4. Müştəri xidməti ",
            answer : [
                "4.1 Hər hansı suallar yarandıqda bizim Müştəri xidmətinə müraciət etməyinizi xahiş edirik. Daha ətraflı məlumatı “Müştəri xidməti”  bölməsindən əldə edə bilərsiniz."
            ]
            }]
    },
]

const customerservices = [
    {
        faqs: [{
            src: `../../../public/truck.svg`,
            title : "Çatdırılma",
            answer : [
                "1.Məhsulların çatdırılması kuryer xidmətimiz vasitəsilə həyata keçirilir. "   
                , "2.Çatdırılma müddəti 1-3 iş günü təşkil edir. ",
                "3.Sifariş göndərildikdən sonra sifarişin aktual statusu haqqında elektron məktub alacaqsınız."
            ]
            }]
    },
    {
        faqs: [{
            src: `../../../public/box.svg`,
            title : "Qüsurlu və çatışmayan məhsul",
            answer : [
                `Məhsulu Satıcının səhvi və ya məhsulun zədəli və ya qüsurlu olması səbəbindən geri qaytarırsınızsa, bu halda məhsulun çatdırıldığı tarixdən on dörd (14) gün ərzində Satıcını elektron qaytarış vasitəsilə məlumatlandırmalısınız.
                Zədələnmiş, qüsurlu məhsulları və ya Sifarişə uyğun olmayan məhsulları aldığınız vəziyyətdə geri qaytarmalısınız.`,
                `Məhsulu Satıcının səhvi və ya Sifarişinizə uyğun olmadığı səbəbindən geri qaytarırsınızsa, bu halda məhsulun çatdırıldığı tarixdən on dörd (14) gün ərzində Satıcını elektron qaytarış vasitəsilə məlumatlandırmalısınız.  Zədələnmiş, Sifarişə uyğun olmayan məhsulları aldığınız vəziyyətdə geri qaytarmalısınız.`
            ]
            }]
    },
    {
        faqs: [{
            src: `../../../public/olcu.svg`,
            title : "Ölçü cədvəli",
            answer : [
                "Kişilər",
                "Qadınlar",
                "Uşaqlar"
            ]
            }]
    },
    {
        faqs: [{
            src: `../../../public/geri.svg`,
            title : "Məhsulu necə geri qaytarmaq olar? ",
            answer : [
                "Əvvəlcədən elektron geri qaytarılma formasını əlavə edərək məhsulu Hüseyn Cavid pr. 520/2 ünvanına göndərməklə məhsulu geri qaytara bilərsiniz. Sifarişi geri qaytar"
            ]
            }]
    },
    {
        faqs: [{
            src: `../../../public/odenis.svg`,
            title : "Ödənişlər ",
            answer : [
                `Saytda VISA və MasterСard Bank kartları ilə ödənişlər qəbul olunur.  
                Sifarişi bitirdikdə sistem sizi bank kartınız haqqında sorğu olunan bütün məlumatları daxil etməli olduğunuz ödəniş səhifəsinə yönləndirəcəkdir.`
            ]
            }]
    },
    {
        faqs: [{
            src: gears,
            title : "Texniki səbəblər",
            answer : [
                `Əgər saytda qeydiyyatla bağlı probleminiz vardırsa, +994504114114  zəng etməyinizi xahiş edirik. `,
                `Səhifə yükləmə problemi. Digər bir pəncərə açaraq hər hansı internet səhifəsinin yüklənməsini yoxlayın, məsələn  google.com və ya  mozilla.org. Digər brauzeri işə salaraq, probleminiz olan səhifəni yükləməyə çalışın. İnternet qoşulmanızı yoxlayın.`
            ]
            }]
    },
]

const orderfilters = [
    "Hamisi",
    "Təslim edilən",
    "Ləğv edilən",
    "Davam edən"
]

export {paymentdeliverydata}
export {questionsdata}
export {customerservices}
export {orderfilters}