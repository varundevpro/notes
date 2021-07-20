import { openDB } from "idb";

export const open = async () => {
  const db = await openDB("notes", 1, {
    upgrade: async (db, oldVersion) => {
      console.log("old version", oldVersion);

      const _store = db.createObjectStore("notes", {
        keyPath: "id",
        autoIncrement: true,
      });

      return;
    },
  });

  return db;
};

export const close = (db) => {
  db.close();
};
