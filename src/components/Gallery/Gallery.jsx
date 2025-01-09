import { useTranslation } from 'react-i18next';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

function Gallery() {
  const { t } = useTranslation();
  const images = [
    { id: 1, src: "/images/gallery1.jpg", alt: t('gallery.image1Alt') },
    { id: 2, src: "/images/gallery2.jpg", alt: t('gallery.image2Alt') },
    { id: 3, src: "/images/gallery3.jpg", alt: t('gallery.image3Alt') },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
            >
              <AspectRatio.Root ratio={1}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </AspectRatio.Root>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery; 