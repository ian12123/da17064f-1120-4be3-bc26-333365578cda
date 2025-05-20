
import { useState } from 'react';
import ImageViewer from './ImageViewer';

interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

const ImageGallery = ({ items }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const openImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  
  const closeImage = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item"
            onClick={() => openImage(item.imageUrl)}
          >
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full bg-black/60">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <ImageViewer 
        isOpen={!!selectedImage} 
        imageUrl={selectedImage || ''} 
        onClose={closeImage} 
      />
    </div>
  );
};

export default ImageGallery;
