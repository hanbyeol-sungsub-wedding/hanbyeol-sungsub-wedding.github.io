# 강한별과 우성섭의 결혼식 초대장 사이트 소스입니다.
강한별과 우성섭의 결혼식에 초대합니다.

이 페이지까지 찾아 들어오셨다면 저희에게 관심이 있는 분이시겠죠. 고맙습니다. 아직 청첩장을 못 받으셔서 서운하다거나 말이라도 전하고 싶다면 제(성섭) 페이스북이나 카톡, 전화 등으로 연락해주세요. 여러분들을 찾아뵙고 있지만 저희가 실수로 빠트린 분이 분명히 있을 것이라고 생각해요.

다시 한번 저희 인생의 중요한 이벤트에 관심 가져주셔서 고맙습니다.

결혼식 후기: [흔한 IT 업계 종사자의 모바일 청첩장 발행기](https://brunch.co.kr/@cloud09/129)

# 클릭 이벤트와 스크롤 추적 하는 법

1. [Google Analytics](https://analytics.google.com) 코드 설치
2. 링크 클릭 이벤트 
    
```html
<a onclick="ga('send', 'event', '페이스북 이벤트 페이지', '링크 클릭');" 
href="https://www.facebook.com/events/153683578462761/" >페이스북 이벤트에 댓글 달기</a>
```
  
3. 사진 클릭 이벤트 

```html
<a onclick="ga('send', 'event', '갤러리', '클릭', '긴 하루의 끝');" href="./images/g9.jpg" 
class="magnific-zoom-gallery" title="긴 하루의 끝">
```

4. 스크롤 추적 이벤트: 라이브러리 http://scrolldepth.parsnip.io/

> 화면의 25%, 50%, 75%, 100% 읽은 사람의 숫자를 google analytics에 보낸다.

```html
<script src="js/jquery.scrolldepth.min.js"></script>
<script>
jQuery(function() {
  jQuery.scrollDepth();
});
</script>
```
