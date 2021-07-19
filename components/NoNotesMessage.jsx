export const NoNotesMessage = ({ hide }) => {
  if (hide) {
    return null;
  }

  return (
    <div
      className="flex mx-auto"
      style={{ minHeight: 480, width: 1240, maxWidth: "65vw" }}
    >
      <span className="text-center max-w-prose m-auto block">
        You haven&#39;t added any notes yet.
        <br /> Please click the <strong>Add</strong> button in the sidebar to
        create a note.
      </span>
    </div>
  );
};
