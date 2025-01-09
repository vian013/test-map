import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: 'EN',
    fr: 'FR',
    es: 'ES',
  };

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 rounded bg-transparent px-2 py-1 text-white transition-colors hover:text-gray-200"
      >
        <span>{languages[i18n.language]}</span>
        <svg
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 min-w-[100px] rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
          {Object.entries(languages).map(([code, label]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                i18n.language === code
                  ? 'bg-gray-50 text-[#F15A2B]'
                  : 'text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
