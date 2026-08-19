# Anki EDN
<div class="stats-grid">
  <div class="stat-card">
    <span class="stat-number">~18 000</span>
    <span class="stat-label">cartes</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">+700</span>
    <span class="stat-label">Utilisateurs</span>
  </div>
</div>
Anki EDN est un projet qui se base sur le travail et la méthodologie de [Léo Picat](https://picat.fr) (interne en MAR à Paris depuis 2024). Nous voulons rendre son paquet de flashcards collaboratif et communautaire pour le faire perdurer. *L'installation particulière sera expliquée au fil de ce tuto*.

Il faut compter **10 minutes** de lecture avant de pouvoir utiliser les cartes Anki de ce **paquet (presque) exhaustif** qui vous mèneront aux EDN. 
<div class="carousel-container">
<button class="carousel-btn carousel-prev">❮</button>
<figure class="carousel-slide active">
<img src="./images/tags_ilu.png" alt="Exemple de Tags"/>
<figcaption>⚠️ Il faut lire et comprendre les items avant de les apprendre</figcaption>
</figure>
<figure class="carousel-slide">
<img src="./images/paquet-edn-exemple-cartes-liees.png" alt="Cartes liées"/>
<figcaption>Granulomatose avec polyangéite : une carte sommaire et des cartes liées.</figcaption>
</figure>
<figure class="carousel-slide">
<img src="./images/paquet-edn-exemple-syndrome.png" alt="Type de note Syndrome"/>
<figcaption>Type de note Syndrome pour s'entraîner à la reconnaissance de pattern.</figcaption>
</figure>
<figure class="carousel-slide">
<img src="./images/paquet-edn-exemple-mnemonics.png" alt="Mnémoniques"/>
<figcaption>Des mnÉmoniques pour aider à la rétention.</figcaption>
</figure>
<figure class="carousel-slide">
<img src="./images/paquet-edn-exemple-difficile.png" alt="Cartes difficiles"/>
<figcaption>Les cartes difficiles sont mises en évidence.</figcaption>
</figure>
<button class="carousel-btn carousel-next">❯</button>
</div>

📱 Pour travailler sur tablette ou téléphone, utilisez les applications **AnkiDroid** / **AnkiMobile** ou **AnkiWeb**. 
> Le support le plus complet reste Anki sur ordinateur, peu importe le système d'exploitation.

Ce paquet se distingue par la brièveté des cartes et par un système de mise en contexte des cartes. Tout cela rend favorable la rétention des informations à très long terme. 

## Les liens
- [Notre Discord](https://discord.gg/2A7zHAEBYt)
- [La communauté des externes utilisant Anki](https://www.facebook.com/groups/anki.ecni), avec qui vous pouvez partager et poser des questions techniques.
- La [doc de Léo Picat](https://picat.fr/2024/06/02/paquet-anki-edn.html)  
- La [doc d'AnkiCollab](https://github.com/CravingCrates/AnkiCollab-Plugin/tree/main).
### Je n'ai jamais utilisé Anki
- Jetez un coup d'œil à [ce document](https://drive.google.com/file/d/1UWSg3gj3PyIJq0oXetesZVlbJuRGxLrA/view?usp=drive_link).
- Ensuite [ce drive vous sera utile](https://drive.google.com/drive/u/0/folders/1M9hg4EMRoFRQ4wh_E2xIOu_bKmg7ze59).

## Première installation : Anki, AnkiCollab (téléchargement du deck) et add‑ons
> **Utilisez un ordinateur** 💻📵

### 1. Anki <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>

- [Créez un compte AnkiWeb](https://ankiweb.net/account/signup);
- Acceptez "Terms and Conditions" et vérifiez votre mail.
- [Installez Anki sur votre ordinateur](https://apps.ankiweb.net/#downloads) ;
- Une fois sur l'application, appuyez sur <span class="tab-button active">synchronisation</span> ou sur la touche <kbd>Y</kbd> puis connectez‑vous à votre compte AnkiWeb ;
- Allez dans `Outil > Greffons > Acquérir des greffons` ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>A</kbd> et collez 
<span class="copy-block" onclick="copyText(this)">
  <code>1957538407 501542723 1052724801 445658251 2135076010 1906641654 2040501954</code>
  <span class="copy-feedback"> Copié ✅</span>
</span>. On a installé ça[^1].

### 2. AnkiCollab et téléchargement du deck <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>

- [Créez un compte AnkiCollab](https://www.ankicollab.com/signup);
- Relancez Anki, allez dans `AnkiCollab > Login` puis `AnkiCollab > Edit Subscriptions` et collez <span class="copy-block" onclick="copyText(this)">
  <code>mango-may-georgia-eleven-moon-orange</code>
  <span class="copy-feedback">Copié ✅</span>
</span>.
- Toujours dans `AnkiCollab > Edit Subscriptions`, allez dans `🛠️ Global Settings` et activez `Check for Updates on Startup` et `Automatically suspend new Cards` ;
- Vous avez téléchargé le deck Anki EDN !
### 3. Faire fonctionner Lien entre les cartes (réparation des NID) <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>

1. Dans le menu principal d'Anki, cliquez sur **Anki EDN** ;
2. Sélectionnez **⚠️ Réparer les NID** ;
3. Cliquez sur **continuer**
4. Attendez la fin de l'opération ; Relancez Anki et vos liens sont maintenant réparés !

### 4. Les options de révision <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span> 

Nous les optimisons de façon à ce que l'utilisation du paquet ne soit pas trop chronophage. 
- Sur la page d'accueil, rendez‑vous à droite du paquet dans `⚙️ > options` ;
- En haut, à droite de <span class="sauvegarde-anki-button">Sauvegarder</span> cliquez sur `Ajouter un préréglage` et entrez un nom.

#### Paramètres recommandés :
> Astuce : toutes les modifications effectuées sont matérialisées par le signe 🔄

<figure>
    <figcaption>⚠️ Il faut faire comme sur cette image</figcaption>
    <img src="./images/options.png" alt="Média en cours de création..." class="img-sm"/>
</figure>

- Nombre maximum de nouvelles cartes par jour : 50 (c'est bien le maximum, il vaut mieux s'arrêter autour de 25–40 [^30-40]) ;
- Aucune limite sur le nombre de révisions quotidiennes ;
- On préfère laisser les étapes d'origine. Pour optimiser ces réglages à votre mémoire, [lisez cette page](./Bonus.md) ;
- L'ordre d'affichage est réglé pour maximiser l'attention et gagner du temps ;
- Seuil de pénibilité à 20 (les cartes échouées plus de 19 fois sont suspendues et retournent ainsi dans la réserve des cartes) ;
- Le taux de rétention du FSRS est calculé pour un apprentissage sur plusieurs années. Il est plutôt bas afin de ne pas rendre les révisions trop chronophages. Il conviendra de l'augmenter à partir de l'été D3 (et non pas pour les partiels, où vous privilégierez les QCM et les DP). Les `Paramètres du FSRS` s'adaptent automatiquement, pas besoin d'y toucher ;
- Les "Cartes sœurs" n'apparaissent pas le même jour pour favoriser la mémoire à long terme ;
- Le reste des réglages est identique à ceux par défaut. 

> Lors de la première révision, les espacements entre les révisions sont très grands et peuvent surprendre. Dès votre 3e jour de révisions, dans `FSRS` cliquez sur `Optimiser`. Répétez l'opération toutes les 2 semaines puis tous les mois ! (Créez un rappel)  
Pour en savoir plus sur les paramètres, [référez‑vous à cette vidéo](https://www.youtube.com/watch?v=uo-qQvOZDfg).

## Découverte

Une fois que vous avez installé le paquet, il y a 2 choses à faire en priorité :

1. Jetez un œil à quelques items pour voir si le paquet peut vous convenir :
   - Depuis la page d'accueil d'Anki, allez dans l'explorateur de cartes (cliquez sur <span class="tab-button active">Parcourir</span> ou appuyez sur <kbd class="kbd-keyboard">B</kbd>), puis rendez‑vous dans le volet de navigation (à gauche de la page), descendez jusqu'à `Étiquettes` et sous <code>EDN</code> déroulez les étiquettes par items pour juger notre forme de rédaction ([Expliquée ici](#les-normes-du-paquet)). Vous pouvez utiliser `Aperçu` (en haut à droite) pour visualiser les cartes. <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span> 

<figure>
    <img src="./images/paquet-edn-exemple-exploration-paquet.png" alt="Média en cours de création..." class="img-lg"/>
</figure>

2. **Exclure toutes les cartes des révisions (on reviendra là‑dessus)**    <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>     
    - Assurez‑vous que l'explorateur est en mode <span class="cartes-anki-button">Cartes</span> et pas en mode <span class="notes-anki-button">Notes</span> (en haut et à gauche de la barre de recherche) ;
    - Dans le même volet de navigation (à gauche de l'explorateur), dans `Étiquettes` cliquez sur <code>EDN</code> ;
    - Sélectionnez toutes les cartes via <kbd>Ctrl</kbd>+<kbd>A</kbd> ou <kbd>Cmd</kbd>+<kbd>A</kbd> ;
    - Suspendez les cartes via <kbd>Ctrl</kbd>+<kbd>J</kbd> ou <kbd>Cmd</kbd>+<kbd>J</kbd> ou via un clic droit > <code>Suspendre/Reprendre</code>.

## Réviser un nouvel item

> Avant de commencer à réviser les fiches Anki, il faut avoir une bonne compréhension du cours.  
Sinon, vous serez déroutés par l'ordre aléatoire des cartes.

1. Rendez‑vous dans l'explorateur où vous irez chercher l'étiquette de l'item que vous voulez réviser  <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span> 
    - Allez dans l'explorateur de cartes (cliquez sur <span class="tab-button active">Parcourir</span> ou appuyez sur <kbd class="kbd-keyboard">B</kbd>), puis rendez‑vous dans le volet de navigation (à gauche), descendez jusqu'à `Étiquettes` et sous <code>EDN</code> déroulez les items puis cliquez sur celui qui vous intéresse. Vous pouvez alors prendre connaissance des cartes déjà créées avec `Aperçu` (en haut à droite). 
    
2. Désuspendre les cartes que vous souhaitez apprendre  <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span> 
    - Sélectionnez les cartes qui vous intéressent puis <kbd>Ctrl</kbd>+<kbd>J</kbd> / <kbd>Cmd</kbd>+<kbd>J</kbd> ou via un clic droit > `Suspendre/Reprendre`.

---

## Les abréviations et symboles
### Vous allez avoir besoin de cette liste
C'est un point qui rend plus difficile l'appropriation du paquet.
L'utilisation des symboles permet d'alléger le contenu des cartes et de ne pas les polluer avec des mots de liaison inutiles. On peut alors se concentrer sur le contenu intéressant des cartes.
> Ne vous effrayez pas avec cette liste maintenant. 
> Travaillez avec cette page sous les yeux la première semaine ! On prend vite le coup.

<figure class="embed-figure">
    <!-- Container responsive pour PDF -->
    <div class="embed-container">
        <iframe src="./images/symboles.pdf"></iframe>
    </div>
</figure>

> Vous pouvez **l'imprimer, le mettre en fond d'écran...** 

- Symbole de liaison
  - ~ pour "environ"
  - /| pour "ou"
  - ∨ pour "et/ou" :vee:
  - & pour "et"
  - % pour "par rapport à"
  - α pour "est proportionnel à", "en fonction de", "dépend de" :alpha:
  - // pour "pareil que"
  - ± pour "plus ou moins" :pm:
  - \{*objet*} pour "exclu"
- Symbole autre
  - ↕ ou ‡ pour "arrêt" :ddagger:
  - ›› pour "début" 
  - › pour "puis", "ensuite" ou "en énième intention"
  - ∀ pour "pour tout" ou "tous les" :forall:
  - ∃ pour "il existe" ou "il est possible" :exists:
  - ¬ pour "pas", "non" ou "dans le cas contraire" :neg:
  - Ø pour "non" ou "absence de" :emptyset:
  - ◊ pour "il est possible", "il y a parfois" :nabla:
  - ☐ pour "il faut", "il doit", "il y a toujours" :Xi:
  - ♆ psychiatrique :psi:
- Abréviations
  - svr pour "sévère"
  - ctrl pour "contrôle"
  - R pour "rien", "aucun"
  - sup. pour "superficiel" ou "supérieur"
  - inf. pour "inférieur"
  - lat. pour "latéral"
  - méd. pour "médian" ou "médial"
  - sem. pour "semaine"
  - ATCD pour "antécédent"
  - FdR pour "facteur de risque"
  - vx pour "vaisseau·x"
  - n parmi k pour "combinaison"
  - panpan pour "relation sexuelle"
  - aTDM pour "angio‑TDM" (soit injecté)
  - TMO pour "Traitement Médicamenteux Optimal"
  - PDCB pour "Perte De Conscience Brève"
  - R pour "Rien"
  - ECR pour "Essai Contrôlé Randomisé"
  - ITT pour "Intention de Traiter"
  - Ag pour "Antigène"
  - Ac pour "Anticorps"
- Autres
  - \+ répété <i>n</i> fois pour marquer l'importance (alternativement l'élément principal d'une liste ou l'intensité) de ce qui précède
  - \+ pour "positif"
  - \- pour "négatif"
  - S<i>n</i> pour "à la semaine <i>n</i>"
  - M<i>n</i> pour "au mois <i>n</i>" ou "à l'âge de <i>n</i> mois"
  - A<i>n</i> pour "à l'année <i>n</i>" ou "à l'âge de <i>n</i> ans"

## Pour utiliser les abréviations

  - Pour obtenir les icônes dans votre éditeur :
    - <a href="./assets/raccourcis.csv" download>Télécharger ce fichier</a>
    - Allez dans `Outils > Insert Symbol Options...`
       <figure style="width: 300px;">
         <img src="./images/illu_symbol_options.png" alt="Média en cours de création..."/>
      </figure>
    - Cliquez sur `Import` et sélectionnez le fichier téléchargé puis `Ok`.
    - Il suffit maintenant d'écrire les commandes directement dans le corps de votre texte pour qu'elles s'insèrent.
    - Les commandes sont visualisables sur [ce tableau](#les-abréviations-et-symboles).

---

## Organisation du Deck
### Les étiquettes 🏷️

Les cartes sont classées via des étiquettes :

- des étiquettes par items, parfois avec des sous‑tags ;
- des étiquettes par matière ;
- des étiquettes par rang ;
- et un certain nombre d'étiquettes pour faciliter les recherches (`Antibiothérapie`, `Formule`, `Norme`, `Seuil`, `Nom-propre`, entre autres).

<figure>
    <img src="./images/tags_ilu.png" alt="Média en cours de création..."/>
</figure>

### Les drapeaux 🏴
> C'est à vous de les placer afin d'optimiser vos révisions

Pour marquer vos cartes durant vos révisions, allez dans `Autres choix` > `Marqueur de carte` ou simplement <kbd>Ctrl</kbd>+<kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd> ou <kbd>4</kbd>.

Voici comment peuvent s'utiliser les drapeaux :

- <span style="color: #F87171;" class="flag-anki-button">Rouge</span> pour les cartes qui doivent être modifiées ;
- <span style="color: #FDBA74;" class="flag-anki-button">Orange</span> pour les cartes que vous considérez comme difficiles ;
- <span style="color: #86EFAC;" class="flag-anki-button">Vert</span> pour les cartes importantes ;
- <span style="color: #60A5FA;" class="flag-anki-button">Bleu</span> pour les cartes qui peuvent être améliorées (avec une illustration par exemple).

### Les paquets

**Il y a un seul paquet 2e cycle.**
Car :
- une carte peut être en rapport avec deux items ;
- une carte ne peut être que dans un paquet à la fois ;
- une carte peut avoir plusieurs étiquettes.

Nous **utilisons donc des étiquettes pour classer vos cartes** et le paquet sert uniquement à **rassembler les cartes à réviser**. Compte tenu des exigences de l'EDN, toutes les cartes sont à réviser de la même façon[^approximation-rang].

### Bien réviser
#### Révisions des cartes
- **Difficile** : Usage exceptionnel (réponse juste après un long doute).
- **À revoir** : Si oubli partiel. Les intervalles sont gérés par l'algo, ne trichez pas ! Si une carte gêne, suspendez-la.
- **Facile** : Uniquement pour les évidences.

<figure>
    <img src="./images/illu_facile__difficile.png" alt="Choix de réponse Anki"/>
</figure>

#### Autres
- **FSRS** : Optimisez-le une fois par mois (`⚙️ > options > FSRS > Optimiser`). <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span> 
- Faites vos révisions journalières d'une traite si possible.

---

## Proposer une modification
Ce paquet est collaboratif et nous avons besoin de vous pour l'actualiser.

> Les MAJ que vous recevrez sont susceptibles d'ajouter, de supprimer (rarement) ou de modifier des cartes que vous avez déjà apprises. Les modifications faisant partie du programme, vous serez à jour pour le concours.

- Des sauvegardes automatiques sont réalisées nativement par Anki [ici](https://docs.ankiweb.net/files.html#file-locations).
- Si vous voulez protéger des cartes des futures mises à jour qu'elles pourraient subir :
    - Sélectionnez vos cartes à protéger dans l'explorateur, clic droit > `AnkiCollab: Protect fields of note(s)`.

### Notifications

> Après chaque MAJ, des notifications à l'ouverture d'Anki et sur Discord apparaîtront.

#### Après une mise à jour
- Des tags sont généralement créés pour que vous repériez les cartes mises à jour.
- Si la MAJ concerne un item que vous révisez, nous vous conseillons **d'oublier les cartes modifiées que vous aviez apprises**, puis de les réapprendre <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>
    - Allez dans l'explorateur de cartes (cliquez sur <span class="tab-button active">Parcourir</span> ou appuyez sur <kbd class="kbd-keyboard">B</kbd>), puis rendez-vous dans la barre de recherche en haut et au milieu. Tapez <code>tag:</code>. Une autre barre de recherche s'ouvre.
    - Dans cette nouvelle barre de recherche, tapez <code>MAJ</code>.
    - Sélectionnez les cartes qui vous intéressent, puis appuyez sur <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>N</kbd> | <kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>N</kbd> ou utilisez le clic droit > `Oublier...`.
    - Si elles ne sont pas suspendues, ces dernières entrent dans la file des "nouvelles cartes".
- Vous pouvez aussi trouver les cartes modifiées ou ajoutées selon la date grâce à l'add‑on BetterSearch.
    - Allez dans <span class="tab-button active">Parcourir</span> (<kbd class="kbd-keyboard">B</kbd>), puis dans <code>BetterSearch &gt; Show Date Range Dialog for Edited | Added</code> et lancez la recherche.

#### Après un ajout
- [Les nouvelles cartes sont automatiquement suspendues ;](#2-ankicollab-et-téléchargement-du-deck)
- Les notifications décrivent quels items ont reçu des nouveautés :
    - À vous de désuspendre les cartes <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>
    - Allez dans l'explorateur de cartes (cliquez sur <span class="tab-button active">Parcourir</span> ou appuyez sur <kbd class="kbd-keyboard">B</kbd>), puis rendez-vous dans la barre de recherche en haut et au milieu. Tapez <code>tag:</code>. Une autre barre de recherche s'ouvre.
    - Dans cette nouvelle barre de recherche, tapez <code>NEW</code>.
    - Sélectionnez les cartes qui vous intéressent, puis appuyez sur <kbd>Ctrl</kbd>+<kbd>J</kbd> / <kbd>Cmd</kbd>+<kbd>J</kbd> ou utilisez le clic droit > `Suspendre/Reprendre`.

### Rédiger
Vous pouvez soumettre des modifications pour de multiples raisons, même pour des questions d'ergonomie, de grammaire ou d'esthétique. N'hésitez pas à venir discuter sur le Discord.

> Nous acceptons uniquement les modifications qui tiennent compte des [normes](#les-normes-du-paquet) et des [abréviations](#les-abréviations-et-symboles) du paquet.

> Il faut maîtriser la forme rédactionnelle des cartes.

> Il faut maîtriser l'utilisation de [l'add‑on des liens entre les cartes](https://ankiweb.net/shared/info/445658251) ; vous trouverez un tuto ci‑dessous.

#### Pour rédiger proprement
- Vérifiez que la carte que vous voulez rajouter n'existe pas déjà sous un autre tag.
- Lisez les [normes du deck](#les-normes-du-paquet).
- Respectez l'utilisation des tags :
    - Entrez le(s) item(s) de la carte `EDN::item-*numéro*-*intitulé*`, parfois aussi les sous-tags.
    - Entrez la/les situation(s) de départ de la carte `EDN::ssd-*numéro*-*intitulé*`, parfois aussi les sous-tags.
    - Entrez les tags des matières.
    - Évitez de mélanger les `Rang::A` et les `Rang::B` (le champ `Infos supplémentaires` est votre ami).
    - Entrez les potentiels tags accessoires `Antibiothérapie`, `Score`, ...

- Utilisez les [abréviations](#les-abréviations-et-symboles) du deck.
    - Pour obtenir les icônes dans votre éditeur :
        - <a href="./assets/raccourcis.csv" download>Télécharger ce fichier</a>
        - Allez dans `Outils > Insert Symbol Options...`
        <figure style="width: 400px;">
         <img src="./images/illu_symbol_options.png" alt="Média en cours de création..."/>
        </figure>
        - Cliquez sur `Import` et sélectionnez le fichier téléchargé puis `Ok`.
    - Il suffit maintenant d'écrire les commandes directement dans le corps de votre texte pour qu'elles s'insèrent.
    - Les commandes sont visualisables sur [ce tableau](#les-abréviations-et-symboles).

<ul style="list-style-type: disc "><li><ul style="list-style-type: circle;"><li><ul style="list-style-type: square;"><li></li></ul></li></ul></li></ul>

- Pour écrire les puces ci‑dessus, utilisez <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>.</kbd> | <kbd>Cmd</kbd>+<kbd>Maj</kbd>+<kbd>.</kbd>

#### Pour mettre à jour efficacement un item à l'aide de l'IA
- Nous vous conseillons d'utiliser [Claude](https://claude.ai).
- Allez dans <span class="tab-button active">Parcourir</span> (<kbd class="kbd-keyboard">B</kbd>), cherchez les cartes d'intérêt avec <code>tag:</code>, sélectionnez-les avec <kbd>Ctrl</kbd>+<kbd>A</kbd> | <kbd>Cmd</kbd>+<kbd>A</kbd> et exportez-les avec <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>E</kbd> | <kbd>Cmd</kbd>+<kbd>Maj</kbd>+<kbd>E</kbd> ou via le menu `Exporter les notes...`.
- De la même manière, vous pouvez exporter les cartes des items en rapport avec l'item d'intérêt.
    - Exportez selon ces réglages.
    <figure style="width: 350px;">
    <img src="./images/illu_export_notes.png" alt="Média en cours de création..."/>
    </figure>
- Isolez dans un PDF l'item d'intérêt (des collèges sont disponibles sur le Discord).
- <a href="./assets/Liste_de_Tags_Anki_EDN.txt" download>Ajoutez ce fichier</a>
- Avec ces trois ou quatres pièces jointes, envoyez ce prompt à l'IA :

<span class="copy-block collapse-copy" onclick="copyText(this)">
  <code>Voici mes fiches Anki, le référentiel officiel pour l'item à travailler et une liste des tags et d'abréviations utilisé dans le deck.
Si c'est un item transversal, j'ai ajouté les cartes en rapport avec celui-ci dans le cas où elles n'aurait pas été biens taggés.
Si je t'ai donnés plusieurs pdf référentiel, c'est la dernière édition qui prime (je peux te l'indiquer).
Tu utiliseras comme source uniquement le(s) PDF. S'ils t'apparaissent vide, passe-les par OCR.
Objectif :
Vérifie chaque carte Anki et indique si elle est exacte, à modifier, non sourcée, redondante ou à supprimer.
La forme des cartes est aussi un point d'attention.
Prend garde aux tags et aux rangs des informations. Les rangs C rédigés en couleur verte sur les référentiels sont à ignorer. 
Fait des liens entre les cartes quand nécessaires à l'aide des nID.
Si des notions du référentiel ne sont pas fichées, crée de nouvelles cartes dans mon style habituel.
Analyse en détail les cartes modifiées, supprimées ou ajoutées.	
Utilise le format HTML de mes cartes, la concision et la densité EDN.
Format attendu :
1 Tableau de synthèse
2 Analyse détaillée des cartes modifiées
3 Proposition des nouvelles cartes au format Anki (HTML lisible) avec leurs tags appropriés
4 Signalement des cartes redondantes, sans correspondance ou hors référentiel</code>
  <span class="copy-feedback">Copié ✅</span>
</span>

- Faites les modifications à l'aide des entrées HTML des cartes `<>` (<kbd>Cmd</kbd>+<kbd>Tab</kbd>+<kbd>X</kbd> | <kbd>Ctrl</kbd>+<kbd>Tab</kbd>+<kbd>X</kbd>)
<figure style="width: 350px;">
    <img src="./images/illu_htlm_modifier.png" alt="Média en cours de création..."/>
</figure>

- Toutes les cartes validés doivent actualiser le tag source (par exemple : `source::2024::ORL`).

#### Pour créer des liens entre les cartes <span class="gif-wrapper" data-video="images/clickable-note-links-demo.webm" data-video-fallback="images/clickable-note-links-demo.mp4"  data-caption="Vidéo de Léo Picat"></span>
- Sélectionnez la note à lier dans l'explorateur ;
- Copiez son identifiant (NID) via `Clic droit > Copy Note ID` ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>C</kbd> ;
- Dans la note de destination, après avoir collé le NID, sélectionnez-le ou cliquez sur le bouton <span class="tab-button active">Lier</span> ou appuyez sur <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd> ;
- Le lien est créé !
> Plus simple : Dans le champ de la note de destination, cliquez sur le bouton <span class="tab-button active">Lier</span> ou appuyez sur <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd>, cherchez le recto de la carte à lier et insérez la.

Lorsque vous révisez, passez la souris sur le lien pour afficher un aperçu de la carte liée sans quitter votre révision. Vous pouvez aussi utiliser les raccourcis <kbd>P</kbd>, <kbd>R</kbd> et <kbd>N</kbd> pour naviguer entre les cartes liées.
Vous pouvez cliquer pour éditer la carte aperçu.

### Soumettre

> Que vos ajouts, suppressions ou modifications soient acceptés par la communauté ou non, cela n'impactera pas votre paquet. Vous conserverez vos modifications.

#### Soumettre des nouvelles cartes
- Écrivez vos nouvelles cartes dans le menu principal <span class="tab-button active">Ajouter</span>.
- Dans `Type` sélectionnez le [format qui convient](#types-de-notes) suivi de `-EDN-Picat-x`.
- Dans `Paquet` sélectionnez `Anki EDN`.
- Remplissez les champs.

##### S'il s'agit d'une seule carte <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>
- Toujours dans l'onglet d'édition de la note, sélectionnez `AnkiCollab` > `New card` et laissez un message explicatif contenant l'item en question.

##### S'il s'agit d'un groupe de cartes <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>
- Dans l'explorateur, sélectionnez les notes que vous voulez proposer, puis clic droit > `AnkiCollab: Bulk suggest notes` > `New Card` et laissez un message explicatif contenant l'item en question.

#### Proposer des modifications
- Modifiez les champs des notes d'intérêt.

##### S'il s'agit d'une seule carte
- Toujours dans l'onglet d'édition de la note, sélectionnez `AnkiCollab` > `Updated content` (ou autre) et laissez un message explicatif.

##### S'il s'agit d'un groupe de cartes
- Dans l'explorateur, sélectionnez les notes que vous voulez proposer, puis clic droit > `AnkiCollab: Bulk suggest notes` > `Bulk Suggestion` (ou autre) et laissez un message explicatif.

#### Supprimer des cartes <span class="gif-wrapper" data-video="videos/test.webm" data-video-fallback="videos/test.mp4"></span>
On peut vouloir supprimer des cartes parce qu'elles ne sont plus utiles, trop anecdotiques, ou inadaptées.
- Dans l'explorateur, sélectionnez les notes que vous voulez proposer, puis clic droit > `AnkiCollab: Request note removal` > `Note Removal` (ou autre) et motivez la raison.

---

## Les normes du paquet
Ce chapitre explique le format des cartes utilisées et les modes de rédactions des différentes cartes. Pour participer à l'évolution de ce paquet, il faut respecter le mode rédactionnel et intégrer sa logique.

### Flashcards

Les cartes qui composent le paquet ne sont pas des fiches de cours, mais des flashcards.

> 1 carte = 1 info

Par exemple :
Si une prise en charge comprend un traitement pharmacologique, des règles hygiéno-diététiques, et des examens complémentaires de suivi, il y aura probablement 4 cartes : une par pan de la prise en charge et une carte "sommaire" qui demandera de réciter ces 3 grands axes. Des liens cliquables entre les cartes sont construits, ce qui permet une meilleure mise en contexte. Lisez [cette doc](https://ankiweb.net/shared/info/445658251) pour bien l'utiliser.

<figure>
    <img src="./images/paquet-edn-exemple-sommaire.png" alt="Sorry the link is broken..."/>
    <figcaption>Les cartes sommaires permettent de ne pas déstructurer l'apprentissage.</figcaption>
</figure>

Les cartes sont donc très courtes, ce qui a 2 conséquences :

- un nombre important de cartes ;
- des cartes rapides à répondre (rarement plus de 10s / cartes)

<figure>
    <img src="./images/paquet-edn-exemple-cartes-liees.png" alt="Sorry the link is broken..."/>
    <figcaption>Ici on a une carte sommaire pour la granulomatose avec polyangéite. Les nombreux signes cliniques sont répartis en différentes catégories de telle sorte à ce que chacune des cartes de la série demande de réciter moins de 6-8 signes cliniques.</figcaption>
</figure>

#### Standardisation

Les formulations des cartes sont standardisées : 

- "Examens complémentaires devant <i>X</i>" ;
- "Aspect de <i>X</i> à l'imagerie" ;
- "Prévalence de <i>X</i>" ;
- "Antibiothérapie de <i>X</i>" ;
- etc.

Cela permet de retrouver facilement les cartes dans l'explorateur une fois
que l'on a identifié les formulations récurrentes.

**Les données épidémiologiques sont toujours rapportées sur 100 000 habitant·e·s
de façon à être comparables**, sauf rares exceptions (données en lien avec les
cancers ou quand parler en 1 pour <i>n</i> a du sens). 
> Pour passer d'une valeur
absolue au rapport pour 100 000, il faut simplement multiplier par 660 (en comptant 66 millions d'habitants en France).

### Types de notes

Il y a 5 types de notes principaux :

- **Basique**, avec un Recto et un Verso qui crée une carte : Recto → Verso ;
- **Texte à trous**,
- **Sémiologie**, un champ Image (du signe), un champ Nom (du signe), et un
  champ Description (du signe). Cela crée 3 cartes : Image → Nom, Nom →
  Description et Description → Nom ;
- **Syndrome**, un champ Nom (du syndrome), et un champ Description (du
  syndrome). Cela crée 2 cartes : Nom → Description et Description → Nom.

<figure>
    <img src="./images/paquet-edn-exemple-syndrome.png" alt="Sorry the link is broken..."/>
    <figcaption>Avec le type de note syndrome, on s'entraine à la fois à réciter <b>et</b> reconnaitre un ensemble de signes.</figcaption>
</figure>

### Champs
Certains champs sont auto-explicatifs. Focus sur :
- **Infos supplémentaires** : Illustrations ou infos majeures (bug d'affichage mobile possible).
- **Cartes Liées** : Voir [supra](#flashcards).
- **Mots clés** : Pour la recherche (ex: "SAPL" pour "Syndrome des anti phospholipides"). Parfois placés dans `Comments`.


#### Affichage des cartes difficiles

Les cartes considérées comme difficiles apparaissent différemment pendant les révisions pour pouvoir les repérer et y lire la réponse avec plus d'attention.

<figure>
    <img src="./images/paquet-edn-exemple-difficile.png" alt="Sorry the link is broken..."/>
    <figcaption>Un liseré rouge permet d'identifier en un clin d'œil les cartes avec lesquels on a le plus de mal.</figcaption>
</figure>

Il y a 2 façons de marquer une carte comme difficile :

- en lui appliquant le drapeau <span style="color: #FDBA74;" class="flag-anki-button">orange</span> ;
- en lui attribuant un tag `Difficile`.

#### Autre

Il y a des fautes d'accord volontaire sur certaines cartes Texte à trous afin de
ne pas donner trop d'indices lors des révisions.

<figure>
    <img src="./images/paquet-edn-exemple-indice.png" alt="Sorry the link is broken..."/>
    <figcaption>Si l'accord était respecté, on aurait un indice délétère sur la bonne réponse.</figcaption>
</figure>


#### Droits d'auteur

Tout le contenu du paquet, ainsi que le paquet lui même sont disponibles sous la licence [Creative Commons](https://creativecommons.org/).
Vous pouvez donc partager et modifier les cartes sous 3 conditions :

- vous devez citer Léo Picat et Anki EDN ;
- vous ne pouvez en faire un usage commercial ;
- vous devez les partager sous la même licence.

---

## Mise à jour des Items

[Tableau des MAJ des items](https://docs.google.com/spreadsheets/d/1EpIQmvkDmqrqDy4YTaygqLuE0qrh2Q_t8FdQx6AdEhU/edit?usp=sharing)

<div class="embed-container">
  <iframe 
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQWeHJNksMrjEWhF6egJk2SjVVYPER7SZumpfqkrPFS6XGlNvX10TU5MvyaQIiWbH1_BlKLm10f0n66/pubhtml?gid=1009852412&amp;single=true&amp;widget=true&amp;headers=false"
    frameborder="0"
    scrolling="yes"
    allowfullscreen>
  </iframe>
</div>

---

## FAQ

### Comment réviser les items transverses ? (parasito, pharma...)
Utilisez les tags et l'explorateur ! `tag:Infectiologie::Parasites` est très complet par exemple.

### Comment réviser item par item ou par matière 
Cliquer sur "Outils" > Créer un paquet filtré. Ou tapez `F`.
Définir le filtre : Dans le champ "Recherche", tapez vos critères (ex: `tag:Cardiologie` et `is:due`). Ou si vous voulez réviser par item : (ex: `tag::item155` et `is:due`)
Dans les options : sélectionner "replanifier les cartes selon mes réponses dans ce paquet"
Valider : Cliquez sur "Construire". Le paquet apparaîtra en bleu dans votre liste.
A la fin de votre révision, toutes les cartes reviendront dans le paquet général "Anki EDN"
Si le lendemain vous voulez réviser le paquet filtré de nouveau, cliquez sur "reconstruire"

### Prendre une pause (week-end ou vacances) 
Avec **FSRS Helper**, vous pouvez planifier vos pauses sans accumuler un retard insurmontable. 

#### 1. Programmer des jours faciles à l'avance

- Dès que vous connaissez vos dates de pause, configurez des `jours faciles` dans FSRS Helper pour réduire la charge de travail pendant cette période.

- Ouvrez le menu `FSRS Helper` dans `Options`
- Sélectionnez `Jours faciles avec moins de révisions` puis `Appliquer les jours faciles à des dates spécifiques`
- Indiquez vos dates de pause.

#### 2. La veille de votre pause : « Schedule a Break »

**La veille du départ**, utilisez la fonction `Schedule a Break` pour redistribuer les cartes prévues pendant votre absence sur les jours qui suivent votre retour.

- Dans `Options` > `FSRS Helper` > `Schedule a Break`
- Indiquez le nombre de jours de votre pause (par exemple, 3 pour un week-end prolongé)

### Préparer les ECOS avec Anki EDN ?
- Le paquet n'est pour le moment PAS une préparation aux ECOS. Nous sommes ouvert à toute aide !

### Comment fonctionnent les mises à jour (MAJ) et sont-elles automatiques ?
Les modifications proposées par la communauté et validées par les référents sont implémentées dans le deck collaboratif. Au démarrage d'Anki sur votre ordinateur (connecté à internet), une notification vous proposera de télécharger la mise à jour.

### Puis-je réviser et recevoir les mises à jour sur mon application mobile (iOS/Android) ?
Vous pouvez tout à fait réviser sur mobile. Cependant, le plugin **AnkiCollab** (qui gère les mises à jour) ne fonctionne que sur ordinateur. 
**Pour obtenir les mises à jour :** démarrez de temps en temps Anki sur votre ordinateur pour télécharger les MAJ, puis synchronisez votre profil avec AnkiWeb pour répercuter les changements sur votre application mobile.

### Est-ce obligatoire d'avoir un compte AnkiWeb pour utiliser Anki EDN ?
Un compte AnkiCollab suffit si vous révisez exclusivement sur un seul ordinateur local. En revanche, un compte **AnkiWeb** est obligatoire pour synchroniser vos cartes et votre progression entre plusieurs appareils (ordinateur, téléphone, tablette).

### Pourquoi mes notifications de mise à jour n'apparaissent pas au démarrage ?
1. Vérifiez que vous êtes correctement connecté à votre compte AnkiCollab.
2. Allez dans le menu d'Anki : `AnkiCollab > Edit subscription > Global settings` et assurez-vous que l'option **"Update deck on startup"** est activée.

### Comment vérifier si une mise à jour d'un item a bien été appliquée sur mon deck ?
- Pour voir les cartes mises à jour durant un mois spécifique, recherchez `tag:MAJ::MM/YY` dans l'explorateur d'Anki (ex: `tag:MAJ::11/25` pour les MAJ de novembre 2025).
- Pour voir toutes les cartes modifiées récemment (par exemple, ces 2 derniers jours), vous pouvez tapez `edited:2` dans l'explorateur.

### Vais-je perdre mes modifications personnelles (images, texte) lors des MAJ du deck ?
**Oui.** Si les champs d'une carte que vous avez modifiée localement reçoivent une mise à jour officielle de la part de l'équipe, vos modifications locales seront écrasées. 
**Pour protéger vos modifications :**
- **Pour une protection totale de la carte :** Ajoutez le tag `ankicollab_protect::all` sur la carte concernée.
- **Pour ne protéger que vos étiquettes (tags) :** Ajoutez le tag `ankicollab_protect::tags` (cela permet de recevoir les modifications textuelles sans écraser vos tags personnels).
- Notez que le champ *Erreurs faites* est quant à lui personnel et nativement protégé d'AnkiCollab.
- Si vous souhaitez ajouter des notes importantes sans risque d'écrasement, il est préférable de créer vos propres cartes personnelles séparées plutôt que de modifier les cartes collaboratives du deck.

### Que signifie le message indiquant que des cartes ont été supprimées lors de la synchronisation ?
Ces cartes ont été retirées du deck collaboratif par les référents (souvent car elles étaient redondantes ou obsolètes). AnkiCollab vous permet de choisir : vous pouvez les conserver localement (par exemple si vous les avez déjà apprises) ou les laisser se supprimer pour rester synchrone avec le deck officiel.

### Pourquoi mes images ne s'affichent pas (icône d'image cassée) ?
Allez dans l'explorateur ou sur l'écran d'accueil, cliquez sur la roue crantée à droite du deck Anki EDN, puis sélectionnez l'option spécifique **Anki Collab Check Media** (et non pas le "Vérifier les médias" classique d'Anki).

### Que faire si les liens entre les cartes ("cartes liées") renvoient vers une recherche vide ?
Ce problème peut être dû à un défaut de liaison locale des identifiants uniques, à une divergence de profil, ou au fait que certains liens sont effectivement « morts » (la carte ciblée n'existe pas encore).

**Résolution :**
1. **Tentez d'abord de « réparer les NID » :**
   Dans le menu principal d'Anki, cliquez sur le deck **Anki EDN**, sélectionnez l'option **⚠️ Réparer les NID**, cliquez sur **continuer**, attendez la fin de l'opération puis relancez Anki.
2. **Si cela persiste :**
   Il peut s'agir d'une divergence d'identifiants entre votre profil et le deck collaboratif. Exportez vos autres decks personnels sur votre bureau par sécurité. Supprimez votre profil Anki, recréez un profil propre, téléchargez le deck à l'aide du lien d'export `.apkg` d'un mainteneur (qui contient les `nid` d'origine corrects), puis connectez-vous à AnkiCollab. Vos futures MAJ se feront correctement et les liens fonctionneront.
3. **Cas des liens morts :**
   Certains liens sont effectivement morts car la carte liée n'a pas encore été créée. Ils doivent être signalés en leur attribuant l'étiquette (tag) `empty-nid` sur la carte concernée, avant qu'un utilisateur ne se charge plus tard de créer la carte correspondante.

### Comment lier deux cartes entre elles de manière interactive dans l'éditeur ?
Copiez le NID de la carte cible, collez-le dans le champ "Cartes liées" de votre carte, sélectionnez-le et cliquez sur le bouton **Lier** tout en haut de l'éditeur (ou utilisez le raccourci `Ctrl + Alt + L` / `Option + Cmd + L` sur Mac). Cela formatera automatiquement le lien pour permettre la prévisualisation au survol en cours de révision.

---

## Quelques inconvénients

On identifie ces points faibles ci‑dessous :

### Liens morts

Certains liens entre les cartes ne sont pas insérés. C'est principalement le cas quand la création d'une carte aurait relevé d'un micro‑détail (causes auto‑immunes très rares...).

Par ailleurs, tous les liens pertinents n'ont peut‑être pas été faits.

### Illustrations minimalistes

Certaines cartes manquent d'illustrations ou d'images explicatives.

### Erreurs

Il y a sûrement des fautes et des inexactitudes, que ce soit sur la forme ou le contenu. 

Aidez‑nous en remontant les points qui ne semblent pas clairs sur notre [Discord](https://discord.gg/2A7zHAEBYt).

### Le paquet n'est pas une préparation aux ECOS

---

## Remerciements

Ce projet est à l'initiative d'Angelo Marciszewer et est hébergé par la Corporation des Carabins de Sorbonne Université *via* le pôle informatique.

### Nous remercions spécifiquement

L'équipe d'AnkiCollab ainsi que sa communauté.

Léo Picat pour son deck, son add‑on, sa documentation et surtout sa gentillesse.

Les icônes sur les cartes viennent de Flaticon et Freepik.

Le Pôle info, spécialement Alexandre, Ragy, Adib, Théo et Rostan.

Matteo et Vlad !

Merci à Tim pour m'avoir aidé à créer ce site.

Merci à Marion Cohen et Jessica pour le gsheet.

Merci à Mathis Alix pour avoir organisé la coordination de ce projet !

Merci à tous les contributeurs ainsi qu'à leurs relecteurs !

Enfin, merci à tous les étudiants qui nous ont donné des retours.

---

[^1]: Les greffons installés : 
    - 1957538407 - [AnkiCollab](https://ankiweb.net/shared/info/1957538407) : Pour que AnkiCollab fonctionne !
    - 501542723 - [Auto Sync](https://ankiweb.net/shared/info/501542723) : Pour ne pas perdre votre progression.
    - 445658251 - [Lier les Cartes (Anki EDN)](https://ankiweb.net/shared/info/445658251) : Add‑on inhérent au paquet pour naviguer entre les cartes liées (très important).
    - 1052724801 - [BetterSearch](https://ankiweb.net/shared/info/1052724801) : Pour naviguer facilement entre les tags (très important).
    - 1906641654 - [See Previous Card Ratings in Reviewer](https://ankiweb.net/shared/info/1906641654) : Pour connaître la difficulté des cartes.
    - 2040501954 - [Symbols As You Type](https://ankiweb.net/shared/info/2040501954) : Pour éditer facilement les cartes.

[^30-40]: Comme la plupart des items ont autour de 50 cartes, on comprend vite que si l'on veut faire plus d'un item par jour, on ne peut pas tout désuspendre.

[^approximation-rang]: Le paquet, se voulant exhaustif, comprend à la fois des connaissances rentables à bien connaître et d'autres, plus anecdotiques. Vous pouvez exclure les cartes que vous jugez non rentables.
