const url = 'https://coffee.alexflipnote.dev/random.json';

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let container = document.getElementById('container');
        let img = document.createElement('img');
        img.src = data.file;
        container.appendChild(img);

        function changeImage() {
            fetch(url) // Fetch a new image from the API
                .then((res) => res.json())
                .then((data) => {
                    img.style.opacity = 0; // Fade out
                    setTimeout(() => {
                        img.src = data.file; // Change the image source
                        img.style.opacity = 1; // Fade in
                    }, 2000); // Match this duration with the CSS transition
                });
        }

        setInterval(changeImage, 3000); // Change image every 2 seconds
    });