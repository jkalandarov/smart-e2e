import { expect, Locator, Page } from "@playwright/test";

export const expectElementVisibility = async (element: Locator, visibility: boolean): Promise<void> => {
  const elementsCount: number = await element.count();

  if (elementsCount > 1) {
    for (let i = 0; i < elementsCount; i++) {
      const assert = expect(element.nth(i), `Visibility of ${element} element collection is incorrect`);
      if (visibility) {
        await assert.toBeVisible();
      } else {
        await assert.toBeHidden();
      }
    }
  } else {
    const assert = expect(element, `Visibility of ${element} element is incorrect`);
    if (visibility) {
      await assert.toBeVisible();
    } else {
      await assert.toBeHidden();
    }
  }
};