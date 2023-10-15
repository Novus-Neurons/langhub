// render navbar
document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar content
    fetch("./components/navbar.html")
        .then(response => response.text())
        .then(navbarHtml => {
            document.getElementById("navbar").innerHTML = navbarHtml;
        });


    // fetchAllCards
    async function fetchAllcards() {
        await fetch("./cards.json")
            .then(responce => responce.json())
            .then(data => {
                // console.log(data.chapter_data_paths)
                for (let i = 0; i < data.card_paths.length; i++) {
                    console.log("card path : ", data.card_paths[i])
                    rendercard(`.${data.card_paths[i]}`)
                }
                // let allchapter = JSON.parse(data)
            })
    }

    //render Cards
    async function rendercard(path) {

        console.log(path)
        let carddata;
        await fetch(path)
            .then(response => response.json())
            .then(cardData => {
                console.log("cardData : ", cardData)
                carddata = cardData

            });

        await fetch("./components/card.html")
            .then(responce => responce.text())
            .then((componentHTML) => {
                const cardsContainer = document.getElementById("Allcards")

                // const type = typeof componentHTML 
                // console.log(type) // string

                const FinalCardComponent = componentHTML
                    .replace(/{{Cardtitle}}/g, carddata.language)
                    .replace(/{{CardDescription}}/g, carddata.languagedesc);

                cardsContainer.innerHTML += FinalCardComponent

            })
    }

    fetchAllcards()

});
