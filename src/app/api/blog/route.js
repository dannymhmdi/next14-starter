import connectToDb from "@/lib/connectTodb";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const response = await connectToDb(
      `select * from cars where brand='bentley'`
    );
    const newRes = response?.map((value) => {
      return { name: value?.brand };
    });
    return NextResponse.json(newRes);
  } catch (err) {
    console.log("error in server", err);
    // throw new Error('error in connection to database occured')
  }
};
