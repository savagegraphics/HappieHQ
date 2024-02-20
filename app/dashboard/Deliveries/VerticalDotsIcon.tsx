import React from 'react';

interface Props {
  size?: number;
  width?: number; // Add width property to Props interface
  height?: number;
}

export const VerticalDotsIcon: React.FC<Props> = ({
  size = 24,
  width = size,
  height = size,
  ...props
}) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={height}
    width={width}
    role='presentation'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
      fill='currentColor'
    />
  </svg>
);
