const url = 'https://coffee.alexflipnote.dev/random.json';

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let container = document.getElementById('container');
        let img = document.createElement('img');
        img.src = data.file;
        container.appendChild(img);

        function changeImage() {
            fetch(url) 
                .then((res) => res.json())
                .then((data) => {
                    img.style.opacity = 0;
                    setTimeout(() => {
                        img.src = data.file; 
                        img.style.opacity = 1; 
                    }, 2000); 
                });
        }

        setInterval(changeImage, 3000);
    });