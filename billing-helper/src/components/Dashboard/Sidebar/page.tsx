"use client"

import { useEffect, useRef, useState } from "react"

type selectionType = "home" | "clients" | "charges"

export default function Sidebar() {
    const [currentSelected, setSelected] = useState<selectionType>("home")
    const [indicatorHeight, setIndicatorHeight] = useState<number>(0)

    const refHome = useRef<HTMLDivElement>(null)
    const refClients = useRef<HTMLDivElement>(null)
    const refCharges = useRef<HTMLDivElement>(null)
    //FIXME: all refs perma returning 128 height, fix that shi

    return(
        <div className="bg-gray-900 w-28 h-screen flex flex-row">
            <div className="h-1/2 flex flex-grow flex-col items-center justify-evenly py-6">
                <div ref={refHome} onClick={() => {setSelected("home"); if(refHome.current){setIndicatorHeight(refHome.current.clientHeight); console.log(refHome.current.clientHeight)}}} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-105 cursor-pointer ${(currentSelected == "home") ? "opacity-100 scale-105" : ""}`}>
                    <img src="/home-svgrepo-com.svg" alt="home" className="w-auto max-h-[40%]"/>
                    <p className="text-sm text-amber-100">Home</p>

                </div>

                <div ref={refClients} onClick={() => {setSelected("clients"); if(refClients.current){setIndicatorHeight(refClients.current.clientHeight); console.log(refClients.current.clientHeight)}}} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-105 cursor-pointer ${(currentSelected == "clients") ? "opacity-100 scale-105" : ""}`}>
                    <img src="/users-group-rounded-svgrepo-com.svg" alt="home" className="w-auto max-h-[40%]"/>
                    <p className="text-sm text-amber-100">Clientes</p>

                </div>

                <div ref={refCharges} onClick={() => {setSelected("charges"); console.log(refCharges.current?.clientHeight)}} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-105 cursor-pointer ${(currentSelected == "charges") ? "opacity-100 scale-105" : ""}`}>
                    <img src="/copy-svgrepo-com.svg" alt="home" className="w-auto max-h-[40%]"/>
                    <p className="text-sm text-amber-100">Cobranças</p>


                </div>

            </div>
            <div className={`relative w-8 max-h-[10%] bg-amber-100 transition-all duration-300 ease-in-out top-[${indicatorHeight}px]`}>

            </div>

        </div>
    )
}