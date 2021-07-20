import { TrashIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useNotesContext } from "../context/notes";
import { COLORS } from "../utils/colors";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { setShowEmpty, onClear } = useNotesContext();

  const handleCreate = (color) => {
    // Create note with `color`
    setShowEmpty({
      color,
      content: "",
      isFav: 0,
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="w-24 h-full flex flex-col items-center">
      {/* Logo */}
      <h2 className="text-lg font-bold py-4 mt-2">Notes</h2>

      <div className="pt-12">
        <button
          className="bg-black text-white rounded-full p-3 mb-8 hover:shadow-lg focus:shadow-lg"
          onClick={() => setOpen((x) => !x)}
        >
          <span className="sr-only">Add note</span>
          <PlusIcon className="w-5 h-5" />
        </button>

        {open &&
          Object.entries(COLORS).map(([id, color]) => {
            return (
              <button
                key={id}
                onClick={() => handleCreate(color)}
                className="block rounded-full h-6 w-6 mb-4 mx-auto hover:shadow-lg focus:shadow-lg"
                style={{ backgroundColor: color }}
              >
                <span className="sr-only">
                  Create note with color {id} - {color}
                </span>
              </button>
            );
          })}
      </div>

      <div className="mt-auto mb-8">
        <button
          className="rounded-md p-2 bg-gray-100 hover:bg-gray-300 focus:bg-gray-300 hover:shadow-md transition"
          onClick={onClear}
        >
          <span className="sr-only">Delete all</span>
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
