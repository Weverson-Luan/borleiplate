describe('Meu primeira suite teste com E2E.', () => {
  // roda antes de qualuqer teste
  beforeAll(async () => {
    await device.launchApp(); // abre a aplicação
  });


  // roda antes de cada suite de teste 
  beforeEach(async () => {
    await device.reloadReactNative(); // recarrega a aplicação
  })




it("Deve ser possivel encontrar o texto (Faça seu login)", async () => {
  const texto = await element(by.text("Faça seu login"));
  
  await expect(texto).toBeVisible();
})

});
