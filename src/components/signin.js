import React from 'react'
import { Link } from "react-router-dom";

function signin() {
  return (
    <div class="w-screen h-screen  flex flex-row justify-around items-center  border-2 rounded-2xl  border-slate-300">

    <div class="w-2/3 h-full flex items-center justify-center  justify-items-center   ">
        <div class=" rounded-2xl border-2 w-2/3 items-center justify-center  justify-items-center ">
        
        <form class="space-y-8" action="#">
            <h5 class="text-2xl  text-center font-medium text-gray-900 dark:text-white">Sign in</h5>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Type your CIN" required=""/>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
            </div>
            <div class="flex items-start">
                <div class="flex flex-row justify-center items-center  ">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                    </div>
                    <div class="space-x-5 font-bold">
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        <a href="#" class="text-blue-700 hover:underline dark:text-blue-500 ">Lost Password?</a>
                    </div>
                </div>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <Link to="/signup"> <a href="#" class="text-blue-700 hover:underline dark:text-blue-500 font-bold">Create account?</a> </Link> 
            </div>
        </form>

        </div>
    </div>
      
    
    <div
        class="w-3/4 h-full rounded-full bg-[url('https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] bg-no-repeat bg-contain bg-center hover:animate-[wiggle_1s_ease-in-out_infinite]">
    </div>
  </div>
  )
}

export default signin