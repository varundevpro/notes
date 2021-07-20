import { open } from "./open";

export const getAll = async () => {
  let notes = [];
  const db = await open();
  let cursor = await db.transaction("notes").store.openCursor();

  while (cursor) {
    notes.push(cursor.value);

    cursor = await cursor.continue();
  }

  db.close();
  return notes;
};

export const getFavorite = async () => {
  let notes = [];
  const db = await open();
  let cursor = await db.transaction("notes").store.openCursor();

  while (cursor) {
    if (cursor.value.isFav) {
      notes.push(cursor.value);
    }

    cursor = await cursor.continue();
  }

  db.close();
  return notes;
};

export const getFilteredBy = async (text = "", onlyFav = false) => {
  let notes = [];
  const db = await open();
  let cursor = await db.transaction("notes").store.openCursor();

  while (cursor) {
    if (cursor.value.content.toLowerCase().includes(text.toLowerCase())) {
      if (onlyFav) {
        if (cursor.value.isFav) {
          notes.push(cursor.value);
        }
      } else {
        notes.push(cursor.value);
      }
    }

    cursor = await cursor.continue();
  }

  db.close();
  return notes;
};

export const getById = async (id) => {
  const db = await open();
  const note = await db.get("notes", id);

  db.close();
  return note;
};
