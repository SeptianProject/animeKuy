import TextSpan from '../elements/TextSpan'
import IconElement from '../elements/IconElement'
import { BsPencilSquare } from 'react-icons/bs'

const ProfilePage = () => {
     return (
          <section className='space-y-5'>
               <div className='h-full'>
                    <div className='flex flex-col items-center border-b border-white/10 pb-5 w-full gap-y-2'>
                         <div className='relative'>
                              <div className='size-28 bg-secondary rounded-full' />
                              <button
                                   onClick={() => { }}
                                   className='absolute right-2 bottom-2 bg-primary p-1 rounded-md'>
                                   <IconElement
                                        icon={BsPencilSquare}
                                        className='text-white/80 size-[1rem]' />
                              </button>
                         </div>
                         <div className='flex flex-col items-center'>
                              <h2 className='text-lg font-medium text-white/90'>Septianzz</h2>
                              <h2 className='text-sm font-light text-white/70'>septian@gmail.com</h2>
                         </div>
                    </div>
                    <div className='flex flex-col items-start gap-y-2 py-5'>
                         <div className='flex items-center justify-between
                         bg-secondary w-full p-4 rounded-md'>
                              <TextSpan
                                   title='Username: '
                                   text='Septianzz' />
                              <button
                                   onClick={() => { }}
                                   className='bg-primary p-1 rounded-md'>
                                   <IconElement
                                        icon={BsPencilSquare}
                                        className='text-white/80 size-[1.2rem]' />
                              </button>
                         </div>
                         <div className='bg-secondary w-full p-4 rounded-md'>
                              <TextSpan
                                   title='Email: '
                                   text='septian@gmail.com' />
                         </div>
                         <div className='bg-secondary w-full p-4 rounded-md'>
                              <TextSpan
                                   title='Histories: '
                                   text='0' />
                         </div>
                         <div className='bg-secondary w-full p-4 rounded-md'>
                              <TextSpan
                                   title='BookMarks:'
                                   text='0' />
                         </div>

                    </div>
               </div>
               <div className='flex flex-col items-center'>
                    <button
                         onClick={() => { }}
                         className='text-sm font-semibold bg-red-600 w-20 py-2 rounded-md mt-2'>
                         Logout
                    </button>
               </div>
          </section>
     )
}

export default ProfilePage