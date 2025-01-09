import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();

  const values = [
    {
      id: 1,
      icon: '/icons/Mountains.svg',
      title: 'Authenticité',
      subtitle: 'Sous-titre',
    },
    {
      id: 2,
      icon: '/icons/Mountains.svg',
      title: 'Respect',
      subtitle: 'Sous-titre',
    },
    {
      id: 3,
      icon: '/icons/Mountains.svg',
      title: 'Diversité',
      subtitle: 'Sous-titre',
    },
    {
      id: 4,
      icon: '/icons/Mountains.svg',
      title: 'Personnalisation',
      subtitle: 'Sous-titre',
    },
    {
      id: 5,
      icon: '/icons/Mountains.svg',
      title: 'Confort',
      subtitle: 'Sous-titre',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <img src="/icons/logo.svg" alt="Logo" className="mb-8 h-12" />
            <h2 className="mb-6 text-5xl font-bold text-[#FF5B2E]">
              {t('experience.title')}
            </h2>
            <h3 className="mb-6 text-2xl text-[#666666]">
              {t('experience.subtitle')}
            </h3>
            <p className="text-[#666666]">{t('experience.description')}</p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/experience/img.png"
              alt="Mountain Lake"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 flex justify-between">
          {values.map((value) => (
            <div key={value.id} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#00A693]">
                <img src={value.icon} alt={value.title} className="h-8 w-8" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#FF5B2E]">
                {value.title}
              </h4>
              <p className="text-[#666666]">{value.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
