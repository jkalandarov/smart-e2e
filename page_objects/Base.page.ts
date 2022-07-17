import { Page, Locator, expect } from "@playwright/test";

export abstract class Base {
  readonly page: Page;
  logo: Locator;
  kitchenNavbarMenu: Locator;
  bedroomNavbarMenu: Locator;
  kidsroomNavbarMenu: Locator;
  livingRoomNavbarMenu: Locator;
  bathRoomNavbarMenu: Locator;
  languageButton: Locator;
  hamburgerButton: Locator;
  phoneNumber: Locator;
  emailAddress: Locator;
  newArrivalsCarousel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = this.page.locator('//a/img[@alt="smartinvest logo"]');
    this.kitchenNavbarMenu = this.page.locator('.header-list__link', { hasText: "Кухня" });
    this.bedroomNavbarMenu = this.page.locator('.header-list__link', { hasText: "Спальная" });
    this.kidsroomNavbarMenu = this.page.locator('.header-list__link', { hasText: "Детская" });
    this.livingRoomNavbarMenu = this.page.locator('.header-list__link', { hasText: "Гостиная" });
    this.bathRoomNavbarMenu = this.page.locator('.header-list__link', { hasText: "Ванная" });
    this.languageButton = this.page.locator('button[aria-label="LanguageButton"]');
    this.hamburgerButton = this.page.locator('button[aria-label="PopupButton"]');
    this.phoneNumber = this.page.locator('a', {hasText: /\+\d{3}\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}/gm });
    this.emailAddress = this.page.locator('a', { hasText: /(..\w{3,15})@smartinvest\.uz/gm });
    this.newArrivalsCarousel = this.page.locator('.head-image.swiper-lazy');
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