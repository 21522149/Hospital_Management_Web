import React from "react";


const Login = () => {
    return (
        <div>
            
            <div>
                <h1>Login</h1>
                
               <form action="">
                   
                   <div>
                       <input type="email" />
                       <label htmlFor="">Your Email</label>
                   </div>

                   <div>
                       <input type="password" />
                       <label htmlFor="">Your Password</label>
                   </div>

                   <div>
                       <input type="checkbox" name="" />
                       <label htmlFor="Remember Me"></label>
                       <span>Forgot Password?</span>
                    </div>
                   
                   <button type="submit">Login</button>
               </form>

            </div>

        </div>
    )
}



export default Login;