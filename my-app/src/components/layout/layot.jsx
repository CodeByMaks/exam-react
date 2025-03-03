import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DarkLiteMode from './darkLiteMode';
import Translation from './translation';

function Layot() {
  const { t } = useTranslation();

  return (
    <>
      <ul className='flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-gray-400'>
        <li className='hover:text-white'>
          <Link to='/'>{t('Header.home')}</Link>
        </li>
        <li className='hover:text-white'>
          <Link to='/about'>{t('Header.about')}</Link>
        </li>
        <li className='hover:text-white'>
          <Link to='/service'>{t('Header.services')}</Link>
        </li>
        <li className='hover:text-white'>
          <Link to='/blog'>{t('Header.blog')}</Link>
        </li>
        <li className='hover:text-white'>
          <Link to='/contact'>{t('Header.contact')}</Link>
        </li>

        <li className='hover:text-white'>
          <DarkLiteMode />
        </li>
        <li>
          <Translation />
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Layot;