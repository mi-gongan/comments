import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { formAtom } from "../src/recoil/form";
import { emailAtom } from "../src/recoil/user";
import LoginBox from "../src/components/commentionlogin/LoginBox";
import DefaultHead from "../src/components/seo/DefaultHead";
import { theme } from "../src/styles/theme";
import { Service } from "../src/services";

function commentlogin() {
  const router = useRouter();
  const [form, setForm] = useRecoilState(formAtom);
  const email = useRecoilValue(emailAtom);
  const [upload, setUpload] = useState("");
  const [peerName, setPeerName] = useState<string>(form._to.split("@")[0]);
  const [render, setRender] = useState("");

  useEffect(() => {
    if (!form._to) {
      router.push("/");
      return;
    }
    Service.firebase.fetchUserData(form._to).then((res: any) => {
      if (res) {
        setPeerName(res.name);
      }
    });
    setRender("ok");
  }, []);

  //email 있는 경우
  useEffect(() => {
    if (email) {
      Service.firebase.fetchUserData(email).then((res: any) => {
        if (email === form._to) {
          alert("본인에게는 코멘트를 작성할 수 없습니다");
          router.push("/");
          return;
        }
        Service.firebase.getFinalIndex(form._to).then((finalIndex) => {
          setForm({
            _from: email,
            _to: form._to,
            id: finalIndex + 1,
            name: res.name,
            text: form.text,
            view: false,
          });
          setUpload("ok");
        });
      });
    }
  }, [email]);

  // uplaod되면 page 이동
  useEffect(() => {
    if (upload) {
      Service.firebase.setComment(form);
      router.push(
        `/peercomment/${encodeURIComponent(form._to)}?formState=true`
      );
      setForm({
        _from: "",
        _to: "",
        id: 0,
        name: "",
        text: "",
        view: false,
        star: false,
      });
    }
  }, [upload]);

  // email 없는 경우 login
  const handleLogin = async () => {
    Service.kakao.authorize();
  };

  return (
    <Wrap>
      <DefaultHead />
      {render && (
        <LoginBox
          peerName={peerName}
          handleLogin={!email ? handleLogin : undefined}
        />
      )}
    </Wrap>
  );
}

export default commentlogin;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${theme.color.primary};
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
`;
