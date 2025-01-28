import { device, element, by } from "detox";

describe("Tela de login", () => {
  // roda antes de qualuqer teste
  beforeAll(async () => {
    await device.launchApp(); // abre a aplicação
  });

  // roda antes de cada suite de teste
  beforeEach(async () => {
    await device.reloadReactNative(); // recarrega a aplicação
  });

  it("Deve ser possivel encontrar o texto (Faça seu login)", async () => {
    const texto = await element(by.text("Faça seu login"));

    await expect(texto).toBeVisible();
  });

  // it("Deve ser possivel usuário interagir com os input para realizar login", async () => {
  //   // await element(by.id("username-input")).typeText("admin@example.com");
  //   // await element(by.id("password-input")).typeText("123456");
  //   // await element(by.id("button")).tap();
  //   const inputUsername = await element(by.id("username-input"));
  //   // const inputPassword = await element(by.id("password-input"));
  //   // const button = await element(by.id("button"));

  //   await inputUsername.typeText("admin@example.com");
  //   // await inputPassword.typeText("123456");
  
  // });
});
