# Inleverdocument

## Concept (1 punt)
Je hebt een eigen concept bedacht voor een Machine Learning applicatie met behulp van de AI x Design Cards. Je inleverdocument bevat een korte uitleg over jouw idee en de toegevoegde waarde van Machine Learning in jouw applicatie. 

Je hebt aan de hand van de "Machine Learning Reading List" op GitHub onderzoek gedaan naar verschillende libraries, tools en API's om te onderzoeken wat zou kunnen werken voor jouw concept. Beschrijf je bevindingen kort in je inleverdocument.

- Ik heb een concept bedacht: je machine check of je mondkapje goed draagt. Het is een Machine Learning omdat je machine data moet hebben om te herkennen (je moet je machine leren wat het is, of het wel goed is). Het is een toegevoegde waarde omdat meeste mensen wel mondkapje draagt maar niet op het juiste manier. 

- Ik heb onderzoek aangedaan. Link (https://snellerleren.com/2021/01/22/teachable-machine/): hierin wordt verteld(tools) over Machine Learning zonder en met mondkapje op een knuffelbeer in Teachable machine. Tegenwoordig is corona, dus mondkappjes dragen is heel erg belangrijk. Door machine Learning weet je of hij draagt.  

- Hier is ook filmpje over corona voor mondkapjes en Machine Learning https://www.youtube.com/watch?v=4Ll40uxssBs&ab_channel=SoftBankRoboticsEurope

- Hier heb ik api gevonden voor mondkapjes.(https://www.pyimagesearch.com/2020/05/04/covid-19-face-mask-detector-with-opencv-keras-tensorflow-and-deep-learning/). 

- ook via de reading list heb ik data gevonden van mask: https://www.kaggle.com/andrewmvd/face-mask-detection

- Vervolgens heb ik ook data gevonden (plaatjes mondkapje). Ik heb ze allemaal opgeslagen zodat ik kan trainen voor mijn model. Online zijn er heel veel libraries, die heb ik opgeslagen op mijn pc. Ook heb ik onderzocht hoe je mondkapje op het juiste manier draagt. https://www.beteroud.nl/nieuws/instructiefilmpje-gebruik-mondkapje-corona#:~:text=Was%20je%20handen%20minimaal%2020,lucht%20langs%20je%20gezicht%20lekt.

## Prototype 1  (1 punt)
Naar aanleiding van je onderzoek heb je een code prototype gebouwd, om te testen of jouw gekozen algoritme werkt zoals je verwacht. Omschrijf het resultaat in je inleverdocument. Hoe nauwkeurig is je algoritme? Heb je training data nodig en hoe kom je daar aan? Gebruik je classification of regression? Is het algoritme makkelijk in een web app toe te passen?

- Ik heb in Teachable machine een prototype gebouwd zonder en met mondkapje. De naukeurigheid is heel hoog, zo niet kan ik mijn data veranderen zodat mijn nauwkeurigheid kan verhogen. De training data heb ik online gevonden maar thuis heb ik ook mondkapje. Dus ik heb mijn eigen mondkapjes gebruikt. Via de webcam scan hij je gezicht en dan kijkt hij of je mondkapje draagt. Ik heb 2 class gebruikt voor "geen mondkapje" en "wel mondkapje". Het is makkelijk toe te passen in web app. Je hoeft alleen je camera te openen dan geeft hij een resultaat. Bij algoritme is zonder monkapje 100% juist en bij wel mondkapje 97% juist


## Prototype 2  (1 punt)
Om een betere keuze te maken heb je een tweede prototype gebouwd met een ander algoritme, library of API. Omschrijf ook hier het resultaat in je inleverdocument zoals bij het eerste prototype.

- Ik heb een tweede protoype gebouwd in ML5, via de webcam kan je trainen. Toetsenbord "m" is wel mondkapje en door Toetsenbord "n" te drukken is geen mondkapje. Nadat je klaar ben met trainen druk je op "t". Hierdoor wordt data opgeslagen, vervolgens kan je met je webcam zien of je wel/geen mondkapje draagt. Voor wel mondkapje is het 99% juist en voor geen mondkapje is 27%.  De training data heb ik met mijn eigen webcam gedaan(met mijn eigen mondkapje). Ik heb imageclassification gebruikt in ML5. Het algoritme is wel makkelijk toe te passen in web app. Je moet wel eerst trainen. 

- Conclusie: Teachable machine is wel beter dan ML5 omdat algoritme nauwkeuriger is bij geen mondkapje en Teachable machine is wel makkelijker met het trainen. (via de website)

## Uitwerking  (1 punt)
Je hebt je prototype uitgewerkt tot een werkende machine learning applicatie. Je hebt supervised of unsupervised learning gebruikt om een model te bouwen dat goed werkt voor jouw concept. Je hebt getest of het werkt onder verschillende omstandigheden of met verschillende gebruikers.

- Ik heb in mijn Teachable machine mijn eigen data toegevoegd (mondkapje op onjuist manier dragen). Als je je mondkapje niet goed draagt krijg je een melding te zien. Ik heb het ook getest met mijn broertje (zonder mondkapje, met mondkapje en mondkapje op een onjuist manier).


## Web applicatie (1 punt)
Je hebt een werkende **html + css + javascript** applicatie gebouwd om je algoritme heen. De applicatie staat online. Je hebt tijd besteed aan een werkbare gebruikerservaring en layout.

## Organisatie van code (1 punt)
Je hebt nagedacht over de organisatie van code. Je project gebruikt coding standards zoals je die geleerd hebt in eerdere programmeervakken: je deelt functionaliteit op in eigen bestanden. Je gebruikt classes of functies om code overzichtelijk te maken. Je readme file bevat installatie instructies waarmee anderen de applicatie lokaal kunnen installeren.

### Veel succes! 