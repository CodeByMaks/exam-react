import React, { useState } from 'react';
import { Modal } from 'antd';
import icon from '../../assets/logo (2).png';
import Layot from './layot';
import burger from '../../assets/menu (1) 1.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='py-6 bg-[#222F3E]'>
      <nav className='w-[70%] m-auto flex justify-between items-center'>

        <img src={icon} alt="Logo" className="md:w-[154px] md:h-[32px] w-[150px] h-[30px]" />

        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <img src={burger} alt="Menu" className="w-8 h-8" />
        </button>

        <div className="hidden lg:block">
          <Layot />
        </div>

        <Modal
          open={isOpen}
          onCancel={() => setIsOpen(false)}
          footer={null}
          closable={false}
        >
          <div className="flex flex-col items-center gap-6">
            <Layot />
          </div>
        </Modal>
      </nav>
    </header>
  );
}

export default Header;
