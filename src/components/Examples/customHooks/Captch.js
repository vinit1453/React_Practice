

export  function Captch() {
   var a=Math.random()*10;
   var b=Math.random()*100;
   var captch=`${Math.round(a)}${Math.ceil(b)}`
   return captch;
}
//where we want to use this custom hook, then first we have to import it
//and use it by Specifying var c=useCaptch();
//and print captch using {c} 