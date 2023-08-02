// Script para cálculo e exibição dos valores
function calcularValores() {
	const renda = parseFloat(document.getElementById("rendaTotal").value);

	if (isNaN(renda)) {
		alert("Por favor, insira um valor válido para sua renda total.");
		return;
	}

	const valorFixo = renda * (50 / 100);
	const valorInvestimento = renda * (30 / 100);
	const valorFlexivel = renda * (20 / 100);

	document.getElementById("necessidades").value = `R$${valorFixo.toFixed(2)}`;
	document.getElementById(
		"despesasPessoais"
	).value = `R$${valorInvestimento.toFixed(2)}`;
	document.getElementById(
		"objetivosFinanceiros"
	).value = `R$${valorFlexivel.toFixed(2)}`;

	document.getElementById("resultado").style.display = "block";

	// Código para criar o gráfico de pizza
	const ctx = document.getElementById("pieChart").getContext("2d");
	const myPieChart = new Chart(ctx, {
		type: "pie",
		data: {
			labels: ["Gastos Fixos", "Investimentos e Reserva", "Gastos Flexíveis"],
			datasets: [
				{
					data: [valorFixo, valorInvestimento, valorFlexivel],
					backgroundColor: ["#007bff", "#28a745", "#ffc107"],
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			legend: {
				display: true,
				position: "right",
				labels: {
					fontColor: "#333",
					fontSize: 18,
					boxWidth: 15,
					padding: 15,
				},
			},
		},
	});
}

// Adiciona a classe de animação ao container do resultado
document
	.getElementById("resultado")
	.classList.add("animate__animated", "animate__fadeInLeft");

// Evento ao clicar no botão "Calcular"
document.getElementById("calcular").addEventListener("click", calcularValores);

// Evento ao pressionar a tecla "Enter" no campo de renda
document
	.getElementById("rendaTotal")
	.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			calcularValores();
		}
	});
