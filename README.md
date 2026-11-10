# 📚 Anki EDN - Documentation & Guide de Transmission

> **Paquet Anki collaboratif pour les EDN**, basé sur le travail de [Léo Picat](https://picat.fr).  
> Hébergé par la **Corporation des Carabins de Sorbonne Université (C2SU)**.

---

## 🌐 Liens Importants

| Ressource | Lien |
|-----------|------|
| 📖 **Site de documentation** | [c2su.github.io/Anki_EDN](https://c2su.github.io/Anki_EDN/) |
| 💬 **Discord communautaire** | [discord.gg/2A7zHAEBYt](https://discord.gg/2A7zHAEBYt) |

---

## 🏗️ Structure du Projet

```
Anki_EDN/
├── book.toml          # Configuration mdBook
├── src/               # Contenu Markdown du site
│   ├── SUMMARY.md     # Table des matières / navigation
│   ├── Introduction.md
│   ├── installation.md
│   ├── symboles.md    # Abréviations (!!)
│   ├── organisation.md
│   ├── modifier.md    # Comment proposer des modifications
│   ├── regles_du_deck.md
│   ├── mises_a_jour.md
│   ├── Bonus.md
│   ├── FAQ.md
│   ├── inconvenients.md
│   ├── remerciement.md
│   ├── to_do.md       # Tâches en attente
│   └── images/        # Assets visuels
├── theme/             # CSS/JS personnalisé
│   ├── custom.css
│   ├── custom.js
│   └── favicon.*
├── book/              # Build de production
└── serve/             # Build de développement
```

---

## 🔧 Développement Local

### Prérequis
- [mdBook](https://rust-lang.github.io/mdBook/) (générateur de documentation Rust)
- T'es vraiment obligé de passer par mdbook pour modifier le site. Tu va voir c'est simple + l'IA connait bien.

### Installation de mdBook
- Installe Cargo (je te conseille de bosser avec Antigravity et de tout faire par son terminal)
```bash
# Via Cargo (Rust)
cargo install mdbook

# Ou via binaire pré-compilé (voir releases GitHub mdBook)
```

### Commandes

| Action | Commande |
|--------|----------|
| 🔄 **Build** | `mdbook build` |
| 👁️ **Serveur local** | `mdbook serve` (puis ouvrir `http://localhost:3000`) |
| 🧹 **Nettoyer** | `mdbook clean` |

---

## 🚀 Déploiement

Le site est déployé sur le FTP.
Tu colle simplement ton dosser Anki EDN dans le tools.

---

## 📋 Pour le Successeur

### Ce qu'il faut savoir

1. **Le deck Anki** utilise **AnkiCollab** pour la synchronisation collaborative
2. **La documentation** (ce repo) utilise **mdBook** + GitHub Pages
3. **La communauté** se coordonne principalement sur **Discord**

### Contacts clés

- **Léo Picat** : Créateur original du deck ([picat.fr](https://picat.fr))
- **AnkiCollab** : Plugin de synchronisation ([GitHub](https://github.com/CravingCrates/AnkiCollab-Plugin))
- **Angelo** : Créateur du projet ([Discord](https://discord.gg/2A7zHAEBYt)

### Fichiers importants à maintenir

| Fichier | Rôle |
|---------|------|
| `src/symboles.md` | Liste des abréviations |
| `src/mises_a_jour.md` | Changelog des items |

---

## 📜 Licence

Ce projet est sous licence — voir le fichier [LICENSE](LICENSE).

---

*Dernière mise à jour : Novembre 2026*  
*Créé par Angelo Marciszewer (Ficello)*
