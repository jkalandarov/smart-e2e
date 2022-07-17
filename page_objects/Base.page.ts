import { Page, Locator, expect } from "@playwright/test";

export abstract class Base {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async expectUrlContains(title: string | RegExp): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  async pause(time: number): Promise<void> {
    await this.page.pause();
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}