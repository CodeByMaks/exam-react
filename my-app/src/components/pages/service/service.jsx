import React from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import social from "../../../assets/facebook-logo (1) (1).png";
import instagram from '../../../assets/instagram-logo.png';
import linkedin from '../../../assets/linkedin-logo 1.png';
import telegramm from '../../../assets/instagram-logo (1).png';
import Comments from '../../layout/section/comment';
import mac from '../../../assets/Mackbook Pro Mockup 2.png';
import bulb from '../../../assets/bulb 1.png';
import group455 from '../../../assets/Group 455.png';
import map from '../../../assets/map.png';
import group763 from '../../../assets/Group 763.png';
import usa from '../../../assets/image 20.png';
import group1002 from '../../../assets/Group 1002.png';
import group1014 from '../../../assets/Group 1014.png';
import cell from '../../../assets/cell.png';

const Service = () => {
  return (
    <>
      <Header />

       <section className="bg-[#141B23] rounded-b-[10%]">
                <div className='w-[70%] m-auto py-4'>
                  <h1 className='text-gray-500'>Home / services / UTILITY BILLS & INVOiCES</h1>
                </div>
      
                <div className="w-[70%] m-auto block md:flex gap-18 justify-between py-10">
                  <div className="text-white w-full md:w-[50%] text-center md:text-left flex flex-col items-start gap-12">
                    <h1 className="md:text-4xl text-2xl font-bold">
                     Utility Bills for Amazon Account Verification
                    </h1>
      
                    <p className="text-[20px] text-gray-400">
                      You will receive complete documents in English 
                      ready to send out.
                    </p>
      
                    <button className="bg-amber-600 py-2 md:px-6 px-16 rounded">
                    ➡️ GET STARTED
                    </button>
      
                    <div className="hidden md:flex gap-3">
                      <img src={social} alt="Social Media" />
                      <img src={instagram} alt="Social Media" />
                      <img src={linkedin} alt="Social Media" />
                      <img src={telegramm} alt="Social Media" />
                    </div>
                  </div>
      
                  <div className="mt-15 md:mt-0">
                    <img src={mac} alt="Macbook Mockup" />
                  </div>
                </div>
      
                <div className="text-center text-white">
                  <h1>SCROLL</h1>
                  <p>|</p>
                </div>
      </section>

      <section className="px-6 md:px-16 py-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-10 mb-8">
          Documents ready to send out
        </h2>
        <div className="flex flex-col dark:text-black md:flex-row justify-center items-center gap-6">
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <img src={bulb} className="w-10 h-10" />
              <span className="font-semibold">Electricity Bill</span>
            </div>
            <div className="bg-white shadow-lg md:mr-11 mr-0 rounded-2xl p-6 flex items-center gap-4">
              <img src={bulb} className="w-10 h-10" />
              <span className="font-semibold">Gas/Water Bill</span>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <img src={bulb} className="w-10 h-10" />
              <span className="font-semibold">Internet Bill</span>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={group455} />
          </div>

          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <img src={bulb} className="w-10 h-10" />
              <span className="font-semibold">Rapidity</span>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 md:ml-10 ml-0 flex items-center gap-4">
              <img src={bulb} className="w-10 h-10" />
              <span className="font-semibold">English Language</span>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <img src={bulb} className="w-10 h-10" />
              <span className="font-semibold">Manual</span>
            </div>
          </div>
        </div>
      </section>

      <section className='lg:mb-16 mb-6'>
        <div className="w-[70%] m-auto flex flex-col lg:mt-20 lg:flex-row items-center max-w-4xl mx-auto p-4">
          <div className="lg:w-1/2 flex justify-center">
            <img src={map} alt="map" className=" lg:mr-20  h-auto" />
          </div>

          <div className="lg:w-[80%] p-6">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Leave a request to get your utility bill
            </h2>
            <p className="text-[#889196] lg:text-[20px] mb-6">
              It will take you less than sixty seconds. A member of our team
              will contact you shortly after.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Telephone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="w-[300px] bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-12 space-y-12">
        <div className="flex flex-col md:flex-row lg:justify-center items-center gap-1">
          <div className="md:w-1/2 lg:ml-[17%] text-center lg:w-[500px] md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Invoices for Amazon from a US supplier with a call
            </h2>
            <p className="text-[#889196] text-[20px] mb-6">
              You will receive complete documents in English ready to send out.
            </p>
            <button className="bg-orange-500 text-white py-2 px-11 rounded shadow-md">
              Get an invoice
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={group763} alt="Invoice" className="" />
          </div>
        </div>

        <div className="dark:bg-[#222F3E] bg-white flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 lg:w-[450px] lg:ml-[18%] lg:mt-20 lg:mb-20 text-center md:text-left">
            <h2 className="text-2xl lg:text-[29px] font-bold mb-4">
              Invoices from a US supplier
            </h2>
            <p className="text-[#889196]">
              This is an officially registered US wholesale supplier: The whole
              process will take place within the US law and complying with all
              Amazon requirements.
            </p>
            <br />
            <p className="text-[#889196] mt-2">
              You receive invoices with all the instructions in 1-2 days after
              ordering. The supplier can also answer Amazon call on invoices.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={usa} alt="USA Map" className="dark:opacity-40" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-12 m-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Invoices can unlock</h2>
        <p className="text-[#889196] max-w-1xl mx-auto mb-8">
          If you receive an invoice request, then you can do more <br />
          than just unlocking your account.
        </p>
        <div className="w-[70%] m-auto grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="flex mt-10 flex-col items-center justify-self-center text-center">
            <img src={group1002} alt="Account" className="mb-4" />

            <p className="text-[#889196] text-sm mt-2">
              Invoice is requested to verify <br />
              your account or in connection with some violations.
            </p>
          </div>
          <div className="flex mt-10 flex-col items-center text-center">
            <img src={group1002} alt="Listing" className="mb-4" />

            <p className="text-[#889196] text-sm mt-2">
              If you want permission to <br /> add a listing to your inventory.
            </p>
          </div>
          <div className="flex mt-10 flex-col items-center text-center">
            <img src={group1002} alt="Category" className="mb-4" />

            <p className="text-[#889196] text-sm mt-2">
              If you want to have access <br /> to a certain category.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-12 flex flex-col md:flex-row items-center gap-8">
        <img src={group1014} alt="Amazon Call" className=" md:w-1/2" />
        <div className="md:w-1/2 text-center  lg:w-[400px] md:text-left">
          <h2 className="text-2xl lg:text-3xl lg:my-[50px] font-bold mb-4">
            We will answer an Amazon call on invoices
          </h2>
          <p className="text-[#889196] text-[20px] lg:w-[400px]">
            In 90% of cases, Amazon call suppliers on invoices. If the company
            doesn’t manage to contact the supplier, then you will receive an
            email that Amazon was “unable to verify the supplier”.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:mb-14 mb-6 lg:mt-20 lg:flex-row items-center max-w-4xl mx-auto p-4">
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Leave a request to get your utility bill
            </h2>
            <p className="text-[#889196] lg:text-[20px] mb-6">
              It will take you less than sixty seconds. A member of our team
              will contact you shortly after.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Telephone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition">
                Send
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={cell} alt="map" className=" lg:ml-20 h-auto" />
          </div>
        </div>
      </section>

      <Comments />

      <Footer />
    </>
  )
}

export default Service