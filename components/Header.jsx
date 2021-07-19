import { SearchIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";

export const Header = () => {
  const handleClear = () => {
    if (window.confirm("Please confirm if you want to delete all the notes?")) {
      window.localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <header className="px-16">
      <div className="flex items-center mt-2">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          className="px-4 flex-1 py-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder="Search"
        />
        <button
          className="rounded-md flex justify-center items-center w-7 h-7 ml-8 bg-gray-100 hover:bg-gray-300 focus:bg-gray-300"
          onClick={handleClear}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
