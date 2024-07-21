
let btncomp = document.getElementById("competances");
let btndip = document.getElementById("diplome");
let btnxp = document.getElementById("xp");
let btnlang = document.getElementById("langue");
let comp = document.getElementById('comp');
let dip = document.getElementById('dip');
let main = document.getElementById('main')
let exp = document.getElementById('exp');
let lang = document.getElementById('la');

// console.log(main)


btncomp.addEventListener('click', ()=> {
    if (comp.classList.contains('hidden')) {
        comp.classList.remove('hidden');
        comp.classList.add('max-lg:block');
    } else {
        comp.classList.add('hidden');
        comp.classList.remove('max-lg:block');
    }
})
btndip.addEventListener('click', ()=> {
    if (dip.classList.contains('hidden')) {
        dip.classList.remove('hidden');
        dip.classList.add('max-lg:block');
        
        
    } else {
        dip.classList.add('hidden');
        dip.classList.remove('max-lg:block');
        
        
    }
})
btnxp.addEventListener('click', ()=> {
    if (exp.classList.contains('hidden')) {
        exp.classList.remove('hidden');
        exp.classList.add('max-lg:block');
        main.classList.add('h-[220vh]');
        
    } else {
        exp.classList.add('hidden');
        exp.classList.remove('max-lg:block');
        
    }
})
btnlang.addEventListener('click', ()=> {
    if (lang.classList.contains('hidden')) {
        lang.classList.remove('hidden');
        lang.classList.add('max-lg:block');
       
        
    } else {
        lang.classList.add('hidden');
        lang.classList.remove('max-lg:block');
        
    }
})
 window.CSS.registerProperty({
    name: "--border-angle",
    syntax: "<angle>",
    inherits: true,
    initialValue: "0turn",
 });


if (window.innerWidth < 400) {
    main.classList.add('h-[230vh]')
}

function stepAnimateText(element, animation, delay){

    let bulle = document.getElementById("bulle");
    var text = bulle.innerText;
    var curr = '';
  
    for (var i=0; i < text.length; i++){
      var character = text.charAt(i);
      bulle.innerHTML = (curr+'<span class="'+animation+'" style="-webkit-animation-delay: '+i*delay+'s; animation-delay: '+i*delay+'s">'+character +"</span>");
      curr = bulle.innerHTML;
    }
    // console.log(text)
  }
  stepAnimateText('.fade','fadeInDown', 0.05);
