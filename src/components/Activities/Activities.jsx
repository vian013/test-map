import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../../utils/assetPath';

function Activities() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-[#FF5B2E]">
            {t('activities.mainTitle')}
          </h2>
          <p className="text-xl text-gray-700">{t('activities.subtitle')}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 - Snowmobile */}
          <div className="group">
            <div className="mb-6 overflow-hidden">
              <img
                src={getAssetPath('images/activities/activity1.png')}
                alt={t('activities.snowmobile.alt')}
                className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#FF5B2E]">
              {t('activities.snowmobile.title')}
            </h3>
            <h4 className="mb-4 text-2xl font-bold text-gray-800">
              {t('activities.snowmobile.subtitle')}
            </h4>
            <p className="mb-6 text-gray-600">
              {t('activities.snowmobile.description')}
            </p>
            <Link
              to="/forfait-1"
              className="inline-flex w-[250px] items-center justify-center rounded-[30px] border border-solid border-black px-4 py-2 text-gray-800 hover:text-[#FF5B2E]"
            >
              {t('activities.package')} 1 <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Card 2 - Fishing */}
          <div className="group">
            <div className="mb-6 overflow-hidden">
              <img
                src={getAssetPath('images/activities/activity2.png')}
                alt={t('activities.fishing.alt')}
                className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#FF5B2E]">
              {t('activities.fishing.title')}
            </h3>
            <h4 className="mb-4 text-2xl font-bold text-gray-800">
              {t('activities.fishing.subtitle')}
            </h4>
            <p className="mb-6 text-gray-600">
              {t('activities.fishing.description')}
            </p>
            <Link
              to="/forfait-2"
              className="inline-flex w-[250px] items-center justify-center rounded-[30px] border border-solid border-black px-4 py-2 text-gray-800 hover:text-[#FF5B2E]"
            >
              {t('activities.package')} 2 <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Card 3 - Hunting */}
          <div className="group">
            <div className="mb-6 overflow-hidden">
              <img
                src={getAssetPath('images/activities/activity3.png')}
                alt={t('activities.hunting.alt')}
                className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#FF5B2E]">
              {t('activities.hunting.title')}
            </h3>
            <h4 className="mb-4 text-2xl font-bold text-gray-800">
              {t('activities.hunting.subtitle')}
            </h4>
            <p className="mb-6 text-gray-600">
              {t('activities.hunting.description')}
            </p>
            <Link
              to="/forfait-3"
              className="inline-flex w-[250px] items-center justify-center rounded-[30px] border border-solid border-black px-4 py-2 text-gray-800 hover:text-[#FF5B2E]"
            >
              {t('activities.package')} 3 <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
