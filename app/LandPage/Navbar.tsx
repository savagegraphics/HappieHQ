// import React from 'react'

// type Props = {}

// const Navbar = (props: Props) => {
//   return <div>hey </div>
// }

// export default Navbar

// NEXTUI

// TABS

// import React from "react";
// import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

// export default function App() {
//   const [selected, setSelected] = React.useState("photos");

//   return (
//     <div className="flex w-full flex-col">
//       <Tabs
//         aria-label="Options"
//         selectedKey={selected}
//         onSelectionChange={setSelected}
//       >
//         <Tab key="photos" title="Photos">
//           <Card>
//             <CardBody>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </CardBody>
//           </Card>
//         </Tab>
//         <Tab key="music" title="Music">
//           <Card>
//             <CardBody>
//               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </CardBody>
//           </Card>
//         </Tab>
//         <Tab key="videos" title="Videos">
//           <Card>
//             <CardBody>
//               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </CardBody>
//           </Card>
//         </Tab>
//       </Tabs>
//     </div>
//   );
// }

// ACCORDION

// import React from "react";
// import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

// export default function App() {
//   const [selected, setSelected] = React.useState("photos");

//   return (
//     <div className="flex w-full flex-col">
//       <Tabs
//         aria-label="Options"
//         selectedKey={selected}
//         onSelectionChange={setSelected}
//       >
//         <Tab key="photos" title="Photos">
//           <Card>
//             <CardBody>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </CardBody>
//           </Card>
//         </Tab>
//         <Tab key="music" title="Music">
//           <Card>
//             <CardBody>
//               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </CardBody>
//           </Card>
//         </Tab>
//         <Tab key="videos" title="Videos">
//           <Card>
//             <CardBody>
//               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </CardBody>
//           </Card>
//         </Tab>
//       </Tabs>
//     </div>
//   );
// }

// DIVIDER

// import React from "react";
// import {Divider} from "@nextui-org/react";

// export default function App() {
//   return (
//     <div className="max-w-md">
//       <div className="space-y-1">
//         <h4 className="text-medium font-medium">NextUI Components</h4>
//         <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
//       </div>
//       <Divider className="my-4" />
//       <div className="flex h-5 items-center space-x-4 text-small">
//         <div>Blog</div>
//         <Divider orientation="vertical" />
//         <div>Docs</div>
//         <Divider orientation="vertical" />
//         <div>Source</div>
//       </div>
//     </div>
//   );
// }

// PRELINE NAVBAR

// <!-- ========== HEADER ========== -->
// <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-slate-900">
//   <nav class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
//     <div class="flex items-center justify-between">
//       <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
//       <div class="sm:hidden">
//         <button type="button" class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
//           <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//             <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
//           </svg>
//           <svg class="hs-collapse-open:block flex-shrink-0 hidden size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//     <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
//       <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
//         <a class="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#" aria-current="page">Landing</a>
//         <a class="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Account</a>
//         <a class="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Work</a>
//         <a class="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Blog</a>

//         <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
//           <button type="button" class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
//             Dropdown
//             <svg class="flex-shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
//           </button>

//           <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
//             <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//               About
//             </a>
//             <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
//               <button type="button" class="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
//                 Sub Menu
//                 <svg class="sm:-rotate-90 flex-shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
//               </button>

//               <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
//                 <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//                   About
//                 </a>
//                 <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//                   Downloads
//                 </a>
//                 <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//                   Team Account
//                 </a>
//               </div>
//             </div>

//             <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//               Downloads
//             </a>
//             <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//               Team Account
//             </a>
//           </div>
//         </div>

//         <a class="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
//           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
//           Log in
//         </a>
//       </div>
//     </div>
//   </nav>
// </header>
// <!-- ========== END HEADER ========== -->

// <!-- Nav -->
//   <nav class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
//     <div class="relative flex flex-row justify-between items-center gap-x-8 border-t py-4 sm:py-0 dark:border-slate-700">
//       <div class="flex items-center w-full sm:w-[auto]">
//         <span class="font-semibold whitespace-nowrap text-gray-800 border-e border-e-white/[.7] sm:border-transparent pe-4 me-4 sm:py-3.5 dark:text-white">My project</span>

//         <div class="w-full sm:hidden">
//           <button type="button" class="hs-collapse-toggle group w-full inline-flex justify-between items-center gap-2 rounded-lg font-medium text-gray-600 border border-gray-200 align-middle py-1.5 px-2 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/[.5] transition" data-hs-collapse="#secondary-nav-toggle" aria-controls="secondary-nav-toggle" aria-label="Toggle navigation">
//             Overview
//             <svg class="hs-dropdown-open:rotate-180 flex-shrink-0 size-4 transition group-hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
//           </button>
//         </div>
//       </div>

//       <div id="secondary-nav-toggle" class="hs-collapse hidden overflow-hidden transition-all duration-300 absolute top-16 end-0 w-full rounded-lg bg-white sm:block sm:static sm:top-0 sm:w-full sm:max-h-full sm:bg-transparent sm:overflow-visible">
//         <div class="flex flex-col py-2 sm:flex-row sm:justify-end sm:gap-y-0 sm:gap-x-6 sm:py-0">
//           <a class="text-sm font-semibold text-blue-600 py-2 sm:py-3.5 dark:text-white dark:hover:text-white" href="#">Overview</a>
//           <a class="text-sm font-medium text-gray-800 hover:text-blue-600 sm:border-b-2 border-b-transparent py-2 sm:py-3.5 dark:text-gray-400 dark:hover:text-white" href="#">Features</a>
//           <a class="text-sm font-medium text-gray-800 hover:text-blue-600 sm:border-b-2 border-b-transparent py-2 sm:py-3.5 dark:text-gray-400 dark:hover:text-white" href="#">Platforms</a>
//           <a class="text-sm font-medium text-gray-800 hover:text-blue-600 sm:border-b-2 border-b-transparent py-2 sm:py-3.5 dark:text-gray-400 dark:hover:text-white" href="#">Pricing</a>
//         </div>
//       </div>
//     </div>
//   </nav>
//   <!-- End Nav -->
