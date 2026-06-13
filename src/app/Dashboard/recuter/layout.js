import { getrole } from "@/app/core/getuser";

 

const layout = async({children}) => {
     
    await getrole("recuter");
    return children;
};

export default layout;




