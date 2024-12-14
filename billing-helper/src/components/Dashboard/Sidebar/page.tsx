"use client"

import { useEffect, useRef, useState } from "react"

type selectionType = "home" | "clients" | "charges"

export default function Sidebar() {
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
        <div className="bg-gray-900 w-28 h-screen flex flex-row">
            <div className="h-1/2 flex flex-grow flex-col items-center justify-evenly py-6">
                <div ref={refHome} onClick={() => setSelected("home")} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-110 cursor-pointer ${(currentSelected == "home") ? "opacity-95 scale-110" : ""}`}>
                    <img src="/home-svgrepo-com.svg" alt="home" className="w-auto max-h-[35%]"/>
                    <p className="text-sm text-amber-100">Home</p>

                </div>

                <div ref={refClients} onClick={() => setSelected("clients")} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-110 cursor-pointer ${(currentSelected == "clients") ? "opacity-95 scale-110" : ""}`}>
                    <img src="/users-group-rounded-svgrepo-com.svg" alt="home" className="w-auto max-h-[35%]"/>
                    <p className="text-sm text-amber-100">Clientes</p>

                </div>

                <div ref={refCharges} onClick={() => setSelected("charges")} className={`flex flex-col items-center opacity-50 transition-opacity hover:opacity-100 duration-300 transition-transform hover:scale-110 cursor-pointer ${(currentSelected == "charges") ? "opacity-95 scale-110" : ""}`}>
                    <img src="/copy-svgrepo-com.svg" alt="home" className="w-auto max-h-[35%]"/>
                    <p className="text-sm text-amber-100">Cobranças</p>


                </div>

            </div>
            <div ref={refIndicator} className="relative w-8 h-[95px] bg-amber-100 transition-all duration-300 ease-in-out" style={{top: `${indicatorHeight}px`}}>

            </div>

        </div>
    )
}