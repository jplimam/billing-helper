import { motion } from "framer-motion"

export default function ProfileOptions(){
    return(
        
        <motion.div className="bg-[#F8FAFC] text-slate-800 my-2 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}>
            <ul className="">
                <li className="my-2 mx-4">
                    <button>
                        Profile
                    </button>
                </li>
                <div className="bg-gray-500 w-4/5 h-[1px] opacity-50 m-auto"/>
                <li className="my-2 mx-4">
                    <button>
                        Settings
                    </button>
                </li>
                <div className="bg-gray-500 w-4/5 h-[1px] opacity-50 m-auto"/>
                <li className="my-2 mx-4">
                    <button>
                        Log out
                    </button>
                </li>
            </ul>
        </motion.div>

    )

}