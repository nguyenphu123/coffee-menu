import { NextResponse } from "next/server";
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
export async function GET(req: Request) {
  try {
    let {} = await req.json();
    return NextResponse.json(coffee_menu);
  } catch (error) {
    console.log("[ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
