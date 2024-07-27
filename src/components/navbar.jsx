import { useEffect, useState } from "react";
import Markdown from "./markdown";
import { MdOutlineSearch, MdPerson, MdInfo, MdMarkunread, MdSunny, MdModeNight } from "react-icons/md";

export default function Navbar(){

    let [mode, setMode] = useState(false)

    useEffect(()=> {
        if(mode){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
        console.log(mode)
    },[mode])


    return(
        <nav className="w-full h-14 bg-chrome_blue flex flex-col items-center shadow-xl fixed z-10
        md:flex-row dark:bg-black">

            <div className="flex-1 flex justify-center items-center
            md:justify-normal md:mx-6">
                <Markdown title="Name"/>
            </div>
            

            <div className="flex-1 hidden
            md:flex md:justify-around">
                <a className="text-white font-medium hover:text-black" href="#">Signup</a>
                <a className="text-white font-medium hover:text-black" href="#">About us</a>
                <a className="text-white font-medium hover:text-black" href="#">Services</a>
                <button onClick={()=> setMode(!mode)} className="text-silver font-medium text-2xl border-2 rounded-md border-silver hover:text-black hover:border-black">{mode ? <MdSunny /> : <MdModeNight/>}</button>
            </div>
            
        </nav>
    )
}