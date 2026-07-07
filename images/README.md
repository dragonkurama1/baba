# Images des produits JAYPEE

Ce dossier contient toutes les images des produits du site JAYPEE.

## Comment fonctionnent les images

Chaque couleur de chaque produit peut avoir plusieurs images. Les images sont
référencées par leur chemin relatif depuis ce dossier `images/`.

### Exemple de nommage recommandé

```
images/
├── luxura-klass-blanc-1.jpg
├── luxura-klass-blanc-2.jpg
├── luxura-klass-noir-1.jpg
├── luxura-klass-camel-1.jpg
├── luxura-1500-noir-1.jpg
└── ...
```

## Comment ajouter une image à un produit

1. Ouvrez la page **Produits** du site et cliquez sur **« ⚙ Gérer les
   produits (admin) »** en bas de la grille.
2. Sélectionnez le produit à modifier.
3. Dans la section **Couleurs disponibles**, choisissez une couleur, puis
   cliquez sur **« + Ajouter une image »**.
4. **Première utilisation (recommandé) :** cliquez d'abord sur
   **« 📁 Configurer le dossier images »** en haut du panneau admin et
   sélectionnez ce dossier `images/`. Les images seront alors enregistrées
   automatiquement dans ce dossier.
5. **Sans configuration de dossier :** un fichier sera téléchargé. Vous
   devez le déplacer manuellement dans ce dossier `images/` (le nom
   généré ne doit pas être modifié).

## Compatibilité navigateur

L'enregistrement direct dans le dossier requiert un navigateur Chromium
(Chrome, Edge, Brave, Opera). Sur Firefox ou Safari, le navigateur
téléchargera l'image que vous devrez placer manuellement ici.

## Dossier de production

Lors du déploiement du site, ce dossier `images/` doit être copié tel quel
à la racine du site, à côté de `index.html` et `app.js`.
