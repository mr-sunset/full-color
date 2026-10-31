document.addEventListener('DOMContentLoaded', () => {
    const controls = document.getElementById("controls");
    const colorPicker = document.getElementById('color-picker');
    const randomColor = document.getElementById('random-color');
    const hexCode = document.getElementById('hex-code');
    let hideTimer;

    // Change bg color when color picker is clicked away from
    colorPicker.addEventListener('change', (e) => {
        setBackgroundColor(e.target.value);
    })

    // Generate random color
    randomColor.addEventListener("click", () => {
        const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

        setBackgroundColor(randomHex);
    });

    // Hide controls on rest
    window.addEventListener('mousemove', handleMouseMovement);
    window.addEventListener('touchstart', handleMouseMovement)

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

    // Update both the body color, color picker preview, and hex-code
    function setBackgroundColor(hex) {
        document.body.style.backgroundColor = hex;
        hexCode.textContent = hex;
        colorPicker.value = hex;
    }
})