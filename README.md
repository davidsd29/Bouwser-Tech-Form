# Bouwser-Tech-Form

## Case

Voor deze opdracht heb ik de case “Enquête over de minor Web Development” gekozen.
In deze case moet een student een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. De student moet duidelijk kunnen zien waar ik ben en hoeveel ik nog te doen heb. Het student moet eerder ingevulde vragen kunnen herzien en als de enquête niet af is, moet de student later weer verder gaan met waar hij of zij gebleven is.

## Plan van aanpak

Voordat ik begon met bouwen van mijn enquête ben ik eerst gaan verzamelen wat er allemaal in moet. En hoe wil het precies gaan vormgeven, want voor deze opdracht mochten de radio buttons niet zichtbaar zijn. Dit betekent dat ik met de labels van de radio buttons ga werken om zo mijn “button” te stylen.
Ook moest de applicatie kunnen werken zonder javascript. Om dit mogelijk te maken kies ik ervoor om in de server side met Node.js te werk gegaan zodat ik niet afhankelijk ben van mijn client side javascript.

### Requirements

-  Studentsgegevens (naam + nummer)
-  Beoordeling schaal 1-10
-  Les stof (hoe lastig is het)
-  Uitleg (hoe duidelijk is het uitgelegd)
-  eigen inzicht (hoe goed snap je het)
-  Niet te veel vragen in 1 keer zichtbaar maken
-  Validatie
-  Een indicatie van waar je bent in het formulier
-  Light mode en dark mode
-  Een back button

### Styling

Aangezien dit een enquête is voor de CMD op het Hva heb ik besloten om de HvA stijl te gebruiken.
De zelfde font en de fallbacks, button kleur, tekst kleur ect.

```css
font-family: 'Open Sans', Helvetica, Arial, sans-serif;
```

```sass
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

-  Brouwser naam
-  Featurers: opslaan van data, form indicator, voorige pagina herzien
-  Ondersteunt deze browser mijn feature?
-  Wordt javascript onderstyeunt in deze browser?
-  Hoe werkt de enquête als javascript uit staat?
-  Hoe toegankelijk is mijn enquête met een screen reader?

### Fire Fox

Mozilla Firefox (kortweg Firefox) is een gratis, vrije en opensource-webbrowser ontwikkeld door het Mozilla-project en vrijwilligers. Firefox is gebaseerd op de Gecko-layout-engine uit het Mozilla-project. De naam is een Engelse bijnaam voor de rode of kleine panda.

#### Features

| Saving | Indicator | Back | Validation |
| ------ | --------- | ---- | ---------- |
| ++     | +         | ++   | +          |

De standaard HTML required geeft normaal gesproken een feedback terug aan de student als de required attribuut in de input staat. Echter wordt dat bij de radio buttons niet aangegeven.

#### Styling

Deze browser ondersteunt de :has() selector niet, Hierdoor krijgt de student geen feedback als zij een keuze hebben gemaakt, of als er een invoer veld wordt ingevuld.

#### Javascript

Javascript wordt door deze browser ondersteunt en voert de benodigde functies uit.
De formulier werkt nog steeds zoals het moet werken, Wat er wel anders is de gebruikers ervaring. De gebruiker krijgt veel minder feedback terug.

---

### Chromium

Chromium is een opensource softwarecode. Dat betekent dat de broncode van Chromium openbaar is. Maar niet iedereen mag zomaar een kijkje mag nemen. Chromium Is eigenlijk de basis van meerder browsers, hierbij kan je denken aan Microsoft Edge, Brave en Google Chrome.

#### Features

| Saving | Indicator | Back | Validation |
| ------ | --------- | ---- | ---------- |
| ++     |           | ++   | +          |

#### Styling

Deze browser ondersteunt de :has() selector hierdoor krijgt de gebruiker meteen feedback terug. Dit zorgt voor een betere gebruiksvriendleijkheid.

#### Javascript

Javascript wordt door deze browser ondersteunt en voert de benodigde functies uit.
De formulier werkt nog steeds zoals het moet werken, Wat er wel anders is de gebruikers ervaring. De gebruiker krijgt veel minder feedback terug.

---

### Safari IOS

Apple heeft Safari gelanceerd als de standaardbrowser voor iOS-apparaten. Een andere standaardbrowser instellen was eerder op deze apparaten niet mogelijk, hoewel verscheidene browsers toch een mobiele versie voor iOS op de markt brengen.

#### Features

| Saving | Indicator | Back | Validation |
| ------ | --------- | ---- | ---------- |
| ++     |           | ++   | +          |

Net als in de andere brouwsers wordt de required attribuut bij radio buttons niet gepakt.

#### Styling

Deze browser ondersteunt de :has() selector hierdoor krijgt de gebruiker meteen feedback terug. Dit zorgt voor een betere gebruiksvriendleijkheid.
De buttons worden wel ander gevormd, ze zijn veel kleiner dan wat het zou moeten zijn. Zelf merkte ik dat mijn formulier niet helemaal responsive was, heb daarom een paar kleine aanpassingen gedaan om het ook goed op mobiel te krijgen.

#### Javascript

Javascript wordt door deze browser ondersteunt en voert de benodigde functies uit. Ook de feedback wordt gegeven aan de gebruiker.
De formulier werkt nog steeds zoals het moet werken, Wat er wel anders is de gebruikers ervaring. De gebruiker krijgt veel minder feedback terug.
Als een invoer veld verplicht is krijg je de standaard HTML feedback en wordt er ook ingezoom naar e invoer veld waar je informatie moet invullen.

---

### PrinceXML

Helaas kan ik deze browser niet egbruker om te testen omdat hier een vaste HTML pagina moet inladen. Door dat ik mijn html dynamisch inlaad heb ik geen index.html die ik kan uploaden om de browser te testen.

---

### Screen reader

De screen reader reageert goed op mijn site, Het is mogelijk om alles goed voor te lezen. Zelfs de labels en de radio buttons. Als de gebruker eentje heeft geselecteerd wordt er ook gemeld welke waarde de gebruiker heeft geselecteerd.

### Flow

Flow is een webbrowser met een eigen browser-engine die beweert "de weergaveprestaties drastisch te verbeteren". De JavaScript-engine is de SpiderMonkey-component van Firefox.

#### Features

| Saving | Indicator | Back | Validation |
| ------ | --------- | ---- | ---------- |
| ++     | ++        | ++   | ++         |

#### Styling

Deze browser ondersteunt mijn styling hierdoor krijgt de gebruiker meteen feedback terug. Dit zorgt voor een betere gebruiksvriendleijkheid.
De buttons worden wel ander gevormd, ze zijn veel kleiner dan wat het zou moeten zijn.

#### Javascript

Javascript wordt door deze browser ondersteunt en voert de benodigde functies uit. Ook de feedback wordt gegeven aan de gebruiker. De error text wordt ook duidelijk weergeven dit stelt de gebruiker op de hoogte van wat hij of zij doet.

---
