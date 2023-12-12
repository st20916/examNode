# 2023.12.05 작성

> ## Node.js에 대하여
> * 싱글 Thread
> * Node.js로 만든 서버는 비동기
> * 서버가 아니고 실행 엔진이며, 서버 기능을 하는 모듈 존재
> * 고성능의 CPU를 필요로 하는 Node.js 성능으로는 구현하기 힘듦. (이미지 변환, 동영상 압축, 숫자 연산 등)

> ## npm
> * Node Package Manager
> * Node.js에서 사용하는 다양한 모듈을 가져다 사용할 수 있는 Package Manager
> * Module은 미리 짜여진 코드로 프로그램을 구성하는 데이터와 함수를 하나로 묶은 단위

> ## package-lock.json
> * package.json의 자세한 정보를 담고 있음.

> ## express Module
> * Node.js를 사용하여 웹 프레임워크를 만드는 Module
> 
> 1. 요청 응답 함수
> ```
> app.get('/', (req, res) => {
>     res.send(보낼 내용)
> });
> ```

>
> - get : http 메서드
> - 첫번째 매개변수 : routing
> - 두번째 매개변수 : callback function
>
> - Routing : Port 내 접속할 수 있는 파일들의 경로
> - Callback : 앞에 get 또는 post 함수가 실행 된 후 실행하는 함수
> - Http Method : 요청의 목적이나 방식을 어떻게 할 건지 알려주는 Method


# 2023.12.12 작성

> ## 파일 보낼 때
> ```
> app.get('/', (req, res) => {
>    res.sendFile(__dirname + '파일명.확장자');
> });
> ```

> ## View Engine (ejs)
> - 정의 : 기존 html에 작성 시 정적이라는 단점이 있어 서버에서 보내 준 데이터를 동적으로 편리하게
>         쓰기 위해 뷰 엔진 사용
> - 서버에서 보내 준 json 데이터를 활용할 때, <%= Key name %> 으로 활용
> - Javascript 문법은 <% %> 감싸서 활용
>
>
> - 설치 방법 : npm install ejs  
>
> ```
> app.set('view engine', 'ejs');                  // 뷰 엔진을 ejs로 사용
> app.set('views', './views');                    // 경로 설정
> ```
>
> - ejs에서 불러올 때
>
> ```
> // 기본
> <%=  %>
>
> // 반복문 예제
> <ul>
>   <% for (let i = 0; i < 3; i++) { %>
>       <li><%= title %></li>
>   <% } %>
> </ul>
> ```

> ## Get, Post 방식
> 1. Get
> * 주소 창에 Query String이라고 하는 형태의 데이터를 담아 서버에 요청
> * Browser History 기록
> * Bookmark 가능
> * 주로 데이터 요청 시, 사용
> * 요청 데이터가 주소에 노출되므로 보안에 취약
>
> 2. Post
> * 전송 할 데이터를 body에 보냄
> * 주로 데이터 추가, 수정, 삭제 시, 사용
> * 요청 데이터가 주소에 노출되지는 않으나, 보안은 Get 방식보단 괜찮다.
> * Browser History 기록 불가
> * Bookmark 불가능