import { useState } from "react";

export default function DropDown(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-64 h-8 rounded-2xl bg-green-500"
      >
        DropDown
      </button>
      {isOpen && (
        <div className="bg-green-100 w-16 ml-40">
          <ul>
            <li>profile</li>
            <li>setings</li>
            <li>log out</li>
          </ul>
        </div>
      )}
    </>
  );
}
