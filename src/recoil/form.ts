import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const formAtom = atom({
  key: "formAtom",
  default: { _from: "", _to: "", id: 0, name: "", text: "", view: false },
  effects_UNSTABLE: [persistAtom],
});

export const formState = atom({
  key: "formState",
  default: false,
});
