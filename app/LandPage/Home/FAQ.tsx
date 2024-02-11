import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { Selection } from '@react-types/shared'

type Props = {}

const page: React.FC<Props> = props => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']))

  // Define a function to handle selection change
  const handleSelectionChange = (keys: Selection) => {
    // Update the selected keys state
    setSelectedKeys(keys as Set<string>)
  }

  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid md:grid-cols-5 gap-10 lg:m-2 m-4'>
        <div className='md:col-span-2'>
          <div className='max-w-xs'>
            <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
              FAQs
            </h2>
            <p className='mt-1 hidden md:block text-gray-600 dark:text-gray-400'>
              We have carefully prepared a list of the most frequent inquiries
              for you. This will give you more insights on what Happie is about.{' '}
            </p>
          </div>
        </div>

        <div className='md:col-span-3'>
          <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange} // Pass the function
          >
            <AccordionItem
              key='1'
              aria-label='Accordion 1'
              title={
                <div className='font-semibold text-gray-600'>
                  What is Happie
                </div>
              }
              className='bg-gray-100 rounded-xl p-4 mb-4 mt-2'
            >
              <p className='text-gray-800 dark:text-gray-200'>
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses.
              </p>
            </AccordionItem>
            <AccordionItem
              key='2'
              aria-label='Accordion 2'
              title={
                <div className='font-semibold text-gray-600'>
                  Is my data secured?
                </div>
              }
              className='bg-gray-100 rounded-xl p-4 mb-4 mt-2'
            >
              <p className='text-gray-800 dark:text-gray-200'>
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses..
              </p>
            </AccordionItem>
            <AccordionItem
              key='3'
              aria-label='Accordion 3'
              title={
                <div className='font-semibold text-gray-600'>
                  Can I be a marketer for Happie?
                </div>
              }
              className='bg-gray-100 rounded-xl p-4 mb-4 mt-2'
            >
              <p className='text-gray-800 dark:text-gray-200'>
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses.
              </p>
            </AccordionItem>
            <AccordionItem
              key='3'
              aria-label='Accordion 3'
              title={
                <div className='font-semibold text-gray-600'>
                  Why should I use Happie for my fulfilment service?
                </div>
              }
              className='bg-gray-100 rounded-xl p-4 mb-4 mt-2'
            >
              <p className='text-gray-800 dark:text-gray-200'>
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses.
              </p>
            </AccordionItem>
            <AccordionItem
              key='3'
              aria-label='Accordion 3'
              title={
                <div className='font-semibold text-gray-600'>
                  Do I need internet to use Happie?
                </div>
              }
              className='bg-gray-100 rounded-xl p-4 mb-4 mt-2'
            >
              <p className='text-gray-800 dark:text-gray-200'>
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses.{' '}
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default page
