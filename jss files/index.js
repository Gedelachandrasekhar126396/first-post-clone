// index file js is here

document.querySelector("#menu").addEventListener("click",display)

function display(){
    document.querySelector("#menubar").style="display:block"
}
document.querySelector(".cross-mark").addEventListener("click",display2)

function display2(){
document.querySelector("#menubar").style="display:none"
}
let array = [
        
        { image : "https://images.firstpost.com/wp-content/uploads/fpranking/1658499549883.jpg", c:1},
        { image : "https://images.firstpost.com/wp-content/uploads/2021/10/14reliance.jpg?impolicy=website&width=640&height=362", c:2},
        { image : "https://images.firstpost.com/wp-content/uploads/2021/10/Liquor6432.jpg?impolicy=website&width=640&height=362", c:3},
        { image : "https://images.firstpost.com/wp-content/uploads/2022/07/640363-2022-07-22T194527.085.jpg?impolicy=website&width=640&height=362", c:4},
        { image : "https://images.firstpost.com/wp-content/uploads/2022/06/mobile11.jpg?impolicy=website&width=640&height=362", c:5},
        { image : "https://images.firstpost.com/wp-content/uploads/fpranking/165833894398.jpg", c:0},
]
let count=0;
console.log(count)   
     document.querySelector("#right").addEventListener("click", display3)
     function display3(){
        count++;
        let base = Math.abs(count%5);
        console.log(count)
       for(let i=0;i<array.length;i++){
        if (base=== array[i].c){
            document.querySelector("#pic").src = array[i].image
        }
       }
     }
     
     document.querySelector("#left").addEventListener("click", display4)
     function display4(){
        count--;
        let base = Math.abs(count%5);
        console.log(count)
       for(let i=0;i<array.length;i++){
        if (base=== array[i].c){
            document.querySelector("#pic").src = array[i].image
        }
       }
     }