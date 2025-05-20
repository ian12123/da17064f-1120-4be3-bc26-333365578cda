
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const LogoDesignPage = () => {
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
        <section className="h-[50vh] flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-400 text-white">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="block">LOGO設計作品</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              從概念到成品，展示我的創意設計過程
            </p>
          </motion.div>
        </section>
        
        {/* Logo Design Case Study */}
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
            <h2 className="text-3xl font-bold mb-8 text-center">前衛技術 - LOGO設計案例</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {/* Design Process */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6">設計過程</h3>
                <p className="text-lg text-gray-700 mb-8">
                  這個LOGO的設計靈感來自於科技與藝術的融合，我希望透過視覺上的錯位和色彩對比，
                  表達出客戶品牌「前衛技術」不斷創新突破的精神。
                </p>
                
                <Card className="overflow-hidden mb-8">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <img 
                        src="/lovable-uploads/b28a6365-1790-4cce-b9c6-fc49ed8f1766.png" 
                        alt="LOGO設計草稿" 
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                        <p className="text-sm">設計草圖 - 初步構想與線稿</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-bold">1. 概念發想</span> - 與客戶討論品牌核心價值，確立設計方向，強調科技感與前衛性。
                  </p>
                  <p>
                    <span className="font-bold">2. 草圖設計</span> - 繪製多個初步概念草圖，決定使用漢字「前衛技術」作為主體，配合色彩錯位效果。
                  </p>
                  <p>
                    <span className="font-bold">3. 數位化處理</span> - 將選定的概念透過向量軟體精確繪製，調整字體結構與比例。
                  </p>
                  <p>
                    <span className="font-bold">4. 色彩應用</span> - 選用青色與洋紅色作為主色調，創造視覺上的錯位感與震撼效果。
                  </p>
                </div>
              </motion.div>
              
              {/* Final Design */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-6">最終設計</h3>
                <p className="text-lg text-gray-700 mb-8">
                  最終的LOGO設計結合了現代感的字體處理與大膽的色彩疊加效果，
                  「Cutting Edge」標語強調品牌走在技術前沿的定位。
                </p>
                
                <Card className="overflow-hidden mb-8">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gray-100">
                      <img 
                        src="/lovable-uploads/aefe1faf-86fe-437d-8e86-0b099e323f66.png" 
                        alt="LOGO最終設計" 
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                        <p className="text-sm">最終設計 - 「前衛技術」品牌LOGO</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-bold">設計特點：</span>
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>使用色彩錯位效果創造視覺衝擊，象徵品牌的創新精神</li>
                    <li>簡體中文「前衛技術」字體經過特殊設計，提升辨識度</li>
                    <li>英文標語「Cutting Edge」強化品牌國際形象</li>
                    <li>藍紫撞色搭配增添科技感與時尚感</li>
                    <li>設計具有良好的適應性，可用於各種應用場景</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <Separator className="my-16" />
            
            {/* Application Examples */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-10">設計反思</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                這個LOGO設計案例展示了如何通過色彩和排版的創新運用，為科技品牌創造獨特的視覺識別。
                設計過程中不斷調整字體間距和色彩疊加效果，最終達到了視覺上的平衡與張力。
                此設計已成功應用於客戶的網站、名片和產品包裝上，獲得了良好的市場反響。
              </p>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default LogoDesignPage;
