export const projects = [
  {
    id: "campus-sentinel",
    title: "Campus Sentinel – School Management ERP",
    description: "Full-stack School Management ERP streamlining administrative and academic tracking.",
    problem: "Schools face challenges in managing student attendance, fee tracking, and maintaining seamless communication between administration and parents.",
    solution: "Developed a centralized ERP system that streamlines student attendance, fee management, and academic tracking while enhancing administration-parent communication.",
    contribution: "Developed the full-stack architecture and integrated the core modules.",
    technologies: ["React.js", "Node.js", "REST APIs"],
    githubUrl: undefined, 
    liveUrl: "https://www.campussentinel.com/",
    imagePlaceholder: "Campus Sentinel ERP",
    images: [
      "/campus-sentinel.png"
    ],
    imageContain: true,
    imageBg: "bg-white"
  },
  {
    id: "tailor-management",
    title: "Tailor Management System",
    description: "Web-based business management platform to automate order tracking and billing.",
    problem: "Tailoring businesses rely on manual ledgers for order tracking, billing, and storing customer measurements, leading to operational inefficiencies.",
    solution: "Built a web-based platform to automate order tracking, billing, and customer measurements, significantly improving operational efficiency.",
    contribution: "Designed and developed the frontend and backend integration.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/AbhiPatil1305",
    liveUrl: "https://yaksmensweartms.netlify.app", 
    imagePlaceholder: "Tailor Management UI",
    images: [
      "/tailor-management.png"
    ]
  },
  {
    id: "pipe-inspection-robot",
    title: "Pipe Inspection Robot",
    description: "IoT-based robot for remote pipeline inspection and structural monitoring.",
    problem: "Manual inspection of industrial pipelines is dangerous and often fails to provide real-time structural monitoring.",
    solution: "Designed an IoT-based robot utilizing ESP32 and sensors to remotely inspect pipelines for fault detection and real-time structural monitoring.",
    contribution: "Integrated ESP32 hardware with sensors and developed the real-time monitoring interface.",
    technologies: ["ESP32", "Sensors", "IoT", "C/C++"],
    githubUrl: undefined,
    liveUrl: undefined,
    imagePlaceholder: "Robot Interface",
    images: [
      "/pipe-inspection-robot.jpg"
    ]
  },
  {
    id: "police-crime-management",
    title: "Police Crime Management System",
    description: "Secure database system to manage crime records and investigation reports.",
    problem: "Law enforcement agencies need secure, efficient ways to retrieve data and document public safety records.",
    solution: "Created a secure database system using SQL to manage crime records, complaints, and investigation reports, ensuring efficient data retrieval.",
    contribution: "Designed the relational database schema and implemented secure data access patterns.",
    technologies: ["SQL", "Database Design"],
    githubUrl: "https://github.com/AbhiPatil1305",
    liveUrl: undefined,
    imagePlaceholder: "Crime Management DB",
    images: [
      "/police-crime-management.jpg"
    ]
  },
  {
    id: "water-leakage-detection",
    title: "Water Leakage Detection System",
    description: "IoT solution using sensors and microcontrollers to detect and monitor pipeline water leaks in real-time.",
    problem: "Undetected water pipeline leaks cause significant resource wastage and potential infrastructure damage.",
    solution: "Developed an IoT solution using sensors and microcontrollers to detect pipeline water leaks in real-time, enabling proactive maintenance.",
    contribution: "Programmed microcontrollers and calibrated sensors for accurate leak detection.",
    technologies: ["IoT", "Microcontrollers", "Sensors", "C/C++"],
    githubUrl: undefined,
    liveUrl: undefined,
    imagePlaceholder: "Leakage Analytics",
    images: [
      "/water-leakage-detection.jpg"
    ]
  },
  {
    id: "mediquery",
    title: "MediQuery – AI Medical Document Assistant",
    description: "AI-powered medical document assistant using RAG (Retrieval-Augmented Generation) that lets users upload medical reports and ask questions in natural language to instantly retrieve relevant health information.",
    problem: "Patients receive complex medical documents — blood tests, prescriptions, diagnostic reports — but struggle to understand or quickly find specific information within them, often leading to confusion and unnecessary clinic visits.",
    solution: "Built a full-stack RAG-based assistant where users upload medical reports, the system extracts and embeds document content using semantic search (pgvector), and an LLM generates accurate, source-referenced answers to natural language queries — with support for comparing information across multiple reports.",
    contribution: "Architected the end-to-end RAG pipeline including document processing, embedding generation, vector storage with pgvector, semantic retrieval, and LLM-powered answer generation. Built the React frontend and FastAPI backend.",
    technologies: ["React", "FastAPI", "Python", "Supabase", "PostgreSQL", "pgvector", "Embeddings", "RAG", "LLM"],
    githubUrl: undefined,
    liveUrl: "https://mediquery-ai-app.netlify.app/",
    imagePlaceholder: "MediQuery AI",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "sonali-beauty-parlour",
    title: "Sonali Beauty Parlour – Business Website",
    description: "Developed and deployed a responsive business website for Sonali Beauty Parlour to establish its online presence and showcase beauty services through a clean, user-friendly interface.",
    problem: "Small beauty parlour businesses lack an online presence, making it difficult for potential customers to discover their services, view offerings, or get in touch conveniently.",
    solution: "Designed and built a fully responsive website that helps customers explore the parlour, learn about its beauty and salon services, and connect with the business — deployed on Vercel for fast, reliable public access.",
    contribution: "Developed the complete frontend with responsive design for desktop and mobile, created user-friendly navigation with an attractive interface, and handled deployment on Vercel.",
    technologies: ["React", "Tailwind CSS", "Vercel", "Responsive Design"],
    githubUrl: "https://github.com/AbhiPatil1305",
    liveUrl: "https://sonali-beauty-parlour.vercel.app/",
    imagePlaceholder: "Sonali Beauty Parlour",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];
