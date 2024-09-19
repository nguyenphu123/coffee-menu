import { NextResponse } from "next/server";
import { stringify } from "querystring";
const coffee_menu = [
  {
    name: "Coffee 1",
    price: "5$",
    description: "",
  },
  {
    name: "Coffee 2",
    price: "6$",
    description: "",
  },
  {
    name: "Coffee 3",
    price: "7$",
    description: "",
  },
];
export async function GET() {
  try {
    // let {} = await req.json();
    var loginOptions = {
      method: "GET",
      url: "https://nginx-ingress.akamai-coffee.uk/api/cafe-get",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `https://nginx-ingress.akamai-coffee.uk/api/cafe-get`,
      loginOptions
    );
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.log("[ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function POST(req: Request) {
  const { coffee } = await req.json();
  try {
    var loginOptions = {
      method: "POST",
      url: "https://nginx-ingress.akamai-coffee.uk/api/cafe-post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coffee: coffee,
      }),
    };
    const response = await fetch(
      `https://nginx-ingress.akamai-coffee.uk/api/cafe-post`,
      loginOptions
    );
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.log("[ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
