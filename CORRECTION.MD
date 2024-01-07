# Correction

Vous serez corrigés sur le respect des exigences fonctionnelles de l’énoncé ainsi que la qualité du code JS/JSX.

Quelques astuces :
- Lisez **attentivement** l'énoncé, le code fourni et les commentaires dans le code.
- Configurez votre base de données avant de débuter le travail.
- Ce TP est basé sur l'[exercice suivant](https://github.com/LOG2440/Exercices/tree/master/DOM/Player) du cours. Jettez un coup d'oeil à sa solution pour comprendre le fonctionnement du site web.
- Respectez la convention de codage établie par _ESLint_. Utilisez la commande `npm run lint` pour valider cet aspect.
- Consultez la documentation du [pilote de MongoDB](https://www.mongodb.com/docs/drivers/node/current/)
- Consultez l'[exemple de React des notes de cours](https://github.com/LOG2440/Cours-12-React) pour la syntaxe et notions de la librairie. 
- Consultez l'[exemple de MongoDB des notes de cours](https://github.com/LOG2440/Cours-11-MongoDB/) pour la syntaxe de MongoDB. 



| **Exigences**                                 | **Note** | **Points** |
| --------------------------------------------- | :------: | :--------: |
| Implémentation des services du serveur        |    5     |     6      |
| Implémentation des composantes de pages React |    5     |     5      |
| Implémentation des autres composantes React   |    4     |     5      |
| Structure du code                             |    2     |     2      |
| Qualité et clarté du code                     |    2     |     2      |
| Bonus                                         |    0     |     1      |
| **Total**                                     |  **18**   |   **20**   |

Les tests passent

Il n'est pas possible de me retourner une image:
``` 
http://localhost:5020/data:image/png;base64,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....31 (Request Header Fields Too Large)
```

Le reste du site marche bien.

Voici la bonne manière de configurer les routes.
```javascript
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
```