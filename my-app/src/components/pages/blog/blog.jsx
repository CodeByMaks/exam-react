import React, { useEffect, useState } from "react";
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import dit from '../../../assets/MYbhN8KaaEc.png';
import group97 from '../../../assets/Group 97.png';
import robot from '../../../assets/MYbhN8KaaEc (1).png';
import tech from '../../../assets/MYbhN8KaaEc (2).png';
import img4 from '../../../assets/MYbhN8KaaEc (3).png';
import img5 from '../../../assets/MYbhN8KaaEc (4).png';
import img6 from '../../../assets/MYbhN8KaaEc (5).png';
import img7 from '../../../assets/MYbhN8KaaEc (6).png';
import img8 from '../../../assets/MYbhN8KaaEc (7).png';
import img9 from '../../../assets/MYbhN8KaaEc (8).png';

const Blog = () => {
  const { t, i18n } = useTranslation();

  const i18 = i18n.language;


  const [cards, setCards] = useState([]);

  useEffect(()=>{
    const articles = [
      {
        id: "1",
        title: {
          en: "BEST CRYPTO TRADING GROUPS",
          ru: "ЛУЧШИЕ ГРУППЫ ПО КРИПТОТРЕЙДИНГУ",
          tj: "БЕҲТАРИН ГУРӮҲҲОИ СОҲИБКОРИИ КРИПТО",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 10, 2024",
          ru: "10 января 2024",
          tj: "10 январи 2024",
        },
        image: img4,
        description: {
          en: "Trading cryptocurrencies or cryptotrading is a type of activity that is aimed at extracting profit from processes aimed at analyzing and forecasting the price of digital currencies.",
          ru: "Торговля криптовалютами или криптотрейдинг – это деятельность, направленная на получение прибыли путем анализа и прогнозирования цен на цифровые валюты.",
          tj: "Муомилоти криптовалюта ё криптотрейдинг як навъи фаъолиятест, ки барои ба даст овардани фоида тавассути таҳлил ва пешгӯии нархи асъорҳои рақамӣ равона шудааст.",
        },
      },
      {
        id: "2",
        title: {
          en: "HOW CRYPTO TRADING SERVICES WORK?",
          ru: "КАК РАБОТАЮТ СЕРВИСЫ КРИПТОТРЕЙДИНГА?",
          tj: "ХИЗМАТРАСОНИҲОИ КРИПТОТрейдинг ЧӢ ТАВР КОР МЕКУНАНД?",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 10, 2024",
          ru: "10 января 2024",
          tj: "10 январи 2024",
        },
        image: img5,
        description: {
          en: "If you read this article, then you are interested how crypto trading works.",
          ru: "Если вы читаете эту статью, значит вас интересует, как работает криптотрейдинг.",
          tj: "Агар шумо ин мақоларо мехонед, пас шумо мехоҳед фаҳмед, ки криптотрейдинг чӣ гуна кор мекунад.",
        },
      },
      {
        id: "3",
        title: {
          en: "HOW TO EARN MONEY WITH CRYPTO TRADING ALGORITHM?",
          ru: "КАК ЗАРАБОТАТЬ НА АЛГОРИТМЕ КРИПТОТРЕЙДИНГА?",
          tj: "ЧӢ ТАВР БО АЛГОРИТМИ КРИПТОТрейдинг ДАРОМАД ГИРИФТАН МУМКИН АСТ?",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 10, 2024",
          ru: "10 января 2024",
          tj: "10 январи 2024",
        },
        image: img6,
        description: {
          en: "If you have available funds, and you want to multiply your capital in a short time, the best opportunity for this is crypto trading.",
          ru: "Если у вас есть свободные средства и вы хотите быстро увеличить свой капитал, лучшая возможность для этого – криптотрейдинг.",
          tj: "Агар шумо маблағи дастрас дошта бошед ва хоҳед, ки сармояи худро дар муддати кӯтоҳ афзоиш диҳед, беҳтарин имконият барои ин криптотрейдинг аст.",
        },
      },
      {
        id: "4",
        title: {
          en: "BEST CRYPTO TRADING GROUPS",
          ru: "ЛУЧШИЕ ГРУППЫ ПО КРИПТОТРЕЙДИНГУ",
          tj: "БЕҲТАРИН ГУРӮҲҲОИ СОҲИБКОРИИ КРИПТО",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 10, 2024",
          ru: "10 января 2024",
          tj: "10 январи 2024",
        },
        image: img4,
        description: {
          en: "Trading cryptocurrencies or cryptotrading is a type of activity that is aimed at extracting profit from processes aimed at analyzing and forecasting the price of digital currencies.",
          ru: "Торговля криптовалютами или криптотрейдинг – это деятельность, направленная на получение прибыли путем анализа и прогнозирования цен на цифровые валюты.",
          tj: "Муомилоти криптовалюта ё криптотрейдинг як навъи фаъолиятест, ки барои ба даст овардани фоида тавассути таҳлил ва пешгӯии нархи асъорҳои рақамӣ равона шудааст.",
        },
      },
      {
        id: "5",
        title: {
          en: "HOW CRYPTO TRADING SERVICES WORK?",
          ru: "КАК РАБОТАЮТ СЕРВИСЫ КРИПТОТРЕЙДИНГА?",
          tj: "ХИЗМАТРАСОНИҲОИ КРИПТОТрейдинг ЧӢ ТАВР КОР МЕКУНАНД?",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 10, 2024",
          ru: "10 января 2024",
          tj: "10 январи 2024",
        },
        image: img5,
        description: {
          en: "If you read this article, then you are interested how crypto trading works.",
          ru: "Если вы читаете эту статью, значит вас интересует, как работает криптотрейдинг.",
          tj: "Агар шумо ин мақоларо мехонед, пас шумо мехоҳед фаҳмед, ки криптотрейдинг чӣ гуна кор мекунад.",
        },
      },
      {
        id: "6",
        title: {
          en: "HOW TO EARN MONEY WITH CRYPTO TRADING ALGORITHM?",
          ru: "КАК ЗАРАБОТАТЬ НА АЛГОРИТМЕ КРИПТОТРЕЙДИНГА?",
          tj: "ЧӢ ТАВР БО АЛГОРИТМИ КРИПТОТрейдинг ДАРОМАД ГИРИФТАН МУМКИН АСТ?",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 10, 2024",
          ru: "10 января 2024",
          tj: "10 январи 2024",
        },
        image: img6,
        description: {
          en: "If you have available funds, and you want to multiply your capital in a short time, the best opportunity for this is crypto trading.",
          ru: "Если у вас есть свободные средства и вы хотите быстро увеличить свой капитал, лучшая возможность для этого – криптотрейдинг.",
          tj: "Агар шумо маблағи дастрас дошта бошед ва хоҳед, ки сармояи худро дар муддати кӯтоҳ афзоиш диҳед, беҳтарин имконият барои ин криптотрейдинг аст.",
        },
      },
      {
        id: "10",
        title: {
          en: "HOW CAN BLOCKCHAIN BE USED FOR OWNERSHIP?",
          ru: "КАК БЛОКЧЕЙН МОЖЕТ ИСПОЛЬЗОВАТЬСЯ ДЛЯ СОБСТВЕННОСТИ?",
          tj: "БЛОКЧЕЙН ЧӢ ТАВР ДАР СОҲАИ СОҲИБИЯТ ИСТИФОДА ШУДА МЕТАВОНАД?",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 8, 2024",
          ru: "8 января 2024",
          tj: "8 январи 2024",
        },
        image: img7,
        description: {
          en: "The Blockchain system makes a way of payment faster, safer and available, in conclusion it is becoming more widespread technology of making deals between many companies.",
          ru: "Система блокчейн делает платежи быстрее, безопаснее и доступнее. В итоге, она становится более распространенной технологией заключения сделок между компаниями.",
          tj: "Системаи блокчейн пардохтҳоро тезтар, бехатартар ва дастрастар мекунад. Дар натиҷа, он ҳамчун як технология барои бастани созишномаҳо байни ширкатҳои зиёд маъмул мешавад.",
        },
      },
      {
        id: "11",
        title: {
          en: "HOW DOES BLOCKCHAIN INCREASE TRANSPARENCY?",
          ru: "КАК БЛОКЧЕЙН ПОВЫШАЕТ ПРОЗРАЧНОСТЬ?",
          tj: "БЛОКЧЕЙН ЧӢ ТАВР ШАФФОФИЯТРО АФЗОИШ МЕДИҲАД?",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 8, 2024",
          ru: "8 января 2024",
          tj: "8 январи 2024",
        },
        image: img8,
        description: {
          en: "Blockchain can be an effective solution to the problem of trust and verification. At its core, it is an independent register of digital events, which can only be changed by agreement of all participants.",
          ru: "Блокчейн может быть эффективным решением проблемы доверия и проверки. По сути, это независимый реестр цифровых событий, который можно изменить только по согласию всех участников.",
          tj: "Блокчейн метавонад як роҳи самараноки ҳалли мушкилоти эътимод ва тасдиқ бошад. Дар асл, он як феҳристи мустақили рӯйдодҳои рақамӣ мебошад, ки танҳо бо мувофиқаи ҳамаи иштирокчиён тағйир дода мешавад.",
        },
      },
      {
        id: "12",
        title: {
          en: "CRYPTO MINING: WHAT IS IT?",
          ru: "КРИПТО МАЙНИНГ: ЧТО ЭТО?",
          tj: "МАЙНИНГИ КРИПТО: ИН ЧИСТ?",
        },
        author: "ALGUAZAR",
        date: {
          en: "Jan 8, 2024",
          ru: "8 января 2024",
          tj: "8 январи 2024",
        },
        image: img9,
        description: {
          en: "Crypto-currencies have recently attracted a lot of crypto traders and crypto-investors – both experienced and quite beginners.",
          ru: "Криптовалюты в последнее время привлекли множество криптотрейдеров и криптоинвесторов – как опытных, так и новичков.",
          tj: "Дар солҳои охир, криптовалютҳо таваҷҷӯҳи бисёре аз криптотрейдерҳо ва криптоинвесторҳоро ҷалб карданд – ҳам касбиро ва ҳам шурӯъкунандагонро.",
        },
      },
    ];
  

    setCards(articles)
  }, [])

  return (
    <>
      <Header />

      <section className='md:w-[70%] w-[90%] m-auto'>
        <p className='py-3'>
          Home / <span className='font-bold'>{t('Blo.blog')}</span>
        </p>

        <h1 className='text-6xl font-bold text-center py-9'>{t('Blo.blog_title')}</h1>

        <div className='md:py-9 block md:flex justify-between gap-3'>
          {['Blo.category_1', 'Blo.category_2', 'Blo.category_3', 'Blo.category_4', 'Blo.category_5', 'Blo.category_6'].map((category, index) => (
            <div
              key={index}
              className={`md:w-[187px] my-3 md:my-0 h-[46px] flex flex-col justify-center items-center ${index === 0 ? 'bg-amber-600' : 'border-2 border-amber-600'}`}
            >
              <p className={`${index === 0 ? 'text-white' : 'text-amber-600'} font-bold`}>
                {t(category)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-[20px] mt-[100px] w-[75%] m-auto items-start">
        <img src={dit} alt="" />
        <div className="">
          <h1 className="text-[22px] text-[#161920] font-bold">
            {t("blog.header.text3")}
          </h1>
          <p className="text-[#889196] text-[16px] py-[20px] lg:w-[400px]">
            {t("blog.header.text4")}
          </p>
          <div className="flex gap-[20px]">
            <img src={group97} alt="" />
            <div className="">
              <p className="text-[#161920]">AmazMarkets</p>
              <p className="text-[#889196]">{t("blog.header.text5")}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex flex-col lg:flex-row mt-[20px] w-[75%] py-12 m-auto items-center gap-[20px]">
        <div>
          <img src={robot} alt="" />
          <div className="">
            <h1 className="text-[22px] text-[#161920] font-bold">
              {t("blog.header.text6")}
            </h1>
            <p className="text-[#889196] text-[16px] py-[20px] lg:w-[400px]">
              {t("blog.header.text7")}
            </p>
            <div className="flex items-center gap-[20px]">
              <img src={group97} alt="" />
              <div className="">
                <p className="text-[#161920]">AMAZMARKETS</p>
                <p className="text-[#889196]">{t("blog.header.text5")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-6 mt-0">
          <img src={tech} alt="" />
          <div className="">
            <h1 className="text-[22px] text-[#161920] font-bold">
              {t("blog.header.text8")}
            </h1>
            <p className="text-[#889196] text-[16px] py-[20px] lg:w-[400px]">
              {t("blog.header.text9")}
            </p>
            <div className="flex items-center gap-[20px]">
              <img src={group97} alt="" />
              <div className="">
                <p className="text-[#161920]">AMAZMARKETS</p>
                <p className="text-[#889196]">{t("blog.header.text5")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div title="Нажми для продолжения" className="w-[85%] m-auto grid grid-cols-1 md:grid-cols-2 md:py-16 lg:grid-cols-3 gap-16 p-6">
        {cards.map((card) => (
          <Link key={card.id} to={`/blog/${card.id}`}>
            <div key={card.id} className="">
              <img src={card.image} alt="" />
              <div className="">
                <h1 className="text-[22px] text-[#161920] font-bold">
                  {card.title[i18]}
                </h1>
                <p className="text-[#889196] text-[16px] py-[20px] lg:w-[400px]">
                  {card.description[i18]}
                </p>
                <div className="flex gap-[20px]">
                  <img src={group97} alt="" />
                  <div className="">
                    <p className="text-[#161920]">AMAZMARKETS</p>
                    <p className="text-[#889196]">{t("blog.header.text5")}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <img src={'pagination'} className="lg:w-[500px] m-auto mt-[50px]" alt="" /> 

      <Footer />
    </>
  )
}

export default Blog;