import { blog } from "@/lib/source";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="pt-16 pb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 group"
          >
            <svg 
              className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Blog</span>
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {page.data.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {page.data.description}
          </p>
        </header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <article className="flex-1 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 max-w-none">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
              <InlineTOC items={page.data.toc} />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <page.data.body components={defaultMdxComponents} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-64 space-y-8">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
                {/* Author Info */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                    Written by
                  </h3>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {page.data.author}
                  </p>
                </div>
                
                {/* Date Info */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                    Published on
                  </h3>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {new Date(page.data.date ?? page.file.name).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}