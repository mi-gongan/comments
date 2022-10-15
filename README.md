## Comments

- 환경변수
  => kakao 키값은 노출되면 위험하므로 .env.local에 담아놓고 .gitignore한뒤에 vercel로 배포할때 환경변수 설정

- react-slick을 이용하여 커스텀 캐러셀 구현
  => 동적 배열이라 map으로 불러오는데 그러면 현재 페이지네이션의 위치를 알 수 없어 처음 데이터는 따로 가져와서 분기하여 해결
- firebase
  => 초기 서비스 특성에 따른 nosql에 채택과 빠른 구축을 위한 서버리스 서비스인 firebase 사용

- kakao
  => ux를 위해 kakao 로그인과 kakao 공유기능 사용

- 주소에 email형식
  => 주소에 email을 노출시 크롬에서 접근하지 못하도록 하여서 이메일 정보를 포함한 링크로 변환할때 인코딩하는 과정을 거침

- getServersideProps를 통한 랜더링 최적화

- getInitialProps를 통한 동적 meta data
