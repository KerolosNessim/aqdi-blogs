import { getSingleBlog } from "@/api/blogs";
import CustomBreadCrumbs from "@/components/custom/custom-breadcrumb";
import Header from "@/components/custom/header";
import { Blog } from "@/types";
import { CalendarDays } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const res = await getSingleBlog(decodedSlug);
  const blog: Blog | null =
    (res?.data as Blog) ??
    (res?.blog as Blog) ??
    (res?.title ? (res as Blog) : null);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.description.substring(0, 160),
  };
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const res = await getSingleBlog(decodedSlug);
  const blog: Blog | null =
    (res?.data as Blog) ??
    (res?.blog as Blog) ??
    (res?.title ? (res as Blog) : null);
  if (!blog) notFound();
  return (
    blog && (
      <main>
        <CustomBreadCrumbs
          items={[{ label: "المدونه", href: "/" }, { label: `${blog.title}` }]}
        />

        <Header title="المدونة" description={`${blog.title}`} />

        <div className="py-12 container space-y-6">
          <Image
            src={blog.image}
            alt="single blog image"
            width={1200}
            height={700}
            className="w-3/4 object-cover mx-auto rounded-xl"
          />

          {blog.timePublish && (
            <div className="flex items-center gap-2 text-base font-bold">
              <CalendarDays size={20} className="text-text" />
              <p>{blog.timePublish}</p>
            </div>
          )}

          <div className="space-y-4">
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
          </div>
        </div>
      </main>
    )
  );
};

export default SingleBlogPage;
