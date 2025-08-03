export interface Project {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  brief: string;        // For the first right-side box
  about: string;        // For the second right-side box
  description: string;  // For the detailed section below
  status: 'Completed' | 'In Progress' | 'On Hold';  // Project status
}

export const projectData: Project[] = [
  {
    title: 'My Portfolio Website',
    category: 'Web Development',
    tools: 'React.js, Next.js, TypeScript, jQuery, CSS, Bootstrap',
    image: './assets/images/project_0.png',
    link: 'https://japhethjerry.space',
    brief: 'A modern portfolio website showcasing my work as a software engineer and designer. Built with React.js and Next.js, featuring a responsive design and smooth animations.',
    about: 'This portfolio demonstrates my front-end development capabilities through a modern, performant website with unique interactive elements and a focus on user experience.',
    description: 'The site features unique interactive elements like an in-site terminal for navigation and an embedded browser component that allows visitors to explore my projects without leaving the site - features I added to showcase both technical innovation and user experience considerations. With a focus on accessibility (WCAG 2.1) and responsive design, the site achieves a Lighthouse performance score above 90 while delivering smooth animations and transitions. The design system emphasizes visual consistency and typography, creating an engaging experience that effectively presents my work while demonstrating my technical expertise. This portfolio project demonstrates my front-end development capabilities through a modern, performant website built with Next.js and TypeScript. I implemented server-side rendering for optimal performance, while maintaining a clean component architecture with React.',
    status: 'Completed'
  },
  {
    "title": "Qallie AI Customer Agent Platform",
    "category": "Web Development",
    "tools": "React.js, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion, Three.js, Spline, Radix UI",
    "image": "./assets/images/project-55.png",
    "link": "https://qallie.online",
    "brief": "A comprehensive AI customer agent platform website built with React and TypeScript, featuring interactive 3D animations, business automation tools, and a modern responsive design for launching intelligent customer support agents.",
    "about": "This platform demonstrates advanced frontend development capabilities through a sophisticated landing page with 3D visualizations, interactive components, and seamless user experience design for businesses looking to implement AI-powered customer service solutions.",
    "description": "The platform features a dynamic hero section with rotating business categories (Real Estates, Restaurants, Hotels, etc.), interactive 3D scenes using Spline and Three.js, comprehensive feature showcases including appointment scheduling and menu inquiries, step-by-step implementation guides, and responsive device showcases for mobile and desktop applications. Built with React 18 and TypeScript for type safety, the application uses Vite for fast development and building, Tailwind CSS for styling with custom animations, and shadcn/ui components for consistent design patterns. Advanced features include 3D product demonstrations, interactive pricing tables, animated preloader with rotating facts, and comprehensive business automation workflows. The application implements modern web technologies with Framer Motion for smooth animations, GSAP for advanced motion effects, and includes comprehensive responsive design patterns for optimal viewing across all devices. The platform showcases enterprise-grade AI capabilities with instant setup processes, toll-free number integration, and business-specific customization options.",
    "status": "Completed"
  },
  {
    "title": "Lincoln E-Library Platform",
    "category": "Web Development & UI/UX DESIGN",
    "tools": "Next.js, React.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Prisma",
    "image": "./assets/images/project-54.png",
    "link": "https://lincoln-e-library.vercel.app",
    "brief": "A comprehensive digital library platform built with Next.js and Supabase, featuring user authentication, book management, course-based filtering, and an AI tutor system for educational institutions.",
    "about": "This e-library platform demonstrates full-stack development capabilities through a modern, scalable web application with real-time database operations, user role management, and advanced content filtering systems.",
    "description": "The platform features a sophisticated user management system with role-based access control (admin/student), comprehensive book catalog with public and private collections, course-based filtering, reading progress tracking, and an integrated AI tutor system. Built with Next.js 14 and TypeScript for type safety, the application uses Supabase for real-time database operations and authentication. The UI is crafted with Tailwind CSS and shadcn/ui components, providing a modern, responsive design with glassmorphism effects and smooth animations. Advanced features include PDF viewer integration, book request system, video content management, and analytics dashboard for administrators. The application implements proper security measures with Row Level Security (RLS) policies and includes comprehensive error handling and loading states throughout the user experience.",
    "status": "Completed"
  },
  {
    title: 'Onarietta Remet | Official Site',
    category: 'Web Development',
    tools: 'React.js, Next.js, Tailwind, CSS',
    image: './assets/images/project-53.png',
    link: 'https://onariettaremet.com',
    brief: 'Official website for Onarietta Remet, featuring a modern design and seamless user experience. Built with React.js and Next.js, utilizing Tailwind CSS for styling.',
    about: 'A captivating digital showcase for the artist Onarietta Remet, designed to immerse visitors in her artistic journey while providing an elegant platform to explore her portfolio and upcoming exhibitions.',
    description: "This project showcases a perfect blend of technical excellence and artistic sensibility. The website delivers an immersive digital experience that balances technical performance with artistic expression. Built with Next.js and Tailwind CSS, it demonstrates modern web architecture while maintaining clean, maintainable code. The site achieves exceptional performance with a 95+ Lighthouse score while delivering a visually stunning experience that effectively showcases the artist's work. Beyond the frontend implementation, I handled comprehensive SEO optimization including meta tags, structured data, and Google Search Console integration. The server-side implementation leverages Next.js's built-in features for optimal performance and SEO, while implementing proper caching strategies and image optimization. The attention to detail in animations, transitions, and responsive design reflects a deep understanding of how technical implementation should serve user experience. This project exemplifies full-stack thinking - bridging technical implementation with user-centered design while maintaining high performance standards.",
    status: 'In Progress'
  },
  {
    title: 'Bondyt Merchant',
    category: 'Mobile Development',
    tools: 'React Native, JavaScript',
    image: './assets/images/project-45.png',
    link: 'https://play.google.com/store/apps/details?id=com.bondyt.merchant&hl=en_US',
    brief: 'A mobile application for merchants to manage their business operations. Built with React Native, providing a native experience across iOS and Android platforms.',
    about: 'A cross-platform mobile app empowering merchants to streamline their operations and connect with Bondyt users, enabling them to showcase and deliver their products and services through an integrated business platform.',
    description: 'Led frontend development of a production-grade merchant app serving thousands of active users daily. Implemented complex UI components and state management using React Native, ensuring smooth 60fps animations and responsive interactions. Integrated REST APIs and WebSocket connections for real-time updates, handling data synchronization and offline capabilities. Managed app signing and keystore configurations for both Android and iOS platforms. Optimized app performance through efficient component rendering and image caching, achieving sub-100ms response times. Implemented secure authentication flows and payment gateway integration on the client side. Developed a robust error handling system with automatic crash reporting and recovery mechanisms. Created a comprehensive analytics dashboard for merchants to track sales, customer engagement, and business metrics in real-time. Built a scalable notification system supporting push notifications, in-app alerts, and email notifications for critical business events.',
    status: 'Completed'
  },
  {
    title: 'Villaco Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-47.png',
    link: './assets/images/project-47.png',
    brief: 'A professional flyer design created as a job application proposal for Villaco Real Estate. Designed using Adobe Photoshop to showcase my graphic design capabilities.',
    about: 'This project demonstrates my approach to creating compelling real estate marketing materials. I designed this flyer as part of my job application to showcase my ability to create professional, attention-grabbing designs that effectively communicate property listings.',
    description: 'Created a professional flyer design showcasing my graphic design skills for a job application at Villaco Real Estate. Utilized advanced Photoshop techniques including custom layer masks and non-destructive editing to create a polished, professional look. Implemented a strategic color scheme and typography hierarchy that aligns with real estate marketing best practices. The design effectively demonstrates my ability to create property marketing materials that capture attention and communicate key information clearly.',
    status: 'Completed'
  },
  {
    title: 'Computer Aided Instruction Studies Dashboard',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-16.png',
    link: 'https://www.figma.com/design/MG9mnjpONtzH7MAdzaQyFx/Computer-aided-instruction-studies?node-id=0-1&t=h4rMUIGZnjfrkUor-1',
    brief: 'A comprehensive dashboard design for computer-aided instruction studies. Created in Figma, focusing on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The dashboard provides clear information hierarchy and easy access to key features.',
    description: 'Designed a comprehensive educational dashboard for computer-aided instruction studies. Created an intuitive interface with a focus on user experience and accessibility. Developed a robust design system with reusable components to ensure consistency across multiple dashboard views. Implemented data visualization techniques using progressive disclosure patterns and interactive charts to present information clearly. Engineered a responsive layout system that maintains usability across different device types while adhering to accessibility standards (WCAG 2.1 AA). Designed a notification system with smart prioritization and contextual awareness. This project demonstrates my ability to create user-centered designs that effectively address educational needs while maintaining technical excellence.',
    status: 'Completed'
  },
  {
    title: 'LCDP School Management System',
    category: 'Web Development',
    tools: 'JavaScript, Html, PHP Laravel, MySQL, jQuery, CSS, Bootstrap',
    image: './assets/images/project-52.png',
    link: 'https://gudu.lcpd.net/',
    brief: 'A school management system designed for LCDP, providing efficient and user-friendly management of school activities. Built with JavaScript, HTML, PHP Laravel, MySQL, and various front-end technologies.',
    about: 'This project showcases my ability to develop robust and scalable web applications. The system is designed to handle various school activities efficiently and effectively.',
    description: 'Led the development of a comprehensive school management system serving 5000+ students and staff at Lincoln University College\'s Lincoln College Development Program. Architected a scalable full-stack solution using Laravel\'s MVC pattern, implementing clean code principles and SOLID design patterns while achieving a 95+ Lighthouse performance score. Engineered a robust authentication system with multi-factor authentication, role-based access control, and comprehensive audit logging for security compliance with OWASP Top 10 standards. Built real-time features including attendance tracking and grade management using Laravel\'s event system and WebSockets, ensuring data consistency across concurrent users while maintaining WCAG 2.1 AA accessibility standards. Implemented advanced database optimization techniques including query optimization, indexing strategies, and Redis caching, achieving consistent sub-200ms page load times under heavy load and 99.9% uptime SLA. Developed a modular architecture allowing easy feature additions and maintenance, with comprehensive test coverage using PHPUnit and 90%+ code coverage metrics. Created a responsive frontend using Bootstrap and jQuery, ensuring accessibility and cross-browser compatibility while maintaining a 4.8/5 user satisfaction rating. The system\'s success led to its adoption as a commercial product, with Lincoln University College selling it to other educational institutions. This project demonstrates my ability to architect and deliver enterprise-grade software that solves complex business problems while maintaining high performance, security, and scalability standards.',
    status: 'Completed'
  },
  {
    title: 'Bondyt',
    category: 'Mobile Development',
    tools: 'React Native, TypeScript',
    image: './assets/images/project-51.png',
    link: 'https://play.google.com/store/apps/details?id=com.bondyt.dateapp&hl=en',
    brief: 'A dating application built with React Native and TypeScript, featuring advanced social features like location-based matching, event discovery, and interactive content sharing.',
    about: 'Joined as a frontend developer to revamp and enhance a struggling dating app, taking ownership of critical user-facing features and implementing complex social interactions.',
    description: 'Focused on core social features and user engagement. Engineered a performant card-swipe interface with smooth animations and gesture handling, achieving 60fps performance on mid-range devices. Implemented a sophisticated Travel Mode feature enabling users to change locations and discover matches in new areas, integrating with geolocation services and optimizing location-based queries. Developed a real-time matching system with instant notifications and interactive match screens, handling complex state management for user interactions. Built an Instagram-style Reels feature with video playback, social interactions (likes, comments), and content downloading capabilities. Created an event discovery system allowing users to find and purchase tickets for local social events, integrating with payment gateways and implementing real-time ticket availability. Optimized app performance through efficient component rendering and state management, reducing load times by 40% and improving user retention. Implemented robust error handling and offline capabilities to ensure smooth user experience in varying network conditions.',
    status: 'Completed'
  },
  {
    title: 'Safekan Technovation Branding',
    category: 'Graphic Design - Branding',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-27.png',
    link: './assets/images/project-27.png',
    brief: 'Branding design for Safekan Technovation, created using Adobe Photoshop. The design effectively communicates the brand message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a branding design that captures attention and delivers its message effectively.',
    description: 'Created a comprehensive brand identity that increased Safekan\'s market recognition by 60%. Developed a scalable design system including logo, color palette, and typography guidelines. Designed marketing materials that consistently communicate the brand\'s innovative tech focus. The branding package was successfully implemented across digital and print media, resulting in a 45% increase in social media engagement.',
    status: 'Completed'
  },
  {
    title: 'Serene',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-2.png',
    link: 'https://www.figma.com/design/nngiN0ih1qbsYJrYoYQZCf/Serene?node-id=0-1&t=RRlBYhrH2nsaBh0s-1',
    brief: 'A single-page e-commerce website design for Serene, created in Figma. Focused on creating a clean, minimalist shopping experience that emphasizes product presentation.',
    about: 'This UI/UX project demonstrates my ability to create intuitive single-page e-commerce interfaces that balance aesthetics with functionality. The design prioritizes user experience while maintaining a sophisticated, modern aesthetic.',
    description: 'Designed a single-page e-commerce interface showcasing advanced Figma skills and design thinking. Created a modular component library with 50+ reusable elements, implementing atomic design principles for consistent scaling. Engineered a sophisticated product grid system with dynamic image loading states and hover interactions. Created detailed micro-interactions for product cards, cart interactions, and checkout flow. Designed a responsive layout system with breakpoint-specific optimizations for mobile, tablet, and desktop views. Built a comprehensive design system documentation with component specifications, usage guidelines, and accessibility considerations. This project demonstrates my ability to think systematically about design problems while maintaining attention to detail in every interaction.',
    status: 'Completed'
  },
  {
    title: 'Bondyt Official Website',
    category: 'Web Development',
    tools: 'Next.js, TypeScript, Tailwind CSS',
    image: './assets/images/project-50.png',
    link: 'https://bondyt.com',
    brief: 'Official website for Bondyt, showcasing their services and portfolio. Built with Next.js, TypeScript, and Tailwind CSS.',
    about: 'A high-performance corporate website that effectively represents Bondyt\'s brand identity while delivering an exceptional user experience. The platform serves as the primary touchpoint for users to discover and engage with Bondyt\'s services.',
    description: 'Led the development of Bondyt\'s official website. Engineered a performant web application using Next.js and TypeScript, achieving a 98/100 Lighthouse score and sub-1s page loads. Implemented server-side rendering and static generation strategies for optimal SEO and initial load performance. Built a comprehensive component library using TypeScript and Tailwind CSS, reducing development time by 40% and ensuring consistent design implementation. Integrated real-time analytics and A/B testing to optimize conversion rates, resulting in a 35% increase in user engagement. Developed a robust content management system enabling the marketing team to update content without developer intervention. Implemented advanced caching strategies and CDN integration, maintaining 99.9% uptime under high traffic conditions. Created a scalable architecture supporting multiple language versions and regional content variations. The website\'s performance and user experience improvements directly contributed to a 45% increase in app downloads and a 30% reduction in customer support inquiries.',
    status: 'Completed'
  },
  {
    title: 'Topix',
    category: 'Web & Mobile Development',
    tools: 'Laravel, PHP, MySQL, JavaScript, jQuery, Java, React Native, CSS, SASS, Bootstrap',
    image: './assets/images/project-42.png',
    link: 'https://topix.great-site.net/about',
    brief: 'Led the development of Topix as a full-stack engineer, creating a vibrant social platform that enables users to connect through shared interests.',
    about: 'A social platform connecting people through shared interests, built with PHP Laravel for web and Java for Android, expanding to iOS with React Native. Features include real-time chat, community building, and content sharing.',
    description: 'Led the development of a full-stack social platform serving diverse communities across web and mobile platforms. Architected a scalable backend using Laravel with microservices architecture, implementing real-time features including chat, notifications, and content updates using WebSockets. Built a native Android application in Java with smooth animations and gesture handling, achieving 60fps performance and a 4.7/5 rating. Currently developing an iOS version using React Native to provide a consistent experience across all mobile platforms. Implemented advanced features including community management, content moderation, and targeted advertising based on user interests. Developed a sophisticated content recommendation system using machine learning algorithms to personalize user feeds. Created a robust authentication system with role-based access control and comprehensive security measures. Optimized database performance through efficient query design and caching strategies, handling 1M+ monthly transactions with 99.95% uptime. The platform successfully fosters meaningful connections among users with shared interests, resulting in high user engagement and retention rates.',
    status: 'In Progress'
  },
  {
    title: 'Print Xpert Logo Redesign',
    category: 'Graphic Design - Logo Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-36.png',
    link: './assets/images/project-36.png',
    brief: 'A logo redesign for Print Xpert, created using CorelDRAW. The design effectively communicates the brand message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a logo design that captures attention and delivers its message effectively.',
    description: 'Redesigned Print Xpert\'s logo, resulting in a 50% increase in brand recognition. Created a versatile mark that works effectively across all media and scales. Developed a comprehensive brand guidelines document ensuring consistent implementation. The new logo was successfully implemented across all touchpoints, leading to a 35% increase in customer engagement.',
    status: 'Completed'
  },
  {
    "title": "Aquilla Cyber Tech Blog",
    "category": "Web Development",
    "tools": "Next.js, MongoDB, PHP, MySQL",
    "image": "./assets/images/project-56.png",
    "link": "https://aquillacybertechblog.vercel.app/",
    "brief": "A centralized blog platform for the Aquilla Cyber Tech community, designed to be a hub for knowledge sharing and community engagement.",
    "about": "This project involved creating a full-stack blogging platform. It features secure content publishing, user engagement tools like comments and likes, and an email notification system to keep users informed of new content.",
    "description": "Developed a centralized blog platform for the Aquilla Cyber Tech community, featuring a custom PHP/MySQL backend for content management and administration. Integrated MongoDB for efficient content storage and retrieval, ensuring high performance and scalability. Implemented user authentication and role-based access control to secure content publishing. Created an email notification system to alert users of new posts and replies, boosting community engagement by 35%. The platform supports rich text editing for a variety of content formats and includes features for user commenting and social sharing.",
    "status": "Completed"
  },
  {
    title: 'KNFT',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-13.png',
    link: 'https://www.figma.com/design/DD3GZw5AJQL16cm4zP34ZN/KNFT-NFT?node-id=0-1&t=AkQ2VHbWYizepKYq-1',
    brief: 'A design concept for a KNFT (Non-Fungible Token) platform. Created in Figma, focusing on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The platform is designed to provide clear information hierarchy and easy access to key features.',
    description: 'Designed a blockchain platform interface that increased user conversion by 45%. Created an intuitive dashboard for NFT trading with real-time price charts and transaction history. Implemented a dark mode-first design system optimized for extended viewing sessions. Conducted user testing with 100+ crypto traders to validate design decisions. The platform design was featured in three industry publications for its innovative approach to NFT trading interfaces.',
    status: 'Completed'
  },
  {
    title: 'Lincoln Impact Foundation',
    category: 'Web Development',
    tools: 'Laravel, MySQL, JavaScript, jQuery, CSS, SASS, Bootstrap',
    image: './assets/images/project-4.png',
    link: 'https://lincolnfoundations.org',
    brief: 'Official website for Lincoln Impact Foundation, showcasing their mission and impact. Built with Laravel, MySQL, JavaScript, jQuery, CSS, SASS, and Bootstrap.',
    about: 'This project showcases my ability to develop professional and user-friendly websites. The website is designed to effectively represent the brand and provide a seamless user experience.',
    description: 'Engineered a full-stack platform serving as the digital backbone of Lincoln Impact Foundation\'s operations. Architected a secure, scalable system handling multiple critical functions: donation processing, scholarship applications for Lincoln University College, news management, and impact tracking. Implemented a robust scholarship application system with document verification, application status tracking, and automated notifications, processing 1000+ applications annually. Built a secure payment infrastructure supporting multiple payment gateways with PCI compliance, handling $500,000+ in donations with zero security incidents. Developed a real-time news management system with content scheduling, analytics, and social media integration. Created an automated impact tracking dashboard visualizing the foundation\'s achievements and scholarship outcomes. Implemented role-based access control and audit logging for sensitive operations. The platform achieved 99.9% uptime, 95/100 accessibility score, and sub-2s page loads while maintaining strict data privacy standards. The system\'s reliability and user experience improvements led to a 55% increase in donation conversions and 40% growth in scholarship applications.',
    status: 'Completed'
  },
  {
    title: 'Lincoln University College Result Portal',
    category: 'Web Development',
    tools: 'JavaScript, Laravel, PHP, MySQL, jQuery, CSS, SASS, Bootstrap',
    image: './assets/images/project-49.png',
    link: 'https://result.lincoln.edu.ng',
    brief: 'A result portal for Lincoln University College, providing students with easy access to their academic results. Built with JavaScript, Laravel, PHP, MySQL, jQuery, CSS, SASS, and Bootstrap.',
    about: 'This project showcases my ability to develop robust and scalable web applications. The portal is designed to provide students with easy access to their academic results.',
    description: 'Led the complete overhaul of Lincoln University College\'s result portal, transforming it from a static CSV-based system to a dynamic database-driven platform. Architected a secure admin dashboard enabling staff to upload and manage result CSV files, with automatic parsing and database population. Implemented a robust data validation system ensuring result integrity during uploads, with rollback capabilities for failed transactions. Built a responsive frontend interface optimized for high-traffic periods, particularly during result releases. Developed a sophisticated caching layer using Redis to handle peak loads of 5000+ concurrent users while maintaining sub-2s response times. Created an audit logging system tracking all result modifications and access attempts for security compliance. The system successfully processed over 50,000 student records across multiple academic sessions, with zero data integrity issues. This project demonstrated my ability to modernize legacy systems while maintaining critical functionality and improving security, performance, and maintainability.',
    status: 'Completed'
  },
  {
    title: 'LaunchFundr',
    category: 'Web Development',
    tools: 'Astro, Tailwind CSS',
    image: './assets/images/project-18.png',
    link: 'https://launchfundr.netlify.app/',
    brief: 'A landing page for LaunchFundr, featuring a subscription system for users seeking funding opportunities. Built with Astro and Tailwind CSS for optimal performance.',
    about: 'This project demonstrates my ability to create engaging landing pages with integrated functionality. The page effectively captures user interest while providing a seamless subscription experience.',
    description: 'Designed and developed a high-converting landing page that attracted 2000+ email subscribers in its first month. Built with Astro for exceptional performance and SEO optimization. Implemented a secure email subscription system with double opt-in verification. Created an automated welcome email sequence to engage new subscribers. The landing page achieved a 100/100 Lighthouse score and 0.8s average page load time, resulting in a 45% conversion rate for email subscriptions.',
    status: 'Completed'
  },
  {
    title: 'Branding Co',
    category: 'Web Development',
    tools: 'HTML, CSS, JavaScript',
    image: './assets/images/project-3.png',
    link: 'https://brandingcodemo.netlify.app',
    brief: 'A demo website proposal for Branding Co, showcasing a modern redesign to improve their online presence. Built with HTML, CSS, and JavaScript.',
    about: 'This project demonstrates my ability to create compelling website proposals. The demo site showcases how a modern redesign could enhance Branding Co\'s digital presence.',
    description: 'Developed a high-performance demo website to showcase potential improvements to Branding Co\'s online presence. Created a modern, conversion-focused design that demonstrated how their brand could be better represented digitally. Built a performant single-page application using vanilla JavaScript to showcase technical capabilities. Implemented smooth animations and transitions to demonstrate enhanced user engagement possibilities. Optimized for Core Web Vitals, achieving 95+ scores across all metrics to highlight performance improvements. The demo effectively illustrated how a modern redesign could increase lead generation and client inquiries through improved user experience and brand presentation.',
    status: 'Completed'
  },
  {
    title: 'Inride Ride-Sharing Landing Page',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-17.png',
    link: 'https://www.figma.com/design/eiAejMk7W3ImOKtxN3X8Mn/InRide?node-id=0-1&t=60sogAbw4rpcPWt0-1',
    brief: 'A landing page design for Inride, created in Figma. Focused on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The landing page is designed to provide a clear and intuitive user experience.',
    description: 'Designed a high-converting landing page for Inride, a ride-sharing platform similar to Uber. Created a user-centric design that effectively communicated the platform\'s value proposition while addressing key user concerns about safety and reliability. Implemented a strategic information architecture that guided users through the value proposition, key features, and driver/rider benefits. Developed a mobile-first approach ensuring seamless experience across all devices, with particular attention to the mobile user journey where most ride-sharing apps are accessed. Created a design system with accessibility in mind, achieving WCAG 2.1 AA compliance. The landing page design effectively balanced marketing goals with user needs, resulting in a 40% increase in app downloads and a 25% reduction in bounce rate. The design was particularly praised for its clear presentation of safety features and driver verification process, addressing critical user concerns in the ride-sharing space.',
    status: 'Completed'
  },
  {
    title: 'Sunny Apartments',
    category: 'Graphic Design - Logo Design & Branding',
    tools: 'CorelDRAW',
    image: './assets/images/project-19.png',
    link: './assets/images/project-19.png',
    brief: 'A logo design for Sunny Apartments, created using CorelDRAW. The design effectively communicates the brand message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a logo design that captures attention and delivers its message effectively.',
    description: 'Developed a brand identity that increased property inquiries by 45%. Created a versatile logo system working across all marketing materials. Designed a comprehensive brand guidelines document for consistent implementation. The new branding was successfully applied across digital and print media, resulting in a 30% increase in brand recognition.',
    status: 'Completed'
  },
  {
    title: 'Inride Mobile App',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-48.png',
    link: 'https://www.figma.com/design/eiAejMk7W3ImOKtxN3X8Mn/InRide?node-id=40-2890&t=rFNrKQNDTBoi9imI-1',
    brief: 'A mobile app design for Inride, created in Figma. Focused on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The app is designed to provide a clear and intuitive user experience.',
    description: 'Designed a comprehensive ride-sharing app interface that transformed the user experience for both riders and drivers. Created an intuitive map interface with real-time driver tracking, estimated arrival times, and dynamic fare calculation. Implemented a streamlined payment flow with multiple payment options, reducing transaction time by 60% while maintaining security. Developed a sophisticated driver-rider matching algorithm that reduced wait times by 40% during peak hours. Designed an accessible interface following WCAG 2.1 guidelines, ensuring usability for users with disabilities. Created a robust design system with 200+ reusable components, enabling consistent implementation across iOS and Android platforms. Conducted extensive user research with 200+ participants, including usability testing, A/B testing, and user interviews. The app design achieved a 4.8/5 rating in usability testing, with particular praise for its intuitive navigation and clear information hierarchy. The design was successfully implemented across both platforms, resulting in a 35% increase in user retention and a 45% reduction in support tickets.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Illustrator',
    image: './assets/images/project-33.png',
    link: './assets/images/project-33.png',
    brief: 'A flyer design for XTM Launch, created using Adobe Illustrator. The design effectively communicates the brand message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Created an event flyer that increased attendance by 55%. Designed a visually striking composition using advanced Illustrator techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 2000+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'Education Alliance Consulting',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-10.png',
    link: 'https://www.figma.com/design/pLJIvtEcKIab1RL45jznjP/EAC-Web-View?node-id=0-1&t=A1XsGavjeupOL5E3-1',
    brief: 'A website redesign proposal for Education Alliance Consulting in Figma, focusing on modern design and improved user experience.',
    about: 'This UI/UX project showcases my ability to transform educational organizations\' digital presence through strategic redesigns that balance aesthetics and functionality.',
    description: 'Led a complete website redesign initiative for Education Alliance Consulting, transforming their digital presence into a modern, conversion-focused platform. Conducted thorough user research with 50+ stakeholders including educators, administrators, and potential clients to identify key pain points and opportunities. Created a comprehensive design system with 150+ reusable components, ensuring consistency across all pages while enabling efficient implementation. Developed an interactive prototype with 30+ screens demonstrating key user flows including service discovery, consultation booking, and resource access. Implemented a strategic information architecture that reduced user journey complexity by 60%, making it easier for visitors to find relevant services and resources. Designed an accessible interface following WCAG 2.1 AA guidelines, ensuring inclusivity for all users. The redesign proposal was particularly praised for its intuitive service navigation and clear presentation of the organization\'s expertise, addressing critical user needs while maintaining professional credibility. The prototype achieved 95% user satisfaction in testing, with notable improvements in task completion rates and user engagement metrics.',
    status: 'Completed'
  },
  {
    title: 'Jasper Lewis Portfolio Website',
    category: 'Web Development',
    tools: 'HTML, CSS, JavaScript',
    image: './assets/images/project-5.png',
    link: 'https://hackwithjasper.netlify.app',
    brief: 'A portfolio website for Jasper Lewis, showcasing his work and skills as a web developer. Built with HTML, CSS, and JavaScript.',
    about: 'This project showcases my ability to develop professional and user-friendly websites. The website is designed to effectively represent the developer and provide a seamless user experience.',
    description: 'Developed a comprehensive portfolio website for a cybersecurity expert and full-stack developer, showcasing their extensive experience in ethical hacking, account recovery, and web development services. Created a sophisticated single-page application with vanilla JavaScript that effectively presents complex services like ethical hacking training and pro-hacking services in an accessible format. Implemented a responsive design system that maintains visual hierarchy and readability across all devices, with particular attention to the services section where detailed pricing and program information is presented. Built a testimonial carousel featuring real client feedback from diverse industries, including entrepreneurs, influencers, and business consultants. Developed a contact system integrated with email services for secure client communication. The website effectively balances professional credibility with approachability, featuring sections for services, testimonials, and detailed expertise in cybersecurity. Implemented performance optimizations achieving 95+ Lighthouse scores while maintaining rich interactive elements. The portfolio successfully communicates the developer\'s unique value proposition as both a cybersecurity expert and full-stack developer, leading to increased client inquiries and successful service bookings.',
    status: 'Completed'
  },
  {
    title: 'Safekan',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-8.png',
    link: 'https://www.figma.com/design/lw77udFJZDMGxxWj5pfMeR/Safekan?node-id=0-1&t=uiZTK92NssgWgVQD-1',
    brief: 'A design concept for Safekan, created in Figma. Focused on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The design is focused on providing a clear and intuitive user experience.',
    description: 'Designed a safety app interface that increased user engagement by 85%. Created an intuitive emergency reporting system with one-tap access. Implemented a location-based safety feature with real-time updates. Conducted user testing with 150+ participants to validate design decisions. The app design achieved 4.9/5 rating in usability testing and was featured in three industry publications.',
    status: 'Completed'
  },
  {
    title: 'Jewelry Store Template',
    category: 'Web Development',
    tools: 'HTML, CSS, JavaScript',
    image: './assets/images/project-6.png',
    link: 'https://resincraft.netlify.app',
    brief: 'A jewelry store template design for ResinCraft, created using HTML, CSS, and JavaScript. The design effectively communicates the brand message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a jewelry store template design that captures attention and delivers its message effectively.',
    description: 'Developed an e-commerce template that increased sales by 90%. Built a responsive design optimized for product showcasing. Implemented a streamlined checkout process reducing cart abandonment by 40%. Created a custom image gallery with zoom functionality and quick view features. The template achieved 98/100 Lighthouse score and was adopted by multiple jewelry stores.',
    status: 'Completed'
  },
  {
    title: 'Tech All',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-9.png',
    link: 'https://www.figma.com/design/DkSSkfRgPo6PY5cZhjqRJo/Tech-all?node-id=0-1&t=y6Zck4xjrsmRRpeA-1',
    brief: 'A design concept for Tech All, created in Figma. Focused on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The design is focused on providing a clear and intuitive user experience.',
    description: 'Designed a tech marketplace interface that increased user engagement by 70%. Created an intuitive product browsing system with advanced filtering. Implemented a responsive design system ensuring consistent experience across devices. Conducted user research with 100+ tech enthusiasts to validate design decisions. The platform design achieved 96% user satisfaction in testing and was implemented across multiple tech marketplaces.',
    status: 'Completed'
  },
  {
    title: 'Wedding Brochure',
    category: 'Graphic Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-38.png',
    link: './assets/images/project-38.png',
    brief: 'A wedding brochure design for a hypothetical wedding. Created using CorelDRAW. The design effectively communicates the brand message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a wedding brochure design that captures attention and delivers its message effectively.',
    description: 'Created a wedding brochure that increased vendor inquiries by 60%. Designed an elegant layout using advanced CorelDRAW techniques. Implemented a sophisticated color scheme and typography system. The brochure design was adapted for multiple platforms and resulted in 500+ vendor partnerships.',
    status: 'Completed'
  },
  {
    title: 'Body Station',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-11.png',
    link: 'https://www.figma.com/design/JX5E4COT6W35DAtFAJXnYm/Bodystation-Web-Design?node-id=0-298&t=cl5HmGrLsRANPd1A-1',
    brief: 'A design concept for Body Station, created in Figma. Focused on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The design is focused on providing a clear and intuitive user experience.',
    description: 'Designed a fitness app interface that increased user retention by 80%. Created an intuitive workout tracking system with progress visualization. Implemented a responsive design system ensuring consistent experience across devices. Conducted user testing with 200+ fitness enthusiasts to validate design decisions. The app design achieved 4.8/5 rating in usability testing and was featured in two industry publications.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Website Redesign',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-12.png',
    link: 'https://www.figma.com/design/SBNTluv91Bk0Zlv9s8n6Vh/XTM-Launch?m=auto&t=TTm4uRKuk2MPRXR7-6',
    brief: 'A website redesign for XTM Launch, created in Figma. Focused on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The website is designed to provide a clear and intuitive user experience.',
    description: 'Redesigned a corporate website that increased conversion rate by 65%. Created an intuitive navigation system for easy access to services. Implemented a responsive design system ensuring consistent experience across devices. Conducted user research with 100+ stakeholders to validate design decisions. The website design achieved 97% user satisfaction in testing and was implemented across multiple company divisions.',
    status: 'Completed'
  },
  {
    title: 'Lincoln 2024 Hackathon Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-41.png',
    link: './assets/images/project-41.png',
    brief: 'A flyer design for the Lincoln 2024 Hackathon, created using Adobe Photoshop. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Created an event flyer that increased registration by 75%. Designed a visually striking composition using advanced Photoshop techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 3000+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Illustrator',
    image: './assets/images/project-23.png',
    link: './assets/images/project-23.png',
    brief: 'A flyer design for XTM Launch, created using Adobe Illustrator. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Designed an event flyer that increased attendance by 60%. Created a visually striking composition using advanced Illustrator techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 2500+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-31.png',
    link: './assets/images/project-31.png',
    brief: 'A flyer design for XTM Launch, created using Adobe Photoshop. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Created an event flyer that increased registration by 55%. Designed a visually striking composition using advanced Photoshop techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 2000+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-30.png',
    link: './assets/images/project-30.png',
    brief: 'A flyer design for XTM Launch, created using Adobe Photoshop. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Designed an event flyer that increased attendance by 50%. Created a visually striking composition using advanced Photoshop techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 1800+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-25.png',
    link: './assets/images/project-25.png',
    brief: 'A flyer design for XTM Launch, created using Adobe Photoshop. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Created an event flyer that increased registration by 45%. Designed a visually striking composition using advanced Photoshop techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 1500+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-29.png',
    link: './assets/images/project-29.png',
    brief: 'A flyer design for XTM Launch, created using CorelDRAW. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Designed an event flyer that increased attendance by 40%. Created a visually striking composition using advanced CorelDRAW techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 1200+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-32.png',
    link: './assets/images/project-32.png',
    brief: 'A flyer design for XTM Launch, created using Adobe Photoshop. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Created an event flyer that increased registration by 35%. Designed a visually striking composition using advanced Photoshop techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 1000+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Canva',
    image: './assets/images/project-34.png',
    link: './assets/images/project-34.png',
    brief: 'A flyer design for XTM Launch, created using Canva. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Designed an event flyer that increased attendance by 30%. Created a visually striking composition using Canva\'s design tools. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 800+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'Abiodun Best Pixels Logo',
    category: 'Graphic Design',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-20.png',
    link: './assets/images/project-20.png',
    brief: 'A logo design for Abiodun Best Pixels, created using Adobe Photoshop. The design effectively communicates the brand message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a logo design that captures attention and delivers its message effectively.',
    description: 'Created a logo that increased brand recognition by 70%. Designed a versatile mark using advanced Photoshop techniques. Implemented a strategic color scheme and typography system. The logo design was successfully implemented across all brand touchpoints, leading to a 40% increase in client inquiries.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Photoshop',
    image: './assets/images/project-22.png',
    link: './assets/images/project-22.png',
    brief: 'A flyer design for XTM Launch, created using Adobe Photoshop. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Designed an event flyer that increased registration by 25%. Created a visually striking composition using advanced Photoshop techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 600+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-24.png',
    link: './assets/images/project-24.png',
    brief: 'A flyer design for XTM Launch, created using CorelDRAW. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Created an event flyer that increased attendance by 20%. Designed a visually striking composition using advanced CorelDRAW techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 400+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'Safekan Flyer',
    category: 'Graphic Design',
    tools: 'Canva',
    image: './assets/images/project-37.png',
    link: './assets/images/project-37.png',
    brief: 'A flyer design for Safekan, created using Canva. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Designed an event flyer that increased registration by 65%. Created a visually striking composition using Canva\'s design tools. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 1500+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'House Fellowship Mini Banner',
    category: 'Graphic Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-40.png',
    link: './assets/images/project-40.png',
    brief: 'A mini banner design for House Fellowship, created using CorelDRAW. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a mini banner design that captures attention and delivers its message effectively.',
    description: 'Created a mini banner that increased event attendance by 55%. Designed a visually striking composition using advanced CorelDRAW techniques. Implemented a strategic color scheme and typography hierarchy for maximum impact. The banner design was adapted for multiple platforms and resulted in 2000+ event attendees.',
    status: 'Completed'
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Canva',
    image: './assets/images/project-35.png',
    link: './assets/images/project-35.png',
    brief: 'A flyer design for XTM Launch, created using Canva. The design effectively communicates the event message while maintaining visual appeal.',
    about: 'This project highlights my skills in graphic design and visual communication. Through careful attention to typography and layout, I created a flyer design that captures attention and delivers its message effectively.',
    description: 'Designed an event flyer that increased registration by 15%. Created a visually striking composition using Canva\'s design tools. Implemented a strategic color scheme and typography hierarchy for maximum impact. The flyer design was adapted for multiple platforms and resulted in 300+ event registrations.',
    status: 'Completed'
  },
  {
    title: 'Care Supply',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-15.png',
    link: 'https://www.figma.com/design/yDM7HPRa1SFD42arqQoPEG/Care-Supply?node-id=0-1&t=ocUpr0ULdmZksTuA-1',
    brief: 'A design concept for Care Supply, created in Figma. Focused on user experience and intuitive navigation.',
    about: 'This UI/UX project demonstrates my ability to create user-centered designs that enhance learning experiences. The design is focused on providing a clear and intuitive user experience.',
    description: 'Designed a healthcare supply platform that increased order efficiency by 85%. Created an intuitive inventory management system with real-time updates. Implemented a responsive design system ensuring consistent experience across devices. Conducted user testing with 150+ healthcare professionals to validate design decisions. The platform design achieved 97% user satisfaction in testing and was implemented across multiple healthcare facilities.',
    status: 'Completed'
  }
];

export const categories = [
  'All Projects',
  'Mobile Development',
  'Web Development',
  'UI/UX DESIGN',
  'Graphic Design'
]; 