import React from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import HeaderComp from '../../layout/section/headerComp';
import america from '../../../assets/image 29.png';
import europe from '../../../assets/image 30.png';
import asia from '../../../assets/image 31.png';
import united from '../../../assets/united-states (1) 1.png';
import group from '../../../assets/Group 385.png';
import verAcc from '../../../assets/verified-account 1.png';
import group408 from '../../../assets/Group 408.png';
import wifi from '../../../assets/wifi 1.png';
import lady from '../../../assets/Group 775.png';
import polygon from '../../../assets/Polygon 19.png';
import numbOne from '../../../assets/Group 370.png';
import firstArrow from '../../../assets/Group 495.png';
import InpSection from '../../layout/section/inpSection';
import arrowRow from '../../../assets/Group 543.png'
import Comments from '../../layout/section/comment';
import infoImg from '../../../assets/information 1.png';
import polygonTwo from '../../../assets/Polygon 19 (1).png';
import polygonThree from '../../../assets/Polygon 20.png';
import { useTranslation } from "react-i18next";
import unitedKing from '../../../assets/united-kingdom 1.png';
import convers from '../../../assets/conversation 1.png';
import shiled from '../../../assets/shield (4) 1.png';
import deal from '../../../assets/deal 1.png';
import money from '../../../assets/money-bag 1.png';
import groupN from '../../../assets/Group 500.png';
import groupB from '../../../assets/Group 371.png';
import groupC from '../../../assets/Group 372.png';
import groupS from '../../../assets/Group 373.png';
import groupAll from '../../../assets/group 1.png';
import credit from '../../../assets/credit-card 1.png';
import lock from '../../../assets/lock 1.png';
import moneyy from '../../../assets/refund (1) 1.png';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <HeaderComp />

      <section className="w-[70%] m-auto md:py-28 py-12">
        <div className="md:w-[550px] font-bold m-auto text-center">
          <h1 className="md:text-4xl text-2xl">{t("GlobalSelling.title")}</h1>
        </div>

        <div className="block md:flex justify-between">
          <div className="md:w-[305px] h-[560px] text-center">
            <h1 className="text-2xl font-bold py-4">{t("GlobalSelling.americas.title")}</h1>
            <div className="md:w-[305px] h-[506px] shadow-2xl bg-white flex flex-col items-center py-4 gap-6">
              <img src={america} alt="Americas" />
              {t("GlobalSelling.americas.markets", { returnObjects: true }).map((market, index) => (
                <p key={index} className="text-gray-500">{market}</p>
              ))}
            </div>
          </div>
          <div className="md:block hidden w-[305px] h-[560px] text-center">
            <h1 className="text-2xl font-bold py-4">{t("GlobalSelling.europe.title")}</h1>
            <div className="w-[305px] h-[506px] shadow-2xl bg-white flex flex-col items-center py-4 gap-6">
              <img src={europe} alt="Europe" />
              {t("GlobalSelling.europe.markets", { returnObjects: true }).map((market, index) => (
                <p key={index} className="text-gray-500">{market}</p>
              ))}
            </div>
          </div>
          <div className="md:block hidden w-[305px] h-[560px] text-center">
            <h1 className="text-2xl font-bold py-4">{t("GlobalSelling.asiaPacific.title")}</h1>
            <div className="w-[305px] h-[506px] shadow-2xl bg-white flex flex-col items-center py-4 gap-6">
              <img src={asia} alt="Asia-Pacific" />
              {t("GlobalSelling.asiaPacific.markets", { returnObjects: true }).map((market, index) => (
                <p key={index} className="text-gray-500">{market}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="block md:flex justify-between mt-20 text-center">
          {["marketplaces", "fulfillmentCenters", "countries", "categories"].map((item) => (
            <div key={item} className="md:w-[249px] flex flex-col my-6 md:my-0 justify-start items-center gap-4">
              <h1 className="text-7xl font-bold">{t(`GlobalSelling.stats.${item}.number`)}</h1>
              <p>{t(`GlobalSelling.stats.${item}.label`)}</p>
            </div>
          ))}
        </div>
     </section> {/*mala*/}

      <section className='md:w-[70%] w-[90%] m-auto md:py-28'>
        <h1 className="text-center text-4xl font-bold pb-13">{t("Table.aged_accounts_title")}</h1>
        <div class="overflow-x-auto">
          <div className='bg-gray-200 py-3'>
          <p className="text-gray-600 ml-12">{t("Table.selling_label")}</p>
        </div>
        <table className="dark:text-black min-w-full bg-white shadow-md rounded-lg hidden md:table">
        <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 text-left">{t("Table.table_business_name")}</th>
          <th className="py-2 px-4 text-left">{t("Table.table_market")}</th>
          <th className="py-2 px-4 text-left">{t("Table.table_type")}</th>
          <th className="py-2 px-4 text-left">{t("Table.table_account_age")}</th>
          <th className="py-2 px-4 text-left">{t("Table.table_reviews")}</th>
          <th className="py-2 px-4 text-left">{t("Table.table_ratio")}</th>
          <th className="py-2 px-4 text-left">{t("Table.table_price")}</th>
          <th className="py-2 px-4 text-left">{t("Table.table_account_details")}</th>
        </tr>
          </thead>
            <tbody>
            <tr>
                <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                <td className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="US Flag" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4">{t("Table.table_pro_account")}</td>
                <td className="py-2 px-4">2019</td>
                <td className="py-2 px-4">{t("Table.table_reviews_count", { count: 6 })}</td>
                <td className="py-2 px-4">{t("Table.table_positive_ratio", { ratio: 100 })}</td>
                <td className="py-2 px-4">{t("Table.table_price", { price: "1 000" })}</td>
                <td className="py-2 px-4 text-blue-700">{t("Table.table_more_info")}</td>
             </tr>
                <tr>
                    <td className="py-4 px-4 font-bold">Health Care Direct UK</td>
                    <td className="py-2 px-4 ">
                      <div className='flex items-center gap-2'>
                        <img className='w-5 h-5' src={united} alt="" />
                        <p>US</p>
                      </div>
                    </td>
                    <td className="py-2 px-4">{t("Table.table_pro_account")}</td>
                <td className="py-2 px-4">2019</td>
                <td className="py-2 px-4">{t("Table.table_reviews_count", { count: 6 })}</td>
                <td className="py-2 px-4">{t("Table.table_positive_ratio", { ratio: 100 })}</td>
                <td className="py-2 px-4">{t("Table.table_price", { price: "1 000" })}</td>
                <td className="py-2 px-4 text-blue-700">{t("Table.table_more_info")}</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5" src={united} alt="US Flag" />
                      <p>US</p>
                    </div>
                  </td>
                  <td className="py-2 px-4">{t("Table.table_pro_account")}</td>
                  <td className="py-2 px-4">2019</td>
                  <td className="py-2 px-4">{t("Table.table_reviews_count", { count: 6 })}</td>
                  <td className="py-2 px-4">{t("Table.table_positive_ratio", { ratio: 100 })}</td>
                  <td className="py-2 px-4">{t("Table.table_price", { price: "1 000" })}</td>
                  <td className="py-2 px-4 text-blue-700">{t("Table.table_more_info")}</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5" src={united} alt="US Flag" />
                      <p>US</p>
                    </div>
                  </td>
                  <td className="py-2 px-4">{t("Table.table_pro_account")}</td>
                  <td className="py-2 px-4">2019</td>
                  <td className="py-2 px-4">{t("Table.table_reviews_count", { count: 6 })}</td>
                  <td className="py-2 px-4">{t("Table.table_positive_ratio", { ratio: 100 })}</td>
                  <td className="py-2 px-4">{t("Table.table_price", { price: "1 000" })}</td>
                  <td className="py-2 px-4 text-blue-700">{t("Table.table_more_info")}</td>
                </tr>
                <tr>
                    <td className="py-4 px-4 font-bold">Health Care Direct UK</td>
                    <td className="py-2 px-4 ">
                      <div className='flex items-center gap-2'>
                        <img className='w-5 h-5' src={unitedKing} alt="" />
                        <p>GB</p>
                      </div>
                    </td>
                    <td className="py-2 px-4">{t("Table.table_pro_account")}</td>
                <td className="py-2 px-4">2019</td>
                <td className="py-2 px-4">{t("Table.table_reviews_count", { count: 6 })}</td>
                <td className="py-2 px-4">{t("Table.table_positive_ratio", { ratio: 100 })}</td>
                <td className="py-2 px-4">{t("Table.table_price", { price: "1 000" })}</td>
                <td className="py-2 px-4 text-blue-700">{t("Table.table_more_info")}</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5" src={united} alt="US Flag" />
                      <p>US</p>
                    </div>
                  </td>
                  <td className="py-2 px-4">{t("Table.table_pro_account")}</td>
                  <td className="py-2 px-4">2019</td>
                  <td className="py-2 px-4">{t("Table.table_reviews_count", { count: 6 })}</td>
                  <td className="py-2 px-4">{t("Table.table_positive_ratio", { ratio: 98 })}</td>
                  <td className="py-2 px-4">{t("Table.table_price", { price: "1 000" })}</td>
                  <td className="py-2 px-4 text-blue-700">{t("Table.table_more_info")}</td>
                </tr>
                <tr>
                    <td className="py-4 px-4 font-bold">Health Care Direct UK</td>
                    <td className="py-2 px-4 ">
                      <div className='flex items-center gap-2'>
                        <img className='w-5 h-5' src={unitedKing} alt="" />
                        <p>GB</p>
                      </div>
                    </td>
                    <td className="py-2 px-4">{t("Table.table_pro_account")}</td>
                <td className="py-2 px-4">2019</td>
                <td className="py-2 px-4">{t("Table.table_reviews_count", { count: 6 })}</td>
                <td className="py-2 px-4">{t("Table.table_positive_ratio", { ratio: 88 })}</td>
                <td className="py-2 px-4">{t("Table.table_price", { price: "1 000" })}</td>
                <td className="py-2 px-4 text-blue-700">{t("Table.table_more_info")}</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5" src={united} alt="US Flag" />
                      <p>US</p>
                    </div>
                  </td>
                  <td className="py-2 px-4">{t("Table.table_pro_account")}</td>
                  <td className="py-2 px-4">2019</td>
                  <td className="py-2 px-4">{t("Table.table_reviews_count", { count: 6 })}</td>
                  <td className="py-2 px-4">{t("Table.table_positive_ratio", { ratio: 80 })}</td>
                  <td className="py-2 px-4">{t("Table.table_price", { price: "1 000" })}</td>
                  <td className="py-2 px-4 text-blue-700">{t("Table.table_more_info")}</td>
                </tr>
            </tbody>
          </table>

         <div className="md:hidden">
       
         <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
               
                <div className="text-gray-500">
                    <div>Business name</div>
                    <div>Market</div>
                    <div>Type</div>
                    <div>Account age</div>
                    <div>Reviews</div>
                    <div>Ratio</div>
                    <div>Price</div>
                    <div>Account Details</div>
                </div>
              
                <div className="text-right">
                    <div className="font-bold">Flagman_Shop</div>
                    <div className="flex justify-end items-center gap-2">
                        <img className="w-5 h-5" src={united} alt="US Flag" />
                        <p>US</p>
                    </div>
                    <div>Pro Account</div>
                    <div>2019</div>
                    <div>6 reviews</div>
                    <div>100% positive</div>
                    <div>$1 000</div>
                    <div className="text-blue-700">More Info</div>
                </div>
            </div>
         </div>

       
         <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
              
                <div className="text-gray-500">
                    <div>Business name</div>
                    <div>Market</div>
                    <div>Type</div>
                    <div>Account age</div>
                    <div>Reviews</div>
                    <div>Ratio</div>
                    <div>Price</div>
                    <div>Account Details</div>
                </div>
               
                <div className="text-right">
                    <div className="font-bold">Health Care Direct UK</div>
                    <div className="flex justify-end items-center gap-2">
                        <img className="w-5 h-5" src={united} alt="US Flag" />
                        <p>US</p>
                    </div>
                    <div>Pro Account</div>
                    <div>2019</div>
                    <div>6 reviews</div>
                    <div>100% positive</div>
                    <div>$1 000</div>
                    <div className="text-blue-700">More Info</div>
                </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
               
                <div className="text-gray-500">
                    <div>Business name</div>
                    <div>Market</div>
                    <div>Type</div>
                    <div>Account age</div>
                    <div>Reviews</div>
                    <div>Ratio</div>
                    <div>Price</div>
                    <div>Account Details</div>
                </div>
              
                <div className="text-right">
                    <div className="font-bold">Flagman_Shop</div>
                    <div className="flex justify-end items-center gap-2">
                        <img className="w-5 h-5" src={united} alt="US Flag" />
                        <p>US</p>
                    </div>
                    <div>Pro Account</div>
                    <div>2019</div>
                    <div>6 reviews</div>
                    <div>100% positive</div>
                    <div>$1 000</div>
                    <div className="text-blue-700">More Info</div>
                </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
              
                <div className="text-gray-500">
                    <div>Business name</div>
                    <div>Market</div>
                    <div>Type</div>
                    <div>Account age</div>
                    <div>Reviews</div>
                    <div>Ratio</div>
                    <div>Price</div>
                    <div>Account Details</div>
                </div>
               
                <div className="text-right">
                    <div className="font-bold">Health Care Direct UK</div>
                    <div className="flex justify-end items-center gap-2">
                        <img className="w-5 h-5" src={united} alt="US Flag" />
                        <p>US</p>
                    </div>
                    <div>Pro Account</div>
                    <div>2019</div>
                    <div>6 reviews</div>
                    <div>100% positive</div>
                    <div>$1 000</div>
                    <div className="text-blue-700">More Info</div>
                </div>
             </div>
             </div>
           </div>
          </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
        <button className="w-full md:w-[520px] border-3 border-amber-600 py-3 text-amber-600 text-center md:px-14">
          {t("Btn.btn_learn_more")}
        </button>
        <button className="w-full md:w-[520px] border-3 border-amber-600 py-3 text-amber-600 text-center md:px-14">
          {t("Btn.btn_selling_account")}
        </button>
      </div>

     </section>

     <section className='w-[90%] md:w-[70%] m-auto'>
      <h1 className="text-center text-3xl mb-10 font-bold">{t('SectiomOne.benefits_you_will_get')}</h1>
      <div className='block md:flex justify-between'>
        <div>
          <img src={group} alt="Group" />
        </div>
        <div className='flex flex-col gap-11'>
          <div className='flex items-start gap-4'>
            <img src={verAcc} alt="Verified Account" />
            <div>
              <h1 className='text-3xl font-bold'>{t('SectiomOne.verified_amazon_accounts')}</h1>
              <p className='py-4'>{t('SectiomOne.account_verification_description')}</p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <img src={convers} alt="Verified Account" />
            <div>
              <h1 className='text-3xl font-bold'>{t('SectiomOne.verified_amazon_accounts')}</h1>
              <p className='py-4'>{t('SectiomOne.account_verification_description')}</p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <img src={shiled} alt="Verified Account" />
            <div>
              <h1 className='text-3xl font-bold'>{t('SectiomOne.verified_amazon_accounts')}</h1>
              <p className='py-4'>{t('SectiomOne.account_verification_description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="w-[90%] md:w-[70%] m-auto md:py-28 py-14 flex flex-col-reverse md:flex-row">
      <div className="flex flex-col gap-7">
        <div className="flex items-start gap-4">
          <img src={wifi} alt="" />
          <div>
            <h1 className="text-3xl font-bold">{t("section.benefit.0.title")}</h1>
            <p className="py-4">{t("section.benefit.0.description")}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <img src={deal} alt="" />
          <div>
            <h1 className="text-3xl font-bold">{t("section.benefit.1.title")}</h1>
            <p className="py-4">{t("section.benefit.1.description")}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <img src={money} alt="" />
          <div>
            <h1 className="text-3xl font-bold">{t("section.benefit.2.title")}</h1>
            <p className="py-4">{t("section.benefit.2.description")}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={group408} alt="" />
      </div>
    </section>

     <section className="md:w-[70%] w-[90%] m-auto block md:flex justify-between gap-14">
      <div>
        <img src={lady} alt="" />
      </div>
      <div className="md:w-[600px] md:h-[688px]">
        <h1 className="text-5xl font-bold">{t("seller_accounts.amazon_seller_title")}</h1>
        <div className="py-4 mt-10">
          <h1 className="text-3xl font-bold">{t("seller_accounts.aged_accounts_title")}</h1>
          <p className="text-gray-500 py-5">{t("seller_accounts.aged_accounts_description")}</p>
        </div>
        <div className="py-4">
          <h1 className="text-3xl font-bold">{t("seller_accounts.new_accounts_title")}</h1>
          <p className="text-gray-500 py-5">{t("seller_accounts.new_accounts_description")}</p>
        </div>
      </div>
    </section>

    <section className="md:w-[60%] w-[90%] m-auto md:py-28 py-12 relative">
      <h1 className="text-4xl font-bold text-center">{t("pricing_section.title")}</h1>

      <div className="relative z-20 flex flex-col items-center gap-7 mt-14">
        <div className="dark:text-black py-3 px-5 md:w-[735px] rounded bg-white flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("pricing_section.new_seller_account")}</h1>
          <p className="text-2xl">⟱</p>
        </div>

        <div className="dark:text-black py-3 px-5 md:w-[735px] rounded bg-white flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("pricing_section.aged_seller_account")}</h1>
          <p className="text-2xl">⟱</p>
        </div>

        <img className="md:block hidden absolute top-[-35%] left-[6%] z-[-1]" src={polygon} alt="" />
      </div>
    </section>

      <section className='md:w-[70%] w-[90%] m-auto md:py-28 py-10 relative'>
        <h1 className='text-4xl font-bold text-center'>Process</h1>

        <div className='md:w-[1061px] m-auto md:h-[297px] mt-11 flex flex-col md:flex-row items-center md:justify-between gap-7'>
            <div className='w-[300px] md:h-[297px] flex flex-col justify-start items-center text-center gap-6'> 
                <img src={numbOne} alt="" />
                <h1 className='text-[20px] font-bold'>Check your account</h1>
                <p>Check the account of your choice via TeamViewer or Any Desk. You inspect the account from your end to confirm your selection.</p>
            </div>
            <img className='abslute md:hidden block top-0' src={arrowRow} alt="" />
            <div className='w-[300px] md:h-[297px] flex flex-col justify-start items-center text-center gap-6'> 
                <img src={groupB} alt="" />
                <h1 className='text-[20px] font-bold'>Payment</h1>
                <p>We take a payment using your preferred method. We accept: Payoneer, bank transfer and bitcoin.</p>
            </div>
            <img className='abslute md:hidden block top-0' src={arrowRow} alt="" />
            <div className='w-[300px] h-[297px] flex flex-col justify-start items-center text-center gap-6'> 
                <img src={groupC} alt="" />
                <h1 className='text-[20px] font-bold'>Account ownership</h1>
                <p>We give you all the log in details
                to your new account. After that, you set up your own password and Two-Step authentification methods for your Amazon account and Virtual Proxy Server where your account is located.</p>
            </div>
            <img className='abslute md:hidden block top-0' src={arrowRow} alt="" />
            <div className='w-[300px] h-[297px] flex flex-col justify-start items-center text-center gap-6'> 
                <img src={groupS} alt="" />
                <h1 className='text-[20px] font-bold'>Account set up</h1>
                <p>We help you set up the details like your deposit/change method, business address and legal entity
                on your Amazon account.</p>
            </div>
        </div>
            <img className='md:block hidden absolute top-[37%] left-[16%]' src={firstArrow} alt="" />
            <img className='md:block hidden absolute top-[32%] left-[42%]' src={groupN} alt="" />
            <img className='md:block hidden absolute top-[37%] right-[16%]' src={firstArrow} alt="" />

      </section>

        <InpSection />
        <Comments />

        <section className='relative z-20'>
          <h2 className="font-bold mt-20 text-4xl text-center">FAQ</h2>
          <div className="dark:text-black relative flex justify-between bg-white lg:w-[50%] w-[60%] mt-10 rounded-2xl items-center m-auto p-4 border border-gray-200 ">
            <div className="flex items-start gap-4">
              <img src={infoImg} />
              <div>
                <p className="font-bold">General Inquiriest</p>
                <p className="text-sm">
                  Common information about the work of AmazMarkets.
                </p>
              </div>
            </div>
            <p className='text-2xl'>⟱</p>
          </div>
          <div className="dark:text-black flex justify-between bg-white lg:w-[50%] w-[60%] mt-7 rounded-2xl items-center m-auto p-4 border border-gray-200 ">
            <div className="flex items-start gap-4">
              <img src={groupAll}/>
              <div>
                <p className="font-bold">Multiple Seller Accounts</p>
                <p className="text-sm">
                Learn more about the process of creating multiple sellers accounts.
                </p>
              </div>
            </div>
            <p className='text-2xl'>⟱</p>
          </div>
          <div className="dark:text-black flex justify-between bg-white lg:w-[50%] w-[60%] mt-7 rounded-2xl items-center m-auto p-4 border border-gray-200 ">
            <div className="flex items-start gap-4">
              <img src={credit} />
              <div>
                <p className="font-bold">Payment Procedure</p>
                <p className="text-sm">
                  Payment methods and payments process itself.
                </p>
              </div>
            </div>
            <p className='text-2xl'>⟱</p>
          </div>
          <div className="dark:text-black flex justify-between bg-white lg:w-[50%] w-[60%] mt-7 rounded-2xl items-center m-auto p-4 border border-gray-200 ">
            <div className="flex items-start gap-4">
              <img src={lock} />
              <div>
                <p className="font-bold">Privacy and Security</p>
                <p className="text-sm">
                  Security of the account you buy and your personal data.
                </p>
              </div>
            </div>
            <p className='text-2xl'>⟱</p>
          </div>
          <div className="dark:text-black flex justify-between bg-white lg:w-[50%] w-[60%] mt-7 mb-30 rounded-2xl items-center m-auto p-4 border border-gray-200 ">
            <div className="flex items-start gap-4">
              <img src={moneyy} />
              <div>
                <p className="font-bold">Refund Policy</p>
                <p className="text-sm">
                  SellerSpace policy regarding account returns and refunds.
                </p>
              </div>
            </div>
            <p className='text-2xl'>⟱</p>
          </div>

          <img className='absolute md:block hidden top-[40%] right-[15%]' src={polygon} alt="" />
          <img className='absolute top-0 md:right-[20%] right-0 z-[-1]' src={polygonTwo} alt="" />
          <img className='absolute bottom-[-13%] md:left-[22%] z-[-1]' src={polygonThree} alt="" />
        </section>

      <Footer />
    </>
  )
}

export default Home;