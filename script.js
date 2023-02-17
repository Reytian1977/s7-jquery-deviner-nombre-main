$(document).ready(function (){
    //Exigences de l'application
    //Il s'agit de développer un mini-jeu où l'on devine un nombre choisi de façon aléatoire.
    aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner

    //L'utilisateur a dix essais pour trouver le nombre après quoi on lui indique qu'il n'a pas réussi.
    let maxEssais = 10;

    //Après chaque essai, l'application indique si le nombre soumis par l'utilisateur est trop haut, trop bas, ou s'il s'agit de la bonne réponse.
    $("button").click(function(){
        let essais = 0;
        let nb = $("#essai").val();
        if(nb<aleatoire){
            $("#resultat").html("Trop bas");
            essais++;
        }else if(nb>aleatoire){
            $("#resultat").html("Trop haut");
            essais++;
        }else{
            $("#resultat").html("Bravo");
            essais++;
        }
        if(essais === maxEssais){
            $("#resultat").html("Perdu");
        }

        //L'application affiche toujours la liste des essais effectués et grade ses valeurs.
        $("#essais").append("<li>" +nb+ "&nbsp;" + "</li>");
s
    });
});

