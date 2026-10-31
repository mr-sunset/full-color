document.addEventListener('DOMContentLoaded', () => {
    const controls = document.getElementById("controls");
    const colorPicker = document.getElementById('color-picker');
    const randomColor = document.getElementById('random-color');
    let hideTimer;

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

    // Hide controls on rest
    window.addEventListener('mousemove', handleMouseMovement);

    function handleMouseMovement() {
        // Show controls
        controls.classList.remove('hidden');

        // Reset countdown
        clearTimeout(hideTimer);

        // New countdown
        hideTimer = setTimeout(() => {
            controls.classList.add('hidden');
        }, 2000);
    }
})