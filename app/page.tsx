import BlogCard from "@/components/custom/blog-card";
import CustomBreadCrumbs from "@/components/custom/custom-breadcrumb";
import Header from "@/components/custom/header";
import { CustomPagination } from "@/components/custom/pagination";

export default function Home() {
  return (
    <main >
      {/* breadcrumb */}
      <CustomBreadCrumbs items={[{ label: "المدونه" }]} />
      {/* header */}
      <Header
        title="المدونة"
        description="توثيق ما يقارب 60 ألف عقد إيجار تجاري"
      />
      {/* content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white ">
              <BlogCard />
            </div>
          ))}
        </div>
      </div>
      {/* pagination */}
      <div className="container py-12">
        <CustomPagination />
      </div>
    </main>
  );
}
