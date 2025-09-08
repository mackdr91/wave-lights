import Link from 'next/link';
import Card from '@/components/Card';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="text-center">
        <h1 className="text-4xl font-bold text-white">404</h1>
        <p className="mt-4 text-2xl text-white/80">Page Not Found</p>
        <Link href="/" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
          Go back to Home
        </Link>
      </Card>
    </div>
  );
}
