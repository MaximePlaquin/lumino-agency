// components/MDXContentWrapper.jsx
export default function MDXContentWrapper({ children }) {
    return (
      <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl mx-auto px-4">
        {children}
      </div>
    );
  }  