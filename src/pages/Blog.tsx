
import { useState } from "react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/BlogPostCard";

const MOCK_POSTS = [
  {
    id: 1,
    title: "Building Responsive Websites with Tailwind CSS",
    excerpt: "Learn how to create beautiful responsive layouts quickly with Tailwind CSS framework.",
    date: "2023-04-15",
    author: "Akhmad Zaed",
    category: "Web Development",
    coverImage: "/placeholder.svg",
    slug: "building-responsive-websites-with-tailwind"
  },
  {
    id: 2,
    title: "Getting Started with React Hooks",
    excerpt: "Discover how React Hooks can simplify your code and make your components more reusable.",
    date: "2023-05-20",
    author: "Akhmad Zaed",
    category: "React",
    coverImage: "/placeholder.svg",
    slug: "getting-started-with-react-hooks"
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "2023-06-10",
    author: "Akhmad Zaed",
    category: "Technology",
    coverImage: "/placeholder.svg",
    slug: "future-of-web-development"
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = MOCK_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-indigo-600 mb-6 hover:text-indigo-800 transition-colors">
              <ArrowLeft size={18} className="mr-1" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-gray-600">
              Thoughts, stories and ideas about web development, design, and technology.
            </p>
          </div>

          <div className="mb-10">
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {searchQuery && filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-gray-600">Try different search terms</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
