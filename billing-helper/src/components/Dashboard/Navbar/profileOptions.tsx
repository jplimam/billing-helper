import { motion } from "framer-motion"

export default function ProfileOptions(){
    return(
        
        <motion.div className="bg-[#F8FAFC] text-slate-800 my-2 rounded-xl h-[900px]"
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3}}>
            <ul className="">
                <li className="my-2 mx-4">
                    <button className="flex flex-row gap-x-2 items-center">
                        <img src="/user-circle-svgrepo-com.svg" alt="profile icon" className="w-auto h-5"/>
                        Profile
                    </button>
                </li>
                <div className="bg-gray-500 w-4/5 h-[1px] opacity-50 m-auto"/>
                <li className="my-2 mx-4">
                    <button className="flex flex-row gap-x-2 items-center">
                        <img src="/settings-svgrepo-com.svg" alt="settings icon" className="w-auto h-5"/>
                        Settings
                    </button>
                </li>
                <div className="bg-gray-500 w-4/5 h-[1px] opacity-50 m-auto"/>
                <li className="my-2 mx-4">
                    <button className="flex flex-row gap-x-2 items-center text-red-800">
                        <img src="/user-cross-svgrepo-com.svg" alt="log out icon" className="w-auto h-5"/>
                        Log out
                    </button>
                </li>
            </ul>
        </motion.div>

    )

}