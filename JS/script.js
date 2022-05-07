var character = document.getElementById("character"); //เรียกใช้งาน Character
var block = document.getElementById("block"); //เรียกใช้งานตัวของสิ่งกีดขวาง
var counter=0;

function jump(){         //ฟังก์ชันในการบังคับให้ character กระโดด
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}


var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){//ค่าของความเร็วของสิ่งกีดขวางและความเร็วในการกระโดดของตัว character
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));//เมื่อมีการกระโดดไปชนสิ่งกีดขวางก็จะทำการแจ้งเตือนขึ้น
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);