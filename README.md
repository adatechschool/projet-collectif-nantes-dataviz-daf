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

