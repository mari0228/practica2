document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#e0f7fa', '#a5d6a7', '#ffcc80', '#b39ddb', '#80deea'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
