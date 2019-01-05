     function  getPosition(e)  
 {
   var  left  =   0 ;
   var  top   =   0 ;

   while  (e.offsetParent)  
   {
    left  +=  e.offsetLeft;
    top  +=  e.offsetTop;
    e  =  e.offsetParent;
  } 
 
  left  +=  e.offsetLeft;
  top  +=  e.offsetTop;
   return    {x:left, y:top} ;
} 