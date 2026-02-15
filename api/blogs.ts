const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// get blogs
export const getBlogs = async (page: number = 1) => {
try {
  const res = await fetch(`${baseUrl}/blogs?page=${page}`);
if (!res.ok) {
    throw new Error("Failed to fetch blogs");
}
    return res.json();
} catch (error) {
  console.log(error);
  return null
}
}; 

// get single blog
export const getSingleBlog = async (slug: string) => {
  try {
    const res = await fetch(`${baseUrl}/blog/${slug}`);
    if (!res.ok)
      throw new Error("Failed to fetch single blog");
    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};





