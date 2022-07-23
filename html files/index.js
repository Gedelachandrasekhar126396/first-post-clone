document.querySelector("#menu").addEventListener("click",display)

function display(){
    document.querySelector("#menubar").style="display:block"
}
document.querySelector(".cross-mark").addEventListener("click",display2)

function display2(){
document.querySelector("#menubar").style="display:none"
}
let array = [
        
        { image : "https://images.firstpost.com/wp-content/uploads/fpranking/1658499549883.jpg", c:1, story : "Reliance Industries reports 46.3% year-on-year rise in consolidated net profit for quarter ended June"},
        { image : "https://images.firstpost.com/wp-content/uploads/fpranking/1658562615119.png", c:2,story : "Right Word | Congress’ VP candidate justifies Emergency, says ‘kept mum and fell in line’"},
        { image : "https://images.firstpost.com/wp-content/uploads/2022/07/Uddhav-and-Eknath1.jpg?impolicy=website&width=640&height=362", c:3,story : "Whose Shiv Sena? Election Commission asks Uddhav Thackeray, Eknath Shinde to prove claims"},
        { image : "https://images.firstpost.com/wp-content/uploads/2021/03/Partha-Chatterjee-640.jpg?impolicy=website&width=640&height=362", c:4,story : "SSC recruitment scam: ED arrests TMC Minister Partha Chatterjee"},
        { image : "https://images.firstpost.com/wp-content/uploads/2022/05/rsz_yasin_malik.jpg?impolicy=website&width=640&height=362", c:5,story : "Terrorist Yasin Malik begins hunger strike inside Tihar jail, alleges his case is not being 'investigated properly'"},
        { image : "https://images.firstpost.com/wp-content/uploads/fpranking/165833894398.jpg", c:0,story : " British PM contest: Rishi Sunak races ahead with 137 votes, to face Liz Truss in final leg"},
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
            document.querySelector("#pic").src = array[i].image;
            document.querySelector(".big-story").innerText = array[i].story;
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
            document.querySelector("#pic").src = array[i].image;
            document.querySelector(".big-story").innerText = array[i].story;
        }
       }
     }