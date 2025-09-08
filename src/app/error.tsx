"use client";

import { useEffect } from 'react';
import Card from '@/components/Card';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="text-center">
        <h1 className="text-4xl font-bold text-white">500</h1>
        <p className="mt-4 text-2xl text-white/80">Something went wrong</p>
        <button
          onClick={() => reset()}
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Try again
        </button>
      </Card>
    </div>
  );
}
