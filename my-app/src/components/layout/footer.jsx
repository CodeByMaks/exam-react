import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/AMAZMARKET (2) 2.png'; 
import social from '../../assets/facebook-logo (1).png';
import visa from '../../assets/image 3.2.png';
import instagramm from '../../assets/instagram-logo (2).png';
import linkedin from '../../assets/linkedin-logo 1 (1).png';
import telegramm from '../../assets/instagram-logo (3).png';
import youtube from '../../assets/youtube 1.png';
import twitter from '../../assets/instagram-logo (4).png';
import subtrack from '../../assets/Subtract.png';
import bool from '../../assets/image 3.png';
import bitpay from '../../assets/image 5.png';
import transfer from '../../assets/image 7.png';
import payoner from '../../assets/1567583693_payoneer 1.png';
import jsb from '../../assets/image 6.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="bg-[#161920] dark:bg-amber-600 dark:text-black font-bold text-white text-center py-4">
        <p>{t('Example.backToTop')}</p>
      </div>

      <div className="w-[70%] m-auto py-3 block md:text-left text-center md:flex justify-between mt-10">
        <div>
          <div className="flex justify-center md:text-left">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="flex flex-col gap-4 mt-8">
            <li>{t('Example.buyAccount')}</li>
            <li>{t('Example.sellAccount')}</li>
            <li>{t('Example.services')}</li>
            <li>{t('Example.blog')}</li>
          </ul>
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-bold">{t('Example.email')}</h2>
            <p className="py-3">support@amaz.markets</p>
          </div>
          <div className="py-10">
            <h2 className="text-2xl font-bold">{t('Example.followUs')}</h2>
            <div className="flex gap-3 py-4 justify-center md:justify-start">
              <img className='dark:bg-white' src={social} alt="Social" />
              <img className='dark:bg-white' src={instagramm} alt="Social" />
              <img className='dark:bg-white' src={linkedin} alt="Social" />
              <img className='dark:bg-white' src={telegramm} alt="Social" />
              <img className='dark:bg-white' src={youtube} alt="Social" />
              <img className='dark:bg-white' src={twitter} alt="Social" />
              <img className='dark:bg-white' src={subtrack} alt="Social" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{t('Example.contactUs')}</h2> 
          <div className="py-6">
            <input
              className="w-[300px] border rounded-l outline-none border-gray-500 py-2 px-3"
              placeholder={t('Example.enterEmail')} 
              type="text"
            />
            <button className="bg-orange-400 text-white mt-6 md:mt-0 py-2 px-8 rounded-r">
              {t('Example.submit')} {/* "Submit" */}
            </button>
          </div>
          <div className="md:w-[300px] py-3 flex justify-center md:justify-between">
            <img className='dark:bg-white' src={visa} alt="Visa" />
            <img className='dark:bg-white' src={bool} alt="Visa" />
            <img className='dark:bg-white' src={bool} alt="Visa" />
            <img className='dark:bg-white' src={bitpay} alt="Visa" />
          </div>
          <div className="md:w-[300px] py-3 flex justify-center md:justify-between">
            <img className='dark:bg-white' src={transfer} alt="Visa" />
            <img className='dark:bg-white' src={payoner} alt="Visa" />
            <img className='dark:bg-white' src={jsb} alt="Visa" />
          </div>
        </div>
      </div>

      <div className="text-center mb-4">
        <p>{t('Example.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;