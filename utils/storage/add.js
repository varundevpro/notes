import { open } from "./open";

export const add = async (note) => {
  const db = await open();

  await db.add("notes", note);

  db.close();
  return note;
};
