import BlogCard from "@/components/custom/blog-card";
import CustomBreadCrumbs from "@/components/custom/custom-breadcrumb";
import Header from "@/components/custom/header";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import React from "react";

const SingleBlogPage = () => {
  return (
    <main>
      {/* breadcrumb */}
      <CustomBreadCrumbs
        items={[
          { label: "المدونه", href: "/" },
          {
            label:
              "دليل عقد الإيجار السكني الموحد: الحقوق والالتزامات النظامية.",
          },
        ]}
      />
      {/* header */}
      <Header
        title="المدونة"
        description="دليل عقد الإيجار السكني الموحد: الحقوق والالتزامات النظامية."
      />
      {/* content */}
      <div className="py-12 container space-y-6 ">
        {/* image */}
        <Image
          src="/blog.png"
          alt="single blog image"
          width={500}
          height={500}
          className="w-full object-cover rounded-xl max-h-[70vh]"
        />
        {/* date */}
        <div className="flex items-center gap-2 text-base font-bold">
          <CalendarDays size={20} className="text-text" />
          <p> الثلاثاء, 10 فبراير 2026</p>
        </div>
        {/* content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold leading-relaxed text-text">
            دليل عقد الإيجار السكني الموحد: الحقوق والالتزامات النظامية.
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">
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
          <h3 className="text-2xl font-bold leading-relaxed text-text">
            دليل عقد الإيجار السكني الموحد: الحقوق والالتزامات النظامية.
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">
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
          <h3 className="text-2xl font-bold leading-relaxed text-text">
            دليل عقد الإيجار السكني الموحد: الحقوق والالتزامات النظامية.
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">
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
      </div>
      {/* related blogs */}
        <div className="container py-12 space-y-6">
          <h2 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold leading-relaxed text-text">
            مقالات ذات صلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white ">
                <BlogCard />
              </div>
            ))}
          </div>
        </div>
    </main>
  );
};

export default SingleBlogPage;
