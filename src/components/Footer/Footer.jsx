import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../../utils/assetPath';

function Footer() {
  const { t } = useTranslation();

  const navigation = [
    { name: t('footer.activity1'), href: '/activite-1' },
    { name: t('footer.activity2'), href: '/activite-2' },
    { name: t('footer.activity3'), href: '/activite-3' },
  ];

  const titles = [
    { name: t('footer.title1'), href: '/titre-1' },
    { name: t('footer.title2'), href: '/titre-2' },
    { name: t('footer.title3'), href: '/titre-3' },
  ];

  const contacts = [
    { name: t('footer.blog'), href: '/titre-1' },
    { name: t('footer.contact'), href: '/titre-2' },
  ];

  const socials = [
    {
      name: 'Facebook',
      href: '#',
      icon: getAssetPath('icons/footer/facebook.svg'),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: getAssetPath('icons/footer/instagram.svg'),
    },
    {
      name: 'Youtube',
      href: '#',
      icon: getAssetPath('icons/footer/youtube.svg'),
    },
  ];

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <p className="text-gray-300">BASIC</p>
            <p className="text-gray-300">(514) 904-6789</p>
            <p className="text-gray-300">
              Quebec, 3100 Boulevard de la Côte-Vertu
            </p>
          </div>

          {/* Activities */}
          <div>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Titles */}
          <div>
            <ul className="space-y-2">
              {titles.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ul className="space-y-2">
              {contacts.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-700 pt-8 sm:flex-row">
          <p className="mb-4 text-sm text-gray-400 sm:mb-0">
            © BASIC 2024 - {t('footer.rights')}
          </p>

          {/* Social Links */}
          <div className="flex space-x-3 sm:space-x-4">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.icon} alt={item.name} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
