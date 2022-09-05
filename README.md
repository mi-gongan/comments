## Comments

- 환경변수
  => kakao 키값은 노출되면 위험하므로 .env.local에 담아놓고 .gitignore한뒤에 vercel로 배포할때 환경변수 설정

- react-slick을 이용하여 커스텀 캐러셀 구현
  => 동적 배열이라 map으로 불러오는데 그러면 현재 페이지네이션의 위치를 알 수 없어 처음 데이터는 따로 가져와서 분기하여 해결

- createGlobalStyle
  => 특정페이지만 화면 너비를 조정하여야 해서 사용
