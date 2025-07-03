'use client';

import { auth } from "@/firebase";

const { onAuthStateChanged } = require("firebase/auth");

const { useRouter } = require("next/router");
const { useState, useEffect } = require("react");


const withAuth = (component)=>{
return function ProtectedRoute(props){

        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,(user)=>{
                if(!user){
                    router.push('/');
                }
                else{
                    setLoading(false);
                }
            });
            return ()=>unsubscribe()
        },[router]);

        if(loading){
            return  <p>loading...</p>
        }
        return <component {...props}/>
    }
}
export default withAuth