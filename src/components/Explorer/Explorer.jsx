import { useTranslation } from 'react-i18next';
import { getAssetPath } from '../../utils/assetPath';

function Explorer() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[500px] w-full sm:h-[600px] lg:h-[666px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={getAssetPath('images/explorer/mountain.png')}
          alt="Mountain landscape"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[650px] items-center justify-center px-4 pt-20 sm:px-6 sm:pt-32 lg:pt-40">
        <div className="text-primary flex max-w-3xl flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span>{t('explorer.title')}</span>
            <br />
            <span className="opacity-50">{t('explorer.subtitle')}</span>
          </h1>
          <p className="mb-8 text-base sm:text-lg">
            {t('explorer.description')}
          </p>
          <button className="inline-flex h-[44px] items-center rounded-[33px] bg-[#F15A2B] px-6 text-sm text-white transition-colors hover:bg-[#d94d22] sm:px-8 sm:py-3 sm:text-base">
            {t('explorer.explore')}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Explorer;
