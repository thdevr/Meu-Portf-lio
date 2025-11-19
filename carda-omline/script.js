const botoesAdd = document.querySelectorAll(".btn-add");
const listaCarrinho = document.getElementById("itens-carrinho");
const totalCarrinho = document.getElementById("total");
const btnLimpar = document.getElementById("btn-limpar");
const btnFinalizar = document.getElementById("btn-finalizar");

let carrinho = {};

function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";

  let total = 0;
  for (const nome in carrinho) {
    const item = carrinho[nome];
    const valorItem = item.preco * item.quantidade;
    total += valorItem;

    const li = document.createElement("li");

    // Nome e quantidade
    const spanQtd = document.createElement("span");
    spanQtd.classList.add("quantidade");
    spanQtd.textContent = `x${item.quantidade}`;

    const spanNome = document.createElement("span");
    spanNome.textContent = ` ${nome} `;

    // Preço
    const spanPreco = document.createElement("span");
    spanPreco.textContent = `R$ ${valorItem.toFixed(2).replace('.', ',')}`;

    // Botão remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.style.marginLeft = "10px";
    btnRemover.style.padding = "2px 6px";
    btnRemover.style.fontSize = "0.8rem";
    btnRemover.style.backgroundColor = "#dc3545";
    btnRemover.style.color = "white";
    btnRemover.style.border = "none";
    btnRemover.style.borderRadius = "6px";
    btnRemover.style.cursor = "pointer";
    btnRemover.addEventListener("click", () => {
      removerItem(nome);
    });

    li.appendChild(spanQtd);
    li.appendChild(spanNome);
    li.appendChild(spanPreco);
    li.appendChild(btnRemover);

    listaCarrinho.appendChild(li);
  }

  totalCarrinho.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;

  if (Object.keys(carrinho).length === 0) {
    listaCarrinho.innerHTML = "<li>Carrinho vazio</li>";
    totalCarrinho.textContent = "Total: R$ 0,00";
  }
}

function removerItem(nome) {
  if (!carrinho[nome]) return;

  if (carrinho[nome].quantidade > 1) {
    carrinho[nome].quantidade--;
  } else {
    delete carrinho[nome];
  }

  atualizarCarrinho();
}

botoesAdd.forEach(botao => {
  botao.addEventListener("click", () => {
    const prato = botao.closest(".prato");
    const nome = prato.dataset.nome;
    const preco = Number(prato.dataset.preco);

    if (carrinho[nome]) {
      carrinho[nome].quantidade++;
    } else {
      carrinho[nome] = { preco, quantidade: 1 };
    }

    atualizarCarrinho();
  });
});

btnLimpar.addEventListener("click", () => {
  carrinho = {};
  atualizarCarrinho();
});

btnFinalizar.addEventListener("click", () => {
  if (Object.keys(carrinho).length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let resumo = "Resumo do pedido:\n\n";

  let total = 0;
  for (const nome in carrinho) {
    const item = carrinho[nome];
    const valorItem = item.preco * item.quantidade;
    total += valorItem;
    resumo += `${item.quantidade}x ${nome} - R$ ${valorItem.toFixed(2).replace('.', ',')}\n`;
  }

  resumo += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\n\nObrigado pelo seu pedido!`;

  alert(resumo);
  // Pode limpar o carrinho após finalizar:
  carrinho = {};
  atualizarCarrinho();
});

// Inicializa
atualizarCarrinho();
