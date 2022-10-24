import React from 'react'
import { Link } from "react-router-dom";

function signup() {
  return (
    
    <div class="bg-transparent">
        <div class="w-screen h-screen  flex flex-row justify-around items-center  border-2 rounded-2xl  border-slate-300">
        
        <div class='pl-8 flex items-center justify-center min-h-screen'>
  <div
            class="overflow-hidden  aspect-video bg-blue-400 cursor-pointer rounded-xl relative group"
        >
            <div
                class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div
                        class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div class="font-bold">I Vote</div>

                        <div class="text-base ">
                           Brief Description about why you should vote. Voting is an act to practise your constituation right in a Democratic country.
                        </div>
                    </div>
                </div>
            </div>
            <img
                alt=""
                class=" px-8 object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80tps://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"/>
        </div>
 </div>

<div class="w-2/3 h-full flex items-center justify-center  justify-items-center   ">
    <div class=" rounded-2xl border-2 w-2/3 items-center justify-center  justify-items-center ">
    
<form class="w-full max-w-lg space-y-8">
<h5 class="text-2xl  text-center font-medium text-gray-900 dark:text-white">Sign up to the elections</h5>
<div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="grid-first-name">
        First Name
    </label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ali"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="grid-last-name">
        Last Name
    </label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Alulu"/>
    </div>
</div>
<div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="grid-password">
        Password
    </label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="grid-password">
        Re-type Password
    </label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
    <p class="text-gray-600 text-sm italic">Use mix of capital and non capital letters, numbers,and symbols, ex: Ivote@159456</p>
    </div>
</div>
<div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="grid-city">
        City
    </label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Jemmel"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="grid-state">
        State
    </label>
    <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option>Monastir</option>
        <option>Sousse</option>
        <option>Tunis</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="grid-zip">
        Zip
    </label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="5020"/>
    </div>
</div>
<Link to="/signin"> <a href="#" class="text-blue-700 hover:underline dark:text-blue-500 font-medium">Already Registered? Sign in from here.</a> </Link>
<button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register now</button>
</form>

    </div>
</div>
</div>
    </div>
    

  )
}

export default signup