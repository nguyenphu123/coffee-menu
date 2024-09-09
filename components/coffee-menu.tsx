"use client";
import { useState, useEffect } from "react";
export default function Coffee_menu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    async function getDepartments() {
      const data = await fetch("/api/coffee_menu", {
        method: "GET",
      }).then((res) => res.json());

      setMenu(data);
    }

    getDepartments();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        This is a coffee shop!!!
        <div className="grid grid-cols-1 gap-1">
          {menu.map((item: { name: string; price: string }, i) => (
            <div className="grid grid-cols-2 gap-2" key={i}>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
