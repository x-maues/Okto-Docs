import { blog } from "@/lib/source";
import Link from "next/link";

export default function BlogPage() {
  const posts = blog.getPages();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Okto
            <span className="text-blue-600 dark:text-blue-400"> Blogs</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover insights, tutorials, and stories from our team
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.data.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">
                  {post.data.description}
                </p>

                {/* Meta Information */}
                <div className="mt-6 flex items-center justify-between">
                  {/* Date */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(post.data.date ?? post.file.name).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>

                  {/* Read More */}
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    Read more
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}