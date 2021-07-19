import { useEffect, useRef, useState } from "react";

export const NoteEdit = ({ color, content, date, isFav, onSave, onCancel }) => {
  const [text, setText] = useState(undefined);
  const el = useRef(null);

  useEffect(() => {
    el.current.focus();
  }, []);

  const handleChange = (ev) => {
    setText(ev.target.value);
  };

  return (
    <div
      className="group flex flex-col pb-8 rounded-2xl"
      style={{ minWidth: 280, minHeight: 280, backgroundColor: color }}
    >
      <textarea
        className="block px-8 pt-8 rounded-2xl outline-none resize-none h-full flex-grow"
        defaultValue={content}
        style={{ backgroundColor: color }}
        onChange={handleChange}
        ref={el}
      >
        {text}
      </textarea>

      <div className="flex px-8 mt-auto">
        <button
          className="text-white bg-black hover:bg-gray-900 hover:shadow-lg transition rounded-full mr-2 py-3 px-4 flex-1"
          onClick={() => onSave(text)}
        >
          Save
        </button>
        <button
          className="text-black bg-white bg-opacity-50 hover:bg-opacity-75 hover:shadow-lg transition rounded-full ml-2 py-3 px-4 flex-1"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
