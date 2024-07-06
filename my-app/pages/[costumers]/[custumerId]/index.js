import {Db} from "@/db/Db";
import Link from "next/link";
import {useRouter} from "next/router"
import { useEffect } from "react";
export default function (){
    const router = useRouter()
    const {custumerId} = router.query;
   
   
    return (
     <>
    <div>
     <h1>Project Page</h1>
     { Db.map((userDet) => {
        
        let usePro = userDet.name + userDet.id
    let last=  Db.filter((x)=> x.id )
    if(usePro == custumerId) {
        console.log("working")
        return <h1> <Link href={`/costumers/${userDet.name}/${userDet.project}`}>{userDet.project}</Link></h1>
    }

       
  
 })}

    </div>
     </>
     
   )
 }