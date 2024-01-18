import React from 'react'

interface TestimonialCardProps {
  testimonial: {
    text: string
    author: string
    title: string
  }
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { text, author, title } = testimonial

  return (
    <div className='testimonial-card bg-white shadow-lg rounded-2xl md:rounded-3xl p-5 md:p-8'>
      <p className='text-sm md:text-md leading-loose'>{text}</p>
      <p className='text-md md:text-lg font-bold mt-6'>{author}</p>
      <p className='text-sm md:text-md'>{title}</p>
    </div>
  )
}

export default TestimonialCard
