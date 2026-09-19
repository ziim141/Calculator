let buttons=document.querySelectorAll("button");
let display=document.getElementById("inputbox");
let indexbtn=Array.from(buttons);

let string="";
indexbtn.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            let saim=e.target.innerHTML;
            if(saim==='AC'){
                string="";
                display.value=string;
            }
            else if(saim==="DEL"){
                string=string.substring(0,string.length-1);
                display.value=string;
            }
            else if(saim==="="){
                string=eval(string);
                display.value=string;
            }
            else{
                 string +=saim;
        display.value=string;
            }
        console.log(e.target.innerHTML);
    });
});