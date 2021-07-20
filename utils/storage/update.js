import { open } from "./open";

export const update = async (note) => {
  const db = await open();

  const prev = await db.get("notes", note.id);
  await db.put("notes", {
    ...prev,
    ...note,
  });

  db.close();
  return note;
};
