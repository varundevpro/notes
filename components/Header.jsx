import { SearchIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/outline";
import { useNotesContext } from "../context/notes";
import { classNames } from "../utils/class-names";

export const Header = () => {
  const { showFav, setShowFav, setSearchText, searchText } = useNotesContext();

  const handleChange = (ev) => {
    setSearchText(ev.target.value);
  };

  return (
    <header className="px-16">
      <div className="flex items-center mt-2">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          className="px-4 flex-1 py-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleChange}
        />
        <button
          className={classNames(
            "rounded-md p-2 ml-8 hover:shadow-md transition",
            showFav
              ? "bg-black hover:bg-gray-800 focus:bg-gray-800 text-white"
              : "bg-gray-100 hover:bg-gray-300 focus:bg-gray-300"
          )}
          onClick={() => setShowFav((prev) => !prev)}
        >
          <span className="sr-only">Show favorites</span>
          <StarIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
