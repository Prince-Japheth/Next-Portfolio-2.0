import ProjectsClient from './ProjectsClient';
import { Suspense } from 'react';

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Projects(props: PageProps) {
  // Await search params in Next.js 15+ App Router
  const searchParams = await props.searchParams;
  
  // Extract initial query parameters
  const initialCategory = typeof searchParams?.category === 'string' ? searchParams.category : null;
  const initialWordpress = searchParams?.wordpress !== undefined && searchParams?.wordpress !== 'false';

  return (
    <ProjectsClient 
      initialCategory={initialCategory} 
      initialWordpress={initialWordpress} 
    />
  );
}