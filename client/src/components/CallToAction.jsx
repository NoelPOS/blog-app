import { Button } from 'flowbite-react'
import aboutme from '../../assets/aboutme.jpg'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col gap-5'>
        <h2 className='text-2xl font-semibold text-teal-700'>
          Ready to Embark on Your Mindfulness Journey?
        </h2>
        <p className='text-gray-600 my-2 w-[70%] self-center'>
          Discover inner peace through guided meditations, therapeutic art, and
          spiritual practices tailored just for you.
        </p>
        <button className='bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-tl-xl rounded-br-xl transition duration-300 ease-in-out self-center'>
          <a href='./about' className='block w-full h-full'>
            About Me
          </a>
        </button>
      </div>
      <div className='p-7 flex-1 self-center'>
        <img
          src={aboutme}
          alt='Mindfulness journey'
          className='rounded-xl w-full max-w-md mx-auto'
        />
      </div>
    </div>
  )
}
