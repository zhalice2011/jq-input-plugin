function setTab(m,n)
{
     var tli=document.getElementById("menu"+m).getElementsByTagName("li");
     var mli=$("#main1").children() ;
     //alert(tli.length) ;
     for(i=0;i<tli.length;i++){
      tli[i].className=i==n?"hover":"";
      //mli[i].style.display=i==n?"block":"none";
      if(i==n)
      {
        $(mli[i]).show() ;
      }
      else{
       $(mli[i]).hide();
      }
     }
}


 $(document).ready(function()
 {
     //var mli=document.getElementById("main"+1).childNodes ;
     var mli=$("#main1").children() ;
     for(i=0;i<mli.length;i++)
     {
        if(0==i)
        {
         $(mli[i]).show() ;
        }
        else
        {
         $(mli[i]).hide();
        }
     }
 }
 )


function initSlide(container, slider, count) {

    var forEach = function (array, callback, thisObject) {
        if (array.forEach) {
            array.forEach(callback, thisObject);
        } else {
            for (var i = 0, len = array.length; i < len; i++) { callback.call(thisObject, array[i], i, array); }
        }
    }

    var st = new SlideTrans(container, slider, count, { Vertical: false });

    var nums = [];
    //插入数字
    for (var i = 0, n = st._count - 1; i <= n; ) {
        (nums[i] = slide$("idNum").appendChild(document.createElement("li"))).innerHTML = ++i;
    }

    forEach(nums, function (o, i) {
        o.onmouseover = function () { o.className = "on"; st.Auto = false; st.Run(i); }
        o.onmouseout = function () { o.className = ""; st.Auto = true; st.Run(); }
    })

    var images = [];
    var idSliderContainer = document.getElementById('idSlider');
    images = idSliderContainer.getElementsByTagName('img');
    //alert(images.length) ;

    forEach(images, function (o, i) {
        o.onmouseover = function () { st.Auto = false; st.Run(i); }
        o.onmouseout = function () { st.Auto = true; st.Run(); }
    })


    st.onStart = function () {
        forEach(nums, function (o, i) { o.className = st.Index == i ? "on" : ""; })
    }
    st.Run();
}


