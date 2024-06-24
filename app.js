document.addEventListener("DOMContentLoaded", (event) => {
    const botonmegusta = document.querySelectorAll(".iconomegusta i");
    botonmegusta.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("fa-regular");
            button.classList.toggle("fa-solid");
            button.classList.toggle("iconomegusta-activo");
        });
    });
});
