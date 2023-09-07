import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/me.jpg'
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFun, icon, color, dotColor }) => (
  <TooltipComponent content={title}
    position='BottomCenter'>
    <button
      type='button'
      onClick={customFun}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >

      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}

    </button>

  </TooltipComponent>

)

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor,cartClicked, setcartClicked } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  useEffect(() => {

    if (screenSize <= 900) {
      setActiveMenu(false)
    }
    else {
      setActiveMenu(true)
    }

  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title="Menu"
        customFun={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />} />


      <div className='flex'>
        <NavButton
          title="Cart"
          customFun={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />} />

        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFun={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />} />

        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFun={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />} />


        <TooltipComponent content="Profile" position='BottomCenter'>

          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}>
            <img className='rounded-full w-8 h-8' src={avatar} />
            <p> <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 ml-1 font-bold text-14'>Vysakh</span> </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>

        </TooltipComponent>


        {isClicked.cart && cartClicked && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}




      </div>
    </div>
  )
}

export default Navbar