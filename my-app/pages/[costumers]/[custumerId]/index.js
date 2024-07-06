import {Db} from "@/db/Db";
import Link from "next/link";
import {useRouter} from "next/router"
export default function (){
    const router = useRouter()
    const {CustomerId} = router.query;
    
    return (
     <>
    <div>
     <h1>Project Page</h1>
     { Db.map((userDet) => {
        let urlLast
       let last =  Db.filter((x)=> x.name === urlLast)
         console.log(last)
  return <h1> <Link href={`/costumers/${userDet.name}/${userDet.project}`}>{userDet.project}</Link></h1>
 })}
    </div>
     </>
     
   )
 }