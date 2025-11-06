# NeoChain Roadmap & Issues

## 🎯 Phase 1: Foundation (Current)

### ✅ Completed
- [x] Project setup (Vite + React + TypeScript)
- [x] Design system (light + dark themes)
- [x] i18n implementation (10 languages)
- [x] Theme toggle (dark/light/system)
- [x] Language toggle
- [x] Unit tests (Vitest)
- [x] E2E tests (Playwright - Desktop + Mobile)
- [x] CI/CD pipeline (GitHub Actions)
- [x] Code quality tools (ESLint, Prettier, Husky)

### 🚧 Next Steps - MVP Porting (Priority Order)

#### **STEP 1: Routing & Layout Foundation**
- [ ] **ROUTE-001**: Set up React Router
  - Install/configure react-router-dom
  - Create route structure: `/`, `/dashboard`, `/missions`, `/missions/:id`, `/leaderboard`, `/profile`, `/wallet`
  - Add 404 page
- [ ] **ROUTE-002**: Port Sidebar component
  - Adapt from MVP (use `useLocation` instead of `usePathname`)
  - Add mobile responsive menu
  - Integrate theme/language toggles
- [ ] **ROUTE-003**: Create main Layout component
  - Wrap routes with layout
  - Include sidebar
  - Add header/footer if needed

#### **STEP 2: UI Components Port**
- [ ] **UI-001**: Port essential UI components
  - `badge.tsx`, `tabs.tsx`, `alert.tsx`, `separator.tsx`, `skeleton.tsx`
  - Adapt for Vite (remove Next.js specific code)
  - Ensure theme support
  - Add `data-testid` attributes

#### **STEP 3: Gamification Core**
- [ ] **GAME-001**: Port gamification library
  - Copy `lib/gamification.ts` from MVP
  - Adapt types/interfaces
  - Add unit tests
- [ ] **GAME-002**: Create gamification components
  - `ProgressionCard`, `BadgesDisplay`
  - Ensure components use gamification library
- [ ] **GAME-003**: Create User Context
  - React Context for user state
  - Mock user data for development
  - Hooks: `useUser()`, `useUserStats()`

#### **STEP 4: Dashboard**
- [ ] **DASH-001**: Create Dashboard page
  - Port layout from MVP
  - Stats grid (XP, Level, Streak, Badges)
  - Current missions preview
- [ ] **DASH-002**: Add charts
  - Weekly XP chart (bar chart)
  - Streak trend chart (line chart)
  - Style with Recharts

#### **STEP 5: Missions System**
- [ ] **MISS-001**: Create mission data model
  - Define `Mission` interface
  - Create mock missions data
- [ ] **MISS-002**: Port MissionCard component
  - Adapt for React Router
  - Add progress visualization
- [ ] **MISS-003**: Create Missions list page
  - Filter tabs (All, In Progress, Completed)
  - Display mission cards
- [ ] **MISS-004**: Create Mission detail page
  - Sections sidebar
  - Content area (reading, quiz, interactive, challenge)
  - Section completion logic

#### **STEP 6: Leaderboard & Profile**
- [ ] **LEAD-001**: Create Leaderboard page
  - Tabs (Overall, Streak, XP)
  - User ranking list
  - Top 3 styling
- [ ] **PROF-001**: Create Profile page
  - Profile card
  - Badges section
  - Achievements section
  - Settings section

#### **STEP 7: Wallet (Mock)**
- [ ] **WALL-001**: Set up Web3 Context
  - React Context for wallet state
  - Mock wallet connection
- [ ] **WALL-002**: Create Wallet page
  - Connection card
  - Balance display
  - Network selector
  - Transaction history (mock)

#### **STEP 8: Data Persistence**
- [ ] **DATA-001**: Set up LocalStorage
  - Save/load user data
  - Save/load mission progress
  - Integrate with UserContext
- [ ] **DATA-002**: Real XP earning
  - Award XP on mission completion
  - Level up logic
  - Badge unlock checks
  - Persist changes

## 🎯 Phase 2: Core Features

### Authentication & User Management
- [ ] **AUTH-001**: Implement Web3Auth integration
  - Wallet connection (testnet)
  - Social login options
  - Session management
