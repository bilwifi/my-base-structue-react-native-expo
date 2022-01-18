# **Structure React Native Expo Projet**

Ceci est ma structure de base pour mes projets react native avec expo.

## **Installation**

```bash
# Pour simplifier l'exigence / l'importation de chemins dans notre projet, nous devons configurer des alias de répertoire. Alors il faut installer les packages suivants:
npm install --save-dev eslint-import-resolver-babel-module eslint-plugin-import babel-plugin-module-resolver

```

## Structure du répertoire
Voici une vue d'ensemble de haut niveau des fichiers et dossiers pertinents.
```
root/
├── android/
├── assets/
├── ios/
├── public/
├── src/
│   ├── assets/
│   │  ├── fonts
│   │  ├── images
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├── constants/
│   ├── helpers/
│   ├── navigations/
│   │  ├── index.js           
│   │  ├── auth-navigator.js   
│   │  ├── app-navigator.js 
│   ├── redux/
│   ├── scenes/
│   │  ├── login/
│   │  │  ├── index.jsx 
│   │  ├── home/
│   │  │	├── index.jsx 
│   │  ├── about/
│   │  │	├── index.jsx 
│   ├── services/
│   │  ├── api/
│   │  ├── firebase/
│   ├── utils/
├── .babelrc
├── .eslintrc.js
├── .firebaserc
├── .gitignore
├── .versionrc.json
├── App.js
├── CHANGELOG.md
├── babel.config.js
├── environnement.exemple.js
├── package.json


```

## **Credit**
cheesecakelabs.com [efficient-way-structure-react-native-projects](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)

## **Copyright**
copyright 2021 [Peniel DIALUNDAMA](https://penieldialu.carrd.co/)
