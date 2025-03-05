
import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="relative">
      {images.length > 1 && (
        <button
          onClick={() => navigateImage('prev')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
      )}
      
      <div className="relative aspect-video">
        <img
          src={images[currentImageIndex]}
          alt={`${title} ${currentImageIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          onClick={() => setShowFullscreen(true)}
          className="absolute top-2 right-2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <Maximize2 className="h-5 w-5 text-white" />
        </button>
      </div>

      {images.length > 1 && (
        <button
          onClick={() => navigateImage('next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Miniatyrer */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative flex-none w-16 h-16 rounded-md overflow-hidden ${
                index === currentImageIndex ? 'ring-2 ring-[#D4AF37]' : ''
              }`}
            >
              <img
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullskärmsvy */}
      <Dialog open={showFullscreen} onOpenChange={setShowFullscreen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/90 border-none">
          <div className="relative">
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-2 right-2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`${title} fullscreen ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
