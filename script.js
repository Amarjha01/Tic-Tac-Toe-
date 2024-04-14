let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#Reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) =>{
        box.addEventListener("click", () =>{
            if (turnO){
            box.innerText = "O";
            turnO = false;
            
           }else {
            box.innerText = "X";
            turnO = true;
           }
           box.disabled = true;
           
           checkWinner();
     });
});

resetBtn.forEach((resetBtn) => {
    resetBtn.addEventListener("click", () => {
        // Reset the content of each box to "none"
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
    });  
});

const disablebtn = ()=>{
    for( let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
msg.innerText = `Congratulation's winner is ${winner}`;
msgContainer.classList.remove("hide");
resetBtn.forEach(btn => {
        btn.style.display = 'none';
    });
    disablebtn();
}
checkWinner = ()=>{
    for(arr of winPatterns){
          let pos1 =  boxes[arr[0]].innerText;
          let pos2 =  boxes[arr[1]].innerText;
          let pos3 =  boxes[arr[2]].innerText;

          if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.warn("winner is " + pos1);
                showWinner(pos1);
            }
        }
    }
}



