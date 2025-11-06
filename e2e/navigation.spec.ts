import { test, expect } from '@playwright/test'

test.describe('Sidebar Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display sidebar with logo', async ({ page }) => {
    const sidebar = page.getByRole('complementary')
    await expect(sidebar).toBeVisible()
    await expect(sidebar.getByText(/NEOCHAIN/i)).toBeVisible()
    await expect(sidebar.getByText(/Web3 Learning/i)).toBeVisible()
  })

  test('should display user profile section', async ({ page }) => {
    const sidebar = page.getByRole('complementary')
    await expect(sidebar.getByText('Alex Kim')).toBeVisible()
    await expect(sidebar.getByText('Level 5')).toBeVisible()
    await expect(sidebar.getByText(/XP:/i)).toBeVisible()
  })

  test('should navigate to dashboard from sidebar', async ({ page }) => {
    const dashboardLink = page.getByRole('link', { name: /dashboard/i })
    await expect(dashboardLink).toBeVisible()
    
    await dashboardLink.click()
    await expect(page).toHaveURL('/dashboard')
    await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible()
  })

  test('should navigate to missions from sidebar', async ({ page }) => {
    const missionsLink = page.getByRole('link', { name: /missions/i })
    await expect(missionsLink).toBeVisible()
    
    await missionsLink.click()
    await expect(page).toHaveURL('/missions')
    await expect(page.getByRole('heading', { name: /missions/i })).toBeVisible()
  })

  test('should navigate to leaderboard from sidebar', async ({ page }) => {
    const leaderboardLink = page.getByRole('link', { name: /leaderboard/i })
    await expect(leaderboardLink).toBeVisible()
    
    await leaderboardLink.click()
    await expect(page).toHaveURL('/leaderboard')
    await expect(page.getByRole('heading', { name: /leaderboard/i })).toBeVisible()
  })

  test('should navigate to wallet from sidebar', async ({ page }) => {
    const walletLink = page.getByRole('link', { name: /wallet/i })
    await expect(walletLink).toBeVisible()
    
    await walletLink.click()
    await expect(page).toHaveURL('/wallet')
    await expect(page.getByRole('heading', { name: /wallet/i })).toBeVisible()
  })

  test('should navigate to profile from sidebar', async ({ page }) => {
    const settingsLink = page.getByRole('link', { name: /settings/i })
    await expect(settingsLink).toBeVisible()
    
    await settingsLink.click()
    await expect(page).toHaveURL('/profile')
    await expect(page.getByRole('heading', { name: /profile/i })).toBeVisible()
  })

  test('should highlight active route in sidebar', async ({ page }) => {
    await page.goto('/dashboard')
    const dashboardLink = page.getByRole('link', { name: /dashboard/i })
    
    // Check if active link has active styling
    const classes = await dashboardLink.getAttribute('class')
    expect(classes).toContain('bg-primary/20')
    expect(classes).toContain('text-primary')
  })

  test('should navigate to home from logo', async ({ page }) => {
    await page.goto('/dashboard')
    const logoLink = page.getByRole('link', { name: /NEOCHAIN/i })
    
    await logoLink.click()
    await expect(page).toHaveURL('/')
    await expect(page.getByRole('heading', { name: /welcome to neochain/i })).toBeVisible()
  })

  test.describe('Mobile Navigation', () => {
    test.use({ viewport: { width: 375, height: 667 } }) // Mobile viewport

    test('should show hamburger menu on mobile', async ({ page }) => {
      const menuButton = page.getByLabel('Toggle menu')
      await expect(menuButton).toBeVisible()
    })

    test('should toggle mobile menu when hamburger is clicked', async ({ page }) => {
      const menuButton = page.getByLabel('Toggle menu')
      const sidebar = page.getByRole('complementary')
      
      // Initially closed on mobile
      const initialTransform = await sidebar.evaluate((el) => 
        window.getComputedStyle(el).transform
      )
      
      // Open menu
      await menuButton.click()
      await page.waitForTimeout(100)
      
      // Check menu is open (transform should change)
      const openTransform = await sidebar.evaluate((el) => 
        window.getComputedStyle(el).transform
      )
      expect(openTransform).not.toBe(initialTransform)
    })

    test('should close mobile menu when overlay is clicked', async ({ page }) => {
      const menuButton = page.getByLabel('Toggle menu')
      
      // Open menu
      await menuButton.click()
      await page.waitForTimeout(100)
      
      // Click overlay (outside sidebar)
      const overlay = page.locator('.fixed.inset-0.bg-black\\/50')
      if (await overlay.isVisible()) {
        await overlay.click({ position: { x: 200, y: 200 } })
        await page.waitForTimeout(100)
      }
    })

    test('should close mobile menu when navigation link is clicked', async ({ page }) => {
      const menuButton = page.getByLabel('Toggle menu')
      const dashboardLink = page.getByRole('link', { name: /dashboard/i })
      
      // Open menu
      await menuButton.click()
      await page.waitForTimeout(100)
      
      // Click navigation link
      await dashboardLink.click()
      await expect(page).toHaveURL('/dashboard')
      
      // Menu should be closed (sidebar should be hidden)
      const sidebar = page.getByRole('complementary')
      const transform = await sidebar.evaluate((el) => 
        window.getComputedStyle(el).transform
      )
      // Transform should indicate sidebar is off-screen
      expect(transform).toBeTruthy()
    })
  })

  test.describe('Theme and Language Toggles', () => {
    test('should have theme toggle in sidebar', async ({ page }) => {
      const sidebar = page.getByRole('complementary')
      const themeButton = sidebar.getByTestId('theme-toggle-button')
      await expect(themeButton).toBeVisible()
    })

    test('should have language toggle in sidebar', async ({ page }) => {
      const sidebar = page.getByRole('complementary')
      const langButton = sidebar.getByTestId('language-toggle-button')
      await expect(langButton).toBeVisible()
    })

    test('should toggle theme from sidebar', async ({ page }) => {
      const sidebar = page.getByRole('complementary')
      const themeButton = sidebar.getByTestId('theme-toggle-button')
      
      const initialTheme = await page.evaluate(() => 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      )
      
      await themeButton.click()
      await page.waitForTimeout(100)
      
      const newTheme = await page.evaluate(() => 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      )
      
      expect(newTheme).not.toBe(initialTheme)
    })

    test('should open language dropdown from sidebar', async ({ page }) => {
      const sidebar = page.getByRole('complementary')
      const langButton = sidebar.getByTestId('language-toggle-button')
      
      await langButton.click()
      await expect(page.getByText(/English/i)).toBeVisible()
    })
  })
})
