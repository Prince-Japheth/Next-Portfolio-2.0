import React, { Suspense } from 'react';
import SearchContent from './SearchContent';
import Image from 'next/image';
import './search.css';

export default function SearchPage() {
  return (
    <Suspense fallback={
      <section className="search-area">
        <div className="container">
          <h1 className="section-heading" data-aos="fade-up">
            <Image src="/assets/images/star-2.png" alt="Star" width={30} height={30} /> Search Results <Image src="/assets/images/star-2.png" alt="Star" width={30} height={30} />
          </h1>
          <div className="search-loading">
            <div className="loading-spinner"></div>
            <p>Loading search...</p>
          </div>
        </div>
      </section>
    }>
      <SearchContent />
    </Suspense>
  );
} 