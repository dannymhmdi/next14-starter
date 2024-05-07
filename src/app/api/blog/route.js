import connectToDb from "@/lib/connectTodb"
import { NextResponse } from "next/server"

export const GET = async (req , res) =>{
try{
 const response  = await connectToDb(`select * from cars where brand='bentley'`)
     return NextResponse.json(response)
}
catch(err){
console.log('error in server',err)
// throw new Error('error in connection to database occured')
}




}