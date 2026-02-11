import { ArrowUpLeft, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = () => {
  return (
    <div>
      <Image
        src="/blog.png"
        alt="blog card"
        width={500}
        height={500}
        className="w-full max-h-72 object-cover rounded-xl"
      />
      <div className="p-4 space-y-4">
        {/* date */}
        <div className="flex items-center gap-2 text-base font-bold">
          <CalendarDays size={20} className="text-text" />
          <p> الثلاثاء, 10 فبراير 2026</p>
        </div>
        {/* content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold leading-relaxed text-text">
            دليل عقد الإيجار السكني الموحد: الحقوق والالتزامات النظامية.
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            يمثل المسكن الركيزة الأساسية لاستقرار الأسرة السعودية، ومن أجل حماية
            هذا الاستقرار، أوجدت المملكة العربية السعودية منظومة
            &quot;إيجار&quot; التي جعلت من عقد إيجار سكني موحد حجر الزاوية في
            تنظيم العلاقة بين المؤجر والمستأجر. لم يعد الإيجار اليوم خاضعاً
            للاجتهادات الشخصية أو العقود الورقية الضعيفة التي كانت تملأ أروقة
            المحاكم بالنزاعات؛ بل تحول إلى منظومة رقمية متكاملة تضمن العدالة
            والشفافية. إن فهم تفاصيل هذا العقد هو ضرورة حتمية لكل من يبحث عن سكن
            أو يمتلك عقاراً يرغب في تأجيره، فهو الفارق الوحيد بين رحلة سكنية
            هادئة وبين دوامة من المشكلات القانوني
          </p>
        </div>
        {/* footer */}
        <div>
          <Link
            href="/blogs/1"
            className="group bg-main text-white  font-bold px-4 py-2 rounded-lg w-fit flex items-center gap-2  hover:gap-3 transition-all duration-300"
          >
            اقرا المزيد
            <ArrowUpLeft  size={20} className=" group-hover:-rotate-45 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard