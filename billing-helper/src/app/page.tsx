"use client"

import Sidebar from "@/components/Dashboard/Sidebar/page"
import Navbar from "@/components/Dashboard/Navbar/page";
import ChargePad from "@/components/Dashboard/Home/ChargePad/page";
import ChargeSummary from "@/components/Dashboard/Home/ChargeSummary/page";
import ClientPad from "@/components/Dashboard/Home/ClientPad/page";
import { useEffect, useState } from "react";

type selectionType = "home" | "clients" | "charges"

export default function Dashboard() {
  const [currentSelected, setSelected] = useState<selectionType>("home")
  useEffect(() => {console.log(currentSelected)}, [currentSelected])

  //TODO: Take out <Navbar/> from div, make it render after <Sidebar/>, make it responsive with func

  return (
    <>
      <Sidebar func={setSelected}/>
      {currentSelected == "home" &&

      <div className="ml-28">
        <Navbar/>
        <div className="flex flex-row w-1/2 justify-evenly mx-auto mt-5">
          <ChargeSummary summarytype="overdue"/>
          <ChargeSummary summarytype="open"/>
          <ChargeSummary summarytype="paid"/>
        </div>
        <div className="flex flex-row w-full justify-evenly py-20">
          <ChargePad title="overdue"/>
          <ChargePad title="open"/>
          <ChargePad title="paid"/>
        </div>
        <div className="flex flex-row w-full justify-evenly py-20">
          <ClientPad title="late"/>
          <ClientPad title="uptodate"/>
        </div>
      </div>}
      
    </>
  );
}
