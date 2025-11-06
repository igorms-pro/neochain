import { test, expect } from '@playwright/test'

test.describe('NeoChain App', () => {
  test('should display app title', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('app-title')).toBeVisible()
    await expect(page.getByTestId('app-title')).toHaveText('NeoChain')
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
})

