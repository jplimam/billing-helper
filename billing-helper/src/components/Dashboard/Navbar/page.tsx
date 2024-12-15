"use client"

import { useState } from "react"
import ProfileOptions from "./profileOptions"

export default function Navbar(){
    const [profileOptions, isProfileOptionsOpen] = useState<boolean>(false)
    return(
        <div className="flex h-28 items-center shadow-2xl">
            <h1 className="text-4xl font-semibold ml-10">Home</h1>

            <div className="flex flex-col h-full ml-auto px-10 items-center">

                <div className="flex flex-row h-full w-[fit-content] items-center gap-x-5 cursor-pointer" onClick={() => isProfileOptionsOpen(!profileOptions)}>
                    <img src="./user-icon-placeholder.png" alt="User Icon" className="w-auto h-1/3 rounded-full"/>
                    <p className="text-sm font-thin">Username</p>
                </div>

                {profileOptions && <ProfileOptions/>}

            </div>
        </div>
    )
}