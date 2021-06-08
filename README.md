# fly-message-back
fly-message-back


세션
브라우저에서 처리해준다.
sessionid만 가지고 한다 안전하다.

단점
statefull - 서버에 상태가 있서
다양한 많은 서버가 있다면? 어떻게 요청할 것인가
분산형으로 만들어서 사용하기 힘들고 그렇군

login -> server <-> DB
          session
            userid
            sessionId
            expire

    <- cookie:sessionId
        httponly(브라우저 온니)
    
    cookie:sessionId -> check session id 

    <- data
  


JWT 조트 JSON web token
2010
서버에 상태가 없다 
- 단점
{JWT} = 계속 끊임 없이 주고 받을 수 있다
그래서 보안을 위지해서 사용해야 합니다.

header
  - 사용알고리즘
  - 타입
payload
  - 인코딩된 데이터
signature
  - 인코딩하기위한 서버의 비밀키 

base64urlEncoding

서버에서 jwt를 만들어요
전달 받은 클라이언트는 이거를 모든 요청에 같이 전달 합니다.
Headers:Authorization: Bearer JWT - 유효성 검사
클라이언트에게 전달


bycrypt - 단방향
password-hashing algorythm
해쉬된 암호를 저장한다.
alg + cost + salt(해커가 가진 예제코드가 많아서 풀지 못하게 만들려고) + hash


