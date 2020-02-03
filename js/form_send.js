function send(){


    var name = document.querySelector(".name_c").value;
    var phone = document.querySelector(".phone_c").value;
    var email = document.querySelector(".email_c").value;
   var msg = document.querySelector(".message_c").value;
   
   var htmlbody = " 이름 : " + name
     + " 발신메일 : " + email
     + " 전화번호 : " + phone
     + " 내용: " + msg;
    
      parent.location.href='mailto:thgus2532@naver.com?subject=포트폴리오 &body='+htmlbody;
   
}