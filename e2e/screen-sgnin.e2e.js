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
    const texto = element(by.text("Faça seu login"));

    await expect(texto).toBeVisible();
  });

  it("Deve ser possivel usuário interagir com os input para realizar login", async () => {
    // 1 -> Informar o campo e-mail
  const inputUsername = element(by.id("email-input"));
  await inputUsername.tap(); // Foco no campo
  await inputUsername.typeText("admin@example.com");

  // 2 -> Informar o campo senha
  const inputPassword = element(by.id("password-input"));
  await inputPassword.tap(); // Foco no campo
  await inputPassword.typeText("123456");

  // 3 -> Clicar no botão de login
  await waitFor(element(by.id("button-login")))
  .toBeVisible()
  .whileElement(by.id("scroll-view")) // ID do seu ScrollView, caso exista
  .scroll(50, "down");

  
  });
});
