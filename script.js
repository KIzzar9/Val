document.addEventListener('click', function() {
    var fadeText = document.getElementById('fade-text');
    fadeText.classList.add('show');
    setTimeout(function() {
        fadeText.classList.remove('show');
    }, 90000); // Text will be visible for 90 seconds
});

document.getElementById('toggle-button').addEventListener('change', function() {
    var fadeText = document.getElementById('fade-text');
    if (this.checked) {
        fadeText.classList.add('show');
    } else {
        fadeText.classList.remove('show');
    }
});