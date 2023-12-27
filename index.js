let userscore =0;
let compscore =0;
  const chooices = document.querySelectorAll(".chooice");
  const msg = document.querySelector("#msg");
  const yourscore = document.querySelector("#user-score");
  const cscore=document.querySelector("#comp-score");
  
const gencompchoice =()=>{
    let options = ["rock", "paper","scissor"]
    const randomindx =Math.floor(Math.random()*3);
    return options[randomindx]
}

const Drawgame =()=>{
    console.log("It was a Draw")
    msg.innerText =" It was a Draw ";
    msg.style.backgroundColor="#081b31"
}
const showWinnner =(userwin)=>{
  if(userwin){
    userscore++;
    console.log("You Win !")
    msg.innerText ="You  win!";
    msg.style.backgroundColor="green"
    yourscore.innerText = userscore;
 
  } 
  else{
    compscore++
    console.log("You loose!");
    msg.innerText ="You  loose!";
    msg.style.backgroundColor="red"
    cscore.innerText=compscore;
  } 
}
  const palygame =(userchooice)=> {
    console.log("User chooice =" , userchooice)
    const compchoice = gencompchoice();
    console.log("comp choice =" , compchoice)
    if(userchooice===compchoice){
        // console.log("Draw")
        Drawgame();
    }  else{
        let userwin =true;
        if(userchooice=="rock"){
            userwin = compchoice==="paper"? false:true;
       
        }
        else if (userchooice=="paper"){
            userwin=compchoice==="scissors"? false :true;
        }
        else{
            userwin = compchoice==="rock"?false:true
        }
        showWinnner(userwin);
    }

  }
  chooices.forEach((chooice) => {
    console.log(chooice);
    chooice.addEventListener("click" , ()=>{
        const userchooice=chooice.getAttribute("id")
        // console.log("Clicked " , choiceid)
        palygame(userchooice)
    })
  })
