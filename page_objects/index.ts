import { test as baseTest, Page } from "@playwright/test";
import { Base } from "./Base.page";

export const test = baseTest.extend<{
  basePage: Base;
}>({
  basePage: async ({ page }, use) => {
    await use(new Base(page));
  }
});