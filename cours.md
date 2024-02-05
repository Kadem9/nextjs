## Architecture de mes fichiers

next.config.mjs : on peut le modifier, mais nous n'allons pas le toucher cette semaine
package-lock.json : une dépendance peut elle aussi avoir ses dépendances
tsconfig.json : fichier de config de typescript

## Routing de Next.js (la base)

Pour créer un routing de base, il faut créer un fichier dans le dossier pages avec le nom de la route, par exemple pr créer une page à l'adresse /about, il faut créer un ficheir about.js dans le dossier pages.

Voc du systeme de routing :

- **Tree** : structure de données qui représente une hiérarchie. Dans Next.js l'arborescence des fichiers dans le dossier pages représente l'arboresence des routes.

- **Subtree** : Un sous arbre est un arbre qui fait partie d'un arbre plus grand. Dans Next.js, un sous arbre est un dossier qui fait partie de l'arboresence des ficheirs dans le dossier pages.

- **Root** : La racine est le dossier le plus haut dans l'arboresence des fichiers. Dans Next.js, le dossier pages est la racine de l'arboresence des fichiers.

- **Leaf** : Une feuille est un noeud qui n'a pas d'enfants. Dans Next.js, un fichier dans le dossier pages est une feuille.

Le nom des fichiers est très important, si je créer plusieurs fichiers dans mon dossier test par exemple, ils seront ignorés.

Fichier layout.tsx :
C'est pour donner une structure identique à chaque page.
Ca s'appliquera recursivement à tous les sous-dossiers.

A chaque fois qu'on créer un dossier, on va ajouter une nouvelle url à notre appli.

Typescript nous permet de fournir un type attendu, cela nous évite de faire des erreurs.
Par exemple :

let test: string;

ici j'attend un string, si je rentre un int ou autre, j'aurais une erreur.

React.ReactNode = on attend un composant react
clsx sert à conditionner des noms de classe.
