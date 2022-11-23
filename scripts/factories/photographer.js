function photographerFactory(data) {
    //ajout de city, country, price  dans const mais...
    const { name, portrait, city, country, price, id } = data;
    console.log(data)
    console.log(city);
    const picture = `assets/photographers/${portrait}`;
    console.log(picture  );
    // diese pour systeme ancre dans la page
    const pagePath = "#photographer:" + id;
    // function getUserCardDOM() {
    //     const $article = document.createElement( 'article' );
    //     $article.innerHTML = template();
    //     return ($article);
    // }
    const templateCard = /*html*/`
        <article>
            <img src="${picture}" alt="portrait de ${name}" class="cover">
            <h2>${name}</h2>
            <h3>${city}, ${country}</h3>
            <h4>${price}€/jour</h4>
            </article>
        `;
    

    return { name, picture,pagePath, templateCard }
}