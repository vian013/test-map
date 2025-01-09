import { useTranslation } from 'react-i18next';
import { getAssetPath } from '../../utils/assetPath';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[1000px] w-full">
      <div className="absolute inset-0 h-full w-full">
        <img
          src={getAssetPath('images/hero/hero-image.png')}
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
          <div className="mx-4 mb-8 h-[1px] w-[90%] max-w-[1240px] bg-white/30 sm:mx-8 md:mx-12 lg:mx-auto"></div>
          <div className="flex justify-center space-x-4 px-4 sm:space-x-8 sm:px-8 md:space-x-16 md:px-12 lg:space-x-24 xl:space-x-48">
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
              <img
                src={getAssetPath('icons/Mountains.svg')}
                alt={t('header.mountains')}
                className="h-6 w-auto sm:h-7 md:h-8 lg:h-9 xl:h-10"
              />
            </button>
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
              <img
                src={getAssetPath('icons/Fishing.svg')}
                alt={t('header.fishing')}
                className="h-6 w-auto sm:h-7 md:h-8 lg:h-9 xl:h-10"
              />
            </button>
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
              <img
                src={getAssetPath('icons/Crosshair.svg')}
                alt={t('header.crosshair')}
                className="h-6 w-auto sm:h-7 md:h-8 lg:h-9 xl:h-10"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
