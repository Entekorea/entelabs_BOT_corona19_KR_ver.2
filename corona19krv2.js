function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if(msg === '!!국내코로나') {//국내코로나 라고 하면
    var data = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr").get().select("ul.liveNum").select("span");//ul=class의 liveNum에서 <span>선택
    var dis = data.get(0).text().replace("(누적)", "")//<span> 첫번째줄 가져옴
    var rel = data.get(4).text();//<span> 다섯번째줄 가져옴
    var hos = data.get(7).text();//<span> 여덟번째줄 가져옴
    var die = data.get(9).text();//<span> 열번째줄 가져옴
    replier.reply("[실시간 - 국내 코로나 현황]" + "\n확진환자 수: " + dis  +"\n격리자 수"+ hos + "\n완치 수: " + rel+"\n사망자 수"+ die);//출력
    }
//제작자 엔테클로(entekorea, EnteLabs)
//문의는 언제나 환영입니다. entekorea@naver.com
//제작자 깃헙 github.com/entekorea
//복붙해도 무방, but 팔다가 걸리면 손모가지
}
