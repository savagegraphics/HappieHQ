import React from 'react'

type Props = {
  size?: number
}

export const PlusIcon = (props: Props) =>
  ({ size = 24, width = { size }, height = { size }, ...props }) =>
    (
      <svg
        aria-hidden='true'
        fill='none'
        focusable='false'
        // xHeight={size || height}
        height={24}
        width={24}
        role='presentation'
        viewBox='0 0 24 24'
        // xWidth={size || width}
        {...props}
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        >
          <path d='M6 12h12' />
          <path d='M12 18V6' />
        </g>
      </svg>
    )
