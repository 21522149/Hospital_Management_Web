import React, { useState } from "react";
import {Link} from "react-router-dom";
import googleIcon from "../../components/images/google.png"
import healthcareimg from "../../components/images/health-care-img.png"


function Login() {
    
    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const handleInput=(event) => {
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }


    const handleSubmit=(event) => {
        event.preventDefault();
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue">
            <div className="relative flex flex-col m-6 space-y-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center p-8 md:p-14">
                    
                    <span className="mb-3 text-4xl font-bold">Welcome back,</span>
                    
                    <span class="font-light text-gray-400 mb-6 m-2">
                    Login to continue!
                    </span>

                    <form action="" onSubmit={handleSubmit}>
                        <div class="py-4">
                            <span class="mb-2 text-md font-bold">Email</span>
                            <input
                                onChange={handleInput}
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div class="py-4">
                            <span className="mb-2 text-md font-bold">Password</span>
                            <input
                                onChange={handleInput}
                                type="password"
                                name="password"
                                id="pass"
                                placeholder="Enter Password"
                                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            />
                        </div>

                        <div className="flex justify-between w-full py-4">
                            <div className="mr-24">
                                <input
                                    type="checkbox"
                                    name="ch" 
                                    id="ch" 
                                    className="mr-2" 
                                />

                                <span className="text-md">Remember for 30 days</span>

                            </div>

                            <span className="font-bold text-md">Forgot password</span>

                        </div>

                        <button
                            type="submit"
                            className='w-full bg-black text-white p-2 rounded-lg mb-3  border-2 border-black
                            hover:bg-white hover:text-black '>
                            Sign in
                        </button>


                        <button
                        className="w-full bg-black text-white p-2 rounded-lg mb-3 border-2 border-black 
                        hover:bg-white hover:text-black">
                            <img src={googleIcon} alt="img" class="w-6 h-6 inline mr-2" />
                            Sign in with Google
                        </button>

                        <div className="text-center text-gray-400">
                            Dont'have an account?
                            <Link to="/SignUp" class="font-bold text-black hover:text-blue"> Sign up for free</Link>
                        </div>
                        
                    </form>
                </div>
                
                <div className="relative">
                    <img
                        src={healthcareimg}
                        alt="img"
                        className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                    />
                </div>

            </div>
        </div>
    )
}



export default Login;