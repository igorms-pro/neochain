# MVP Implementation Plan - Step by Step

This document outlines the step-by-step plan to port MVP features from Next.js to Vite/React.

## 📋 Implementation Order

### **Phase 1: Foundation & Routing** (Week 1)

#### **STEP 1.1: Set up React Router**
- [ ] Install `react-router-dom` (already installed)
- [ ] Create routing structure:
  - `/` - Landing/Home
  - `/dashboard` - Main dashboard
  - `/missions` - Missions list
  - `/missions/:id` - Mission detail
  - `/leaderboard` - Leaderboard
  - `/profile` - User profile
  - `/wallet` - Wallet management
- [ ] Create `src/routes/` directory structure
- [ ] Set up route guards (if needed)
- [ ] Add navigation context/hook

**Acceptance Criteria:**
- All routes are accessible
- Navigation works between pages
- 404 page for unknown routes

---

#### **STEP 1.2: Port UI Components**
- [ ] Port essential UI components from `mvp/components/ui/`:
  - `button.tsx` ✅ (already exists)
  - `card.tsx` ✅ (already exists)
  - `progress.tsx` ✅ (already exists)
  - `badge.tsx`
  - `tabs.tsx`
  - `avatar.tsx` ✅ (already exists)
  - `alert.tsx`
  - `separator.tsx`
  - `skeleton.tsx`
- [ ] Adapt components for Vite (remove Next.js specific code)
- [ ] Ensure all components work with theme toggle
- [ ] Add `data-testid` attributes for testing

**Acceptance Criteria:**
- All UI components render correctly
- Components support both light/dark themes
- Components are responsive
- Unit tests pass

---

#### **STEP 1.3: Create Layout & Sidebar**
- [ ] Port `Sidebar` component from MVP
- [ ] Adapt for React Router (use `useLocation` instead of `usePathname`)
- [ ] Create main `Layout` component
- [ ] Add mobile responsive sidebar (hamburger menu)
- [ ] Integrate theme/language toggles in layout

**Acceptance Criteria:**
- Sidebar shows correct active route
- Mobile menu works
- Layout is responsive
- Navigation links work

---

### **Phase 2: Gamification Core** (Week 1-2)

#### **STEP 2.1: Port Gamification Library**
- [ ] Copy `lib/gamification.ts` from MVP
- [ ] Adapt types/interfaces for Vite project
- [ ] Ensure all functions work:
  - `calculateLevel()`
  - `getRank()`
  - `getUnlockedBadges()`
  - `getProgressionPercentage()`
- [ ] Add unit tests for gamification functions

**Acceptance Criteria:**
- All gamification functions work correctly
- Unit tests pass
- Types are properly defined

---

#### **STEP 2.2: Create Gamification Components**
- [ ] Port `ProgressionCard` component
- [ ] Port `BadgesDisplay` component
- [ ] Create `XPDisplay` component (if needed)
- [ ] Create `LevelProgress` component
- [ ] Ensure components use gamification library

**Acceptance Criteria:**
- Components display correct data
- Progress bars animate
- Badges show correct rarity colors
- Components are responsive

---

#### **STEP 2.3: Create User Context/State**
- [ ] Create `UserContext` with React Context
- [ ] Define user state interface:
  ```typescript
  {
    userId: string
    level: number
    totalXP: number
    currentLevelXP: number
    streak: number
    badges: BadgeId[]
    completedMissions: number
    rank: Rank
  }
  ```
- [ ] Add mock user data for development
- [ ] Create hooks: `useUser()`, `useUserStats()`

**Acceptance Criteria:**
- User context provides data to all components
- Mock data displays correctly
- Context updates trigger re-renders

---

### **Phase 3: Dashboard** (Week 2)

#### **STEP 3.1: Create Dashboard Page**
- [ ] Create `/dashboard` route
- [ ] Port dashboard layout from MVP:
  - Header with welcome message
  - Stats grid (Total XP, Level, Streak, Badges)
  - Charts section (XP Progress, Streak Trend)
  - Current missions preview
- [ ] Integrate Recharts for data visualization
- [ ] Use mock data initially

