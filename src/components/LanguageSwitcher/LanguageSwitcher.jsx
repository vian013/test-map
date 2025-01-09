import { useTranslation } from 'react-i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = {
    en: 'EN',
    fr: 'FR',
    es: 'ES'
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="bg-transparent text-white hover:text-gray-200 px-2 py-1 rounded focus:outline-none">
        {languages[i18n.language]}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="min-w-[110px] bg-white rounded-md shadow-lg p-1 mt-2"
          sideOffset={5}
        >
          {Object.entries(languages).map(([code, label]) => (
            <DropdownMenu.Item
              key={code}
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer outline-none"
              onClick={() => i18n.changeLanguage(code)}
            >
              {label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default LanguageSwitcher; 