import { getBlogs } from "@/api/blogs";
import BlogCard from "@/components/custom/blog-card";
import CustomBreadCrumbs from "@/components/custom/custom-breadcrumb";
import Header from "@/components/custom/header";
import { CustomPagination } from "@/components/custom/pagination";
import { Blog } from "@/types";



export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  let blogs: Blog[] | null = null;
  let pagination = null;

  const res = await getBlogs(page);

  if (res?.status) {
    blogs = res?.data;
    pagination = res?.pagination;
  }
  return (
    <main>
      {/* breadcrumb */}
      <CustomBreadCrumbs items={[{ label: "المدونه" }]} />
      {/* header */}
      <Header
        title="المدونة"
        description="توثيق ما يقارب 60 ألف عقد إيجار تجاري"
      />
      {/* content */}
      {blogs && blogs.length > 0 && (
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog: Blog, index: number) => (
              <div key={index} className="bg-white ">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* pagination */}
      {pagination && (
        <div className="container py-12">
          <CustomPagination pagination={pagination} />
        </div>
      )}
    </main>
  );
}
