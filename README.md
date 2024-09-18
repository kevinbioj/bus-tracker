# Bus Tracker

**Bus Tracker** est une application web de visualisation des véhicules d'un ou plusieurs réseaux de transports en commun.  
Elle exploite les données ouvertes des différentes autorités organisatrices ([au format GTFS ou via une API SIRI](https://doc.transport.data.gouv.fr/type-donnees/operateurs-de-transport-regulier-de-personnes/normes-et-standards-donnees-theoriques-et-temps-reel/transport-en-commun)) afin de pouvoir les agréger pour en permettre la visualisation sur une unique carte.

**Note :** une refonte est prévue pour simplifier le processus d'évolution de l'application, et pour renforcer celle-ci sur le plan technique.

## Instances disponibles

| **Instance**                                        | **Couverture**                                                  |
|-----------------------------------------------------|-----------------------------------------------------------------|
| [en Normandie](https://normandie.bus-tracker.fr)    | Tous les réseaux (ou presque) urbains + NOMAD Car + NOMAD Train |
| [à Dijon](https://dijon.bus-tracker.fr)             | Divia Mobilités                                                 |
| [à Angers](https://angers.bus-tracker.fr)           | Irigo                                                           |
| [à Rennes](https://rennes.bus-tracker.fr)           | STAR                                                            |
| [à Cannes](https://cannes.bus-tracker.fr) (nouveau) | Palm Bus                                                        |

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

Lorsqu'un serveur SIRI est en mesure de donner les informations nécessaires, celui-ci est mis à contribution à la place du GTFS.

Actuellement, seul Twisto (Caen) fonctionne avec ce procédé - l'implémentation est spécifiquement conçue pour ce réseau.

## Crédits

- **pfaedle** : génération des tracés de ligne à l'aide d'une cartographie OpenStreetMap.
