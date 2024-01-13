# Bus Tracker

## C'est quoi ?

**Bus Tracker** est une application reconstituant sur une carte les véhicules en circulation sur un réseau de transports en commun, ici _[Rouen](https://reseau-astuce.fr)_.  
Elle repose sur l'utilisation des données ouvertes, au format GTFS, pour les données théoriques ainsi que les éventuels flux au format GTFS-RT pour les données temps-réel.

Ce que vous voyez ici est ce qui tourne ici > [https://bus-tracker.xyz](https://bus-tracker.xyz).

## Pourquoi ça ?

Au départ, curieux de savoir qu'est-ce qui pouvait être extrait d'une poignée de fichiers CSV et d'un fichier JSON.  
Aujourd'hui, un terrain de jeu me permettant d'expérimenter les technos hype 🤪 tel que Bun ou Drizzle.

## Comment ça marche ?

`yabs` est le serveur qui effectue l'ensemble des traitements nécessaires pour obtenir le résultat souhaité :

- il synchronise les données statiques toutes les heures ;
- détermine la carte instantanée à intervalle régulière (temps-réel si possible, autrement théorique) ;
- conserve l'historique des services effectués (seulement si infos adéquates disponibles).

`frontend` est celui qui génère le site web grâce aux données obtenues depuis `yabs`.

## Je veux tel ou tel réseau dessus

Sur l'instance officielle, c'est non. Si c'est sur une instance que vous hébergez, libre à vous de le faire.  
Adaptez l'application à votre guise pour exploiter un autre jeu de données, attention ça n'est pas nécessairement simple.

Je ne fournis pas d'assistance technique sur l'adaptation de l'application 😉.

## Coeur sur

- [ad-freiburg/pfaedle](https://github.com/ad-freiburg/pfaedle) : un superbe outil permettant d'obtenir des tracés de ligne lorsque l'AOM n'est pas en mesure de les fournir (wink wink).
