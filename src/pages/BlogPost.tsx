
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data - in a real app, this would come from an API or database
const MOCK_POSTS = [
  {
    id: 1,
    title: "Building Responsive Websites with Tailwind CSS",
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach web styling. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind offers low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>
      
      <h2>Why Tailwind CSS?</h2>
      
      <p>Tailwind provides several advantages over traditional CSS approaches:</p>
      
      <ul>
        <li>No more naming classes - focus on building components instead of managing CSS files</li>
        <li>Responsive design made easy with intuitive breakpoint prefixes</li>
        <li>Consistent spacing, typography, and color scales</li>
        <li>Customizable and extensible design system</li>
        <li>Optimized production builds with PurgeCSS integration</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>Setting up Tailwind in your project is straightforward. Start by installing the packages:</p>
      
      <pre><code>npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <p>Configure your content paths in tailwind.config.js:</p>
      
      <pre><code>module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <p>Add the Tailwind directives to your CSS:</p>
      
      <pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
      
      <h2>Building Responsive Layouts</h2>
      
      <p>One of Tailwind's strengths is how easily it handles responsive design. Using breakpoint prefixes, you can specify how elements should appear at different screen sizes:</p>
      
      <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;
  Responsive content
&lt;/div&gt;</code></pre>
      
      <p>This creates an element that's full width on mobile, half width on medium screens, and one-third width on large screens.</p>
      
      <h2>Conclusion</h2>
      
      <p>Tailwind CSS provides a powerful, flexible approach to styling that can significantly speed up your development workflow. By embracing utility-first CSS, you can build custom designs faster while maintaining consistency throughout your project.</p>
    `,
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
    content: `
      <p>React Hooks were introduced in React 16.8 and have transformed how we write React components. They allow you to use state and other React features without writing a class component.</p>
      
      <h2>Basic Hooks</h2>
      
      <p>The most commonly used hooks are useState and useEffect:</p>
      
      <h3>useState</h3>
      
      <p>The useState hook lets you add state to functional components:</p>
      
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>useEffect</h3>
      
      <p>The useEffect hook lets you perform side effects in function components:</p>
      
      <pre><code>import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>Custom Hooks</h2>
      
      <p>One of the most powerful features of hooks is the ability to create your own custom hooks to extract and reuse stateful logic:</p>
      
      <pre><code>function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return width;
}

function MyComponent() {
  const width = useWindowWidth();
  return &lt;div&gt;Window width: {width}&lt;/div&gt;;
}</code></pre>
      
      <h2>Rules of Hooks</h2>
      
      <p>There are two important rules to follow when using hooks:</p>
      
      <ul>
        <li>Only call hooks at the top level of your function components or custom hooks, not inside loops, conditions, or nested functions.</li>
        <li>Only call hooks from React function components or custom hooks, not from regular JavaScript functions.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>React Hooks provide a more direct API to React concepts you're already familiar with: props, state, context, refs, and lifecycle. They make it easier to reuse stateful logic between components and make your code more readable and maintainable.</p>
    `,
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
    content: `
      <p>The web development landscape is constantly evolving. As we look to the future, several trends and technologies are poised to reshape how we build and experience the web.</p>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      
      <p>Progressive Web Apps continue to gain traction, offering app-like experiences in the browser. They work offline, can be installed on home screens, and provide push notifications. As browsers enhance their capabilities, PWAs will become increasingly indistinguishable from native apps.</p>
      
      <h2>WebAssembly (Wasm)</h2>
      
      <p>WebAssembly is a binary instruction format that enables high-performance applications on the web. It allows languages other than JavaScript to run in the browser at near-native speed. This opens possibilities for bringing computationally intensive applications online, from video editing to CAD software and games.</p>
      
      <h2>Artificial Intelligence Integration</h2>
      
      <p>AI is becoming more accessible to web developers. Libraries like TensorFlow.js allow machine learning models to run directly in the browser. We're seeing an increase in:</p>
      
      <ul>
        <li>Intelligent content recommendation systems</li>
        <li>Voice and natural language interfaces</li>
        <li>Real-time data analysis and visualization</li>
        <li>Personalization based on user behavior</li>
      </ul>
      
      <h2>Serverless Architecture</h2>
      
      <p>Serverless computing continues to reshape backend development. Instead of managing servers, developers write functions that are triggered by events. This approach offers:</p>
      
      <ul>
        <li>Reduced operational costs (pay only for execution time)</li>
        <li>Automatic scaling</li>
        <li>Faster development cycles</li>
        <li>Reduced maintenance overhead</li>
      </ul>
      
      <h2>Micro-Frontends</h2>
      
      <p>Following the success of microservices on the backend, micro-frontends decompose web interfaces into independently deployable features. This architectural style:</p>
      
      <ul>
        <li>Enables independent teams to work on different parts of an application</li>
        <li>Allows for incremental upgrades of parts of the UI</li>
        <li>Supports different technologies for different parts of the application</li>
      </ul>
      
      <h2>Low-Code/No-Code Development</h2>
      
      <p>Visual development platforms are empowering non-programmers to build web applications. These tools are becoming more sophisticated while still allowing developers to extend functionality when needed.</p>
      
      <h2>The Metaverse and Web3</h2>
      
      <p>Concepts around the metaverse and Web3 are gaining momentum:</p>
      
      <ul>
        <li>Immersive 3D experiences using WebXR</li>
        <li>Decentralized applications powered by blockchain</li>
        <li>User ownership of data and digital assets</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The future of web development promises more power, better performance, and greater accessibility. As developers, staying curious and adaptable will be key to navigating these exciting changes.</p>
    `,
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "2023-06-10",
    author: "Akhmad Zaed",
    category: "Technology",
    coverImage: "/placeholder.svg",
    slug: "future-of-web-development"
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<(typeof MOCK_POSTS)[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setLoading(true);
    const foundPost = MOCK_POSTS.find(p => p.slug === slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="h-64 bg-gray-200 rounded mb-6"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-indigo-600 mb-8 hover:text-indigo-800 transition-colors">
            <ArrowLeft size={18} className="mr-1" />
            Back to Blog
          </Link>
          
          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{formattedDate}</span>
                </div>
                <div className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {post.category}
                </div>
              </div>
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />
            </header>
            
            <div 
              className="prose prose-indigo max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
