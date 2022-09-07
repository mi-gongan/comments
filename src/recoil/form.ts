import { atom } from "recoil";

export const formAtom = atom({
  key: "formAtom",
  default: { _from: "", _to: "", id: 0, name: "", text: "", view: true },
});
