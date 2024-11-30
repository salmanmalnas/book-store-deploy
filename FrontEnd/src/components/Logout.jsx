import React from "react";
import { useAuth } from "../contex/AuthProvider";
import toast from "react-hot-toast";

function Logout(){
    const [authUser, setAuthUser] = useAuth()
    const handlelogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user : null
            });
            localStorage.removeItem("user");
            toast.success("Logout Successfully...");
            window.location.reload();
            setTimeout(() => {

            }, 3000);
        }catch (error){
            toast.error("Error: " + error.massage);
            setTimeout(() => {}, 300);
        }
    };

    return(
        <>
            <button className="mx-2 px-1 py-1 bg-red-500 text-white rounded-md courser-pointer"
            onClick={handlelogout}
            >
                Logout
            </button>
        </>
    );
}
export default Logout;