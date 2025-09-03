import React from 'react';
import Navbar from '../../components/Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Contact Page</h1>
        <p className="mt-4">
          Hi! I&apos;mm Ali Faysal, a full-stack developer with experience in React, Next.js, Laravel, and more.
        </p>
      </main>
    </>
  );
}
