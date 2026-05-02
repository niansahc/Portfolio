import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// WCAG 2.1 AA accessibility tests using axe-core.
// these will surface violations on each main route so we know
// what to fix before we start fixing.

test('home page has no WCAG 2.1 AA violations', async ({ page }) => {
  await page.goto('/');
  // wait for the page to settle (particle bg, typewriter, etc)
  await page.waitForTimeout(2000);

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});

test('about page has no WCAG 2.1 AA violations', async ({ page }) => {
  await page.goto('/about');
  await page.waitForTimeout(2000);

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});

test('projects page has no WCAG 2.1 AA violations', async ({ page }) => {
  await page.goto('/project');
  await page.waitForTimeout(2000);

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});

test('self-care-8-ball route has no WCAG 2.1 AA violations', async ({ page }) => {
  await page.goto('/self-care-8-ball');
  await page.waitForTimeout(2000);

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});

test('ember-2 page has no WCAG 2.1 AA violations', async ({ page }) => {
  await page.goto('/ember-2');
  await page.waitForTimeout(2000);

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});
