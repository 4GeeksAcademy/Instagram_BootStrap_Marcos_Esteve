document.addEventListener("DOMContentLoaded", () => {
    const likeIcon = document.querySelector(".iconomegusta");
    const likesCount = document.getElementById("likes");

    // Generar número aleatorio entre 0 y 1000
    let Likesiniciales = Math.floor(Math.random() * 1001);
    likesCount.textContent = `${Likesiniciales} likes`;

    likeIcon.addEventListener("click", () => {
        if (likeIcon.classList.contains("iconomegusta-activo")) {
            Likesiniciales--;
            likeIcon.classList.remove("fa-solid");
            likeIcon.classList.add("fa-regular");
        } else {
            Likesiniciales++;
            likeIcon.classList.remove("fa-regular");
            likeIcon.classList.add("fa-solid");
        }
        likesCount.textContent = `${Likesiniciales} likes`;
        likeIcon.classList.toggle("iconomegusta-activo");
    });
});
