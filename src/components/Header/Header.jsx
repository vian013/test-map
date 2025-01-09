import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { getAssetPath } from '../../utils/assetPath';
import { useState } from 'react';

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-[9999] w-full bg-primary/90 backdrop-blur-sm">
      <div className="mx-auto sm:max-w-[1000px]">
        <NavigationMenu.Root className="relative flex h-20 items-center justify-between px-4">
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

          <div className="hidden items-center space-x-2 sm:space-x-4 lg:flex lg:space-x-6">
            <LanguageSwitcher />
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
              <img
                src={getAssetPath('icons/Mountains.svg')}
                alt={t('header.mountains')}
                className="h-[28px] w-auto"
              />
            </button>
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
              <img
                src={getAssetPath('icons/Fishing.svg')}
                alt={t('header.fishing')}
                className="h-[28px] w-auto"
              />
            </button>
            <button className="bg-transparent p-0 transition-opacity hover:opacity-80">
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

          <button
            onClick={toggleMenu}
            className="bg-transparent p-0 lg:hidden"
            aria-label="Toggle menu"
          >
            <img
              src={getAssetPath('icons/menu.svg')}
              alt="Menu"
              className="h-6 w-6"
            />
          </button>
          {isMenuOpen && (
            <div className="absolute left-0 right-0 top-full bg-primary/95 px-4 py-4 backdrop-blur-sm lg:hidden">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/titre-1"
                  className="text-white hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.title1')}
                </Link>
                <Link
                  to="/titre-2"
                  className="text-white hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.title2')}
                </Link>
                <Link
                  to="/titre-3"
                  className="text-white hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.title3')}
                </Link>
                <Link
                  to="/titre-4"
                  className="text-white hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.title4')}
                </Link>
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <LanguageSwitcher />
                  <Link
                    to="/contactez-nous"
                    className="rounded-[33px] bg-[#F15A2B] px-4 py-2 text-sm text-white transition-colors hover:bg-[#d94d22]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.contact')} →
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </NavigationMenu.Root>
      </div>
    </header>
  );
}

export default Header;
