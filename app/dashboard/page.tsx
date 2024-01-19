// 'use client'
// import React from 'react'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import Dashboard from './Dashboard'
// import User from './User/page'
// import Deliveries from './Deliveries/page'
// import Estimate from './Estimate/page'
// import Tracking from './Tracking/page'
// import Wallet from './Wallet/page'
// import Fulfilment from './Fulfilment/page'
// import Estmate from './Estimate/page'
// import LogOut from './LogOut/page'

// type Props = {}

// const Page = (props: Props) => {
//   const [activeButton, setActiveButton] = useState('Animation')
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleButtonClick = (buttonText: string) => {
//     setActiveButton(buttonText)
//   }

//   useEffect(() => {
//     // This effect will run once when the component mounts
//     // and set the activeButton to 'Home' initially.
//     setActiveButton('Dashboard')
//   }, [])

//   let contentToShow = null

//   switch (activeButton) {
//     case 'Dashboard':
//       contentToShow = <Dashboard />
//       break
//     case 'Deliveries':
//       // Replace 'YOUR_API_KEY' with your actual OMDB API key
//       contentToShow = <Deliveries />
//       break
//     case 'Wallet':
//       // Replace 'YOUR_API_KEY' with your actual OMDB API key
//       contentToShow = <Wallet />
//       break
//     case 'Fulfilment':
//       // Replace 'YOUR_API_KEY' with your actual OMDB API key
//       contentToShow = <Fulfilment />
//       break
//     case 'Estimate':
//       // Replace 'YOUR_API_KEY' with your actual OMDB API key
//       contentToShow = <Estimate />
//       break
//     case 'Tracking':
//       // Replace 'YOUR_API_KEY' with your actual OMDB API key
//       contentToShow = <Tracking />
//       break
//     case 'Contact':
//       // Replace 'YOUR_API_KEY' with your actual OMDB API key
//       contentToShow = <User />
//       break
//     case 'LogOut':
//       // Replace this with the component/content for App Design
//       contentToShow = <LogOut />
//       // onSearch={function (searchResults: MovieResult[]): void {
//       // } }
//       break
//     default:
//       contentToShow = null
//   }

//   return (
//     <body className='bg-gray-50 dark:bg-slate-900'>
//       <div className='sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700'>
//         <div className='flex items-center py-4'>
//           <button
//             type='button'
//             className='text-gray-500 hover:text-gray-600'
//             data-hs-overlay='#application-sidebar-dark'
//             aria-controls='application-sidebar-dark'
//             aria-label='Toggle navigation'
//           >
//             <span className='sr-only'>Toggle Navigation</span>
//             <svg
//               className='w-5 h-5'
//               width='16'
//               height='16'
//               fill='currentColor'
//               viewBox='0 0 16 16'
//             >
//               <path
//                 fill-rule='evenodd'
//                 d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
//               />
//             </svg>
//           </button>

//           {/* Breadcrumb */}
//           <div className='flex items-center text-sm text-gray-800 dark:text-gray-400'>
//             <span className='ml-2'>Happie Fulfilment</span>
//             {activeButton === 'Dashboard' ||
//             activeButton === 'Deliveries' ||
//             activeButton === 'Fulfilment' ||
//             activeButton === 'Wallet' ||
//             activeButton === 'Estimate' ||
//             activeButton === 'Tracking' ||
//             activeButton === 'LogOut' ? (
//               <svg
//                 className='flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600'
//                 width='16'
//                 height='16'
//                 viewBox='0 0 16 16'
//                 fill='none'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   d='M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'
//                   stroke='currentColor'
//                   strokeWidth='2'
//                   strokeLinecap='round'
//                 />
//               </svg>
//             ) : null}
//             <span className='text-sm font-semibold truncate dark:text-gray-400'>
//               {activeButton === 'Dashboard'
//                 ? 'Dashboard'
//                 : activeButton === 'Deliveries'
//                 ? 'Deliveries'
//                 : activeButton === 'Wallet'
//                 ? 'Wallet'
//                 : activeButton === 'Fulfilment'
//                 ? 'Fulfilment'
//                 : activeButton === 'Estimate'
//                 ? 'Estimate'
//                 : activeButton === 'Tracking'
//                 ? 'Tracking'
//                 : activeButton === 'LogOut'
//                 ? 'LogOut'
//                 : ''}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div
//         id='application-sidebar-dark'
//         className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'
//       >
//         <div className='px-6'>
//           <a
//             className='flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//             href='#'
//             aria-label='Brand'
//           >
//             <img src='./assets/HappieLogo.png' alt='' />
//           </a>
//         </div>

//         <nav
//           className='hs-accordion-group p-6 w-full flex flex-col flex-wrap'
//           data-hs-accordion-always-open
//         >
//           <ul className='space-y-1.5'>
//             <li>
//               <Link
//                 className={` ${
//                   activeButton === 'Dashboard'
//                     ? 'text-blue w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl bg-gray-100 hover:bg-gray-400 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     : 'text-gray-500 w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                 } `}
//                 href='#'
//                 aria-current='page'
//                 onClick={() => handleButtonClick('Dashboard')}
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
//                   <polyline points='9 22 9 12 15 12 15 22' />
//                 </svg>
//                 Dashboard
//               </Link>
//             </li>

//             {/* <li>
//               <Link
//                 className={` ${
//                   activeButton === 'User'
//                     ? 'text-blue w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl bg-gray-100 hover:bg-gray-400 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     : 'text-gray-500 w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                  } `}
//                 href='#'
//                 aria-current='page'
//                 onClick={() => handleButtonClick('User')}
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
//                   <line x1='16' x2='16' y1='2' y2='6' />
//                   <line x1='8' x2='8' y1='2' y2='6' />
//                   <line x1='3' x2='21' y1='10' y2='10' />
//                   <path d='M8 14h.01' />
//                   <path d='M12 14h.01' />
//                   <path d='M16 14h.01' />
//                   <path d='M8 18h.01' />
//                   <path d='M12 18h.01' />
//                   <path d='M16 18h.01' />
//                 </svg>
//                 Calendar
//               </Link>
//             </li> */}
//             <li>
//               <Link
//                 className={` ${
//                   activeButton === 'Deliveries'
//                     ? 'text-blue w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl bg-gray-100 hover:bg-gray-400 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     : 'text-gray-500 w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                 } `}
//                 href='#'
//                 aria-current='page'
//                 onClick={() => handleButtonClick('Deliveries')}
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
//                   <line x1='16' x2='16' y1='2' y2='6' />
//                   <line x1='8' x2='8' y1='2' y2='6' />
//                   <line x1='3' x2='21' y1='10' y2='10' />
//                   <path d='M8 14h.01' />
//                   <path d='M12 14h.01' />
//                   <path d='M16 14h.01' />
//                   <path d='M8 18h.01' />
//                   <path d='M12 18h.01' />
//                   <path d='M16 18h.01' />
//                 </svg>
//                 Deliveries
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={` ${
//                   activeButton === 'Wallet'
//                     ? 'text-blue w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl bg-gray-100 hover:bg-gray-400 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     : 'text-gray-500 w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                 } `}
//                 href='#'
//                 aria-current='page'
//                 onClick={() => handleButtonClick('Wallet')}
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
//                   <line x1='16' x2='16' y1='2' y2='6' />
//                   <line x1='8' x2='8' y1='2' y2='6' />
//                   <line x1='3' x2='21' y1='10' y2='10' />
//                   <path d='M8 14h.01' />
//                   <path d='M12 14h.01' />
//                   <path d='M16 14h.01' />
//                   <path d='M8 18h.01' />
//                   <path d='M12 18h.01' />
//                   <path d='M16 18h.01' />
//                 </svg>
//                 Wallet
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={` ${
//                   activeButton === 'Fulfilment'
//                     ? 'text-blue w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl bg-gray-100 hover:bg-gray-400 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     : 'text-gray-500 w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                 } `}
//                 href='#'
//                 aria-current='page'
//                 onClick={() => handleButtonClick('Fulfilment')}
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
//                   <line x1='16' x2='16' y1='2' y2='6' />
//                   <line x1='8' x2='8' y1='2' y2='6' />
//                   <line x1='3' x2='21' y1='10' y2='10' />
//                   <path d='M8 14h.01' />
//                   <path d='M12 14h.01' />
//                   <path d='M16 14h.01' />
//                   <path d='M8 18h.01' />
//                   <path d='M12 18h.01' />
//                   <path d='M16 18h.01' />
//                 </svg>
//                 Fulfilment Center
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={` ${
//                   activeButton === 'Estimate'
//                     ? 'text-blue w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl bg-gray-100 hover:bg-gray-400 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     : 'text-gray-500 w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                 } `}
//                 href='#'
//                 aria-current='page'
//                 onClick={() => handleButtonClick('Estimate')}
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
//                   <line x1='16' x2='16' y1='2' y2='6' />
//                   <line x1='8' x2='8' y1='2' y2='6' />
//                   <line x1='3' x2='21' y1='10' y2='10' />
//                   <path d='M8 14h.01' />
//                   <path d='M12 14h.01' />
//                   <path d='M16 14h.01' />
//                   <path d='M8 18h.01' />
//                   <path d='M12 18h.01' />
//                   <path d='M16 18h.01' />
//                 </svg>
//                 Get Estimate
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={` ${
//                   activeButton === 'Tracking'
//                     ? 'text-blue w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl bg-gray-100 hover:bg-gray-400 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     : 'text-gray-500 w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                 } `}
//                 href='#'
//                 aria-current='page'
//                 onClick={() => handleButtonClick('Tracking')}
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
//                   <line x1='16' x2='16' y1='2' y2='6' />
//                   <line x1='8' x2='8' y1='2' y2='6' />
//                   <line x1='3' x2='21' y1='10' y2='10' />
//                   <path d='M8 14h.01' />
//                   <path d='M12 14h.01' />
//                   <path d='M16 14h.01' />
//                   <path d='M8 18h.01' />
//                   <path d='M12 18h.01' />
//                   <path d='M16 18h.01' />
//                 </svg>
//                 Track Shipment
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={` ${
//                   activeButton === 'LogOut'
//                     ? 'text-blue w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl bg-gray-100 hover:bg-gray-400 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     : 'text-gray-500 w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-xl hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600'
//                 } `}
//                 href='#'
//                 aria-current='page'
//                 onClick={() => handleButtonClick('LogOut')}
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
//                   <line x1='16' x2='16' y1='2' y2='6' />
//                   <line x1='8' x2='8' y1='2' y2='6' />
//                   <line x1='3' x2='21' y1='10' y2='10' />
//                   <path d='M8 14h.01' />
//                   <path d='M12 14h.01' />
//                   <path d='M16 14h.01' />
//                   <path d='M8 18h.01' />
//                   <path d='M12 18h.01' />
//                   <path d='M16 18h.01' />
//                 </svg>
//                 Log Out
//               </Link>
//             </li>
//             <li className='hs-accordion' id='users-accordion'>
//               <button
//                 type='button'
//                 className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//               >
//                 <svg
//                   className='flex-shrink-0 w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
//                   <circle cx='9' cy='7' r='4' />
//                   <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
//                   <path d='M16 3.13a4 4 0 0 1 0 7.75' />
//                 </svg>
//                 Users
//                 <svg
//                   className='hs-accordion-active:block ms-auto hidden w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <path d='m18 15-6-6-6 6' />
//                 </svg>
//                 <svg
//                   className='hs-accordion-active:hidden ms-auto block w-4 h-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   stroke='currentColor'
//                   stroke-width='2'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                 >
//                   <path d='m6 9 6 6 6-6' />
//                 </svg>
//               </button>

//               <div
//                 id='users-accordion-child'
//                 className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
//               >
//                 <ul
//                   className='hs-accordion-group ps-3 pt-2'
//                   data-hs-accordion-always-open
//                 >
//                   <li className='hs-accordion' id='users-accordion-sub-1'>
//                     <button
//                       type='button'
//                       className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     >
//                       Sub Menu 1
//                       <svg
//                         className='hs-accordion-active:block ms-auto hidden w-4 h-4'
//                         xmlns='http://www.w3.org/2000/svg'
//                         width='24'
//                         height='24'
//                         viewBox='0 0 24 24'
//                         fill='none'
//                         stroke='currentColor'
//                         stroke-width='2'
//                         stroke-linecap='round'
//                         stroke-linejoin='round'
//                       >
//                         <path d='m18 15-6-6-6 6' />
//                       </svg>
//                       <svg
//                         className='hs-accordion-active:hidden ms-auto block w-4 h-4'
//                         xmlns='http://www.w3.org/2000/svg'
//                         width='24'
//                         height='24'
//                         viewBox='0 0 24 24'
//                         fill='none'
//                         stroke='currentColor'
//                         stroke-width='2'
//                         stroke-linecap='round'
//                         stroke-linejoin='round'
//                       >
//                         <path d='m6 9 6 6 6-6' />
//                       </svg>
//                     </button>

//                     <div
//                       id='users-accordion-sub-1-child'
//                       className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
//                     >
//                       <ul className='pt-2 ps-2'>
//                         <li>
//                           <a
//                             className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//                             href='#'
//                           >
//                             Link 1
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//                             href='#'
//                           >
//                             Link 2
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//                             href='#'
//                           >
//                             Link 3
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </li>
//                   <li className='hs-accordion' id='users-accordion-sub-2'>
//                     <button
//                       type='button'
//                       className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//                     >
//                       Sub Menu 2
//                       <svg
//                         className='hs-accordion-active:block ms-auto hidden w-4 h-4'
//                         xmlns='http://www.w3.org/2000/svg'
//                         width='24'
//                         height='24'
//                         viewBox='0 0 24 24'
//                         fill='none'
//                         stroke='currentColor'
//                         stroke-width='2'
//                         stroke-linecap='round'
//                         stroke-linejoin='round'
//                       >
//                         <path d='m18 15-6-6-6 6' />
//                       </svg>
//                       <svg
//                         className='hs-accordion-active:hidden ms-auto block w-4 h-4'
//                         xmlns='http://www.w3.org/2000/svg'
//                         width='24'
//                         height='24'
//                         viewBox='0 0 24 24'
//                         fill='none'
//                         stroke='currentColor'
//                         stroke-width='2'
//                         stroke-linecap='round'
//                         stroke-linejoin='round'
//                       >
//                         <path d='m6 9 6 6 6-6' />
//                       </svg>
//                     </button>

//                     <div
//                       id='users-accordion-sub-2-child'
//                       className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ps-2'
//                     >
//                       <ul className='pt-2 ps-2'>
//                         <li>
//                           <a
//                             className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//                             href='#'
//                           >
//                             Link 1
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//                             href='#'
//                           >
//                             Link 2
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600'
//                             href='#'
//                           >
//                             Link 3
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {/* Display the dynamic content */}
//       <div className='mt-8 ml-0 lg:ml-64'>{contentToShow}</div>
//     </body>
//   )
// }

// export default Page

import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return <div>heyyyyb ooooooSGHDSV</div>
}

export default Page
