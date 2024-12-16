type summaryTypes = "open" | "paid" | "overdue"

export default function ChargeSummary({ summarytype }: {summarytype: summaryTypes}){
    return(
        <div className="w-[fit-content] px-5 h-24 rounded-2xl flex flex-row justify-evenly items-center" style={{background: summarytype == "open" ? "#fde68a" : summarytype == "paid" ? "#bbf7d0" : summarytype == "overdue" ? "#fecaca" : "", color: summarytype == "open" ? "#854d0e" : summarytype == "paid" ? "#166534" : summarytype == "overdue" ? "#b91c1c" : ""}}>
            {summarytype == "open" ? <img src="/minus-square-svgrepo-com.svg" alt="open" className="w-auto h-1/2 my-auto"/> : 
            summarytype == "paid" ? <img src="/notification-unread-lines-svgrepo-com.svg" alt="paid" className="w-auto h-1/2 my-auto"/> :
            summarytype == "overdue" ? <img src="notification-lines-remove-svgrepo-com.svg" alt="overdue" className="w-auto h-1/2 my-auto"/> :
            <></>}
            <div className="font-semibold ml-5">
                <p>Cobranças {summarytype == "open" ? "Previstas" : summarytype == "paid" ? "Pagas" : summarytype == "overdue" ? "Vencidas" : ""}</p>
                <p>R$ 30.000</p>
            </div>

        </div>
    )

}