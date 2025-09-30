import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Taskbox = ({employeedata}) => {
    return (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-10'>
            <div className='bg-amber-300 px-6 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center justify-between'>
                <div className=''>
                    <h2 className='text-3xl sm:text-4xl font-semibold'>{employeedata.taskCount.new}</h2>
                    <h3 className='text-lg sm:text-xl font-medium mt-1 sm:mt-2'>New Task</h3>
                </div>
                <div className='flex-shrink-0'>
                    <DotLottieReact
                        src="https://lottie.host/a5516419-89bd-40da-8f8f-93ba7cff95d0/fnEdv2GlFK.lottie"
                        loop
                        autoplay
                        className='w-20 h-20 sm:w-30 sm:h-30' />
                </div>
            </div>

            <div className='bg-amber-300 px-6 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center justify-between'>
                <div className=''>
                    <h2 className='text-3xl sm:text-4xl font-semibold'>{employeedata.taskCount.completed}</h2>
                    <h3 className='text-lg sm:text-xl font-medium mt-1 sm:mt-2'>Task Completed</h3>
                </div>
                <div className='flex-shrink-0'>
                    <DotLottieReact
                        src="https://lottie.host/2a5e567f-5f3b-4cee-9b15-a790b9eada87/ZYojfDRau8.lottie"
                        loop
                        autoplay
                        speed={0.5} 
                        className='w-20 h-20 sm:w-30 sm:h-30' />
                </div>
            </div>

            <div className='bg-amber-300 px-6 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center justify-between'>
                <div className=''>
                    <h2 className='text-3xl sm:text-4xl font-semibold'>{employeedata.taskCount.active}</h2>
                    <h3 className='text-lg sm:text-xl font-medium mt-1 sm:mt-2'>Task Accepted</h3>
                </div>
                <div className='flex-shrink-0'>
                    <DotLottieReact
                        src="https://lottie.host/3a94311a-157f-44ab-ae94-e21dd0dda89b/NO10SkbTZL.lottie"
                        loop
                        autoplay
                        className='w-20 h-20 sm:w-30 sm:h-30' />
                </div>
            </div>

            <div className='bg-amber-300 px-6 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center justify-between'>
                <div className=''>
                    <h2 className='text-3xl sm:text-4xl font-semibold'>{employeedata.taskCount.failed}</h2>
                    <h3 className='text-lg sm:text-xl font-medium mt-1 sm:mt-2'>Task Failed</h3>
                </div>
                <div className='flex-shrink-0'>
                    <DotLottieReact
                        src="https://lottie.host/59eb876b-f1a8-4c35-9845-e172d523a779/XtYj2Kwy31.lottie"
                        loop
                        autoplay
                        speed={0.5}
                        className='w-20 h-20 sm:w-30 sm:h-30' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Taskbox