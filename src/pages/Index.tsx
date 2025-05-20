import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const AboutSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">關於我</h2>
      <p className="text-lg mb-6">我是一位熱衷於視覺設計和3D模型創作的專業人士，致力於將想像力轉化為具有獨特視覺風格的作品。多年來，我不斷探索新的設計技術與表現手法，打造出富有創意和實用性的設計解決方案。</p>
      <p className="text-lg mb-6">我的創作過程注重細節和質量，每一項作品都是經過精心構思和製作。無論是3D模型設計還是視覺呈現，我都追求卓越和創新，希望能夠透過作品傳達獨特的美學觀點。</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const skills = [
    { name: '3D建模', level: 90 },
    { name: '貼圖處理', level: 85 },
    { name: '動畫製作', level: 75 },
    { name: '場景設計', level: 80 },
    { name: '角色設計', level: 85 },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8">專業技能</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                className="h-full bg-blue-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Index = () => {
  return (
    <PageTransition>
      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="block">歡迎來到我的作品集</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              專注於3D模型製作與視覺設計，打造獨特的視覺體驗
            </p>
          </motion.div>
        </section>
        
        {/* About Section */}
        <section className="py-20 bg-white">
          <AboutSection />
        </section>
        
        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <SkillsSection />
        </section>
        
        {/* Experience Section has been removed */}
      </div>
    </PageTransition>
  );
};

export default Index;
