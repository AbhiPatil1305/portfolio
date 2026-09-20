import { motion } from 'framer-motion';
import { Code, Cloud, Layout, Lightbulb } from "lucide-react";

export default function About() {
  const interests = [
    {
      icon: Code,
      title: 'Development',
      description: 'Building robust, scalable applications with modern web technologies.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploying scalable applications, containerization, and CI/CD.',
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Crafting intuitive, accessible, and visually engaging interfaces.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex real-world challenges into elegant digital solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 hover:text-accent hover:translate-x-2 transition-all duration-300 cursor-default inline-block">About Me</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 max-w-sm mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl translate-x-4 translate-y-4" />
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative bg-surface border border-borderDark z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Abhishek Patil" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Tech fallback image
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text and Interests */}
          <div className="w-full lg:w-2/3 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-lg text-secondaryText leading-relaxed"
            >
              <p>
                I’m a software developer who enjoys turning real-world problems into practical digital solutions. I work across frontend development, backend systems, modern web applications, and IoT projects, with a growing focus on creating simple and intuitive user experiences.
              </p>
              <p>
                I enjoy working at the intersection of <strong className="text-primaryText font-medium">technology and design</strong> — building applications that are not only functional, but also easy and enjoyable to use. From developing full-stack applications and cloud solutions to experimenting with connected devices, I like learning by building and solving problems through technology.
              </p>
              <p>
                Currently, I’m exploring <strong className="text-primaryText font-medium">modern web development, and UI/UX design</strong>. I’m especially interested in understanding how thoughtful user flows, visual hierarchy, and interaction design can make complex technology feel simple.
              </p>
              <p>
                For me, every project is an opportunity to <strong className="text-primaryText font-medium">learn something new, experiment with ideas, and build something useful.</strong>
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-surface/80 backdrop-blur-sm border border-borderDark hover:border-accent/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                    <interest.icon size={24} />
                  </div>
                  <h3 className="text-lg font-space font-bold mb-2 text-primaryText">{interest.title}</h3>
                  <p className="text-sm text-secondaryText leading-relaxed">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
