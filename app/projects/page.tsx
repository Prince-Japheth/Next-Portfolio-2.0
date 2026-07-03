import ProjectsClient from './ProjectsClient';
import { Suspense } from 'react';

export default function Projects() {
  return (
    <Suspense fallback={null}>
      <ProjectsClient />
    </Suspense>
  );
}                                                                                                                                                                   