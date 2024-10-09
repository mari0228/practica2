document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#d1c4e9', '#ffccbc', '#c5cae9', '#b2dfdb'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
