import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f6f6f6] text-[#4C4C4C]">
      {/* upper part  */}
      <div className="container py-16 flex flex-col md:flex-row justify-between gap-10">
        {/* logo and text */}
        <div className="space-y-4 lg:w-1/4">
          <Image src={"/logo.svg"} alt="logo" width={120} height={40} />
          <p className=" font-bold leading-relaxed">
            منشأة تجارية رسمية مسجلة في وزارة التجارة السعودية برقم 4650258662
            وحاصلة على شهادة (وسيط عقاري معتمد) من منصة ايجار برقم00237930,
            والمركز السعودي للاعمال برقم 0000018828 , والهيئة العامة للعقار برقم
            1200019246 تأسست تماشيا مع توجهات الدولة ورؤية 2030 في تعزيز التجارة
            الإلكترونية والعمل عن بعد.ماعي أو حافز أو لأي أغراض اخرى.
          </p>
        </div>
        {/* services */}
        <div className="space-y-6">
          <h3 className="text-main font-bold text-2xl after:h-[2px] after:rounded-full after:w-10 after:bg-main after:mt-2 after:block">
            الخدمات
          </h3>
          <ul className="space-y-6">
            <li>
              <Link href={"https://aqdi.sa/"} className=" font-bold">
                توثيق عقد سكني
              </Link>
            </li>
            <li>
              <Link href={"https://aqdi.sa/"} className=" font-bold">
                توثيق عقد تجاري
              </Link>
            </li>
            <li>
              <Link href={"https://aqdi.sa/"} className=" font-bold">
                العقود
              </Link>
            </li>
            <li>
              <Link href={"/"} className=" font-bold">
                المدونه
              </Link>
            </li>
          </ul>
        </div>
        {/* features */}
        <div className="space-y-6">
          <h3 className="text-main font-bold text-2xl after:h-[2px] after:rounded-full after:w-10 after:bg-main after:mt-2 after:block">
            مميزاتنا
          </h3>
          <ul className="space-y-6">
            <li>
              <Link href={"https://aqdi.sa/"} className=" font-bold">
                ثقة عالية
              </Link>
            </li>
            <li>
              <Link href={"https://aqdi.sa/"} className=" font-bold">
                توفير وقتك
              </Link>
            </li>
            <li>
              <Link href={"https://aqdi.sa/"} className=" font-bold">
                دعم قوي 24/7
              </Link>
            </li>
          </ul>
        </div>
        {/* contact */}
        <div className="space-y-6">
          <h3 className="text-main font-bold text-2xl after:h-[2px] after:rounded-full after:w-10 after:bg-main after:mt-2 after:block">
            تواصل معنا
          </h3>
          <ul className="space-y-6">
            <li>
              <a
                href="https://wa.me/966597500014"
                className="flex items-center gap-2"
              >
                <FaWhatsapp className="size-4" />
                <span className="font-bold"> +966597500014</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@aqdi.sa" className="flex items-center gap-2">
                <FaEnvelope className="size-4" />
                <span className="font-bold"> info@aqdi.sa</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-12 text-center flex flex-col items-center gap-6">
        <h3 className="text-main font-bold text-2xl after:h-[2px] after:rounded-full after:w-10 after:bg-main after:mt-2 after:block after:mx-auto">
          تابعونا على
        </h3>
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://wa.me/966597500014"
            className="flex items-center justify-center bg-main size-8 text-white rounded-full"
          >
            <FaWhatsapp className="size-4" />
          </a>
          <a
            href="https://www.snapchat.com/@aqdi.sa?sid=94f2477061694919bb148df1efcba968&share_id=YTNLRx02SLCCGo12clHCwQ&invite_id=aw8HXw5w"
            className="flex items-center justify-center bg-main size-8 text-white rounded-full"
          >
            <FaSnapchatGhost className="size-4" />
          </a>
          <a
            href="https://www.tiktok.com/@aqdi.sa/video/7241154166389837057?is_from_webapp=1&sender_device=pc&web_id=7353713647723906576"
            className="flex items-center justify-center bg-main size-8 text-white rounded-full"
          >
            <FaTiktok className="size-4" />
          </a>
          <a
            href="https://x.com/aqdi_sa"
            className="flex items-center justify-center bg-main size-8 text-white rounded-full"
          >
            <FaXTwitter className="size-4" />
          </a>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="container font-bold flex items-center justify-between md:flex-row flex-col">
          <p>سياسة الخصوصية</p>
          <p>جميع الحقوق محفوظة عقدي 2024 ©</p>
          <Link href={"https://aqdi.sa/terms"}>الشروط والأحكام</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
