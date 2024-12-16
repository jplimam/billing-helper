"use client"

import { useRef } from "react";

type titleTypes = "uptodate" | "late"

export default function ClientPad({ title }: { title: titleTypes}) {
    const clientRef = useRef<HTMLLIElement>(null);
    const chargeRef = useRef<HTMLLIElement>(null);
    const valueRef = useRef<HTMLLIElement>(null);
    return(
        <div className="bg-[#F8FAFC] text-slate-800 w-[52rem] rounded-2xl min-h-[32rem] flex flex-col">
            <div>
                <div className="flex flex-row items-center">
                    {title == "uptodate" ? <img src="/user-check-svgrepo-com.svg" alt="" className="w-auto h-[2rem] ml-5"/> : <img src="/user-cross-svgrepo-com.svg" alt="" className="w-auto h-[2rem] ml-5"/>}
                    <p className="text-2xl py-3 mx-5 font-semibold">Clientes {title == "uptodate" ? "em dia" : "inadimplentes"}</p>
                    <div className="flex rounded-2xl w-[fit-content] px-4 h-10 leading-10 my-auto ml-auto m-5 font-bold" style={{background: title == "uptodate" ? "#bbf7d0" : "#fecaca", color: title == "uptodate" ? "#166534" : "#b91c1c"}}>02</div>
                </div>
                <div className="bg-gray-500 w-[95%] h-[1px] opacity-50 m-auto"/>
            </div>

            <div className="flex flex-row center-items w-full justify-between px-5">
                <div className="flex flex-col w-[30%] items-center py-4 font-light gap-y-3">
                    <p className="font-semibold pb-2">Cliente</p>
                    <p>Balan S.</p>
                    <p>Narão B.</p>
                </div>


                <div className="flex flex-col w-[30%] items-center py-4 font-light gap-y-3">
                    <p className="font-semibold pb-2">ID do Cli.</p>
                    <p>1230923</p>
                    <p>1203900</p>
                </div>


                <div className="flex flex-col w-[30%] items-center py-4 font-light gap-y-3">
                    <p className="font-semibold pb-2">CPF</p>
                    <p>XXX.XXX.XXX-XX</p>
                    <p>YYY.YYY.YYY-YY</p>
                </div>
            </div>

            <div className="flex flex-col w-full h-[fit-content] items-center mt-auto gap-y-2 py-2">
                <div className="bg-gray-500 w-[95%] h-[1px] opacity-50 m-auto"/>
                <button className="text-2xl">Ver mais</button>
            </div>
        </div>
    )
}