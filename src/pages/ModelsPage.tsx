
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import ImageGallery from '@/components/ImageGallery';

// 這裡我們使用了臨時的圖片，您需要使用自己的3D模型圖片替換這些URL
const modelItems = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '角色模型 - 戰士' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '場景設計 - 未來城市' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1620656798932-902cbe7d06ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '道具設計 - 科技設備' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025f2c95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '建築模型 - 古代寺廟' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1619385808858-a825d84e0b58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '角色模型 - 魔法師' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '場景設計 - 森林' },
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
              <span className="block">3D模型作品</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              探索我的3D設計作品，從角色到場景的視覺呈現
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
              以下是我近期完成的部分3D模型作品，每一個作品都代表了我對細節的追求和對設計的熱情。
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
                  description: '從草圖和靈感收集開始，確定作品的風格和方向。' 
                },
                { 
                  step: '02', 
                  title: '3D建模', 
                  description: '使用專業軟體進行精確的3D建模，注重細節和比例。' 
                },
                { 
                  step: '03', 
                  title: '紋理與渲染', 
                  description: '添加材質、紋理和燈光，呈現最終高品質的視覺效果。' 
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
