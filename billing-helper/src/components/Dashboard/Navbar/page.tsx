"use client"

import { useEffect, useRef, useState } from "react"
import ProfileOptions from "./profileOptions"

export default function Navbar(){
    const [profileOptions, isProfileOptionsOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(ref.current){
            document.hasFocus()
        }
    }, [])

    return(
        <div className="flex h-28 items-center shadow-2xl">
            <h1 className="text-4xl font-semibold ml-10">Home</h1>

            <div className="flex flex-col h-full ml-auto px-20 items-center select-none">

                <div ref={ref} className="flex flex-row h-full m-auto items-center gap-x-3 cursor-pointer" onFocusCapture={() => isProfileOptionsOpen(!profileOptions)} tabIndex={0} onBlurCapture={() => isProfileOptionsOpen(false)}>
                    <img src="./user-icon-placeholder.png" alt="User Icon" className="w-auto h-1/2 rounded-full"/>
                    <p className="text-sm font-thin">username</p>
                    
                </div>

                {profileOptions && <ProfileOptions/>}

            </div>
        </div>
    )
}