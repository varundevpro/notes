import { useState } from "react";
import { useNotesContext } from "../context/notes";
import { NoteEdit } from "./NoteEdit";
import { NoteView } from "./NoteView";

export const Note = ({ ...props }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { onUpdate } = useNotesContext();

  const handleUpdate = (text) => {
    if (!text) {
      setIsEditing(false);
      return;
    }

    onUpdate({
      ...props,
      content: text,
      date: new Date().toISOString(),
    });
    setIsEditing(false);
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const handleFav = () => {
    onUpdate({
      ...props,
      isFav: props.isFav ? 0 : 1,
    });
  };

  return isEditing ? (
    <NoteEdit {...props} onSave={handleUpdate} onCancel={toggleEditing} />
  ) : (
    <NoteView {...props} onEdit={toggleEditing} onFavChange={handleFav} />
  );
};
