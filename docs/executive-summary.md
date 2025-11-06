# NeoChain — Executive Summary

**Le Web3 comme vous ne l'avez jamais vécu**

## Vision

NeoChain est une application immersive et pédagogique qui permet à tout le monde — sans compétence technique — de découvrir et comprendre les fondamentaux du Web3 en jouant. Pensée comme une aventure interactive scénarisée, NeoChain propose un parcours où l'utilisateur apprend en manipulant de vrais outils Web3 (sur testnet), au sein d'un univers narratif captivant, rassurant et sans aucun risque.

## Objectif

Rendre l'apprentissage du Web3 :
- **Accessible à tous** (non-développeurs, professionnels, étudiants, adultes curieux)
- **Ludique et immersif** (style jeu narratif, progression à la Duolingo ou RPG)
- **Concret et interactif** (actions réelles sur testnets : swap, mint, vote, etc.)
- **Pédagogique et mémorable**

## Golden Circle

### Why
Parce que l'univers du Web3 est passionnant mais souvent effrayant, technique et excluant. Comprendre ce monde ne devrait pas être réservé à une élite.

### How
En créant une aventure interactive qui simule toutes les actions Web3 réelles, sans jargon ni risque, à travers une narration guidée et gamifiée.

### What
Une app mobile/web gratuite avec wallet intégré, missions scénarisées, XP, badges, et interactions sur testnet.

## Cibles

1. **Professionnels non-tech** (infirmiers, commerçants, consultants…)
2. **Étudiants / jeunes adultes** (IUT, écoles de commerce, universités)
3. **RH / formateurs** en reconversion digitale
4. **Organismes éducatifs** / incubateurs / ONG
5. **Grand public curieux** du Web3, mais perdu dans Metamask et les gas fees

## Fonctionnement

Chaque utilisateur :

1. **Crée un wallet fictif ou réel** en testnet (via abstraction ou Web3Auth)
2. **Progresse par chapitres scénarisés**
3. **Accomplit des actions Web3 simulées** : signer, swapper, voter, minter, etc.
4. **Gagne de l'XP**, débloque des badges, comprend les concepts
5. **Accède à un "passeport Web3"** final avec score de progression et NFT souvenir

## Structure Narrative (Chapitres)

| Chapitre | Objectif | Action Web3 simulée |
|----------|----------|---------------------|
| **0. Le Réveil** | Intro au Web3, Bitcoin, Ethereum | Mini quiz + storytelling |
| **1. Ton premier Wallet** | Clé privée, seed phrase | Création de wallet |
| **2. Le marché des Ombres** | Swaps, stablecoins, tokens | Interface Uniswap testnet |
| **3. La forge des artistes** | NFT, IPFS, mint | Mint d'un NFT personnalisé |
| **4. Le Conseil des Anciens** | DAO, votes | Vote testnet + badges |
| **5. Le pont brisé** | Multichain, bridge | Bridge testnet ETH → Polygon |
| **6. Le temple des oracles** | Oracles, prix off-chain | Mini-jeu oracle (Chainlink) |
| **7. Le labyrinthe des arnaques** | Sécurité, scams | Choix/erreur à éviter |
| **8. Réseau social décentralisé** | Identité, Lens, ENS | Création profil testnet |
| **9. Ton premier projet Web3** | Synthèse finale | Badge / NFT de fin de parcours |

## Style Visuel et Ton

- **Design** : Épuré, illustratif, entre jeu mobile et app pédagogique
- **Univers narratif** : Léger, avec personnages-guides, choix et effets visuels
- **Ton** : Neutre, rassurant, jamais condescendant
- **Modes** : Possibilité de mode adulte et mode "formation en groupe"

## Tech Stack (MVP)

### Frontend
- **Framework** : Vite + React + TypeScript
- **Styling** : Tailwind CSS v4
- **UI Components** : Radix UI + shadcn/ui
- **State Management** : React Context + Hooks

### Web3 Integration
- **Wallet** : Web3Auth, abstraction, testnet ETH/Polygon/Base
- **Onchain** : Wagmi, Viem, ethers.js, Alchemy, Lens sandbox
- **NFT** : Testnet via Zora, Mirror ou contrat simple

### Backend
- **Database** : Supabase / Firebase / Node
- **Authentication** : Web3Auth / Supabase Auth

### Gamification
- **XP System** : Calcul basé sur missions complétées
- **Badges** : Système de badges avec rareté (common, uncommon, rare, epic, legendary)
- **Progression** : 10 niveaux avec rangs (Awakened, Initiate, Adept, Master, Legend)

### Testing & Quality
- **Unit Tests** : Vitest
- **E2E Tests** : Playwright (Desktop + Mobile)
- **CI/CD** : GitHub Actions
- **Code Quality** : ESLint, Prettier, Husky

## Monétisation (Long Terme)

| Modèle | Détail |
|--------|--------|
| **Freemium** | App gratuite + contenu avancé payant |
| **Licence B2B** | Offres écoles / entreprises (avec suivi pédagogique) |
| **Certifications** | Attestations de fin de parcours NFT ou off-chain |
| **Referral** | Partenariat wallet / dApp / plateforme réelle |
| **White-label** | Version personnalisée pour formations ou institutions |

## Roadmap

Voir [issues.md](./issues.md) pour le roadmap détaillé.

## État Actuel (MVP)

✅ **Complété:**
- Infrastructure de base (Vite, React, TypeScript)
- Design system (light + dark themes)
- i18n (10 langues)
- Theme toggle
- Language toggle
- Tests (unit + E2E)
- CI/CD

🚧 **En cours:**
- Authentification
- Base de données / Persistance
- Intégration Web3 réelle
- Système de missions
- Gamification complète

📋 **À venir:**
- Onboarding / Réveil
- Récompenses réelles
- Notifications
- Transactions blockchain réelles
- Animations & polish

