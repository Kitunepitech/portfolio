/*
* Chargement dynamique du header HTML.
* Permet de réutiliser le même header sur toutes les pages du portfolio,
  sans avoir à recopier son contenu dans chaque fichier HTML.
* Les chemins sont calculés depuis la racine du projet.
*/

const base = new URL("../", document.currentScript.src);

fetch(new URL("HTML/components/header.html", base))
    .then(response => {
        if (!response.ok) {
            throw new Error("Impossible de charger le header");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // Construction des liens de navigation depuis la racine du portfolio
        const liens = document.querySelectorAll("#header [data-page]");

        liens.forEach(lien => {
            lien.href = new URL(lien.dataset.page, base).href;

        });

    })

    .catch(error => {
        console.error(error);
    });

fetch(new URL("HTML/components/footer.html", base))
    .then(response => {
        if (!response.ok) {
            throw new Error("Impossible de charger le footer");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })

    .catch(error => {
        console.error(error);
    });