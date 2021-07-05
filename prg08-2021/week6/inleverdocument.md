# Week 6

## Neural Networks II

- Wat kan de classifier wel en niet herkennen? Hoe komt dit?

Ik heb allerlei soorten dieren, bloemen en items geprobeerd. De meeste zijn correct te verspellen (met training model: mobilenet). 
Ik heb ook Meneer Rutte geprobeerd en dan herken ze het niet. Hoe komt dit: de model is niet getraint voor mensen in de Teachable Machine. Mensen hebben ook eigen namen en we hebben dezelfde organen dus het is heel moeilijk te trainen. 

- Wat is het verschil tussen de pre-trained modellen?

Elk model heeft zijn traindata. Die zijn getraint in Teachable Machine. 
Bij mobilenet geeft hij 3 resultaten, bij DoodleNet 9 resultaten en bij Darknet krijg ik helaas een error. 
Persoonlijk vind ik mobilenet meest betrouwbaar. Ik heb met een afbeelding van een varken getest. 
Bij mobilenet is die correct herkenbaar maar bij DoodleNet niet. 

- Is het gelukt om er een game UI omheen te bouwen?

ja, de gebruiker krijgt random vragen te zien, bijvoorbeeld maak een foto van een kat. Daarna check hij of het correct is. 
(de code heb ik in app.js)