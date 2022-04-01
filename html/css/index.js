const content = "> Hello World! \n멋사 10기에 합격하신 아기 사자 여러분들 환영합니다\. \n 1년 동안 함께 좋은 추억 만들면서 많은 지식 얻어가셨으면 좋겠습니다\.\n 궁금한것이 생기면 망설임 없이 질문해주세요\.\n 운영진들은 여러분들의 질문을 기다리고 있습니다\!";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    // if (i < content.length) {
    // let txt = content.charAt(i);
    // text.innerHTML += txt=== "\n" ? "<br/>": txt;
    // i++;
    // }
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
    
}
setInterval(typing, 200)
