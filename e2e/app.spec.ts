import { test, expect } from '@playwright/test'

test.describe('NeoChain App', () => {
  test('should display home page', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /welcome to neochain/i })).toBeVisible()
  })

  test('should have theme toggle button', async ({ page }) => {
    await page.goto('/')
    const themeButton = page.getByLabel(/toggle theme/i)
    await expect(themeButton).toBeVisible()
  })

  test('should have language toggle button', async ({ page }) => {
    await page.goto('/')
    const langButton = page.getByLabel(/change language/i)
    await expect(langButton).toBeVisible()
  })

  test('should toggle theme when theme button is clicked', async ({ page }) => {
    await page.goto('/')
    const themeButton = page.getByLabel(/toggle theme/i)
    
    // Get initial theme
    const initialTheme = await page.evaluate(() => 
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    )
    
    // Click theme toggle
    await themeButton.click()
    
    // Wait for theme change
    await page.waitForTimeout(100)
    
    // Check theme changed
    const newTheme = await page.evaluate(() => 
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    )
    
    expect(newTheme).not.toBe(initialTheme)
  })

  test('should open language dropdown when clicked', async ({ page }) => {
    await page.goto('/')
    const langButton = page.getByLabel(/change language/i)
    
    await langButton.click()
    
    // Check if language dropdown is visible
    await expect(page.getByText(/English/i)).toBeVisible()
    await expect(page.getByText(/Français/i)).toBeVisible()
  })

  test.describe('Route Navigation', () => {
    test('should navigate to dashboard route', async ({ page }) => {
      await page.goto('/dashboard')
      await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible()
      await expect(page).toHaveURL(/\/dashboard$/)
    })

    test('should navigate to missions route', async ({ page }) => {
      await page.goto('/missions')
      await expect(page.getByRole('heading', { name: /missions/i })).toBeVisible()
      await expect(page).toHaveURL(/\/missions$/)
    })

    test('should navigate to mission detail route', async ({ page }) => {
      await page.goto('/missions/123')
      await expect(page.getByRole('heading', { name: /mission details/i })).toBeVisible()
      await expect(page.getByText(/mission id: 123/i)).toBeVisible()
      await expect(page).toHaveURL(/\/missions\/123$/)
    })

    test('should navigate to leaderboard route', async ({ page }) => {
      await page.goto('/leaderboard')
      await expect(page.getByRole('heading', { name: /leaderboard/i })).toBeVisible()
      await expect(page).toHaveURL(/\/leaderboard$/)
    })

    test('should navigate to profile route', async ({ page }) => {
      await page.goto('/profile')
      await expect(page.getByRole('heading', { name: /profile/i })).toBeVisible()
      await expect(page).toHaveURL(/\/profile$/)
    })

    test('should navigate to wallet route', async ({ page }) => {
      await page.goto('/wallet')
      await expect(page.getByRole('heading', { name: /wallet/i })).toBeVisible()
      await expect(page).toHaveURL(/\/wallet$/)
    })

    test('should show 404 page for unknown routes', async ({ page }) => {
      await page.goto('/unknown-route')
      await expect(page.getByRole('heading', { name: /404/i })).toBeVisible()
      await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible()
      await expect(page.getByRole('link', { name: /go home/i })).toBeVisible()
    })

    test('should navigate home from 404 page', async ({ page }) => {
      await page.goto('/unknown-route')
      await page.getByRole('link', { name: /go home/i }).click()
      await expect(page).toHaveURL('/')
      await expect(page.getByRole('heading', { name: /welcome to neochain/i })).toBeVisible()
    })

    test('should handle nested routes correctly', async ({ page }) => {
      await page.goto('/missions/abc-123')
      await expect(page.getByText(/mission id: abc-123/i)).toBeVisible()
      await expect(page).toHaveURL(/\/missions\/abc-123$/)
    })

    test('should maintain layout across route changes', async ({ page }) => {
      await page.goto('/')
      const sidebar = page.getByRole('complementary')
      await expect(sidebar).toBeVisible()
      
      await page.goto('/dashboard')
      await expect(sidebar).toBeVisible()
      await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible()
    })
  })
})

