import React from "react";

const blogs = [
  {
    title: "How to Choose the Right Digital Marketing Agency for Your Business...",
    image: "/blog/digitalMarketing.jpg",
    link: "#",
  },
  {
    title: "Why LinkedIn is Essential for Building a Strong Professional Presence...",
    image: "/blog/linkedin.jpg",
    link: "#",
  },
  {
    title: "Why Gen Z Branding is Crucial for Modern Businesses | Key Strategies & Insights...",
    image: "/blog/genz.jpg",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-fit-cover" src={blog.image} alt={blog.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">{blog.title}</h3>
              <a
                href={blog.link}
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline"
        >
          View All Blogs
        </a>
      </div>
    </section>
  );
};

export default BlogSection;