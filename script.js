const caixas = document.querySelectorAll("textarea");

caixas.forEach((caixa, i) => {
  const chave = "textoImagem" + i;

  const salvo = localStorage.getItem(chave);
  if (salvo) caixa.value = salvo;

  caixa.addEventListener("input", () => {
    localStorage.setItem(chave, caixa.value);
  });
});
