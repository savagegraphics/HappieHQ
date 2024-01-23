// import * as React from 'react'
// interface DashboardProps {
//   // Define your props here
// }

// function MyComponent (props: DashboardProps) {
//   return (
//     <div className='shadow-lg bg-neutral-100 rounded-[30px]'>
//       <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
//         <div className='flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0'>
//           <div className='flex flex-col max-md:max-w-full'>
//             <div className='bg-white self-stretch flex flex-col items-center pt-8 max-md:max-w-full'>
//               <div className='flex w-full max-w-[999px] items-center justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap'>
//                 <div className='text-sky-950 text-3xl font-bold my-auto'>
//                   Dashboard
//                 </div>
//                 <div className='self-stretch flex items-center justify-between gap-5'>
//                   <img
//                     loading='lazy'
//                     src='https://cdn.builder.io/api/v1/image/assets/TEMP/f51c78237bab459aad7ac04c99e2a4f55bc4d5ea7d134f377e989776b2a6fb30?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                     className='aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full my-auto'
//                   />
//                   <div className='text-sky-950 text-2xl font-bold whitespace-nowrap self-stretch aspect-square justify-center items-stretch px-5 py-4 rounded-[50%]'>
//                     D
//                   </div>
//                 </div>
//               </div>
//               <div className='bg-zinc-300 self-stretch shrink-0 h-px mt-6 max-md:max-w-full' />
//             </div>
//             <div className='self-center w-full max-w-[997px] mt-14 max-md:max-w-full max-md:mt-10'>
//               <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
//                 <div className='flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0'>
//                   <div className='bg-sky-950 grow w-full pl-7 pr-20 py-8 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5'>
//                     <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
//                       <div className='flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0'>
//                         <div className='flex flex-col items-stretch my-auto max-md:mt-10'>
//                           <div className='text-white text-2xl font-bold whitespace-nowrap'>
//                             Good Evening, David
//                           </div>
//                           <div className='text-white text-opacity-50 text-base font-semibold mt-4'>
//                             Welcome back!{' '}
//                           </div>
//                           <div className='text-white text-sm font-semibold bg-sky-400 justify-center items-stretch mt-8 pl-6 pr-8 py-2.5 rounded-xl max-md:px-5'>
//                             Start Shipping
//                           </div>
//                         </div>
//                       </div>
//                       <div className='flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0'>
//                         <div className='flex grow flex-col justify-center pl-12 rounded-[50%] items-start max-md:mt-10 max-md:pl-5'>
//                           <div className='z-[1] flex mt-0 mb-0 shrink-0 h-[174px] flex-col rounded-[50%] max-md:mb-2.5' />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0'>
//                   <div className='bg-sky-950 flex grow flex-col items-stretch w-full pl-7 pr-2.5 pt-3 pb-6 rounded-3xl max-md:mt-10 max-md:pl-5'>
//                     <img
//                       loading='lazy'
//                       srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/2a229f4f-b89d-400f-a502-ac883c4f9b52?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a229f4f-b89d-400f-a502-ac883c4f9b52?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a229f4f-b89d-400f-a502-ac883c4f9b52?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a229f4f-b89d-400f-a502-ac883c4f9b52?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a229f4f-b89d-400f-a502-ac883c4f9b52?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a229f4f-b89d-400f-a502-ac883c4f9b52?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a229f4f-b89d-400f-a502-ac883c4f9b52?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a229f4f-b89d-400f-a502-ac883c4f9b52?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                       className='aspect-[1.73] object-contain object-center w-full overflow-hidden rounded-[50%]'
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='self-center w-full max-w-[997px] mt-11 max-md:max-w-full max-md:mt-10'>
//               <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
//                 <div className='flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0'>
//                   <div className='flex grow flex-col items-stretch mt-1 max-md:max-w-full max-md:mt-10'>
//                     <div className='px-5 max-md:max-w-full'>
//                       <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
//                         <div className='flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0'>
//                           <div className='bg-white flex w-full grow flex-col items-stretch mx-auto px-8 py-5 rounded-xl max-md:mt-8 max-md:px-5'>
//                             <div className='flex justify-between gap-5 items-start'>
//                               <div className='text-sky-950 text-4xl font-bold'>
//                                 23
//                               </div>
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/d779345e3e0aa0a241280bcd9b451620ece35f1a12425653df6035384f49ec4d?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-square object-contain object-center w-5 fill-sky-950 overflow-hidden shrink-0 max-w-full'
//                               />
//                             </div>
//                             <div className='text-neutral-600 text-opacity-50 text-sm font-semibold whitespace-nowrap mt-4'>
//                               Active Shipment
//                             </div>
//                           </div>
//                         </div>
//                         <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
//                           <div className='bg-white flex w-full grow flex-col items-stretch mx-auto px-8 py-5 rounded-xl max-md:mt-8 max-md:px-5'>
//                             <div className='flex justify-between gap-5 items-start'>
//                               <div className='text-sky-950 text-4xl font-bold'>
//                                 0
//                               </div>
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/08a22ba0bd6476a5444ef1d7f8373f66a42157e3bb167b94704dc9602f22cf99?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-square object-contain object-center w-5 fill-sky-950 overflow-hidden shrink-0 max-w-full'
//                               />
//                             </div>
//                             <div className='text-neutral-600 text-opacity-50 text-sm font-semibold mt-4'>
//                               Cancelled{' '}
//                             </div>
//                           </div>
//                         </div>
//                         <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
//                           <div className='bg-white flex w-full grow flex-col items-stretch mx-auto px-7 py-5 rounded-xl max-md:mt-8 max-md:px-5'>
//                             <div className='flex justify-between gap-5 items-start'>
//                               <div className='text-sky-950 text-4xl font-bold'>
//                                 50
//                               </div>
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/6ec1bb682b653668e8ff6207d973abbe59876b31ba6d08e5b1540953448ba70f?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-square object-contain object-center w-5 fill-sky-950 overflow-hidden shrink-0 max-w-full'
//                               />
//                             </div>
//                             <div className='text-neutral-600 text-opacity-50 text-sm font-semibold whitespace-nowrap mt-4'>
//                               Completed
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className='mt-12 px-5 max-md:max-w-full max-md:mt-10'>
//                       <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
//                         <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
//                           <div className='bg-white flex w-full grow flex-col items-stretch mx-auto pt-2 pb-3.5 px-8 rounded-xl max-md:mt-8 max-md:px-5'>
//                             <div className='flex items-stretch justify-between gap-5'>
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/cd144a671d3215373b5b20b8a846cad63219677b26d2b913b204f7d371cb1a34?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-[0.98] object-contain object-center w-[47px] overflow-hidden shrink-0 max-w-full'
//                               />
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/487b5ccafa1769ec9c08fe447549fc04d8f4fa515eb8fa7f2e5851494a9fc6da?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-[1.54] object-contain object-center w-5 fill-sky-950 overflow-hidden shrink-0 max-w-full mt-2.5 self-start'
//                               />
//                             </div>
//                             <div className='text-neutral-600 text-sm font-bold mt-2'>
//                               Deliveries
//                             </div>
//                             <div className='text-neutral-600 text-opacity-80 text-xs whitespace-nowrap mt-2'>
//                               Send or Recieve an item
//                             </div>
//                           </div>
//                         </div>
//                         <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
//                           <div className='bg-white flex w-full grow flex-col items-stretch mx-auto pt-2 pb-3.5 px-8 rounded-xl max-md:mt-8 max-md:px-5'>
//                             <div className='flex items-stretch justify-between gap-5'>
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/b4157045ba725df468232ef30bbe88b50e64f3d2bd8adbc4e9c39115ae385d7d?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-[1.02] object-contain object-center w-[49px] overflow-hidden shrink-0 max-w-full'
//                               />
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8372b9a0dcd7648feda4b6c424b25de4f49bb7ae088bff11f2b1acfbb5cf3e6?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-[1.54] object-contain object-center w-5 fill-sky-950 overflow-hidden shrink-0 max-w-full mt-2.5 self-start'
//                               />
//                             </div>
//                             <div className='text-neutral-600 text-sm font-bold mt-2'>
//                               Get Estimate
//                             </div>
//                             <div className='text-neutral-600 text-opacity-80 text-xs whitespace-nowrap mt-2'>
//                               Send or Recieve an item
//                             </div>
//                           </div>
//                         </div>
//                         <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
//                           <div className='bg-white flex w-full grow flex-col items-stretch mx-auto px-7 py-3.5 rounded-xl max-md:mt-8 max-md:px-5'>
//                             <div className='flex items-stretch justify-between gap-5'>
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/5435a79dc59bf59f380f2e970f50d60e86fc78aa7a1d705cc3abe64c6ed33d7e?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-[1.05] object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full'
//                               />
//                               <img
//                                 loading='lazy'
//                                 src='https://cdn.builder.io/api/v1/image/assets/TEMP/2b7c9b9270d11db59f6c7ceafd26799921e75a088cffd4ddfc6cfd5ece973dc1?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                                 className='aspect-[1.54] object-contain object-center w-5 fill-sky-950 overflow-hidden shrink-0 max-w-full mt-1 self-start'
//                               />
//                             </div>
//                             <div className='text-neutral-600 text-sm font-bold whitespace-nowrap mt-2.5'>
//                               Track Shipments
//                             </div>
//                             <div className='text-neutral-600 text-opacity-80 text-xs mt-1.5'>
//                               Send or Recieve an item
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0'>
//                   <div className='bg-white flex w-full grow flex-col mx-auto py-4 rounded-xl items-start max-md:mt-10'>
//                     <div className='self-stretch flex flex-col items-stretch px-6 max-md:px-5'>
//                       <div className='flex items-center justify-between gap-5'>
//                         <div className='text-sky-950 text-lg font-bold my-auto'>
//                           Notifications
//                         </div>
//                         <div className='text-white text-xs font-semibold whitespace-nowrap bg-sky-950 self-stretch aspect-[2.4761904761904763] justify-center items-stretch px-3 py-2 rounded-md'>
//                           See all
//                         </div>
//                       </div>
//                       <div className='flex items-center justify-between gap-5 mt-9'>
//                         <img
//                           loading='lazy'
//                           src='https://cdn.builder.io/api/v1/image/assets/TEMP/8b3e4977df6351eafca3c0b793d1f6ab6c0d1e4ac3e8cce5ac89cd7249c1835d?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                           className='aspect-[1.03] object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full my-auto'
//                         />
//                         <div className='self-stretch flex grow basis-[0%] flex-col items-stretch'>
//                           <div className='text-neutral-600 text-sm font-bold'>
//                             Arriived Package
//                           </div>
//                           <div className='text-neutral-600 text-opacity-50 text-xs font-semibold mt-2.5'>
//                             Percel 234334 has been deliverd
//                           </div>
//                           <div className='text-neutral-600 text-opacity-50 text-xs font-semibold mt-3.5'>
//                             2 minutes ago
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className='bg-neutral-600 bg-opacity-30 self-stretch shrink-0 h-px mt-3.5' />
//                     <div className='flex justify-between gap-5 ml-5 mt-3.5 items-start max-md:ml-2.5'>
//                       <img
//                         loading='lazy'
//                         src='https://cdn.builder.io/api/v1/image/assets/TEMP/e65e2422e546461b8be11ee09697ecc466d99c51aab386459b08cf73139f0a0d?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                         className='aspect-[1.03] object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full mt-1.5'
//                       />
//                       <div className='self-stretch flex grow basis-[0%] flex-col items-stretch'>
//                         <div className='text-neutral-600 text-sm font-bold'>
//                           Order confirmation
//                         </div>
//                         <div className='text-neutral-600 text-opacity-50 text-xs font-semibold whitespace-nowrap mt-3'>
//                           Kayode wants to send you an item
//                         </div>
//                         <div className='flex items-stretch justify-between gap-4 mt-2.5'>
//                           <div className='text-white text-xs font-semibold whitespace-nowrap bg-cyan-900 bg-opacity-50 grow justify-center items-stretch pl-4 pr-6 py-2 rounded-md max-md:pr-5'>
//                             Decline
//                           </div>
//                           <div className='text-white text-xs font-semibold whitespace-nowrap bg-sky-950 grow justify-center items-stretch px-5 py-2 rounded-md'>
//                             Accept
//                           </div>
//                         </div>
//                         <div className='text-neutral-600 text-opacity-50 text-xs font-semibold mt-3'>
//                           2 minutes ago
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='self-center w-full max-w-[996px] mt-14 max-md:max-w-full max-md:mt-10'>
//               <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
//                 <div className='flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0'>
//                   <div className='bg-white flex grow flex-col items-stretch w-full pl-6 pr-4 py-6 rounded-xl max-md:max-w-full max-md:mt-10 max-md:pl-5'>
//                     <div className='flex items-center justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap'>
//                       <div className='flex flex-col items-stretch my-auto'>
//                         <div className='text-sky-950 text-2xl font-bold'>
//                           Deliveries
//                         </div>
//                         <div className='text-neutral-600 text-sm font-semibold whitespace-nowrap mt-12 max-md:mt-10'>
//                           Relaxer Cream 2 set
//                         </div>
//                       </div>
//                       <div className='self-stretch flex flex-col items-end'>
//                         <div className='text-white text-xs font-semibold whitespace-nowrap bg-sky-950 aspect-[2.607142857142857] justify-center items-stretch mr-2.5 pl-3 pr-4 py-2.5 rounded-md'>
//                           View all
//                         </div>
//                         <div className='text-neutral-600 text-sm font-semibold self-stretch whitespace-nowrap mt-10'>
//                           2 Packets - 30 kg
//                         </div>
//                       </div>
//                     </div>
//                     <div className='bg-sky-400 bg-opacity-30 shrink-0 h-1 mt-3 max-md:max-w-full' />
//                     <div className='bg-sky-950 bg-opacity-70 z-[1] shrink-0 h-1 -mt-1 max-md:max-w-full' />
//                     <div className='flex justify-between gap-5 mt-2.5 px-0.5 items-start max-md:max-w-full max-md:flex-wrap'>
//                       <div className='flex flex-col items-stretch'>
//                         <div className='text-neutral-600 text-opacity-70 text-xs font-semibold'>
//                           Arrived Warehouse
//                         </div>
//                         <div className='text-neutral-600 text-sm font-semibold whitespace-nowrap mt-8'>
//                           Relaxer Cream 2 set
//                         </div>
//                       </div>
//                       <div className='flex flex-col items-stretch'>
//                         <div className='text-neutral-600 text-opacity-70 text-xs font-semibold whitespace-nowrap'>
//                           Ext Delivery 12 Dec 2022 11:00PM
//                         </div>
//                         <div className='text-neutral-600 text-sm font-semibold whitespace-nowrap mt-7 self-end'>
//                           2 Packets - 30 kg
//                         </div>
//                       </div>
//                     </div>
//                     <div className='bg-sky-400 bg-opacity-30 shrink-0 h-1 mt-3 max-md:max-w-full' />
//                     <div className='z-[1] flex justify-between gap-5 -mt-1 items-start max-md:max-w-full max-md:flex-wrap'>
//                       <div className='flex grow basis-[0%] flex-col items-stretch'>
//                         <div className='bg-sky-950 bg-opacity-70 shrink-0 h-1' />
//                         <div className='text-neutral-600 text-opacity-70 text-xs font-semibold mt-2.5'>
//                           Arrived Warehouse
//                         </div>
//                         <div className='text-neutral-600 text-sm font-semibold mt-7'>
//                           Relaxer Cream 2 set
//                         </div>
//                       </div>
//                       <div className='flex grow basis-[0%] flex-col items-stretch mt-4'>
//                         <div className='text-neutral-600 text-opacity-70 text-xs font-semibold whitespace-nowrap'>
//                           Ext Delivery 12 Dec 2022 11:00PM
//                         </div>
//                         <div className='text-neutral-600 text-sm font-semibold whitespace-nowrap mt-6 self-end'>
//                           2 Packets - 30 kg
//                         </div>
//                       </div>
//                     </div>
//                     <div className='bg-sky-400 bg-opacity-30 shrink-0 h-1 mt-3 max-md:max-w-full' />
//                     <div className='bg-sky-950 bg-opacity-70 z-[1] shrink-0 h-1 -mt-1 max-md:max-w-full' />
//                     <div className='flex justify-between gap-5 mt-2.5 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2'>
//                       <div className='text-neutral-600 text-opacity-70 text-xs font-semibold'>
//                         Arrived Warehouse
//                       </div>
//                       <div className='text-neutral-600 text-opacity-70 text-xs font-semibold'>
//                         Ext Delivery 12 Dec 2022 11:00PM
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0'>
//                   <div className='bg-white flex grow flex-col items-stretch w-full pb-5 rounded-xl max-md:mt-10'>
//                     <img
//                       loading='lazy'
//                       srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/33cb46963a8e150470d5fda8948036a2d48c0deef9ca456156bb1035ac799689?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33cb46963a8e150470d5fda8948036a2d48c0deef9ca456156bb1035ac799689?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33cb46963a8e150470d5fda8948036a2d48c0deef9ca456156bb1035ac799689?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33cb46963a8e150470d5fda8948036a2d48c0deef9ca456156bb1035ac799689?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33cb46963a8e150470d5fda8948036a2d48c0deef9ca456156bb1035ac799689?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33cb46963a8e150470d5fda8948036a2d48c0deef9ca456156bb1035ac799689?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33cb46963a8e150470d5fda8948036a2d48c0deef9ca456156bb1035ac799689?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33cb46963a8e150470d5fda8948036a2d48c0deef9ca456156bb1035ac799689?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                       className='aspect-[2.31] object-contain object-center w-full overflow-hidden'
//                     />
//                     <div className='flex flex-col items-stretch mt-3.5 px-6 max-md:px-5'>
//                       <div className='text-sky-950 text-base font-bold'>
//                         Closest shipping
//                       </div>
//                       <div className='flex items-stretch justify-between gap-5 mt-6'>
//                         <div className='flex flex-col'>
//                           <div className='self-stretch flex items-stretch justify-between gap-3'>
//                             <img
//                               loading='lazy'
//                               src='https://cdn.builder.io/api/v1/image/assets/TEMP/9d988bbbd81058eaaa5e31824d67c57f91131d2965b90e8cc63b98f8e29f788b?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                               className='aspect-square object-contain object-center w-[11px] overflow-hidden shrink-0 max-w-full'
//                             />
//                             <div className='text-neutral-600 text-xs font-bold my-auto'>
//                               Relaxer Cream 2x
//                             </div>
//                           </div>
//                           <div className='self-stretch flex items-stretch justify-between gap-4'>
//                             <div className='bg-neutral-400 w-px shrink-0 h-[26px]' />
//                             <div className='text-neutral-600 text-opacity-50 text-xs font-semibold my-auto'>
//                               Has arrivd at Oshawale gateway
//                             </div>
//                           </div>
//                           <div className='self-stretch flex items-stretch justify-between gap-3'>
//                             <img
//                               loading='lazy'
//                               src='https://cdn.builder.io/api/v1/image/assets/TEMP/9d988bbbd81058eaaa5e31824d67c57f91131d2965b90e8cc63b98f8e29f788b?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                               className='aspect-square object-contain object-center w-[11px] overflow-hidden shrink-0 max-w-full'
//                             />
//                             <div className='text-neutral-600 text-xs font-bold'>
//                               Tumeric scrub
//                             </div>
//                           </div>
//                           <div className='self-stretch flex items-stretch justify-between gap-4'>
//                             <div className='bg-neutral-400 w-px shrink-0 h-[26px]' />
//                             <div className='text-neutral-600 text-opacity-50 text-xs font-semibold my-auto'>
//                               Has arrivd at lLekki gateway
//                             </div>
//                           </div>
//                           <div className='self-stretch flex items-stretch justify-between gap-3'>
//                             <img
//                               loading='lazy'
//                               src='https://cdn.builder.io/api/v1/image/assets/TEMP/0da92585d6d3b7f2c08f607aafeb552d46e3a7e439fdd095b36e62469275ee18?apiKey=dc8dd4979d3a4dac86c9b8737bec6961&'
//                               className='aspect-square object-contain object-center w-[11px] overflow-hidden shrink-0 max-w-full'
//                             />
//                             <div className='text-neutral-600 text-xs font-bold grow whitespace-nowrap self-start'>
//                               Durex Condoms 50,00pacs
//                             </div>
//                           </div>
//                           <div className='text-neutral-600 text-opacity-50 text-xs font-semibold self-center whitespace-nowrap mt-1.5'>
//                             Has arrivd at Forte Oil gateway
//                           </div>
//                         </div>
//                         <div className='flex flex-col items-stretch self-start'>
//                           <div className='text-neutral-600 text-xs font-bold whitespace-nowrap'>
//                             Sept 22{' '}
//                           </div>
//                           <div className='text-neutral-600 text-xs font-bold whitespace-nowrap mt-7'>
//                             Sept 23{' '}
//                           </div>
//                           <div className='text-neutral-600 text-xs font-bold whitespace-nowrap mt-8'>
//                             Sept 24{' '}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MyComponent
'use client'
import React from 'react'
// import Hero from './Merchant/Hero'
// import Cards from './Merchant/Cards'
// import Grid fr'use client''use client'om './Merchant/Grid'
// import Container from './Merchant/Container'
import UserHero from './Merchant/UserHero'
// import Two from './Components/Two'
// import Cards from './Merchant/Cards'
// import RoutePrices from './Merchant/RoutePrices'
// import Grid from './Merchant/Grid'
// import Container from './Merchant/Container'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='mx-8 my-8'>
      <UserHero />
      {/* <Cards />
      <Grid />
      <Container /> */}
      {/* <div className='lg:flex lg:-mx-6 lg:my-6'>
        <div className='lg:w-4/6 lg:px-6'>
          <Cards />
        </div>

        <div className='mt-8 lg:w-2/6 lg:mt-0 lg:mr-4'>hy</div>
      </div> */}
      {/* <Hero />
      <Cards />+
      <Grid />
      <Container /> */}
    </div>
  )
}

export default Dashboard
