# Projet-collectif-nantes-dataviz-daf

Données météo de Nantes: [Lien API](https://api.openweathermap.org/data/2.5/weather?lat=47.2186371&lon=-1.5541362&appid={API_KEY})

## NODE MODULE

Dossier généré automatiquement avec `npm install` (terminal)

## .ENV

Fichier créé avec `touch .env`
Contient toutes les données sensibles non publiques (répertoriées dans `.gitignore`)
A créer sur chaque poste de travail

## .ENV.SAMPLE

Lexique pour décoder le .env

## .GITIGNORE

Permet de lister tous les fichiers et dossiers qui ne seront pas envoyés sur github

## ESLINT

Commande terminal : `npm init @eslint/config@latest`
A ajouté des informations dans le package.json
A généré le eslint.config.mjs
Cela permet de vérifier la syntaxe du code et règle automatiquement les problèmes.

## PACKAGE-LOCK.JSON

La commande terminal `npm install` génère automatiquement : package-lock.json
Ces fichiers gèrent les dépendances du projet.

## PACKAGE.JSON

Fichier généré automatiquement avec `npm init -y` (terminal)
Contient les informations du projet et les dépendances

```json
"dependencies": {
    "chart.js": "^4.4.6"
  },
```
Commande terminal : `npm run prettier:lint`
Permet de formater le code et de vérifier les erreurs.
```json
"scripts": {
    "prettier:lint": "prettier --write --check . && eslint --fix ."
  },
```

## .PRETTIERRC

Outil de mise en forme du code afin d'harmoniser le code entre les différents développeurs.
Installé avec la commande terminal : `npm install --save-dev --save-exact prettier`
Pour éviter les conflits avec eslint : commande terminal `node --eval "fs.writeFileSync('.prettierrc','{}\n')"`
Après formatage, tout ce qui sera dans le .prettierignore ne sera pas pris en compte : commande terminal `node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"`

# GIT FLOW

## BRANCHES PRIMORDIALES

- __main__ : branche principale à ne pas toucher *(sauf pour les mise en production)*

- __dev__ : branche de développement *(à partir de laquelle on crée des branches de fonctionnalités et on merge les branches de fonctionnalités)*

## BRANCHES DE FONCTIONNALITÉS

- __feature/(nom-de-la-fonctionnalité-initiale-dev)__ : branche de fonctionnalité *(à partir de la branche dev)*

## STAND UP MEETING

- s'assurer d'avoir la dernière version de la branche dev et faire la mise à jour du backlog.
- faire une code review de la branche dev

## Processus git flow pour une nouvelle fonctionnalité

1. `git checkout dev` : on se place sur la branche dev
2. `git branch feature/(nom-de-la-fonctionnalité-initiale-dev)` : on crée une nouvelle branche de fonctionnalité
3. `git checkout feature/(nom-de-la-fonctionnalité-initiale-dev)` : on se place sur la nouvelle branche de fonctionnalité
4. `git add .` : on ajoute les fichiers modifiés
5. `git commit -m "message"` : on commit les modifications
6. `git push origin feature/(nom-de-la-fonctionnalité-initiale-dev)` : on push la branche de fonctionnalité sur le repo distant
7. on crée une pull request sur github pour merger la branche de fonctionnalité sur la branche dev
8. En cas de conflit, on résout le conflit en local, on commit et on push à nouveau
9. Code review de la branche dev (en équipe)
10. récupération des mises à jour de la branche dev

## WIREFRAME
![wireframe - page d'accueil](projet-collectif-nantes-dataviz-daf/assets/wireframe_accueil_daf.png)
