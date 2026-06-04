"use client" 
import React from 'react';
import {  useSession } from "../../lib/auth-client";
import StatsCards from '@/app/component/Starcards';
const Recuter = () => {

     const {data: seiosn, isPending} = useSession()

     const user = seiosn?.user
     console.log(user)
    return (
        <div>
            <h3 className="text-2xl font-bold text-white">Welcome Back, {user?.name}</h3>
            <StatsCards></StatsCards>
        </div>
    );
};

export default Recuter;