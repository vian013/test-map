import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      image: '/images/carousel/img1.png',
      title: t('carousel.slides.1.title'),
      subtitle: t('carousel.slides.1.subtitle'),
      description: t('carousel.slides.1.description'),
    },
    {
      id: 2,
      image: '/images/carousel/img2.png',
      title: t('carousel.slides.2.title'),
      subtitle: t('carousel.slides.2.subtitle'),
      description: t('carousel.slides.2.description'),
    },
    {
      id: 3,
      image: '/images/carousel/img3.png',
      title: t('carousel.slides.3.title'),
      subtitle: t('carousel.slides.3.subtitle'),
      description: t('carousel.slides.3.description'),
    },
    {
      id: 4,
      image: '/images/carousel/img4.png',
      title: t('carousel.slides.4.title'),
      subtitle: t('carousel.slides.4.subtitle'),
      description: t('carousel.slides.4.description'),
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-5xl font-bold text-[#FF5B2E]">
            {t('carousel.title')}
          </h2>
          <Link
            to="/en-savoir-plus"
            className="text-[#666666] underline hover:text-gray-300"
          >
            {t('carousel.learnMore')} →
          </Link>
        </div>

        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="px-4">
              <div className="overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="mb-6 h-[300px] w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#FF5B2E]">
                {slide.title}
              </h3>
              <h4 className="mb-4 text-2xl font-bold text-white">
                {slide.subtitle}
              </h4>
              <p className="text-gray-400">{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
