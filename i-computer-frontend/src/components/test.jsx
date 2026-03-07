import { useState } from "react";


export default function Test() {
  const [status, setStatus] = useState("OFF");
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[300px] h-[300px] shadow-2xl flex flex-col items-center justify-center">
        <button
          className="w-full h-[50px] bg-blue-500 text-white font-bold"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>

        <p className="text-center text-2xl font-bold">{count}</p>

        <button
          className="w-full h-[50px] bg-green-500 text-white font-bold"
          onClick={() => {
            console.log("Increment");
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>

      <div className="w-[300px] h-[300px] shadow-2xl flex flex-col items-center justify-center">
        <button
          className="w-full h-[50px] bg-red-600 text-2xl text-white font-bold"
          onClick={() => setStatus("OFF")}
        >
          OFF
        </button>
        <p className="text-center text-2xl font-bold">{status}</p>
        <button
          className="w-full h-[50px] bg-pink-600 text-2xl text-white font-bold"
          onClick={() => setStatus("ON")}
        >
          ON
        </button>
      </div>
    </div>
  );
}
