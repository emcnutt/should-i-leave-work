document.addEventListener('DOMContentLoaded', function(){
    name = window.location.pathname.slice(1).toLowerCase()
    if (name) {
        name = name.toLowerCase().charAt(0).toUpperCase() + name.slice(1)
        document.querySelector('[data-name]').innerHTML = name;
    }
}, false);
