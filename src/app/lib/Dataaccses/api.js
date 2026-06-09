"use server"

const  API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const creatcompnay = async (companydata) => {
   const res = await fetch(`${API_BASE_URL}/addcompany`, {
       method: "POST",
        headers: {
           "Content-Type" : "application/json",
        },
        body: JSON.stringify(companydata)
   })
   const data = await res.json()
}


//dfgdfggdgdggdggdgdgdf





