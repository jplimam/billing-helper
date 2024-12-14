export default function Navbar(){
    return(
        <div className="flex h-28 bg-darkblue items-center">
            <h1 className="text-5xl font-semibold ml-10">Home</h1>

            <div className="flex flex-row h-full w-[fit-content] items-center ml-auto gap-x-5 px-10">
                <img src="./user-icon-placeholder.png" alt="User Icon" className="w-auto h-1/2 rounded-full"/>
                <p className="text-lg font-thin">Username</p>
            </div>
        </div>
    )
}