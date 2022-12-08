export const buyBall= (qty)=>{
   console.log("performing some task before returning the action object");
   return {
    type:"BUY_BALL",
    payload:qty,
   }
}