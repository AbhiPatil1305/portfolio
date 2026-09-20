import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 hover:text-accent hover:translate-x-2 transition-all duration-300 cursor-default inline-block">Achievements</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-background border border-borderDark hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-accent/10 transition-all duration-300 flex gap-6 items-start group"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-surface border border-borderDark flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all">
                <Award size={24} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl font-space font-bold text-primaryText">{achievement.title}</h3>
                  <span className="px-2 py-0.5 rounded bg-surface border border-borderDark text-xs text-secondaryText">
                    {achievement.year}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-accent mb-3">{achievement.organization}</h4>
                <p className="text-secondaryText text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
