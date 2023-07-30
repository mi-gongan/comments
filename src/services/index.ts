import { FirebaseService } from "./firebase";
import { KakaoService } from "./kakao";

export namespace Service {
  export const kakao = new KakaoService();
  export const firebase = new FirebaseService();
}
