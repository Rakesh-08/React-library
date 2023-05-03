const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// event bubbling --- default behaviour of runninng events

// grandParent?.addEventListener('click', () => { console.log('grandParent clicked') },false);

// child?.addEventListener('click', (event) => {
//     console.log('child clicked')
// event.stopImmediatePropagation()}, false);

// parent?.addEventListener('click', (e) => {
//     console.log('parent clicked')
// e.stopImmediatePropagation()}, false);

// document.addEventListener('click',()=>{ console.log('document clicked')},false)

 

// event capturing -- trickling down the flow of events

grandParent?.addEventListener('click', (event) => {
    console.log('grandParent clicked')
     event.stopImmediatePropagation()
}, true);

child?.addEventListener('click', () => { console.log('child clicked') }),true;

 parent?.addEventListener('click', () => { console.log('parent clicked') },true);







