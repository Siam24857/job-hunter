import { headers } from "next/headers"
import { auth } from "../lib/auth"
import { redirect } from "next/navigation"

export const getuser = async () => {
    const session = await auth.api.getSession({
    headers: await headers() // some endpoints might require headers
})


return session?.user || null
}
export const getsession = async () => {
    const session = await auth.api.getSession({
    headers: await headers() // some endpoints might require headers
})


return session?.session || null
}


export const getrole = async (role) =>{
    const userrole = await getuser();

    if(userrole.role !== role){
       redirect("/unouthorized")
    }
}