- [ ] **AUTH-002**: User profile system
  - Profile creation
  - Avatar upload
  - Settings management

### Database & Persistence
- [ ] **DB-001**: Set up Supabase/Firebase
  - User table
  - Progress tracking
  - Badge storage
- [ ] **DB-002**: Implement data persistence
  - Save user progress
  - XP tracking
  - Mission completion status
  - Streak tracking

### Web3 Integration
- [ ] **WEB3-001**: Real wallet connection
  - Replace mock wallet with ethers.js/Wagmi
  - Support multiple wallets (MetaMask, WalletConnect, etc.)
  - Testnet configuration
- [ ] **WEB3-002**: Transaction system
  - Real transaction signing
  - Transaction history
  - Gas estimation (testnet)
- [ ] **WEB3-003**: Multi-chain support
  - Ethereum testnet
  - Polygon testnet
  - Base testnet

## 🎯 Phase 3: Gamification & Missions

### Mission System
- [ ] **MISSION-001**: Mission structure
  - Mission data model
  - Progress tracking
  - Completion logic
- [ ] **MISSION-002**: Chapter 0 - Le Réveil
  - Onboarding flow
  - Introduction to Web3
  - Mini quiz
  - Storytelling elements
- [ ] **MISSION-003**: Chapter 1 - Ton premier Wallet
  - Wallet creation tutorial
  - Seed phrase education
  - Security best practices
- [ ] **MISSION-004**: Chapter 2 - Le marché des Ombres
  - Uniswap testnet integration
  - Swap tutorial
  - Token education
- [ ] **MISSION-005**: Chapter 3 - La forge des artistes
  - NFT minting on testnet
  - IPFS integration
  - NFT gallery
- [ ] **MISSION-006**: Chapter 4 - Le Conseil des Anciens
  - DAO voting interface
  - Governance education
  - Voting on testnet
- [ ] **MISSION-007**: Chapter 5 - Le pont brisé
  - Bridge interface
  - Cross-chain tutorial
  - Bridge testnet transactions
- [ ] **MISSION-008**: Chapter 6 - Le temple des oracles
  - Oracle integration (Chainlink)
  - Off-chain data tutorial
  - Oracle mini-game
- [ ] **MISSION-009**: Chapter 7 - Le labyrinthe des arnaques
  - Security education
  - Scam detection game
  - Best practices quiz
- [ ] **MISSION-010**: Chapter 8 - Réseau social décentralisé
  - Lens Protocol integration
  - ENS domain setup
  - Decentralized identity
- [ ] **MISSION-011**: Chapter 9 - Ton premier projet Web3
  - Final synthesis
  - Completion certificate
  - NFT souvenir mint

### Gamification System
- [ ] **GAME-001**: XP system implementation
  - Real XP earning from missions
  - XP calculation logic
  - Level progression
- [ ] **GAME-002**: Badge system
  - Badge unlock logic
  - Badge display
  - Badge notifications
- [ ] **GAME-003**: Streak system
  - Daily login tracking
  - Streak visualization
  - Streak rewards
- [ ] **GAME-004**: Leaderboard
  - Global rankings
  - Friends rankings
  - Category rankings (XP, badges, streaks)

## 🎯 Phase 4: UX & Polish

### Onboarding
- [ ] **UX-001**: Welcome flow
  - First-time user experience
  - Tutorial overlay
  - Feature discovery
- [ ] **UX-002**: Progressive disclosure
  - Step-by-step guidance
  - Contextual help
  - Tooltips and hints

### Notifications
- [ ] **NOTIF-001**: Achievement notifications
  - Badge unlock toasts
  - Level up celebrations
  - Mission completion alerts
- [ ] **NOTIF-002**: Progress reminders
  - Daily login reminders
  - Mission progress updates
  - Streak warnings

### Animations & Micro-interactions
- [ ] **ANIM-001**: Page transitions
  - Smooth route transitions
  - Loading states
  - Skeleton screens
- [ ] **ANIM-002**: Component animations
  - Button hover effects
  - Card interactions
  - Badge unlock animations
- [ ] **ANIM-003**: Progress animations
  - XP bar animations
  - Level up effects
  - Badge reveal animations

