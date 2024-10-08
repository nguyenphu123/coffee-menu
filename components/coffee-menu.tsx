/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
export default function Coffee_menu() {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    async function getDepartments() {
      const data = await fetch("/api/coffee_menu", {
        method: "GET",
      }).then((res) => res.json());

      setMenu(data);
    }

    getDepartments();
  }, []);
  async function onSubmit(e: any) {
    e.preventDefault();
    const data = await fetch("/api/coffee_menu", {
      method: "POST",
      body: JSON.stringify({
        coffee: search,
      }),
    }).then((res) => res.json());
    setData(data);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        This is a coffee shop!!!
        <form>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" onClick={(e) => onSubmit(e)}>
            Search
          </button>
        </form>
        You search: {data}
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
