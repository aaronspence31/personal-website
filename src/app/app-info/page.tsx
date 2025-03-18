import Link from 'next/link';

export default function AppInfo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">App Router Information</h1>
      <p className="mb-4">
        This page is rendered using the App Router. Most of the portfolio site uses the Pages Router.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        Return to Homepage
      </Link>
    </div>
  );
} 