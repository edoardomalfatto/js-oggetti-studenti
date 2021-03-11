//- Creare un oggetto che descriva uno studente con le
//seguenti proprietà: nome, cognome e età.
$(function() {
    var studenteMario = {
        "nome": "Mario",
        "cognome": "Gelsommino",
        "età": 25
    };

    //Stampare a schermo attraverso il for in tutte le proprietà.
    for (key in studenteMario) {
        console.log((key + ": " + studenteMario[key]));
    };


    //- Creare un array di oggetti di studenti. Ciclare su tutti gli
    //studenti e stampare per ognuno nome e cognome

    var insiemeStudenti = [{
            "nome": "Mario",
            "cognome": "Gelsommino",
            "età": 25
        },

        {
            "nome": "Giorgia",
            "cognome": "Pascale",
            "età": 28
        },

        {
            "nome": "Edoardo",
            "cognome": "Polipo",
            "età": 89
        }
    ];

    for (key in insiemeStudenti) {
        console.log(insiemeStudenti[key].nome + " " + insiemeStudenti[key].cognome);
    };


    //- Dare la possibilità all’utente attraverso 3 prompt di
    //aggiungere un nuovo oggetto studente inserendo
    //nell’ordine: nome, cognome e età.
    var nuovoUtente = {
        "nome": "",
        "cognome": "",
        "età": ""
    };

    $("#ancora").click(function() {
        function AddNuovoUtente() {
            do {
                nuovoUtente.nome = prompt("inserisci il nome");
            } while (nuovoUtente.nome == "" || (isNaN(nuovoUtente.nome) == false));
            do {
                nuovoUtente.cognome = prompt("inserisci il cognome");
            } while (nuovoUtente.cognome == "" || (isNaN(nuovoUtente.cognome) == false));
            do {
                nuovoUtente.età = parseInt(prompt("Inserisci la tua età"));
            } while ((isNaN(nuovoUtente.età) == true) || nuovoUtente.età == "");

            insiemeStudenti.push(nuovoUtente);
        };
        AddNuovoUtente();
    });

    console.log(nuovoUtente);
    console.log(insiemeStudenti);
});