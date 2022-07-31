import { expect } from '@playwright/test';
import { test } from '../page_objects/index';
import { expectElementVisibility } from '../utils/expects';

test.describe('Main page', () => {
  test.beforeEach(async ({ basePage }) => {
    await basePage.goto();
  });

  test('should have a logo on the main page', async ({ basePage }) => {
    await expectElementVisibility(basePage.logo, true);
  });

  test('should have navbar menus', async ({ basePage}) => {
    await expectElementVisibility(basePage.bathRoomNavbarMenu, true);
    await expectElementVisibility(basePage.bedroomNavbarMenu, true);
    await expectElementVisibility(basePage.kidsroomNavbarMenu, true);
    await expectElementVisibility(basePage.kitchenNavbarMenu, true);
    await expectElementVisibility(basePage.livingRoomNavbarMenu, true);
    await expectElementVisibility(basePage.languageButton, true);
    await expectElementVisibility(basePage.hamburgerButton, true);
  });
});