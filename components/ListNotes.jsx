import { useNotesContext } from "../context/notes";
import { NoNotesMessage } from "./NoNotesMessage";
import { Note } from "./Note";
import { NoteEdit } from "./NoteEdit";

export const ListNotes = () => {
  const { notes, showEmpty, setShowEmpty, onCreate } = useNotesContext();

  return (
    <div className="pt-12 px-16 pb-16">
      <h2 className="text-5xl font-semibold mb-12">Notes</h2>
      <div className="max-w-screen-2xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-x-10 gap-y-10">
        {showEmpty && (
          <NoteEdit
            {...showEmpty}
            onCancel={() => setShowEmpty(false)}
            onSave={onCreate}
          />
        )}

        {notes?.length > 0 &&
          notes.map((note) => <Note key={note.id} {...note} />)}
      </div>
      <NoNotesMessage hide={showEmpty || notes?.length > 0} />
    </div>
  );
};
