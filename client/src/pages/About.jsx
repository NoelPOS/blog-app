// export default function About() {
//   return (
//     <div className='min-h-screen flex items-center justify-center'>
//       <div className='max-w-2xl mx-auto p-3 text-center'>
//         <div>
//           <h1 className='text-3xl font font-semibold text-center my-7'>
//             About Sahand' Blog
//           </h1>
//           <div className='text-md text-gray-500 flex flex-col gap-6'>
//             <p>
//               Welcome to Sahand's Blog! This blog was created by Sahand Ghavidel
//               as a personal project to share his thoughts and ideas with the
//               world. Sahand is a passionate developer who loves to write about
//               technology, coding, and everything in between.
//             </p>

//             <p>
//               On this blog, you'll find weekly articles and tutorials on topics
//               such as web development, software engineering, and programming
//               languages. Sahand is always learning and exploring new
//               technologies, so be sure to check back often for new content!
//             </p>

//             <p>
//               We encourage you to leave comments on our posts and engage with
//               other readers. You can like other people's comments and reply to
//               them as well. We believe that a community of learners can help
//               each other grow and improve.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import painting from '../../assets/painting.jpg'

export default function About() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-center text-teal-800 mb-8'>
          Welcome to Mindful Moments
        </h1>

        <p className='text-xl text-center text-gray-600 mb-12'>
          Your journey to inner peace and mindfulness begins here.
        </p>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='p-6'>
              <img
                src={painting}
                alt='Serene painting'
                width={300}
                height={200}
                className='rounded-lg mb-4 w-full h-auto'
              />
              <h2 className='text-2xl font-semibold text-teal-700 mb-2'>
                Healing through Art
              </h2>
              <p className='text-gray-600'>
                Explore our collection of calming paintings that inspire
                reflection and tranquility. Let the colors and forms guide you
                to a place of inner stillness.
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='p-6'>
              <img
                src={painting}
                alt='Person meditating'
                width={300}
                height={200}
                className='rounded-lg mb-4 w-full h-auto'
              />
              <h2 className='text-2xl font-semibold text-teal-700 mb-2'>
                Guided Meditations
              </h2>
              <p className='text-gray-600'>
                Through meditation reduce stress, and find your center amidst
                life's chaos.
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='p-6'>
              <img
                src={painting}
                alt='Therapy session'
                width={300}
                height={200}
                className='rounded-lg mb-4 w-full h-auto'
              />
              <h2 className='text-2xl font-semibold text-teal-700 mb-2'>
                Mindful Therapy
              </h2>
              <p className='text-gray-600'>
                Connect with me to help you navigate life's challenges with
                greater ease and clarity.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <h3 className='text-2xl font-semibold text-teal-800 mb-4'>
            Begin Your Journey to Inner Peace
          </h3>
          <p className='text-lg text-gray-600 mb-6'>
            Whether you're seeking a moment of calm through our curated
            artworks, looking to deepen your meditation practice, or in need of
            supportive therapy, we're here to guide you on your path to
            mindfulness and well-being.
          </p>
          <button className='bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'>
            Explore Our Resources
          </button>
        </div>
      </div>
    </div>
  )
}
