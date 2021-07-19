import { useState } from "react";
import { useNotesContext } from "../context/notes";
import { NoteEdit } from "./NoteEdit";
import { NoteView } from "./NoteView";

export const Note = ({ id, ...props }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { onUpdate } = useNotesContext();

  const handleUpdate = (text) => {
    if (!text) {
      setIsEditing(false);
      return;
    }

    onUpdate({
      id,
      ...props,
      content: text,
      date: new Date().toISOString(),
    });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleFav = () => {
    onUpdate({
      id,
      ...props,
      isFav: !props.isFav,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return isEditing ? (
    <NoteEdit {...props} onSave={handleUpdate} onCancel={handleCancel} />
  ) : (
    <NoteView {...props} onEdit={handleEdit} onFavChange={handleFav} />
  );
};
