'use client'
import React from 'react'
import Link from 'next/link'
// import SignIn from '@/app/dashboard/Components/SignIn'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <body className='dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16'>
        <main className='w-full max-w-md mx-auto p-6'>
          <div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-4 sm:p-7'>
              <div className='text-center'>
                <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                  Sign in
                </h1>
                <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                  Don&apos;t have an account yet?
                  <Link
                    className='text-blue-600 decoration-2 ml-4 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='/Auth/SignUp'
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              <div className='mt-5'>
                <button
                  type='button'
                  className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                >
                  <svg
                    className='w-4 h-auto'
                    width='46'
                    height='47'
                    viewBox='0 0 46 47'
                    fill='none'
                  >
                    <path
                      d='M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z'
                      fill='#4285F4'
                    />
                    <path
                      d='M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z'
                      fill='#34A853'
                    />
                    <path
                      d='M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z'
                      fill='#FBBC05'
                    />
                    <path
                      d='M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z'
                      fill='#EB4335'
                    />
                  </svg>
                  Sign in with Google
                </button>

                <div className='py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600'>
                  Or
                </div>
                <form>
                  <div className='grid gap-y-4'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm mb-2 dark:text-white'
                      >
                        Email address
                      </label>
                      <div className='relative'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='py-3 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                          required
                          aria-describedby='email-error'
                        />
                        <div className='absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
                          <svg
                            className='h-5 w-5 text-red-500'
                            width='16'
                            height='16'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                            aria-hidden='true'
                          >
                            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
                          </svg>
                        </div>
                      </div>
                      <p
                        className='hidden text-xs text-red-600 mt-2'
                        id='email-error'
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>

                    <div>
                      <div className='flex justify-between items-center'>
                        <label
                          htmlFor='password'
                          className='block text-sm mb-2 dark:text-white'
                        >
                          Password
                        </label>
                        <a
                          className='text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                          href='../examples/html/recover-account.html'
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className='relative'>
                        <input
                          type='password'
                          id='password'
                          name='password'
                          className='py-3 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                          required
                          aria-describedby='password-error'
                        />
                        <div className='absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
                          <svg
                            className='h-5 w-5 text-red-500'
                            width='16'
                            height='16'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                            aria-hidden='true'
                          >
                            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
                          </svg>
                        </div>
                      </div>
                      <p
                        className='hidden text-xs text-red-600 mt-2'
                        id='password-error'
                      >
                        8+ characters required
                      </p>
                    </div>

                    <div className='flex items-center'>
                      <div className='flex'>
                        <input
                          id='remember-me'
                          name='remember-me'
                          type='checkbox'
                          className='shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                        />
                      </div>
                      <div className='ms-3'>
                        <label
                          htmlFor='remember-me'
                          className='text-sm dark:text-white'
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link href='../dashboard'>
                      <button
                        type='submit'
                        className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      >
                        Sign in
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  )
}

export default page

// import React from 'react'
// import Link from 'next/link'

// type Props = {}

// const login = (props: Props) => {
//   return (
//     <div>
//       <div className='bg-white dark:bg-gray-900'>
//         <div className='flex justify-center h-screen'>
//           <div
//             className='hidden bg-cover lg:block lg:w-2/4'
//             style={{
//               backgroundImage: './assets/hero-illustration.jpg'
//             }}
//           >
//             <div className='flex items-center h-full px-20 bg-gray-900 bg-opacity-40 rounded-l-2xl'>
//               <div className='mt-40'>
//                 <h2 className='text-[24px] text-center font-semibold text-white sm:text-3xl mb-8'>
//                   Professional-grade shipping New Shipping and Routine
//                 </h2>

//                 <p className='max-w-xl mt-3 text-gray-300 text m-10'>
//                   Welcome to the Good life! Use Happie to , and family in Lagos,
//                   london..
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
//             <div className='flex-1'>
//               <div className='text-center'>
//                 <div className='flex justify-center mx-auto'>
//                   <img
//                     className='w-auto h-7 sm:h-8'
//                     src='assets/brand-logo.svg'
//                     alt=''
//                   />
//                 </div>

//                 <p className='mt-3 text-gray-500 dark:text-gray-300'>
//                   Sign in to access your account
//                 </p>
//               </div>

//               <div className='mt-8'>
//                 <form>
//                   <div>
//                     <label
//                       htmlFor='email'
//                       className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       type='email'
//                       name='email'
//                       id='email'
//                       placeholder='example@example.com'
//                       className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
//                     />
//                   </div>

//                   <div className='mt-6'>
//                     <div className='flex justify-between mb-2'>
//                       <label
//                         htmlFor='password'
//                         className='text-sm text-gray-600 dark:text-gray-200'
//                       >
//                         Password
//                       </label>
//                       <a
//                         href='#'
//                         className='text-sm text-gray-400 focus:text-blue hover:text-blue hover:underline'
//                       >
//                         Forgot password?
//                       </a>
//                     </div>

//                     <input
//                       type='password'
//                       name='password'
//                       id='password'
//                       placeholder='Your Password'
//                       className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
//                     />
//                   </div>

//                   <div className='mt-6'>
//                     <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blve rounded-xl hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
//                       Sign in
//                     </button>
//                   </div>
//                 </form>

//                 <p className='mt-6 text-sm text-center text-gray-400'>
//                   Don&#x27;t have an account yet?{' '}
//                   <Link
//                     href='/Auth/SignUp'
//                     className='text-blue focus:outline-none focus:underline hover:underline'
//                   >
//                     Sign up
//                   </Link>
//                   .
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default login
