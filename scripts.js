// example1
function example1(){
    document.getElementById("text").style.color = "red";
}

// example2
let today = new Date();
let result = today.toLocaleDateString('th-TH',{
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit"
});
document.getElementById("date").innerHTML = result;

// example3
function stand() {
    document.getElementById("imgcat").src = "cat/Idle.png";
}
function slide() {
    document.getElementById("imgcat").src = "cat/Slide.png";
}

// example4
function hide(){
    document.getElementById("mytable").style.display = "none";
}
function show(){
    document.getElementById("mytable").style.display = "block";

}

// example5
function example5(){
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let num3 = document.getElementById("input3").value;
    var result1 = (parseInt(num1)+ parseInt(num2)+parseInt(num3))/3;
    var result2 = Math.max(num1,num2,num3);
    var result3 = Math.min(num1,num2,num3);
    alert("ค่าเฉลี่ย: "+result1+"\nค่าต่ำสุด: "+result2+"\nค่าต่ำสุด:"+result3 );
}