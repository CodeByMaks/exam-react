import React from 'react';
import { useTranslation } from 'react-i18next';

const Translation = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select className='outline-none' onChange={handleLanguageChange} value={i18n.language}>
      <option className='bg-black text-white dark:bg-white dark:text-black' value="en">English</option>
      <option className='bg-black text-white dark:bg-white dark:text-black' value="tj">Toчики</option>
      <option className='bg-black text-white dark:bg-white dark:text-black' value="ru">Русский</option>
    </select>
  );
};

export default Translation;