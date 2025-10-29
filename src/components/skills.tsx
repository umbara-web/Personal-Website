import React from 'react';
import { skillsData } from '@/data/data';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  icon: React.ReactElement;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const SkillsSection: React.FC = () => {
  return (
    <section
      id='skills'
      className='container mx-auto max-w-6xl p-6 md:p-8 lg:px-4 lg:py-10'
    >
      <div className='container mx-auto relative max-w-6xl mt-28'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl lg:text-display-xl'>
            My <span className='text-primary-600'>Skills</span>
          </h1>
          <h2 className='text-base-500 mb-14'>
            The Tools and technologies I use to bring idea to life
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-10'>
          {skillsData.map((item: SkillCategory, index: number) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05,
                border: '1px oklch(77.7%, 0.152 181.912)',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className='bg-base-100 dark:bg-base-950 rounded-xl p-6 shadow-lg border border-base-200 dark:border-base-800'
            >
              <h3 className='text-2xl font-semibold mb-4 text-primary-400'>
                {item.title}
              </h3>
              <div className='flex flex-wrap gap-4'>
                {item.skills.map((skill: SkillItem, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: '0px 10px 20px rgba(66, 26, 188, 0.4)',
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className='flex items-center gap-2 px-3 py-2 bg-base-800 dark:bg-base-900 rounded-lg cursor-pointer'
                  >
                    <span className='text-xl'>{skill.icon}</span>
                    <span className='text-sm text-white font-medium'>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; // export Skills;
