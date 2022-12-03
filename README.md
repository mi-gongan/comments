# Commention

: 노션 포트폴리오를 작성할때 정성적인 부분도 효과적으로 포함시키고자 하는 욕구가 있다고 생각했습니다. 주변 사람들에게 "commention"을 요청하고 받아서 노션에 임베드 할 수 있도록 만든 서비스입니다

주소 : https://www.commention.co.kr

### login : 카카오톡 로그인 기능

: 보다 쉬운 접근과 카카오톡의 공유 같은 서비스를 사용하기 위해 카카오톡 로그인을 통해서 접근할 수 있도록 했습니다.

![login](https://user-images.githubusercontent.com/97350083/205439332-3b06387e-e588-444e-bb18-e6ee147e111f.png)

### commention 요청 보내기

: 카테고리에 따라 다른 형태의 소개글, openGraph를 담아 공유합니다.
: 링크를 통해 공유할 수도 있고 카카오 공유로도 할 수 있습니다.

![request](https://user-images.githubusercontent.com/97350083/205439351-321a492d-40ec-486f-8cd3-70c105d23f5b.png)

### 받은 commention 관리

: 남들한테 받은 코멘션을 관리할 수 있는 기능입니다. 숨기기, 앞으로 배치 등이 가능합니다.

![receive1](https://user-images.githubusercontent.com/97350083/205439781-0286c89d-fe90-4b3e-8e2d-1ce167d8b3f2.png)
![receive2](https://user-images.githubusercontent.com/97350083/205439903-0675607c-d24e-42d3-aac7-c094d3a24664.png)

### 노션에 임베드

: 자신의 노션 링크를 저장하면 자신이 받은 commention을 노션에 임베드할 수 있는 링크를 받을 수 있습니다.

![embed](https://user-images.githubusercontent.com/97350083/205439372-cdfba3f6-1b6d-4529-b106-6d911a555e08.png)

### form

: 다른 사람이 요청보냈을 때 받은 폼 작성지입니다.

![form1](https://user-images.githubusercontent.com/97350083/205439387-beb0c24f-bf79-4c31-a4e7-9da46e110e34.png)
![form2](https://user-images.githubusercontent.com/97350083/205440159-a04d3f70-4e40-468a-82ee-31430492afd5.png)
![form3](https://user-images.githubusercontent.com/97350083/205440207-bc1dc315-0a3d-40cc-bf66-6f8bfbac5d22.png)

### notion embed test

![notion1](https://user-images.githubusercontent.com/97350083/205440414-81d8b120-f1a5-4cf1-9d0f-c61b4f494c29.png)
1[notion2](https://user-images.githubusercontent.com/97350083/205440436-e1bcfb7d-fb7c-4ee6-b560-2f180ca75ff0.png)

## 그외 구현 사항

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
