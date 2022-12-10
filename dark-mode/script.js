window.addEventListener("load", (e) => {
    if (localStorage.getItem("dark-mode") !== undefined && localStorage.getItem("dark-mode") !== null) {
        document.body.className = "dark"
    }
})

function toogle() {
    const element = document.body;
    element.classList.toggle("dark");

    const className = element.className;

    switch (className) {
        case "dark":
            localStorage.setItem("dark-mode", true)
            break;
        case "":
            localStorage.clear();
            break;
    }
}