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
          <div className="mb-8 h-[1px] w-[1240px] bg-white/30"></div>
          <div className="flex justify-center space-x-48">
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
              <img
                src="/icons/Mountains.svg"
                alt={t('header.mountains')}
                className="h-[40px] w-auto"
              />
            </button>
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
              <img
                src="/icons/Fishing.svg"
                alt={t('header.fishing')}
                className="h-[40px] w-auto"
              />
            </button>
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
              <img
                src="/icons/Crosshair.svg"
                alt={t('header.crosshair')}
                className="h-[40px] w-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
