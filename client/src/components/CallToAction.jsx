import { Button } from 'flowbite-react'
import aboutme from '../../assets/aboutme.jpg'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col gap-5'>
        <h2 className='text-2xl'>
          Do you want to start your journey towards mindfulness?
        </h2>
        <p className='text-gray-500 my-2'>
          I can help you find peace through paintings and therapy session.
        </p>
        <Button className='rounded-tl-xl rounded-bl-none w-[30%] self-center'>
          <a href='./about'>About author</a>
        </Button>
      </div>
      <div className='p-7 flex-1 self-center'>
        <img src={aboutme} className='rounded-xl w-[70%] ' />
      </div>
    </div>
  )
}
