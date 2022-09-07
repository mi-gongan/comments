import { atom } from "recoil";

export const formAtom = atom({
  key: "formAtom",
  default: { _from: "", _to: "", name: "", text: "", view: true },
});
