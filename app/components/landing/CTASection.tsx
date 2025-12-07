'use client'

import { Button } from '@/components/ui/button'
import { SignUpButton, useUser } from '@clerk/nextjs'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CTASection() {
    const { isSignedIn } = useUser()
    return (
        <section className='py-20 bg-black'>
            <div className='max-w-4xl mx-auto px-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                    Ready to{' '}
                    <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600  bg-clip-text text-transparent">
                        revolutionize your meetings?
                    </span>
                </h2>
                <p className="text-lg bg-linear-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(156,163,175,0.3)] mb-8">
                    Join thousands of teams aldready using MeetingBot to save time.
                </p>
                {isSignedIn ? (
                        <Button asChild size="lg" className=" bg-linear-to-r from-blue-400 via-blue-400 to to-blue-400 text-transparent bg-clip-text hover:bg-transparent px-8 py-4" >
                        <Link href="/home" className='group'>
                            <span className=' text-blue-400 text-[15px] pl-2 pt-px'>Go to Dashboard</span>
                             <img src="/arrow.gif" alt="Arrow" width={30} height={0}  />                            
                   
                        </Link>
                    </Button>
                ) : (
                    <SignUpButton>
                        <Button  size="lg"  className=" bg-linear-to-r from-blue-400 via-blue-400 to to-blue-400 text-transparent bg-clip-text hover:bg-transparent px-8 py-4 group" >
                                    <span className="text-blue-400 text-[16px] pl-2 pt-px">Start Free Trial</span>
                                    <img src="/arrow.gif" alt="Arrow" width={30} height={0}  />                            
                            </Button>
                    </SignUpButton>
                )}
                <div className="flex items-center justify-center space-x-1 mt-6">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className='ml-2 text-gray-500'>
                        4.9/5 from 2+ reviews
                    </span>
                </div>
            </div>
        </section>
    )
}

export default CTASection
