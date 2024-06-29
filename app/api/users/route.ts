
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) { 
  let {name, email, password} = await req.json()
  console.log(email, password, name);
  
  if (!email || !password || !name) {
    return NextResponse.json({
      error: "Please provide email and password",
      status: 400,
      ok: false
    })
  }

  return NextResponse.json(
    {
      res: "Successfully POSTed data",
      status: 200,
      ok: true,
    
    }
  )
}

// import { users } from "../../../utils/db";

// export function GET() { 
//   const data = users
//   if (data.length < 0 ) {
//     return NextResponse.json({ over: "Not enough data" })
//   } else { 
//     return NextResponse.json(data)
//   }
  
// }