
let btncomp = document.getElementById("competances");
let btndip = document.getElementById("diplome");
let btnxp = document.getElementById("xp");
let btnlang = document.getElementById("langue");
let comp = document.getElementById('comp');
let dip = document.getElementById('dip');
let main = document.getElementById('main')

console.log(main)
btncomp.addEventListener('click', ()=> {
    if (comp.classList.contains('hidden')) {
        comp.classList.remove('hidden');
        comp.classList.add('max-lg:flex');
    } else {
        comp.classList.add('hidden');
        comp.classList.remove('max-lg:flex');
    }
})
btndip.addEventListener('click', ()=> {
    if (dip.classList.contains('hidden')) {
        dip.classList.remove('hidden');
        dip.classList.add('max-lg:flex');
        main.classList.add('h-[180vh]');
        
    } else {
        dip.classList.add('hidden');
        dip.classList.remove('max-lg:flex');
        dip.classList.remove('h-[180vh]')
        
    }
})

