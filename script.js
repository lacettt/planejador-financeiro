let pergunta = "Qual sua renda total atual? (EX: 2000)";

const renda = prompt(pergunta);

alert(`Sua renda total é de ${renda}, confere?`);

valorFixo = renda * (50 / 100);
valorInvestimento = renda * (30 / 100);
valorFlexivel = renda * (20 / 100);

alert(
	`De acordo com sua renda atual o ideal para seu orçamento é:
  GASTOS FIXOS: R$${valorFixo},00
  INVESTIMENTOS E RESERVA: R$${valorInvestimento},00 
  GASTOS FLEXÍVEIS: R$${valorFlexivel},00`
);
