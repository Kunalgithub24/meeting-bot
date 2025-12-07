'use client'

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SignInButton, SignOutButton, SignUpButton, useUser } from "@clerk/nextjs"
import { ArrowRight, Bot, CheckCircle, ChevronRight, Play, Sparkles  } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function HeroSection() {
    const { isSignedIn } = useUser()
    return (
        <>
            <nav className="border-b border-gray-800 bg-black/65 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />

                            </div>
                            <span className="text-xl font-bold text-white">Meeting Bot</span>

                        </div>
                        <div className="flex items-center gap-4">
                            {isSignedIn ? (
                                <SignOutButton >
                                <Button variant="outline" className="bg-blue-800 hover:bg-blue-500 text-gray-100">
                                    Sign out
                                </Button>
                                </SignOutButton>
                            ) : (
                                <>
                                    <SignInButton mode="modal">
                                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer">
                                            Sign In
                                        </Button>
                                    </SignInButton>

                                    <SignUpButton mode="modal">
                                        <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-gray-100">
                                            Get Started
                                        </Button>
                                    </SignUpButton>
                                </>

                            )}

                        </div>

                    </div>
                </div>

            </nav>

            <section className="py-20 px-4 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="group relative mx-auto flex w-fit items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#3b82f61f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#3b82f63f] mb-8">
                        <span
                            className={cn(
                                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-linear-to-r from-[#3b82f6]/50 via-[#1d4ed8]/50 to-[#3b82f6]/50 bg-size-[300%_100%] p-px",
                            )}
                            style={{
                                WebkitMask:
                                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "destination-out",
                                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                maskComposite: "subtract",
                                WebkitClipPath: "padding-box",
                            }}
                        />
                        <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                        <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                        <AnimatedGradientText className="text-sm font-medium text-gray-300">
                            AI-Powered Meeting Assistant
                        </AnimatedGradientText>
                        <ChevronRight
                            className="ml-1 w-4 h-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Transform Your Meetings with{' '}
                        <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600  bg-clip-text text-transparent">AI Magic</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8 bg-linear-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(156,163,175,0.3)]">
                        Automatic summaries, action items, and intelligent insights for every meeting.
                        Never miss important details again.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        
                         <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 cursor-pointer">
                            <Play className="w-5 h-5 mr-2" />
                            <span className=" pb-0.5">Watch Demo</span>
                        </Button>

                        {isSignedIn ? (
                            <Button asChild size="lg" className=" bg-linear-to-r from-blue-400 via-blue-400 to to-blue-400 text-transparent bg-clip-text hover:bg-transparent px-8 py-4" >
                                <Link href="/home" className="group">
                                    <span className=" text-blue-400 text-[18px] pb-1">Dashboard</span>
                                    <ChevronRight className=" mb-0.5  text-white opacity-0 -translate-x-2  transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0 " />
                                </Link>
                            </Button>
                        ) : (
                            <SignUpButton mode="modal">
                                 <Button  size="lg" className=" bg-linear-to-r from-blue-400 via-blue-400 to to-blue-400 text-transparent bg-clip-text hover:bg-transparent px-8 py-4 group" >
                                    <span className="text-blue-400 text-[18px] pl-2 pb-0.5">Start Free Trial</span>
                                    <ChevronRight className="   text-white opacity-0 -translate-x-4  transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 " />
                                </Button>
                            </SignUpButton>
                        )}
                        
                    </div>
                        
                    
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Setup in 2 minutes</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Free forever plan</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}