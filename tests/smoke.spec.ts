import { test, expect } from '@playwright/test';

// smoke tests: do the main routes load and show the right content?

test('home page loads and typewriter is present', async ({ page }) => {
  await page.goto('/');
  // the typewriter component renders inside a wrapper with the Typewriter class
  const typewriter = page.locator('.Typewriter');
  await expect(typewriter).toBeVisible({ timeout: 10000 });
});

test('about page loads and JOURNEY heading is visible', async ({ page }) => {
  await page.goto('/about');
  const heading = page.getByText('JOURNEY');
  await expect(heading).toBeVisible({ timeout: 10000 });
});

test('projects page loads and Ember-2 card is visible', async ({ page }) => {
  await page.goto('/project');
  const ember = page.getByText('Ember-2', { exact: true });
  await expect(ember).toBeVisible({ timeout: 10000 });
});

test('self-care-8-ball route loads', async ({ page }) => {
  await page.goto('/self-care-8-ball');
  // the 8-ball wrapper renders an iframe pointing at the hosted app
  const iframe = page.locator('iframe[title="Self-Care 8-Ball"]');
  await expect(iframe).toBeVisible({ timeout: 10000 });
});
