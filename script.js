document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
    const randomColor = document.getElementById('random-color');

    colorPicker.addEventListener('change', (e) => {
        document.body.style.backgroundColor = event.target.value;
    })
})