### Error Handling
- [ ] **ERROR-001**: Error boundaries
  - React error boundaries
  - Graceful error states
  - Error reporting
- [ ] **ERROR-002**: User-friendly error messages
  - Transaction errors
  - Network errors
  - Validation errors

## 🎯 Phase 5: Mobile & Responsive

### Mobile Optimization
- [ ] **MOBILE-001**: Mobile-first design
  - Touch-friendly interactions
  - Mobile navigation
  - Responsive layouts
- [ ] **MOBILE-002**: Mobile-specific features
  - Push notifications
  - Mobile wallet integration
  - Offline support

### Performance
- [ ] **PERF-001**: Optimization
  - Code splitting
  - Lazy loading
  - Image optimization
- [ ] **PERF-002**: Analytics
  - User analytics
  - Performance monitoring
  - Error tracking

## 🎯 Phase 6: Advanced Features

### Social Features
- [ ] **SOCIAL-001**: Social sharing
  - Share achievements
  - Share progress
  - Referral system
- [ ] **SOCIAL-002**: Community features
  - User profiles
  - Friend system
  - Group challenges

### Advanced Gamification
- [ ] **GAME-005**: Quests system
  - Daily quests
  - Weekly challenges
  - Special events
- [ ] **GAME-006**: Rewards system
  - NFT rewards
  - Token rewards (testnet)
  - Achievement certificates

### Content Management
- [ ] **CMS-001**: Admin dashboard
  - Mission management
  - Content updates
  - User management
- [ ] **CMS-002**: A/B testing
  - Mission variations
  - UX testing
  - Analytics integration

## 🐛 Known Issues

### High Priority
- [ ] **BUG-001**: Progress resets on page refresh (no persistence)
- [ ] **BUG-002**: Wallet connection is mocked (needs real integration)
- [ ] **BUG-003**: XP doesn't actually get earned from missions

### Medium Priority
- [ ] **BUG-004**: Missing loading states
- [ ] **BUG-005**: No error handling for failed transactions
- [ ] **BUG-006**: Mobile responsive issues on some screens

### Low Priority
- [ ] **BUG-007**: Animation polish needed
- [ ] **BUG-008**: Some translations incomplete
- [ ] **BUG-009**: Accessibility improvements needed

## 💭 Implementation Thoughts & Strategy

### My Recommendation for MVP Porting:

**Start Simple, Build Incrementally:**
1. **Routing first** - Without navigation, nothing works. Get React Router set up with basic routes.
2. **UI Components next** - These are reusable building blocks. Port the essential ones (badge, tabs, alert, etc.)
3. **Gamification core** - This is the heart of the app. Get the library and components working with mock data.
4. **Dashboard** - Shows everything together. Good for testing the full flow.
5. **Missions** - The main feature. Users spend most time here.
6. **Leaderboard/Profile** - Nice to have, but less critical.
7. **Wallet** - Can stay mocked for now. Real Web3 integration comes later.
8. **Persistence** - Add localStorage once everything works. Don't over-engineer early.

### Key Principles:
- **Use mock data first** - Don't worry about backend/Web3 initially. Get the UI working.
- **Port, don't rewrite** - The MVP code is good. Adapt it for Vite/React Router.
- **One feature at a time** - Complete each step before moving to next.
- **Test as you go** - Write tests alongside features, not after.
- **Keep it simple** - MVP first, polish later.

### Estimated Timeline:
- **Week 1**: Routing, UI Components, Gamification Core
- **Week 2**: Dashboard, Missions System
- **Week 3**: Leaderboard, Profile, Wallet (mock)
- **Week 4**: Persistence, Real XP, Polish

**Total: ~4 weeks for full MVP port**

### Dependencies Flow:
```
Routing → Layout → Components
    ↓
Gamification Library
    ↓
Dashboard → Missions → Leaderboard → Profile
    ↓
Wallet (mock) → Persistence → Real XP → Polish
```

## 📝 Notes

- All Web3 interactions should be on **testnet only** for safety
- Focus on **educational value** over complexity
- Maintain **zero-risk** environment for users
- Prioritize **accessibility** and **inclusivity**
- **Start with mock data** - Real backend/Web3 comes in Phase 2

