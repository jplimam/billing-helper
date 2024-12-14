import Sidebar from "@/components/Dashboard/Sidebar/page"
import Navbar from "@/components/Dashboard/Navbar/page";

export default function Dashboard() {
  return (
    <>
      <Sidebar/>
      <div className="h-screen ml-28">
        <Navbar/>
      </div>
      
    </>
  );
}
