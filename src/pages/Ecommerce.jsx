import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'
import { IoIosMore } from 'react-icons/io';
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData,weeklyStats,medicalproBranding  } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import ecombanner from '../data/ecombanner.jpg'
import '../App.css'
import product9 from '../data/product9.jpg';




const Ecommerce = () => {

  const {currentColor} = useStateContext();

  return (
    <div className='mt-24 '>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
       h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-1 bg-no-repeat bg-cover bg-center bgforecom'>

          <div className='flex justify-between items-center'>

            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>&#8377;63448.78</p>
            </div>

          </div>


          <div className='mt-6'>
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>

        </div>

        <div className='flex m-1 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button type='button'
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg
                }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>

              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>

              </p>

              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p>

            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap  justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-800'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue updates</p>
            <div className='flex items-center gap-4'>

              <p className='flex gap-2 items-center text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoDotFill />
                </span>
                <span>
                  Expense
                </span>
              </p>

              <p className='flex gap-2 items-center text-green-400 hover:drop-shadow-xl'>
                <span>
                  <GoDotFill />
                </span>
                <span>
                  Budget
                </span>
              </p>


            </div>
          </div>


          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>&#8377;93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>


              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>&#8377;48,438</span>

                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>


              <div className='mt-5'>
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}

                />
              </div>

              <div className='mt-10'>
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>

            </div>


            <div>
                <Stacked width="320px" height="360px"/>
            </div>

          </div>

        </div>
      </div>




 {/* try start */}
 <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Branding</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 AUG, 2023
          </p>

          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
      </div>

 {/* try finish */}


    </div>
  )
}

export default Ecommerce