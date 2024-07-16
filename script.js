
let btncomp = document.getElementById("competances");
let btndip = document.getElementById("diplome");
let btnxp = document.getElementById("xp");
let btnlang = document.getElementById("langue");
let comp = document.getElementById('comp');

console.log(comp)

btncomp.addEventListener('click', ()=> {
    if (comp.classList.contains('hidden')) {
        comp.classList.remove('hidden');
    } else {
        comp.classList.add('hidden');
    }
})