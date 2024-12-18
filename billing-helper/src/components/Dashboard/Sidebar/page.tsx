"use client"

import { useEffect, useRef, useState } from "react"

type selectionType = "home" | "clients" | "charges"

export default function Sidebar({ func }: { func: any }) {
    const [currentSelected, setSelected] = useState<selectionType>("home")
    const [indicatorHeight, setIndicatorHeight] = useState<number>(0)

    const refHome = useRef<HTMLDivElement>(null)
    const refClients = useRef<HTMLDivElement>(null)
    const refCharges = useRef<HTMLDivElement>(null)
    const refIndicator = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(refIndicator.current){
            if(currentSelected == "home" && refHome.current){
                setIndicatorHeight(Math.floor(refHome.current.getBoundingClientRect().top + (refIndicator.current.clientHeight - refHome.current.clientHeight)/2))

            }
            if(currentSelected == "clients" && refClients.current){
                setIndicatorHeight(Math.floor(refClients.current.getBoundingClientRect().top + (refIndicator.current.clientHeight - refClients.current.clientHeight)/2))

            }
            if(currentSelected == "charges" && refCharges.current){
                setIndicatorHeight(Math.floor(refCharges.current.getBoundingClientRect().top + (refIndicator.current.clientHeight - refCharges.current.clientHeight)/2))

            }
        }
    }, [currentSelected])

    return(
        <div className="fixed top-0 left-0 bg-darkblue w-28 h-screen flex flex-row drop-shadow-2xl">
            <div className="h-1/2 flex flex-grow flex-col items-center justify-evenly py-6">
                <div ref={refHome} onClick={() => {setSelected("home"); func("home")}} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-110 cursor-pointer ${(currentSelected == "home") ? "opacity-95 scale-110" : ""}`}>
                    <img src="/home-svgrepo-com.svg" alt="home" className="w-auto max-h-[35%]"/>
                    <p className="text-sm text-lightyellow">Home</p>

                </div>

                <div ref={refClients} onClick={() => {setSelected("clients"); func("clients")}} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-110 cursor-pointer ${(currentSelected == "clients") ? "opacity-95 scale-110" : ""}`}>
                    <img src="/users-group-rounded-svgrepo-com.svg" alt="home" className="w-auto max-h-[35%]"/>
                    <p className="text-sm text-lightyellow">Clientes</p>

                </div>

                <div ref={refCharges} onClick={() => {setSelected("charges"); func("charges")}} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-110 cursor-pointer ${(currentSelected == "charges") ? "opacity-95 scale-110" : ""}`}>
                    <img src="/copy-svgrepo-com.svg" alt="home" className="w-auto max-h-[35%]"/>
                    <p className="text-sm text-lightyellow">Cobranças</p>


                </div>

            </div>
            <div ref={refIndicator} className="relative w-8 h-[95px] bg-lightyellow transition-all duration-300 ease-in-out" style={{top: `${indicatorHeight}px`}}>

            </div>

        </div>
    )
}