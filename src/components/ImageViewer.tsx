
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageViewerProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

const ImageViewer = ({ isOpen, imageUrl, onClose }: ImageViewerProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  if (!isAnimating && !isOpen) return null;
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 overlay-animation ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`relative max-w-4xl max-h-[90vh] image-zoom-animation ${
          isOpen ? 'scale-100' : 'scale-90'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
        >
          <X size={24} />
        </button>
        <img 
          src={imageUrl} 
          alt="放大檢視" 
          className="max-h-[90vh] max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