**Acceptance Criteria:**
- Dashboard displays all stats
- Charts render correctly
- Responsive layout works
- Data updates when user context changes

---

#### **STEP 3.2: Add Charts**
- [ ] Install/configure Recharts (already installed)
- [ ] Create `WeeklyXPChart` component (bar chart)
- [ ] Create `StreakTrendChart` component (line chart)
- [ ] Style charts to match design system
- [ ] Add mock data for charts

**Acceptance Criteria:**
- Charts display correctly
- Charts are responsive
- Charts match design system colors

---

### **Phase 4: Missions System** (Week 2-3)

#### **STEP 4.1: Create Mission Data Model**
- [ ] Define `Mission` interface:
  ```typescript
  {
    id: number
    title: string
    description: string
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
    xp: number
    progress: number
    status: 'locked' | 'in-progress' | 'completed'
    tasks: number
    sections: MissionSection[]
  }
  ```
- [ ] Create mock missions data
- [ ] Create mission store/context (or use state)

**Acceptance Criteria:**
- Mission data structure is defined
- Mock missions are available
- Data can be queried by ID

---

#### **STEP 4.2: Create Mission Card Component**
- [ ] Port `MissionCard` from MVP
- [ ] Adapt for React Router (use `Link` from react-router-dom)
- [ ] Add progress visualization
- [ ] Show status indicators (locked/in-progress/completed)
- [ ] Add difficulty badges

**Acceptance Criteria:**
- Mission cards display correctly
- Status indicators work
- Progress bars show correct values
- Cards are clickable

---

#### **STEP 4.3: Create Missions List Page**
- [ ] Create `/missions` route
- [ ] Add filter tabs (All, In Progress, Completed)
- [ ] Display mission cards in grid/list
- [ ] Add search/filter functionality (optional)
- [ ] Integrate with mission data

**Acceptance Criteria:**
- Missions list displays all missions
- Filters work correctly
- Cards link to mission detail pages

---

#### **STEP 4.4: Create Mission Detail Page**
- [ ] Create `/missions/:id` route
- [ ] Port mission detail layout:
  - Mission header with stats
  - Sections sidebar
  - Content area
  - Progress indicator
- [ ] Implement section types:
  - Reading sections
  - Quiz sections (with answer selection)
  - Interactive sections (placeholder)
  - Challenge sections (textarea)
- [ ] Add section completion logic
- [ ] Add navigation between sections

**Acceptance Criteria:**
- Mission detail page loads correctly
- Sections display properly
- Quiz answers can be selected
- Section completion updates progress
- Navigation between sections works

---

### **Phase 5: Leaderboard & Profile** (Week 3)

#### **STEP 5.1: Create Leaderboard Page**
- [ ] Create `/leaderboard` route
- [ ] Port leaderboard layout:
  - Tabs (Overall, Streak, XP)
  - User ranking list
  - User's rank card
- [ ] Add mock leaderboard data
- [ ] Style top 3 positions (gold, silver, bronze)

**Acceptance Criteria:**
- Leaderboard displays rankings
- Tabs switch correctly
- Top 3 have special styling
- User's rank is highlighted

---

#### **STEP 5.2: Create Profile Page**
- [ ] Create `/profile` route
- [ ] Port profile layout:
  - Profile card (avatar, name, stats)
  - Badges section
  - Achievements section
  - Settings section
- [ ] Add profile editing (optional)
- [ ] Display user stats from context

**Acceptance Criteria:**
- Profile displays user data
- Badges show correctly
- Achievements display
- Settings toggles work

---

### **Phase 6: Wallet Integration** (Week 3-4)

#### **STEP 6.1: Set up Web3 Context**
- [ ] Create `Web3Context` with React Context
- [ ] Define wallet state interface
- [ ] Add mock wallet connection (for now)
- [ ] Create hooks: `useWeb3()`, `useWallet()`

**Acceptance Criteria:**
- Web3 context provides wallet state
- Mock connection works
- Context updates correctly

---

#### **STEP 6.2: Create Wallet Page**
- [ ] Create `/wallet` route
- [ ] Port wallet page layout:
  - Connection card
  - Balance display
  - Network selector
  - Transaction history
- [ ] Use mock data initially
- [ ] Add disconnect functionality

