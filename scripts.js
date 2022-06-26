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
    document.getElementById("mycat").style.display = "none";
    document.getElementById("text").style.display = "block";
}
function show(){
    document.getElementById("mycat").style.display = "block";
    document.getElementById("text").style.display = "none";
}

// example5
function example5(){
    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value;
    num3 = document.getElementById("input3").value;
    var result1 = Math.max(num1,num2,num3);
    var result2 = Math.min(num1,num2,num3);
    alert("ค่าสูงสุด: "+result1+"\nค่าต่ำสุด: "+result2);
}