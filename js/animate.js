window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('navbar1').style.backgroundColor='#000';
    document.getElementById('tab1').style.padding="6px 10px";
    document.getElementById('tab2').style.padding="6px 10px";
    document.getElementById('tab3').style.padding="6px 10px";
    document.getElementById('tab1').style.fontSize="15px";
    document.getElementById('tab2').style.fontSize="15px";
    document.getElementById('tab3').style.fontSize="15px";
    document.getElementById('ich').style.fontSize="20px";
    document.getElementById('icw').style.fontSize="20px";
    document.getElementById('icc').style.fontSize="20px";
  } else {
    document.getElementById('navbar1').style.backgroundColor='#1c1c1c';
    document.getElementById('tab1').style.padding="10px 15px";
    document.getElementById('tab2').style.padding="10px 15px";
    document.getElementById('tab3').style.padding="10px 15px";
    document.getElementById('tab1').style.fontSize="17px";
    document.getElementById('tab2').style.fontSize="17px";
    document.getElementById('tab3').style.fontSize="17px";
    document.getElementById('ich').style.fontSize="23px";
    document.getElementById('icw').style.fontSize="23px";
    document.getElementById('icc').style.fontSize="23px";

  }
}