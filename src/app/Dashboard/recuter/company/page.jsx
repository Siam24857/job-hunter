import React from 'react';
import CompanyProfile from './Companypropile';
import { getuser } from '@/app/core/getuser';
import { getcompanydat } from '@/app/lib/Dataaccses/data';

const Company = async () => {
    const recuiterdata = await getuser();
    const companys = await getcompanydat(recuiterdata.id)
    console.log(companys)
    
    return (
        <div>
            <CompanyProfile companys={companys} recuiterdata={recuiterdata}></CompanyProfile>
            
        </div>
    );
};

export default Company;