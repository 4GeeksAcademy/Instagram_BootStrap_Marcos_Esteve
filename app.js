document.addEventListener("DOMContentLoaded", () => {
    const megustaElements = document.querySelectorAll(".megusta");

    megustaElements.forEach(megusta => {
        const likeIcon = megusta.querySelector(".iconomegusta i");
        const likesCount = megusta.querySelector(".likes");

        // Generar número aleatorio entre 0 y 1000
        let initialLikes = Math.floor(Math.random() * 1001);
        likesCount.textContent = `${initialLikes} likes`;

        likeIcon.addEventListener("click", () => {
            let currentLikes = parseInt(likesCount.textContent);

            if (likeIcon.classList.contains("fa-solid")) {
                currentLikes--;
                likeIcon.classList.remove("fa-solid");
                likeIcon.classList.add("fa-regular");
            } else {
                currentLikes++;
                likeIcon.classList.remove("fa-regular");
                likeIcon.classList.add("fa-solid");
            }
            likesCount.textContent = `${currentLikes} likes`;
        });
    });
});