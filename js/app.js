const botonAzul = document.getElementById('cambiarColorAzul');
const botonRojo = document.getElementById('cambiarColorRojo');
const botonVerde = document.getElementById('cambiarColorVerde');
const botonReset = document.getElementById('cambiarColorReset');

const root =document.documentElement;

botonAzul.addEventListener('click', () => {
    root.style.setProperty('--bg_color', ' #219ebc');
    root.style.setProperty('--div_color','#FFD7C4');
    root.style.setProperty('--text_color', '#8ecae6');
});
botonRojo.addEventListener('click', () => {
    root.style.setProperty('--bg_color', '#640D5f');
    root.style.setProperty('--div_color','#EE66A6');
    root.style.setProperty('--text_color', '#FFEB55');
});
botonVerde.addEventListener('click', () => {    
    root.style.setProperty('--bg_color', '#00ff9c');
    root.style.setProperty('--div_color','#B6FFA1');
    root.style.setProperty('--text_color', '#914F1E');
});
botonReset.addEventListener('click', () => {
    root.style.setProperty('--bg_color', '#FAF7F0');
    root.style.setProperty('--div_color','##D8D2C2');
    root.style.setProperty('--text_color', '#000010');
})