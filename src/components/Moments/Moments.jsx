import { useTranslation } from 'react-i18next';
import { getAssetPath } from '../../utils/assetPath';

function Moments() {
  const { t } = useTranslation();

  const mainPost = {
    image: getAssetPath('images/moments/img.png'),
    title: t('moments.family.title'),
    date: t('moments.family.date'),
    description: t('moments.family.description'),
  };

  const instagramPosts = [
    {
      id: 1,
      image: getAssetPath('images/moments/img1.png'),
      author: 'Anthony Durand',
    },
    {
      id: 2,
      image: getAssetPath('images/moments/img2.png'),
      author: 'Anthony Durand',
    },
    {
      id: 3,
      image: getAssetPath('images/moments/img3.png'),
      author: 'Anthony Durand',
    },
    {
      id: 4,
      image: getAssetPath('images/moments/img4.png'),
      author: 'Anthony Durand',
    },
  ];

  return (
    <section className="bg-[#F0F0F0] py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Text */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row">
          <p className="mb-4 w-full text-gray-600 lg:w-[50%]">
            {t('moments.description')}
          </p>
          <h2 className="text-primary w-full text-3xl font-bold sm:text-4xl lg:w-[50%]">
            {t('moments.title')} <span className="text-[#FF5B2E]">#BASIC</span>
          </h2>
        </div>

        {/* Main Featured Post */}
        <div className="mb-8 overflow-hidden rounded-2xl bg-white">
          <img
            src={mainPost.image}
            alt={mainPost.title}
            className="h-[500px] w-full object-cover"
          />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-primary text-2xl font-bold">
                {mainPost.title}
              </h3>
              <span className="text-gray-500">{mainPost.date}</span>
            </div>
            <p className="mt-4 text-gray-600">{mainPost.description}</p>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-gray-600">
          {t('moments.consultText')}{' '}
          <span className="text-[#FF5B2E]">#BASIC</span>{' '}
          {t('moments.experienceText')}
        </p>
      </div>
    </section>
  );
}

export default Moments;
