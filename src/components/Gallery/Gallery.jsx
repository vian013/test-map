import { useTranslation } from 'react-i18next';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { getAssetPath } from '../../utils/assetPath';

function Gallery() {
  const { t } = useTranslation();
  const images = [
    {
      id: 1,
      src: getAssetPath('images/gallery1.jpg'),
      alt: t('gallery.image1Alt'),
    },
    { id: 2, src: '/images/gallery2.jpg', alt: t('gallery.image2Alt') },
    { id: 3, src: '/images/gallery3.jpg', alt: t('gallery.image3Alt') },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
            >
              <AspectRatio.Root ratio={1}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
