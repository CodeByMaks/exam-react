import React from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import { useTranslation } from 'react-i18next';
import social from "../../../assets/facebook-logo (1) (1).png";
import instagram from '../../../assets/instagram-logo.png';
import linkedin from '../../../assets/linkedin-logo 1.png';
import telegramm from '../../../assets/instagram-logo (1).png';
import rocket from '../../../assets/Group 1000.png';
import InpSection from '../../layout/section/inpSection';
import Comments from '../../layout/section/comment';
import analys from '../../../assets/analysis 1.png';
import planee from '../../../assets/planee.png';
import account from '../../../assets/account 1.png';
import order from '../../../assets/order (1) 1.png';
import invertory from '../../../assets/inventory 1.png';
import clipboard from '../../../assets/clipboards 1.png';
import computer from '../../../assets/computer 1.png';
import bullihome from '../../../assets/bullhorn 1.png';
import folder from '../../../assets/folder 1.png';
import message from '../../../assets/message 1.png';
import budjet from '../../../assets/budget (1) 1.png';
import sport from '../../../assets/sport-team 1.png';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <section className="bg-[#141B23] rounded-b-[10%]">
          <div className='w-[70%] m-auto py-4'>
            <h1 className='text-gray-500'>{t('complex_launch_section.breadcrumbs')}</h1>
          </div>

          <div className="w-[70%] m-auto block md:flex gap-18 justify-between py-10">
            <div className="text-white w-full md:w-[50%] text-center md:text-left flex flex-col items-start gap-12">
              <h1 className="md:text-4xl text-2xl font-bold">
                {t('complex_launch_section.title')}
              </h1>

              <p className="text-[20px] text-gray-400">
                {t('complex_launch_section.description')}
              </p>

              <button className="bg-amber-600 py-2 md:px-6 px-16 rounded">
                {t('complex_launch_section.button')}
              </button>

              <div className="hidden md:flex gap-3">
                <img src={social} alt="Social Media" />
                <img src={instagram} alt="Social Media" />
                <img src={linkedin} alt="Social Media" />
                <img src={telegramm} alt="Social Media" />
              </div>
            </div>

            <div className="mt-15 md:mt-0">
              <img src={rocket} alt="Macbook Mockup" />
            </div>
          </div>

          <div className="text-center text-white">
            <h1>{t('complex_launch_section.scroll')}</h1>
            <p>|</p>
          </div>
    </section>

      <section className='md:w-[65%] w-[90%] m-auto py-28'>
      <h1 className="text-4xl font-bold text-center">
          {t("Bol.what_we_offer")}
        </h1>
        <div>
          <div className='block md:flex justify-between gap-4 py-8'>
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={analys} alt="" />
              <h1 className="text-3xl font-bold">{t("Bol.analytics_title")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                {t("Bol.analytics_points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={invertory} alt="" />
              <h1 className="text-3xl font-bold">{t("Bol.suppliers_title")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                {t("Bol.suppliers_points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={clipboard} alt="" />
              <h1 className="text-3xl font-bold">{t("Bol.listing_title")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                {t("Bol.listing_points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='block md:flex justify-between gap-4 py-8'>
          <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={computer} alt="" />
              <h1 className="text-3xl font-bold">{t("Bol.branding_title")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                {t("Bol.branding_points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={bullihome} alt="" />
              <h1 className="text-3xl font-bold">{t("Bol.marketing_title")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                {t("Bol.marketing_points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={folder} alt="" />
              <h1 className="text-3xl font-bold">{t("Bol.data_scraping_title")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                {t("Bol.data_scraping_points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='md:w-[70%] w-[90%] m-auto md:py-20 block md:flex justify-between'>
          <div className='md:w-[500px] md:h-[691px]'>
            <img className='w-full h-auto dark:opacity-28' src={planee} alt="" />
          </div>
          <div>
          <h1 className="text-3xl font-bold text-center md:text-left">
              {t("Hol.meet_our_team")}
            </h1>

            <div className="w-full md:w-[500px] py-6 flex flex-col gap-8">
             
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              <div className="flex items-center gap-3">
                <img src={account} alt="Account Manager" className="w-10 h-10" />
                <p className="text-gray-500">{t("Hol.account_manager")}</p>
              </div>
              <div className="md:flex hidden items-center gap-3">
                <img src={account} alt="Account Manager" className="w-10 h-10" />
                <p className="text-gray-500">{t("Hol.account_manager")}</p>
              </div>
            </div>

              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                <div className="flex items-center gap-3">
                  <img src={account} alt="Account Manager" className="w-10 h-10" />
                   <p className="text-gray-500">{t("Hol.account_manager")}</p>
                </div>
                <div className="md:flex hidden items-center gap-3">
                  <img src={account} alt="Account Manager" className="w-10 h-10" />
                   <p className="text-gray-500">{t("Hol.account_manager")}</p>
                </div>
              </div>
      
              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                <div className="flex items-center gap-3">
                  <img src={account} alt="Account Manager" className="w-10 h-10" />
                   <p className="text-gray-500">{t("Hol.account_manager")}</p>
                </div>
                <div className="md:flex hidden items-center gap-3">
                  <img src={account} alt="Account Manager" className="w-10 h-10" />
                   <p className="text-gray-500">{t("Hol.account_manager")}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                <div className="md:flex hidden items-center gap-3">
                  <img src={account} alt="Account Manager" className="w-10 h-10" />
                   <p className="text-gray-500">{t("Hol.account_manager")}</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={account} alt="Account Manager" className="w-10 h-10" />
                   <p className="text-gray-500">{t("Hol.account_manager")}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                <div className="flex items-center gap-3">
                  <img src={account} alt="Account Manager" className="w-10 h-10" />
                   <p className="text-gray-500">{t("Hol.account_manager")}</p>
                </div>
                <div className="md:flex hidden items-center gap-3">
                  <img src={account} alt="Account Manager" className="w-10 h-10" />
                   <p className="text-gray-500">{t("Hol.account_manager")}</p>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="md:w-[65%] w-[90%] m-auto">
        <h1 className="text-3xl font-bold text-center">{t("SectionContact.how_it_works")}</h1>

        <div className="block md:flex justify-between gap-5 py-6">
          <div className="md:w-[273px] h-[229px] shadow-2xl flex flex-col justify-center items-center text-center gap-4">
            <img src={order} alt="" />
            <h1 className="font-bold">{t("SectionContact.step1_title")}</h1>
            <p className="text-gray-500">{t("SectionContact.step1_desc")}</p>
          </div>
          <div className="md:w-[273px] h-[229px] shadow-2xl flex flex-col justify-center items-center text-center gap-4">
            <img src={message} alt="" />
            <h1 className="font-bold">{t("SectionContact.step2_title")}</h1>
            <p className="text-gray-500">{t("SectionContact.step2_desc")}</p>
          </div>
          <div className="md:w-[273px] h-[229px] shadow-2xl flex flex-col justify-center items-center text-center gap-4">
            <img src={budjet} alt="" />
            <h1 className="font-bold">{t("SectionContact.step3_title")}</h1>
            <p className="text-gray-500">{t("SectionContact.step3_desc")}</p>
          </div>
          <div className="md:w-[273px] h-[229px] shadow-2xl flex flex-col justify-center items-center text-center gap-4">
            <img src={sport} alt="" />
            <h1 className="font-bold">{t("SectionContact.step4_title")}</h1>
            <p className="text-gray-500">{t("SectionContact.step4_desc")}</p>
          </div>
        </div>
      </section>

        <InpSection />
        <Comments />

      <Footer />
    </>
  )
}

export default Contact;