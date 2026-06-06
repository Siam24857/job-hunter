
const  API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getcompanydat = async (roomId) => {
const res = await fetch(`${API_BASE_URL}/getcompany?roomId=${roomId}`)
   const data = await res.json()
   return data;
}