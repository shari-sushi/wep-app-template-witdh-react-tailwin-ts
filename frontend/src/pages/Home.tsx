import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import shariLogo from "/shari.ico";
import viteLogo from "/vite.svg";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-4 py-6 sm:px-0 text-gray-200">
      <div className="text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-16 w-16 hover:opacity-80 transition-opacity" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-16 w-16 hover:opacity-80 transition-opacity animate-spin" alt="React logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={shariLogo} className="h-16 w-16 hover:opacity-80 transition-opacity " alt="shari-sushi logo" />
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-8">Vite + React +</h1>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <button onClick={() => setCount((count) => count + 1)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/pages/Home.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="mt-8 text-gray-500">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}
