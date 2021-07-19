import React, { useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const NotesContext = React.createContext({
  notes: [],
  showEmpty: false,
  onCreate: () => {},
  onUpdate: () => {},
  setShowEmpty: () => {},
});

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [showEmpty, setShowEmpty] = useState(false);

  const onCreate = (text) => {
    if (!showEmpty || !text) {
      console.log("Cannot create note");
      return;
    }

    const note = {
      ...showEmpty,
      content: text,
    };
    setNotes((prev) => [note, ...prev]);
    setShowEmpty(false);
  };

  const onUpdate = (note) => {
    setNotes((prev) => {
      const filtered = prev.filter((x) => x.id !== note.id);
      return [note, ...filtered];
    });
  };

  return (
    <NotesContext.Provider
      value={{
        notes: notes.sort((a, b) => new Date(b.date) - new Date(a.date)),
        showEmpty,
        onCreate,
        onUpdate,
        setShowEmpty,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  return useContext(NotesContext);
};
