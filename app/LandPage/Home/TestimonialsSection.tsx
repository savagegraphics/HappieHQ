// 'use client'

// import { useState, useRef } from 'react'
// import Carousel from 'react-elastics-carousel'
// import { testimonials } from '@/utils/constants'
// import TestimonialCard from './TestimonialCard'

// // TestimonialsSection component
// function TestimonialsSection ({ testimonials }) {
//   const carouselRef = useRef(null)

//   function myArrow ({ type, onClick, isEdge }) {
//     return <span></span>
//   }

//   const breakPoints = [
//     { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
//     { width: 650, itemsToShow: 2, itemsToScroll: 1, pagination: false }
//   ]
//   return (
//     <div className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] py-16 md:py-24 bg-blue/[.03] '>
//       <div className='flex items-center justify-between w-full mb-14'>
//         <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold font-magra'>
//           User Reviews
//         </h2>
//         <div className='flex gap-3'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={1.5}
//             stroke='currentColor'
//             className='w-6 h-6 text-gray-800 bg-gray-200 pl-2 rounded-l-md hover:text-blue-[0.5] focus:text-blue-[0.5] transition cursor-pointer'
//             onClick={() => carouselRef.current.slidePrev()}
//           >
//             <path
//               stroke-linecap='round'
//               stroke-linejoin='round'
//               d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
//             />
//           </svg>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={1.5}
//             stroke='currentColor'
//             className='w-6 h-6 text-gray-800 bg-gray-200 pr-2 rounded-r-md hover:text-blue-[0.5] focus:text-blue-[0.5] transition cursor-pointer'
//             onClick={() => carouselRef.current.slideNext()}
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
//             />
//           </svg>
//         </div>
//       </div>
//       <Carousel
//         renderArrow={myArrow}
//         ref={carouselRef}
//         breakPoints={breakPoints}
//         itemPadding={[5, 12]}
//       >
//         {testimonials.map(testimonial => (
//           <TestimonialCard testimonial={testimonial} />
//         ))}
//       </Carousel>
//     </div>
//   )
// }

// export default TestimonialsSection

//   const carouselRef = useRef(null)

//   function myArrow ({ type, onClick, isEdge }) {
//     return <span></span>
//   }

//   const breakPoints = [
//     { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
//     { width: 650, itemsToShow: 2, itemsToScroll: 1, pagination: false }
//   ]
//   return (
//     <div className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] py-16 md:py-24 bg-blue/[.03] '>
//       <div className='flex items-center justify-between w-full mb-14'>
//         <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold font-magra'>
//           User Reviews
//         </h2>
//         <div className='flex gap-3'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={1.5}
//             stroke='currentColor'
//             className='w-6 h-6 text-gray-800 bg-gray-200 pl-2 rounded-l-md hover:text-blue-[0.5] focus:text-blue-[0.5] transition cursor-pointer'
//             onClick={() => carouselRef.current.slidePrev()}
//           >
//             <path
//               stroke-linecap='round'
//               stroke-linejoin='round'
//               d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
//             />
//           </svg>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={1.5}
//             stroke='currentColor'
//             className='w-6 h-6 text-gray-800 bg-gray-200 pr-2 rounded-r-md hover:text-blue-[0.5] focus:text-blue-[0.5] transition cursor-pointer'
//             onClick={() => carouselRef.current.slideNext()}
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
//             />
//           </svg>
//         </div>
//       </div>
