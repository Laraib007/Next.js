import {Db} from "@/db/Db";
import Link from "next/link";
import {useRouter} from "next/router"
export default function (){
    const router = useRouter()
    const {costumers} = router.query;
    
    return (
     <>
    <div>
     <h1>customer Page</h1>
     {Db.map((userDet) => {


  return <h1> <Link href={`/costumers/${userDet.name}${userDet.id}`}>{userDet.name}</Link></h1>
 })}
    </div>
     </>
     
   )
 }