**Acceptance Criteria:**
- Wallet page displays correctly
- Connection/disconnection works
- Network switching works (mock)
- Transaction history displays

---

### **Phase 7: Data Persistence** (Week 4)

#### **STEP 7.1: Set up Local Storage**
- [ ] Create `src/lib/storage.ts` utility
- [ ] Add functions:
  - `saveUserData()`
  - `loadUserData()`
  - `saveMissionProgress()`
  - `loadMissionProgress()`
- [ ] Integrate with UserContext
- [ ] Add persistence on state changes

**Acceptance Criteria:**
- User data persists on refresh
- Mission progress is saved
- Data loads on app start

---

#### **STEP 7.2: Add Real XP Earning**
- [ ] Update mission completion to award XP
- [ ] Update user context when XP is earned
- [ ] Trigger level up logic
- [ ] Add badge unlock checks
- [ ] Persist XP changes

**Acceptance Criteria:**
- Completing missions awards XP
- Level up happens automatically
- Badges unlock when conditions met
- All changes persist

---

### **Phase 8: Polish & Testing** (Week 4-5)

#### **STEP 8.1: Add Loading States**
- [ ] Add skeleton loaders for dashboard
- [ ] Add loading states for missions
- [ ] Add loading states for wallet
- [ ] Use Suspense where appropriate

**Acceptance Criteria:**
- Loading states show during data fetch
- Skeleton loaders match content layout
- No flash of empty content

---

#### **STEP 8.2: Add Error Handling**
- [ ] Create ErrorBoundary component
- [ ] Add error states for failed data loads
- [ ] Add user-friendly error messages
- [ ] Add retry mechanisms

**Acceptance Criteria:**
- Errors are caught gracefully
- Error messages are user-friendly
- Users can retry failed operations

---

#### **STEP 8.3: Add Animations**
- [ ] Add page transition animations
- [ ] Add component entrance animations
- [ ] Add progress bar animations
- [ ] Add badge unlock animations

**Acceptance Criteria:**
- Animations are smooth
- Animations don't block interactions
- Animations match design system

---

#### **STEP 8.4: Write Tests**
- [ ] Add unit tests for gamification functions
- [ ] Add unit tests for components
- [ ] Add E2E tests for critical flows:
  - Dashboard loads
  - Mission completion
  - XP earning
  - Badge unlocking
- [ ] Ensure all tests pass

**Acceptance Criteria:**
- All unit tests pass
- All E2E tests pass
- Test coverage > 80%

---

## 🎯 Quick Start Checklist

For immediate MVP porting, follow this priority:

1. ✅ **Routing** - Set up React Router
2. ✅ **UI Components** - Port essential components
3. ✅ **Layout** - Create sidebar and layout
4. ✅ **Gamification** - Port gamification library
5. ✅ **Dashboard** - Create dashboard page
6. ✅ **Missions** - Create missions list and detail
7. ✅ **Leaderboard** - Create leaderboard page
8. ✅ **Profile** - Create profile page
9. ✅ **Wallet** - Create wallet page (mock)
10. ✅ **Persistence** - Add localStorage
11. ✅ **XP System** - Connect real XP earning
12. ✅ **Polish** - Add loading, errors, animations

## 📝 Notes

- **Start with mock data** - Don't worry about real backend/Web3 initially
- **One feature at a time** - Complete each step before moving to next
- **Test as you go** - Write tests alongside features
- **Keep it simple** - MVP first, polish later
- **Use existing MVP code** - Port and adapt, don't rewrite from scratch

## 🔄 Dependencies

```
Routing → Layout → Components
    ↓
Gamification Library
    ↓
Dashboard → Missions → Leaderboard → Profile
    ↓
Wallet (mock) → Persistence → Real XP → Polish
```

## 🚀 Estimated Timeline

- **Week 1**: Foundation, Routing, UI Components, Gamification Core
- **Week 2**: Dashboard, Missions System
- **Week 3**: Leaderboard, Profile, Wallet (mock)
- **Week 4**: Persistence, Real XP, Polish
- **Week 5**: Testing, Bug fixes, Final polish

**Total: ~5 weeks for full MVP port**

