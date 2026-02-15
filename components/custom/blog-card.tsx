import { Blog } from "@/types";
import { ArrowUpLeft, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="h-full  flex flex-col">
      <Image
        src={blog?.image}
        alt={blog?.title}
        width={500}
        height={500}
        className="w-full max-h-72 object-cover rounded-xl"
      />
      <div className="p-4 flex flex-col gap-4 ">
        {/* date */}
        {
          blog?.timePublish && (
            <div className="flex items-center gap-2 text-base font-bold">
              <CalendarDays size={20} className="text-text" />
              <p>{blog.timePublish}</p>
            </div>
          )
        }
        {/* content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold leading-relaxed text-text line-clamp-2">
            {blog?.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: blog?.description }}  className="line-clamp-3 ">
          </div>
        </div>
      </div>
        {/* footer */}
        <div className="mt-auto px-4 ">
          <Link
            href={`/blogs/${blog.slug}`}
            className="group bg-main text-white  font-bold px-4 py-2 rounded-lg w-fit flex items-center gap-2  hover:gap-3 transition-all duration-300"
          >
            اقرا المزيد
            <ArrowUpLeft
              size={20}
              className=" group-hover:-rotate-45 transition-all duration-300"
            />
          </Link>
        </div>
    </div>
  );
};

export default BlogCard;
