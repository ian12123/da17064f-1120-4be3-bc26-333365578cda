
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import ImageGallery from '@/components/ImageGallery';

// 使用上傳的3D模型圖片
const modelItems = [
  { id: 1, imageUrl: '/lovable-uploads/eee08aa5-cd23-4ebf-85af-14a69a4d629e.png', title: '概念刀劍模型' },
  { id: 2, imageUrl: '/lovable-uploads/2a9d789c-5955-4691-a03a-aee86bf739d9.png', title: '手槍模型設計' },
  { id: 3, imageUrl: '/lovable-uploads/b9a6d98b-d0ce-409f-9abb-fe5dc36cb8a4.png', title: '手槍側視圖' },
  { id: 4, imageUrl: '/lovable-uploads/e5937bb1-a810-4fcf-aaed-06eb857ed265.png', title: '手槍細節特寫' },
  { id: 5, imageUrl: '/lovable-uploads/fcc8f84e-076f-4971-bf2d-837bb70cd33a.png', title: '半自動步槍模型' },
  { id: 6, imageUrl: '/lovable-uploads/29b45d7b-bc0f-4467-8291-4199b23d7ecc.png', title: '輕機槍模型' },
];

const ModelsPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <PageTransition>
      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="block">3D武器模型作品</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              探索我的3D武器設計作品，從概念到實現的精細建模
            </p>
          </motion.div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16 px-4 bg-white">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">作品展示</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
              以下是我近期完成的3D武器模型作品，每一個作品都代表了我對細節的追求和對設計的熱情。
              點擊每個作品可以查看更大圖片。
            </p>
            
            <ImageGallery items={modelItems} />
          </motion.div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 px-4 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">創作過程</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  step: '01', 
                  title: '概念設計', 
                  description: '從草圖和功能需求開始，確定武器的外觀和機制。' 
                },
                { 
                  step: '02', 
                  title: '3D建模', 
                  description: '使用專業建模軟體進行精確的3D建模，注重細節和比例。' 
                },
                { 
                  step: '03', 
                  title: '紋理與渲染', 
                  description: '添加材質、紋理和燈光，呈現逼真的視覺效果和金屬質感。' 
                }
              ].map((process, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.6, delay: 0.3 + 0.2 * index } 
                    }
                  }}
                >
                  <div className="text-2xl font-bold text-blue-600 mb-2">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ModelsPage;
