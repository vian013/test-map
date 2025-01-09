import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { getAssetPath } from '../../utils/assetPath';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-primary/90 fixed z-50 w-full backdrop-blur-sm">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6">
        <NavigationMenu.Root className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={getAssetPath('icons/logo.svg')}
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

          <NavigationMenu.List className="hidden items-center space-x-8 lg:flex lg:space-x-12">
            <NavigationMenu.Item>
              <Link to="/titre-1" className="text-white hover:text-gray-200">
                {t('header.title1')}
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link to="/titre-2" className="text-white hover:text-gray-200">
                {t('header.title2')}
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link to="/titre-3" className="text-white hover:text-gray-200">
                {t('header.title3')}
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link to="/titre-4" className="text-white hover:text-gray-200">
                {t('header.title4')}
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
            <LanguageSwitcher />
            <button className="hidden bg-transparent p-0 transition-opacity hover:opacity-80 sm:block">
              <img
                src={getAssetPath('icons/Mountains.svg')}
                alt={t('header.mountains')}
                className="h-[28px] w-auto"
              />
            </button>
            <button className="hidden bg-transparent p-0 transition-opacity hover:opacity-80 sm:block">
              <img
                src={getAssetPath('icons/Fishing.svg')}
                alt={t('header.fishing')}
                className="h-[28px] w-auto"
              />
            </button>
            <button className="hidden bg-transparent p-0 transition-opacity hover:opacity-80 sm:block">
              <img
                src={getAssetPath('icons/Crosshair.svg')}
                alt={t('header.crosshair')}
                className="h-[28px] w-auto"
              />
            </button>
            <Link
              to="/contactez-nous"
              className="rounded-[33px] bg-[#F15A2B] px-4 py-2 text-sm text-white transition-colors hover:bg-[#d94d22] sm:px-6 sm:text-base"
            >
              {t('header.contact')} →
            </Link>
          </div>
        </NavigationMenu.Root>
      </div>
    </header>
  );
}

export default Header;
