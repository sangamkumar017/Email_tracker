import { Product } from "@/lib/model/product";
import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await Product.find();

  console.log(data);

  return NextResponse.json({ result: data });
}







// import mongoose from "mongoose";
// import { NextResponse } from "next/server";
// import { Email } from "@/lib/model/email";
// import { connectionStr } from "@/lib/db";

// export async function GET() {
//   let data = [];
//   try {
//     // await mongoose.connect(connectionstr);
//     await mongoose.connect(connectionStr);
//     data = await Email.find();
//   } catch (error) {
//     data = { success: false };
//   }

//   return NextResponse.json({ result: data, success: true });
// }
