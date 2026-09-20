import { motion } from 'framer-motion';

export default function CaseStudies() {
  const steps = [
    { num: '01', title: 'Problem', desc: 'Identify core user pain points and business goals.' },
    { num: '02', title: 'Research', desc: 'Understand user needs through interviews and analytics.' },
    { num: '03', title: 'User Flow', desc: 'Map out the most frictionless path to success.' },
    { num: '04', title: 'Wireframe', desc: 'Establish visual hierarchy and structural layout.' },
    { num: '05', title: 'UI Design', desc: 'Apply design system, typography, and visual polish.' },
    { num: '06', title: 'Prototype', desc: 'Test interactions and transitions before coding.' },
    { num: '07', title: 'Implementation', desc: 'Translate designs into accessible, performant code.' },
    { num: '08', title: 'Result', desc: 'Measure success against initial KPIs and goals.' },
  ];

  return (
    <section id="case-studies" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 hover:text-accent hover:translate-x-2 transition-all duration-300 cursor-default inline-block">UI/UX Process</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-secondaryText text-lg">
            A systematic approach to solving design problems. Every project begins with understanding the user and ends with measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-borderDark hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="text-5xl font-space font-bold text-surface absolute -top-2 -right-2 transition-transform group-hover:scale-110">
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-space font-bold mb-3 text-primaryText mt-4">{step.title}</h3>
                <p className="text-sm text-secondaryText leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-surface border border-borderDark relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          <h3 className="text-2xl font-space font-bold mb-4">Detailed Case Studies Coming Soon</h3>
          <p className="text-secondaryText max-w-2xl mx-auto mb-8">
            I am currently documenting in-depth case studies for MediQuery and Campus Sentinel, featuring full wireframes, user flows, and prototype screenshots.
          </p>
          <div className="inline-block p-4 border border-dashed border-borderDark rounded-xl text-secondaryText/50 font-space text-sm">
            Visual Placeholder Space
          </div>
        </motion.div>
      </div>
    </section>
  );
}
