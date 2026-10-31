document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
    const randomColor = document.getElementById('random-color');

    // Change bg color when color picker is clicked away from
    colorPicker.addEventListener('change', (e) => {
        document.body.style.backgroundColor = e.target.value;
    })

    // Generate random color
    randomColor.addEventListener("click", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
})