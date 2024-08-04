import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await axios.post(
      "http://api.giftogether.co.kr/auth/login",
      body,
      {
        withCredentials: true,
      },
    );

    const res = new NextResponse(JSON.stringify(response.data), {
      status: 200,
    });

    response.headers["set-cookie"].forEach((cookie) => {
      res.headers.append("Set-Cookie", cookie);
    });

    return res;
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Login failed" }), {
      status: 401,
    });
  }
}
