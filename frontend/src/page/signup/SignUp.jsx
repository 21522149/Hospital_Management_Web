
import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
    return (
        <div class="flex items-center justify-center min-h-screen bg-blue">
            <div class="relative flex flex-col m-6 space-y-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div class="flex flex-col justify-center p-8 md:p-14">
                    
                    <span class="mb-3 text-4xl font-bold">Sign Up</span>
 

                    <form action="">
                        <div class="py-4">
                            <span class="mb-2 text-md font-bold">Enter your email</span>
                            <input
                                type="email"
                                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                                placeholder="Enter Email"
                            />
                        </div>

                        <div class="py-4">
                            <span class="mb-2 text-md font-bold">Enter your password</span>
                            <input
                                type="password"
                                name="pass"
                                id="passEnter"
                                placeholder="Enter Password"
                                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            />
                        </div>

                        <div class="py-4">
                            <span class="mb-2 text-md font-bold">Comfirm your password</span>
                            <input
                                type="password"
                                name="pass"
                                id="passComfirm"
                                placeholder="Enter Password"
                                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            />
                        </div>

                        <div class="flex justify-between w-full py-4">
                            <div class="mr-24">
                                <input type="checkbox" name="ch" id="ch" class="mr-2" />
                                <span class="text-md">I read and agree with all terms and policies</span>
                            </div>
                        
                        </div>

                        <Link to="/Login">
                            <button
                                className='w-full  bg-black text-white p-2 rounded-lg mb-3 border-2 border-black
                                hover:bg-white hover:text-black'>
                                Click here to complete sign up!
                            </button>
                        </Link>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default SignUp