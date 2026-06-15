"use server"

import { headers } from "next/headers";
import { auth } from "../auth";

const  API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const creatcompnay = async (companydata) => {
   const re = await fetch(`${API_BASE_URL}/addcompany`, {
       method: "POST",
        headers: {
           "Content-Type" : "application/json",
        },
        body: JSON.stringify(companydata)
   })
   const dat = await re.json()
   return dat
}
export const updatecompanystatus = async (id, status) => {
   const res = await fetch(`${API_BASE_URL}/updatecompany/${id}`, {
       method: "PATCH",
        headers: {
           "Content-Type" : "application/json",
        },
        body: JSON.stringify({status})
   })
   const data = await res.json()
   return data
}




export const getallcomapysdata = async()=>{
   const respons = await fetch(`${API_BASE_URL}/allgetcompany`)
   const datas = await respons.json()
    return datas;
}

 




