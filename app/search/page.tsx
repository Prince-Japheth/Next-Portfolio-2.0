import React, { Suspense } from 'react';
import SearchContent from './SearchContent';
import './search.css';

export default function SearchPage() {
  return (
    <Suspense fallback={
      <section className="search-area">
        <div className="container">
          <h1 className="section-heading" data-aos="fade-up">
            <img src="./assets/images/star-2.png" alt="Star" /> Search Results <img src="./assets/images/star-2.png" alt="Star" />
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