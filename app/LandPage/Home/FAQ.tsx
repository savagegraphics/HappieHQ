'use client'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

export default function App () {
  const [isOpen, setIsOpen] = useState(true) // Managing open state for the first accordion item
  const [secondIsOpen, setSecondIsOpen] = useState(false) // Managing open state for the second accordion item

  const handleToggle = () => {
    setIsOpen(!isOpen) // Toggling open state for the first accordion item
    setSecondIsOpen(false) // Closing the second accordion item
  }

  const handleSecondToggle = () => {
    setSecondIsOpen(!secondIsOpen) // Toggling open state for the second accordion item
    setIsOpen(false) // Closing the first accordion item
  }

  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid md:grid-cols-5 gap-10'>
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
          <Accordion defaultIndex={0} allowToggle>
            <AccordionItem className='rounded-xl my-2'>
              <h2>
                <AccordionButton onClick={handleToggle} disabled={isOpen}>
                  <Box as='span' flex='1' textAlign='left' className='text-xl'>
                    What is Happie?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className='bg-gray-200 rounded-b-xl italic'
              >
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              style={{ borderBottom: 'none' }}
              className='rounded-xl my-2'
            >
              <h2>
                <AccordionButton
                  onClick={handleSecondToggle}
                  disabled={secondIsOpen}
                >
                  <Box as='span' flex='1' textAlign='left' className='text-xl'>
                    Is my data secured?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className='bg-gray-200 rounded-b-xl italic'
              >
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses..
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              style={{ borderBottom: 'none' }}
              className='rounded-xl my-2'
            >
              <h2>
                <AccordionButton
                  onClick={handleSecondToggle}
                  disabled={secondIsOpen}
                >
                  <Box as='span' flex='1' textAlign='left' className='text-xl'>
                    Can I be a marketer for Happie?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className='bg-gray-100 rounded-b-xl italic'
              >
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              style={{ borderBottom: 'none' }}
              className='rounded-xl my-2'
            >
              <h2>
                <AccordionButton
                  onClick={handleSecondToggle}
                  disabled={secondIsOpen}
                >
                  <Box as='span' flex='1' textAlign='left' className='text-xl'>
                    Why should I use Happie for my fulfilment service?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className='bg-gray-100 rounded-b-xl italic'
              >
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              style={{ borderBottom: 'none' }}
              className='rounded-xl my-2'
            >
              <h2>
                <AccordionButton
                  onClick={handleSecondToggle}
                  disabled={secondIsOpen}
                >
                  <Box as='span' flex='1' textAlign='left' className='text-xl'>
                    Do I need internet to use happie?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className='bg-gray-100 rounded-b-xl italic'
              >
                Happie, is a e-commerce logistics start-up with a mission to
                that provide innovative, effective shipping and fulfillment
                services for e-commerce businesses.{' '}
              </AccordionPanel>
            </AccordionItem>
            {/* 
            <AccordionItem
              style={{ borderBottom: 'none' }}
              className='rounded-xl my-2'
            >
              <h2>
                <AccordionButton
                  onClick={handleSecondToggle}
                  disabled={secondIsOpen}
                >
                  <Box as='span' flex='1' textAlign='left'>
                    Section 3 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className='bg-gray-100 rounded-b-xl italic'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem> */}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
