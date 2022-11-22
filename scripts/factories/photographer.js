function photographerFactory(data) {
    const { name, portrait } = data;

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
        return ($article);
    }
    return { name, picture, getUserCardDOM }
}