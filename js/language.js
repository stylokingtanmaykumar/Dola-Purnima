let odiaMode = false;

const languageBtn =
    document.getElementById("languageBtn");


languageBtn.addEventListener("click", () => {

    odiaMode = !odiaMode;


    const elements =
        document.querySelectorAll("[data-en]");


    elements.forEach(element => {

        if (odiaMode) {

            element.textContent =
                element.getAttribute("data-or");

        } else {

            element.textContent =
                element.getAttribute("data-en");

        }

    });


    languageBtn.textContent =
        odiaMode ? "English" : "ଓଡ଼ିଆ";

});