const insert = document.getElementById('insert')

function locationFinder(loc){
   if (loc == 0){
        return `Standard (${loc})`;
   } 
   if (loc == 1){
        return `Left (${loc})`;
    }
    if (loc == 2){
        eturn `Right (${loc})`;
    }
    if (loc == 3){
        return `Numpad (${loc})`;
    }
    if (loc == 4){
        return `Mobile (${loc})`;
    }
    if (loc == 5){
        return `Joystick (${loc})`;
    }
}

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="big">
        ${event.keyCode}
    </div>
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
</div>
<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>
<div class="key">
    ${event.code}
    <small>event.code</small>
</div>
<div class="key">
    ${locationFinder(event.location)}
    <small>event.location</small>
</div>`
})