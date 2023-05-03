document.querySelector('#categories')?.addEventListener('click', (e) => {
     
    window.location.href = "/" + e.target.id;
 })