// // class canvasPaint {
// //     constructor(data) {
// //         this.name="rahul"
// //         this.age=34; 
// //         this.product={
// //             nameP:"rahul",
// //             branch:"mca"
// //         };
// //         this.data=data
// //     }
// //     PrintDetails(){
// //         console.log(this.data,"gettin age "+this.age ,"gettin name "+this.name)
// //     }
// // }
// // let canvas= new canvasPaint(12);
// // canvas.PrintDetails();

// class Bubble{
//    constructor(parent,num) {
//    this.parent=parent;
//    this.num=num;     
//     }
//    AddBubble(){
//     for(var i=1;i<=this.num;i++){
//          var Bubbles=document.createElement("div");
//          Bubbles.classList.add("bubble")
//          Bubbles.textContent=i;

//         document.querySelector(this.parent).appendChild(Bubbles)
//     }
//    }
//    }

//    let PrintBubble= new Bubble(".app",10);
//    PrintBubble.AddBubble();


const Array =[3,45,5,7,4]

let output=Array.filter((num)=> num%5 ==0)
 
// but if we use scope then we have to use return statement

let numF=Array.filter((num)=>{
  return  num>5
})

console.log(numF)
console.log(output)