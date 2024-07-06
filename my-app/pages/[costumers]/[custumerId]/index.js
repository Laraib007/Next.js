import {Db} from "@/db/Db";
import Link from "next/link";
import {useRouter} from "next/router"
import { useEffect } from "react";
export default function (){
    const router = useRouter()
    const {CustomerId} = router.query;
   
   
    return (
     <>
    <div>
     <h1>Project Page</h1>
     { Db.map((userDet) => {
  useEffect(()=>{
    let urlLast = window.location.href.slice(-1)
    let last=  Db.filter((x)=> x.id == urlLast)

}, [])
       
  return <h1> <Link href={`/costumers/${userDet.name}/${userDet.project}`}>{last}</Link></h1>
 })}
 
    </div>
     </>
     
   )
 }