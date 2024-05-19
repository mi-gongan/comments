import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const emailAtom = atom({
  key: "emailAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
