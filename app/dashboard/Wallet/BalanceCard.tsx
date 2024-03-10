import React from 'react'

type Props = {}

const BalanceCard = (props: Props) => {
  return (
    <div className='mx-auto overflow-hidden container flex justify-center py-8 px-4'>
      <div className='flex flex-col space-y-8 w-full px-16 max-w-xl'>
        <div className='bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-[23rem] sm:w-20rem lg:w-96 p-6 rounded-xl shadow-md'>
          <div className='h-full flex flex-col justify-between'>
            <div className='flex items-start justify-between space-x-4'>
              <div className=' text-xl font-normal tracking-tigh'>
                Main Account
              </div>

              <div className='inline-flex flex-col items-center justify-center'>
                <svg
                  width='46'
                  height='44'
                  viewBox='0 0 46 44'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M26.933 3.36042C26.6386 3.13028 26.2994 2.95828 25.9351 2.85438C25.5707 2.75047 25.1884 2.71673 24.8104 2.75509C24.4323 2.79345 24.0659 2.90317 23.7325 3.07788C23.399 3.25259 23.1051 3.48882 22.8678 3.77292L14.5417 13.7499H18.2217L25.1131 5.48892L27.3269 7.21867L21.7781 13.7499H25.4811L29.555 8.95392L34.4943 12.8122L33.6375 13.7499H34.5C35.3574 13.7491 36.2101 13.8705 37.03 14.1102C37.3432 13.5482 37.4428 12.8996 37.3117 12.2752C37.1806 11.6507 36.827 11.0892 36.3113 10.6864L26.933 3.36042ZM8.625 15.1249C8.625 14.7602 8.77645 14.4105 9.04603 14.1526C9.31562 13.8948 9.68125 13.7499 10.0625 13.7499H11.6668L13.9524 10.9999H10.0625C8.91875 10.9999 7.82185 11.4345 7.0131 12.2081C6.20435 12.9817 5.75 14.0309 5.75 15.1249V31.6249C5.75 33.4483 6.50725 35.197 7.85517 36.4863C9.20309 37.7756 11.0313 38.4999 12.9375 38.4999H34.5C36.025 38.4999 37.4875 37.9205 38.5659 36.889C39.6442 35.8576 40.25 34.4586 40.25 32.9999V21.9999C40.25 20.5412 39.6442 19.1423 38.5659 18.1108C37.4875 17.0794 36.025 16.4999 34.5 16.4999H10.0625C9.68125 16.4999 9.31562 16.3551 9.04603 16.0972C8.77645 15.8393 8.625 15.4896 8.625 15.1249ZM30.1875 27.4999H33.0625C33.4437 27.4999 33.8094 27.6448 34.079 27.9026C34.3486 28.1605 34.5 28.5102 34.5 28.8749C34.5 29.2396 34.3486 29.5893 34.079 29.8472C33.8094 30.1051 33.4437 30.2499 33.0625 30.2499H30.1875C29.8063 30.2499 29.4406 30.1051 29.171 29.8472C28.9014 29.5893 28.75 29.2396 28.75 28.8749C28.75 28.5102 28.9014 28.1605 29.171 27.9026C29.4406 27.6448 29.8063 27.4999 30.1875 27.4999Z'
                    fill='white'
                  />
                </svg>

                <div className='font-semibold text-white'>Wallet</div>
              </div>
            </div>

            <div className='inline-block w-12 h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden'>
              <div className='relative w-full h-full grid grid-cols-2 gap-1'>
                <div className='absolute border border-gray-900 rounded w-4 h-6 left-4 top-1'></div>
                <div className='border-b border-r border-gray-900 rounded-br'></div>
                <div className='border-b border-l border-gray-900 rounded-bl'></div>
                <div className=''></div>
                <div className=''></div>
                <div className='border-t border-r border-gray-900 rounded-tr'></div>
                <div className='border-t border-l border-gray-900 rounded-tl'></div>
              </div>
            </div>

            <div className=''>
              <div className='text-xs font-semibold tracking-tight'>
                balance
              </div>

              <div className='text-2xl font-semibold'>$50</div>
            </div>
          </div>
        </div>
        {/* <div className='relative'>
          <div className='absolute rounded-xl right-10 flex space-x-2 items-start bg-white text-gray-900 border-gray-200 shadow-2xl -mt-12 w-72 px-2 py-3'>
            <div className='flex-initial'>
              <div className='inline-flex items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300'>
                <div className='p-2'>
                  <svg
                    className='h-4 w-4 text-white opacity-90'
                    width='24'
                    height='24'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                    <path
                      d='M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className='flex-1 inline-flex items-start justify-between rounded-xl'>
              <div>
                <h2 className='text-xs font-semibold tracking-tight'>
                  Loyalty program
                </h2>
                <p className='text-xs text-gray-500 font-light'>
                  You received $5 credit
                </p>
              </div>

              <div className='text-xs text-gray-400'>17:15</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default BalanceCard
