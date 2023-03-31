# Bouwser-Tech-Form

## Case

Voor deze opdracht heb ik de case “Enquête over de minor Web Development” gekozen.
In deze case moet een student een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. De student moet duidelijk kunnen zien waar ik ben en hoeveel ik nog te doen heb. Het student moet eerder ingevulde vragen kunnen herzien en als de  enquête niet af is, moet de student later weer verder gaan met waar hij of zij gebleven is.

## Plan van aanpak

Voordat ik begon met bouwen van mijn enquête ben ik eerst gaan verzamelen wat er allemaal in moet. En hoe wil het precies gaan vormgeven, want voor deze opdracht mochten de radio buttons niet zichtbaar zijn. Dit betekent dat ik met de labels van de radio buttons ga werken om zo mijn “button” te stylen.
Ook moest de applicatie kunnen werken zonder javascript. Om dit mogelijk te maken kies ik ervoor om in de server side met Node.js te werk gegaan zodat ik niet afhankelijk ben van mijn client side javascript.

### Requirements

-	Studentsgegevens (naam + nummer)
-	Beoordeling schaal 1-10
-	Les stof (hoe lastig is het)
- Uitleg (hoe duidelijk is het uitgelegd)
-	eigen inzicht (hoe goed snap je het)
-	Niet te veel vragen in 1 keer zichtbaar maken
-	Validatie
-	Een indicatie van waar je bent in het formulier
-	Light mode en dark mode
-	Een back button 

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
Tijdens het invullen van de enquête wilt de student natuurlijk wel weten hoe ver hij is. Als javascript aan is krijgt de student naast zijn formulier indicatie balletjes te zien. Hierdoor Krijgt de student een indicatie van hoeveel vragen hij nog moet doen. Dit is fijn want de student wordt tijdens het invullen van het enquête up-to-date gehouden. Maar wat nou als javascript uit is? Geen zorgen na een set vragen komt de student op een pauze scherm. Hierin wordt ook aangegeven hoeveel vakken er nog zijn over zijn. Daarnaast wordt de validatie ook gedaan met javascript. Hierbij krijgt de student te weten wat er fout is gegaan en ook waar. Tot slot worden er ook een popUp getoond als de enquête is afgerond.

In de volgorde van mijn vargen heb ik ook iets verandert. Als student wil je eigenlijk geen enquête invullen en wil je er zo snel mogelijk klaar mee zijn. Ook willen mensen graag anoniem blijven als ze de enquête in vullen. Om deze reden heb ik bij de tart scherm een kleine uitleg over wat de enquête gaat, daarna start je meteen met de vragen. Aan het einde kijgt de student de mogelijkheid Om de enquête anoniem te verzenden maar als de student graag verder wilt helpen in het veranderen van de minor, kan de student ook zijn informatie invullen en die achter laten. Zodat er eventueel contact gelegd kan worden.

## Kritisch Denken

Na dat ik de briefing had gekregen en ermee aan de slag ging, vielen me een paar dingen op. De informatie die van de student gevraagd werd, is dat wel allemaal nodig?

Een voorbeeld hier van is : "In welke periode heeft dit vak plaats gevonden?". We weten dat dit vak alleen tijdens de minor Web wordt gegeven en hoe relevant is het om de periode te weten? Het heeft helaas geen toegevoegde waarde aan de enquête en is alleen maar een een vraag meer voor de student om in te vullen en over na te denken. daar hebben zij ook geen zin in. Of de naam van de docenten, studenten kunnen namen verkeerd schrijven of andere namen doorgeven die eigenlijk niet daar horen. De opleiding weet wel wie welke vak heeft gegeven tijden de minor, dus eigenlijk kan valt die vraag ook weg.

Wat wel een goeie toevoeging is, is een text vak waar studenten feedback kunnen leveren. Hier kunnen student zelf hun ei kwijt over de opleiding, wat veel relevanter is dan de naam van de docent (met alle respect 😁).

## Testing

Ik heb mijn enquête in mijn standaard browser (Chrome) gemaakt, hier runt hij vlekkenloos. Maar dat betekent niet dat het in alle browsers goed werkt. Om dit te checken voer ik kleine testjes uit in verschilde browsers om te kijken hoe mijn enquête werkt.

Mijn test vragen zien er als volgt uit
 
 - Brouwser naam
 - Featurers: opslaan van data, form indicator, voorige pagina herzien
 - Ondersteunt deze browser mijn feature?
 - Wordt javascript onderstyeunt in deze browser?
 - Hoe werkt de enquête als javascript uit staat?
 - Hoe toegankelijk is mijn enquête met een screen reader?

### Fire Fox

### Chromium

### Safari IOS

### Andiod Chrome

