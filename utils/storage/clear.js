import { deleteDB } from "idb";

export const clear = async () => {
  await deleteDB("notes", {
    blocked() {
      console.log("Database is blocked");
    },
  });
};
