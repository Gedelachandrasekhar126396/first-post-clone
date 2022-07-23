//  Entertainment script file


document.querySelector("#menu").addEventListener("click",display)

function display(){
    document.querySelector("#menubar").style="display:block"
}
document.querySelector(".cross-mark").addEventListener("click",display2)

function display2(){
document.querySelector("#menubar").style="display:none"
}
let array = [
        
        { image : "https://images.firstpost.com/wp-content/uploads/fpranking/1658551532810.jpg?impolicy=website&width=640&height=3622", c:1, story : "WWE SmackDown results: Brock Lesnar’s unexpected entry, Vince McMahon’s retirement and more"},
        { image : "https://images.firstpost.com/wp-content/uploads/fpranking/1658571088584.jpg?impolicy=website&width=640&height=362", c:2,story : "Here’s why Samantha Ruth Prabhu opened up on broken marriage with Karan Johar"},
        { image : "https://images.firstpost.com/wp-content/uploads/2022/07/Sweden-Belgium-Euro-2022-640.jpg?impolicy=website&width=640&height=362", c:3,story : "Women's Euro 2022: Linda Sembrant strikes as Sweden beat Belgium to set up England semi-final"},
        { image : "https://images.firstpost.com/wp-content/uploads/2022/07/Chivas-Juventus-640.jpg?impolicy=website&width=640&height=362", c:4,story : "Juventus open US tour with 2-0 friendly win over Chivas Guadalajara"},
        { image : "https://images.firstpost.com/wp-content/uploads/2022/07/Dominic-Thiem.jpg?impolicy=website&width=640&height=362", c:5,story : "Dominic Thiem reaches first ATP Tour semi-final in 14 months"},
        { image : "https://images.firstpost.com/wp-content/uploads/fpranking/1658551532810.jpg?impolicy=website&width=640&height=362", c:0,story : "Significant wins by south Indian cinema show a shift away from Hindi films at National Film Awards"},
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