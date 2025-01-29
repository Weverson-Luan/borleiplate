import { device, element, by, waitFor } from "detox";

describe("Tela de login", () => {
  // roda antes de qualuqer teste
  beforeAll(async () => {
    await device.launchApp(); // abre a aplicação
  });

  // roda antes de cada suite de teste
  beforeEach(async () => {
    await device.reloadReactNative(); // recarrega a aplicação
  });

<<<<<<< HEAD
  it("Deve ser possivel encontrar o texto (Faça seu login).", async () => {
    const texto = await element(by.text("Faça seu login"));
=======
  it("Deve ser possivel encontrar o texto (Faça seu login)", async () => {
    const texto = element(by.text("Faça seu login"));
>>>>>>> eaca6c0b204290122e1c4a02d21ce69e7e2d5ade

    await expect(texto).toBeVisible();
  });

<<<<<<< HEAD
  it("Deve ser possivel visualizar mensagem de erro caso usuário nao preenchar com e-mail ou senha.", async () => {
    const button = await element(by.id("button"));

     // Aguarda o botão estar visível antes de interagir
     await waitFor(button).toBeVisible().withTimeout(5000);
     await button.tap(); // Realiza o toque no botão

     const texto = await element(by.text("Usuário ou senha inválidos!"));

     await expect(texto).toBeVisible();
  })

  it("Deve ser possivel visualizar mensagem de error caso usuário preencha apenas com e-mail.", async () => {
    const inputUsername = await element(by.id("email-input"));

    await inputUsername.typeText("admin@example.com");

    const button = await element(by.id("button"));

       // aguarda o botão estar visível antes de interagir
       await waitFor(button).toBeVisible().withTimeout(5000);
       await button.tap(); // Realiza o toque no botão

       const texto = await element(by.text("Usuário ou senha inválidos!"));

       await expect(texto).toBeVisible();
  })

  it("Deve ser possivel visualizar mensagem de error caso usuário preencha apenas com senha.", async () => {
    const inputPassword = await element(by.id("password-input"));

    await inputPassword.typeText("123456");

    const button = await element(by.id("button"));

    // aguarda o botão estar visível antes de interagir
    await waitFor(button).toBeVisible().withTimeout(5000);
    await button.tap(); // Realiza o toque no botão

    const texto = await element(by.text("Usuário ou senha inválidos!"));

    await expect(texto).toBeVisible();
  })

  it("Deve ser possivel usuário interagir com os input para realizar login.", async () => {
    const inputUsername = await element(by.id("email-input"));
    const inputPassword = await element(by.id("password-input"));

    await inputUsername.typeText("admin@example.com");
    await inputPassword.typeText("123456");

    const button = await element(by.id("button"));

    // aguardo o botão estar visível antes de interagir
    await waitFor(button).toBeVisible().withTimeout(5000);
    await button.tap(); // Realiza o toque no botão

  });

=======
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
>>>>>>> eaca6c0b204290122e1c4a02d21ce69e7e2d5ade
});
