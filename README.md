# Bus Tracker

**Bus Tracker** est une application web de visualisation des véhicules d'un ou plusieurs réseaux de transports en commun.  
Elle exploite les données ouvertes des différentes autorités organisatrices ([au format GTFS ou via une API SIRI](https://doc.transport.data.gouv.fr/type-donnees/operateurs-de-transport-regulier-de-personnes/normes-et-standards-donnees-theoriques-et-temps-reel/transport-en-commun)) afin de pouvoir les agréger pour en permettre la visualisation sur une unique carte.

## Réseaux disponibles

| Réseau                   | Type de données | Caractéristiques                                       |
| ------------------------ | --------------- | ------------------------------------------------------ |
| Nomad (Région Normandie) | GTFS + GTFS-RT  | Temps-réel partiel pour les lignes 216-228-423-424-527 |
| Astuce (Rouen)           | GTFS + GTFS-RT  |
| Twisto (Caen)            | SIRI VM         |
| LiA (Le Havre)           | GTFS            | Temps-réel indisponible                                |
| Cap Cotentin (Cherbourg) | GTFS + GTFS-RT  |
| DeepMob (Dieppe)         | GTFS + GTFS-RT  |
| Astrobus (Lisieux)       | GTFS + GTFS-RT  |
| SNgo! (Vernon)           | GTFS + GTFS-RT  |
| Néva (Granville)         | GTFS + GTFS-RT  |
| Hobus (Honfleur)         | GTFS + GTFS-RT  |
| MOCA (Barentin)          | GTFS + GTFS-RT  |
| Rezo'Bus (Bolbec)        | GTFS + GTFS-RT  |
| l'Bus (Bernay)           | GTFS + GTFS-RT  |

**À noter :** aucun réseau en dehors de la Normandie ne sera rajouté pour le moment – une (éventuelle) (future) refonte viendra permettre ceci.

## Stack technique

### Serveur yabs

Le serveur est conçu pour s'exécuter dans un environnement Bun. Il nécessite également une base de données au format SQLite afin de conserver l'historique des activités des véhicules (lorsque celles-ci sont rendues disponibles par le biais de données temps-réel).

La consommation mémoire varie selon le nombre de réseaux impliqués, mais tourne à titre indicatif aux alentours de 1.5Go sur l'instance officielle.

Une API est proposée afin de récupérer une snapshot des véhicules en circulation à un instant T, ainsi que pour pouvoir rechercher des véhicules ayant été observés par le serveur.

### Front-end

Le front-end est une application Next.js permettant la visualisation graphique des données calculées par le serveur.  
Elle joue également le rôle de proxy entre l'utilisateur final et le serveur `yabs`.

## Source de données

### GTFS

Chaque ressource statique GTFS est téléchargée une fois par heure puis est chargée en mémoire du serveur.  
À intervalle régulière (en général toutes les 30 secondes), le serveur détermine les courses en cours en parcourant la ressource chargée.

Lorsque un ou plusieurs flux GTFS-RT sont disponibles, alors ceux-ci sont mis à contribution afin d'améliorer la fiabilité des données présentées.

### SIRI

À intervalle régulière (en général toutes les 30 secondes), une requête est envoyée au serveur SIRI afin de récupérer la liste des véhicules en ligne circulant sur le réseau ciblé.

Pour le moment, il n'existe pas de paliatif pour les véhicules hors-ligne : ceux-ci n'apparaissent donc pas contrairement au GTFS + GTFS-RT.

**Remarque :** seul le service Vehicle Monitoring du [profil SIRI français](https://normes.transport.data.gouv.fr/posts/siri/profil-france/) est pris en charge pour le moment.

## Comment je lance ça ?

## Crédits

- **pfaedle** : génération des tracés de ligne à l'aide d'une cartographie OpenStreetMap.
