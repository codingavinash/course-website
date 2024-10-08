"use client";
import { BackgroundGradient } from "./ui/background-gradient";

const testimonials = [
    {
      id:1,
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
      id:2,
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Piano Student',
    },
    {
      id:3,
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Vocal Student',
    },
    {
      id:4,
      quote:
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Violin Student',
    },
    {
      id:5,
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Chris Morales',
      title: 'Music Production Student',
    },
  ];

const TestumonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.025] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8 z-10">Hear Our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full flex gap-32 p-10">
          {
            testimonials.map((testi)=>(
              <div key={testi.id} className="flex justify-center h-[25rem]">
                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-700 overflow-hidden h-full max-w-sm'>
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{testi.quote}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-3">{testi.title}</p>
                  <p>{testi.name}</p>
                  </div>
                </BackgroundGradient>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TestumonialCards