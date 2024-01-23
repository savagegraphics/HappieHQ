import { Tabs } from 'flowbite-react'
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'

export default function Component () {
  return (
    <Tabs aria-label='Tabs with icons' style='underline'>
      <Tabs.Item active title='Profile' icon={HiUserCircle}>
        This is{' '}
        <span className='font-medium text-gray-800 dark:text-white'>
          Profile tab&apos;s associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title='Dashboard' icon={MdDashboard}>
        This is{' '}
        <span className='font-medium text-gray-800 dark:text-white'>
          Dashboard tab&apos;s associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
    </Tabs>
  )
}
