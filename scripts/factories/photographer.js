function photographerFactory(data) {
    //ajout de city, country, price  dans const mais...
    const { name, portrait, city, country, price } = data;
    console.log(data)
    console.log(city);
    const picture = `assets/photographers/${portrait}`;
    console.log(picture  )
    function getUserCardDOM() {
        const $article = document.createElement( 'article' );
        //pourquoi $ img?
        const $img = document.createElement( 'img' );
        $img.setAttribute("src", picture);
        //ajout du alt mais erreur de syntaxe!!!!!!!
        $img.alt= "portrait de  ${name}";
        // ajout de object-fit: cover pour les id photographers
        $img.style.objectFit = "cover";
        const $h2 = document.createElement( 'h2' );
        $h2.textContent = name;
        $article.appendChild($img);
        $article.appendChild($h2);
        //porquoi textcontent ne marchait pas mais innerhtml oui?
        const $h3 = document.createElement( 'h3' );
        $h3.innerHTML= city + " , " + country;
        $h2.appendChild($h3)
        const $h4 = document.createElement( 'h4' );
        $h4.textContent = price + "€/jour";
        $h3.appendChild($h4)
        return ($article);
    }
    return { name, picture, getUserCardDOM }
}