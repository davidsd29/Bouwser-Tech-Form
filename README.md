# Bouwser-Tech-Form

## Case

Voor deze opdracht heb ik de case “Enquête over de minor Web Development” gekozen.
In deze case moet de gebruiker een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. De gebruiker met duidelijk kunnen zien waar ik ben en hoeveel ik nog te doen heb. De gebruiker moet eerder ingevulde vragen kunnen herzien en als de  enquête niet af is, moet de gebruiker later weer verder gaan met waar hij of zij gebleven is.

## Plan van aanpak

Voordat ik begon met bouwen van mijn enquête ben ik eerst gaan verzamelen wat er allemaal in moet. En hoe wil het precies gaan vormgeven, want voor deze opdracht mochten de radio buttons niet zichtbaar zijn. Dit betekent dat ik met de labels van de radio buttons ga werken om zo mijn “button” te stylen.
Ook moest de applicatie kunnen werken zonder javascript. Om dit mogelijk te maken kies ik ervoor om in de server side met Node.js te werk gegaan zodat ik niet afhankelijk ben van mijn client side javascript.

### Requirements

•	Studentsgegevens (naam + nummer)
•	Beoordeling schaal 1-10
•	Les stof (hoe lastig is het)
•	Uitleg (hoe duidelijk is het uitgelegd)
•	eigen inzicht (hoe goed snap je het)
•	Niet te veel vragen in 1 keer zichtbaar maken
•	Validatie
•	Een indicatie van waar je bent in het formulier
•	Light mode en dark mode
•	Een back button 

### Styling
Aangezien dit een enquête is voor de CMD op het Hva heb ik besloten om de HvA stijl te gebruiken.
De zelfde font en de fallbacks, button kleur, tekst kleur ect. 

``` css
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
```
``` sass
  $colors: (
     text: #555,
     base: #FFF,
     shadow: #1e1e1e,
     button: #25167a,
     focus: #09003c,
     hover: #331eab,
     active: #150d42,
     invalid: red,
     valid: #b0ffb0,
     highlight: #ccc,
);
```

## Progressive Enhancement
Tijdens het invullen van de enquête wilt de gebruiker natuurlijk wel weten hoe ver hij is. Als javascript aan is krijgt de gebruiker naast zijn formulier indicatie balletjes te zien. Hierdoor Krijgt de gebruiker een indicatie van hoeveel vragen hij nog moet doen. Dit is fijn want de gebruiker wordt tijdens het invullen van het enquête up-to-date gehouden. Maar wat nou als javascript uit is? Geen zorgen na een set vragen komt de gebruiker op een pauze scherm. Hierin wordt ook aangegeven hoeveel vakken de er nog zijn.
