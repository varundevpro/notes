import React, { useCallback, useContext, useEffect, useState } from "react";
import * as storage from "../utils/storage";

const NotesContext = React.createContext({
  notes: [],
  searchText: "",
  showFav: false,
  showEmpty: false,
  onClear: async () => {},
  onCreate: async () => {},
  onUpdate: async () => {},
  setSearchText: () => {},
  setShowEmpty: () => {},
  setShowFav: () => {},
});

export const NotesProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showFav, setShowFav] = useState(false);

  const refetchNotes = useCallback(async () => {
    let data = [];

    if (searchText) {
      const filtered = await storage.getFilteredBy(searchText, showFav);
      data = filtered;
    } else if (showFav) {
      const fav = await storage.getFavorite();
      data = fav;
    } else {
      const all = await storage.getAll();
      data = all;
    }

    setNotes(data);
  }, [showFav, searchText]);

  const onCreate = async (text) => {
    if (!showEmpty || !text) {
      console.log("Cannot create note");
      return;
    }

    const note = {
      ...showEmpty,
      content: text,
    };

    await storage.add(note);
    refetchNotes();

    setShowEmpty(false);
  };

  const onUpdate = async (note) => {
    await storage.update(note);
    refetchNotes();
  };

  useEffect(() => {
    refetchNotes();
  }, [refetchNotes]);

  const onClear = async () => {
    if (window.confirm("Please confirm if you want to delete all the notes?")) {
      await storage.clear();
      refetchNotes();
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes: notes.sort((a, b) => new Date(b.date) - new Date(a.date)),
        searchText,
        showEmpty,
        showFav,
        onClear,
        onCreate,
        onUpdate,
        setSearchText,
        setShowEmpty,
        setShowFav,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  return useContext(NotesContext);
};
