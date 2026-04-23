function carregarPedidoNaTelaCliente() {
  const pedidoJSON = localStorage.getItem('pedido') || sessionStorage.getItem('pedido');
  if (!pedidoJSON) {
    alert('Nenhum pedido encontrado. Volte ao cardápio.');
    voltarCardapio();
    return;
  }

  const pedidoLocal = JSON.parse(pedidoJSON);

  const lista = document.getElementById('resumoItens');
  lista.innerHTML = '';
  pedidoLocal.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} — R$ ${item.preco.toFixed(2).replace('.', ',')}`;
    lista.appendChild(li);
  });

  const total = pedidoLocal.reduce((s, i) => s + i.preco, 0);
  document.getElementById('resumoTotal').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

function selecionarTipoEntrega(tipo, elemento) {
  document.querySelectorAll('.delivery-card').forEach(c => c.classList.remove('ativo'));
  if (elemento) elemento.classList.add('ativo');
  document.getElementById('tipoEntrega').value = tipo || 'entrega';

  const groupEndereco = document.getElementById('groupEndereco');
  const inputEndereco = document.getElementById('endereco');
  const groupNumero = document.getElementById('groupNumero');
  const groupReferencia = document.getElementById('groupReferencia');

  if (tipo === 'entrega') {
    groupEndereco.style.display = 'block';
    inputEndereco.setAttribute('required', '');
    if(groupNumero) groupNumero.style.display = 'block';
    if(groupReferencia) groupReferencia.style.display = 'block';
  } else {
    groupEndereco.style.display = 'none';
    inputEndereco.removeAttribute('required');
    inputEndereco.value = '';
    if(groupNumero) { groupNumero.style.display = 'none'; const n = document.getElementById('numero'); if(n) n.value = ''; }
    if(groupReferencia) { groupReferencia.style.display = 'none'; const r = document.getElementById('referencia'); if(r) r.value = ''; }
  }
}

// Exibe campo de troco quando pagamento é Dinheiro
function onPagamentoChange(valor){
  const group = document.getElementById('groupTroco');
  const trocoInput = document.getElementById('troco');
  const taxaInfo = document.getElementById('taxa-info');
  const resumoTotal = document.getElementById('resumoTotal');

  if(!group || !trocoInput) return;

  if(valor === 'Dinheiro'){
    group.style.display = 'block';
    trocoInput.setAttribute('required','');
  } else {
    group.style.display = 'none';
    trocoInput.removeAttribute('required');
    trocoInput.value = '';
  }

  // Recalculate subtotal from stored pedido (avoid reading resumoTotal which may already contain a fee)
  const pedidoJSON = localStorage.getItem('pedido') || sessionStorage.getItem('pedido');
  const pedidoLocal = pedidoJSON ? JSON.parse(pedidoJSON) : [];
  const subtotal = pedidoLocal.reduce((s, i) => s + (i.preco || 0), 0);

  // If card payment, compute per-pizza fee: R$1.00 for G, R$0.50 for others
  let taxaTotal = 0;
  if (valor === 'Débito' || valor === 'Crédito') {
    if (taxaInfo) {
      taxaInfo.textContent = 'Taxa adicional para pagamento no cartão: R$ 0,50 por pizza P, R$ 1,00 por pizza G.';
      taxaInfo.style.display = 'block';
    }

    for (const item of pedidoLocal) {
      const nome = (item.nome || '').toString();
      const detalhe = (item.detalhe || '').toString();
      if (nome.includes('(G)') || detalhe.includes('Pizza G') || nome.includes(' G')) {
        taxaTotal += 1.00;
      } else {
        taxaTotal += 0.50;
      }
    }
  } else {
    if (taxaInfo) {
      taxaInfo.style.display = 'none';
      taxaInfo.textContent = '';
    }
    taxaTotal = 0;
  }

  const totalComTaxa = subtotal + taxaTotal;
  if (resumoTotal) resumoTotal.textContent = 'R$ ' + totalComTaxa.toFixed(2).replace('.', ',');
}

// Volta ao cardápio
function voltarCardapio() {
  sessionStorage.removeItem('pedido');
  window.location.href = 'resumo.html';
}

// Finaliza o pedido e envia para WhatsApp com formatação bonita
function finalizarPedidoWhatsApp(event) {
  event.preventDefault();

  // Tenta localStorage primeiro (pode ter sido salvo lá), depois sessionStorage
  const pedidoJSON = localStorage.getItem('pedido') || sessionStorage.getItem('pedido');

  if(!estaAberto()){
    showToast('🔒 Estamos fechados! Pedidos das 17h30 às 22h (fecha seg.)');
    setTimeout(() => { window.location.href = 'index.html'; }, 4000);
    return;
  }

  if (!pedidoJSON) {
    alert('Pedido não encontrado.');
    return;
  }

  const pedidoLocal = JSON.parse(pedidoJSON);
  const nome = document.getElementById('nome').value.trim();
  const tipoEntrega = document.getElementById('tipoEntrega').value;
  const endereco = document.getElementById('endereco').value.trim();
  const numeroCasa = document.getElementById('numero') ? document.getElementById('numero').value.trim() : '';
  const referencia = document.getElementById('referencia') ? document.getElementById('referencia').value.trim() : '';
  const pagamento = document.getElementById('pagamento').value;
  const trocoRaw = document.getElementById('troco') ? document.getElementById('troco').value.trim() : '';
  const telefone = document.getElementById('telefone').value.trim();

  if (!nome || !pagamento) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  if (tipoEntrega === 'entrega') {
    if (!endereco) {
      alert('Por favor, informe o endereço (rua) para entrega.');
      return;
    }
    if (!numeroCasa) {
      alert('Por favor, informe o número da casa para entrega.');
      return;
    }
  }

  // Construir mensagem legível (quebras de linha com \n)
  let msg = '';
  msg += 'PAI E FILHO PIZZARIA\n\n';

  msg += 'CLIENTE\n';
  msg += `Nome: ${nome}\n`;
  if (telefone) msg += `Telefone: ${telefone}\n`;

  msg += '\nENTREGA\n';
  if (tipoEntrega === 'entrega') {
    msg += `Tipo: Entrega\n`;
    msg += `Endereço: ${endereco}, Nº ${numeroCasa}\n`;
    if (referencia) msg += `Ponto de referência: ${referencia}\n`;
  }

  msg += '\nPAGAMENTO\n';
  msg += `Forma: ${pagamento}\n`;

  msg += '\nSEU PEDIDO\n';
  pedidoLocal.forEach((item) => {
    msg += `- ${item.nome} — R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;
  });

  // Calcula total e aplica taxa para cartão se necessário
  let subtotal = pedidoLocal.reduce((s, i) => s + i.preco, 0);
  // Compute per-pizza fee for card payments
  let taxaTotal = 0;
  if (pagamento === 'Débito' || pagamento === 'Crédito') {
    for (const item of pedidoLocal) {
      const nomeItem = (item.nome || '').toString();
      const detalheItem = (item.detalhe || '').toString();
      if (nomeItem.includes('(G)') || detalheItem.includes('Pizza G') || nomeItem.includes(' G')) {
        taxaTotal += 1.00;
      } else {
        taxaTotal += 0.50;
      }
    }
    if (taxaTotal > 0) {
      msg += `\nTaxa por pagamento no cartão: R$ ${taxaTotal.toFixed(2).replace('.',',')}\n`;
    }
  }
  const totalComTaxa = subtotal + taxaTotal;

  // Dinheiro: valida troco informado
  if(pagamento === 'Dinheiro'){
    if(!trocoRaw){
      alert('Por favor, informe quanto você irá dar (campo de troco).');
      return;
    }
    // normaliza número (troco pode vir com vírgula)
    const trocoNum = parseFloat(trocoRaw.replace(',','.'));
    if(isNaN(trocoNum)){
      alert('Valor de troco inválido. Use formato 50,00 ou 50');
      return;
    }
    if(trocoNum < subtotal){
      alert('O valor informado é menor que o total do pedido. Informe um valor igual ou maior.');
      return;
    }
    const trocoCalculo = trocoNum - subtotal;
    msg += `\nTOTAL: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    msg += `Cliente dará: R$ ${trocoNum.toFixed(2).replace('.',',')} — Troco: R$ ${trocoCalculo.toFixed(2).replace('.',',')}\n`;
  } else {
    msg += `\nTOTAL: R$ ${totalComTaxa.toFixed(2).replace('.', ',')}\n`;
  }

  msg += `\nConfirme seu pedido no WhatsApp`;
  
  try { localStorage.removeItem('pedido'); } catch(e) {}
  try { sessionStorage.removeItem('pedido'); } catch(e) {}

  const numeroWhatsApp = '5583986388769';
  const encoded = encodeURIComponent(msg);
  const url = `https://wa.me/${numeroWhatsApp}?text=${encoded}`;

  try{
    window.open(url, '_blank');
  }catch(e){ console.warn('Não foi possível abrir a nova janela:', e); }

  try { localStorage.removeItem('pedido'); } catch(e) {}
  try { sessionStorage.removeItem('pedido'); } catch(e) {}

  // Redireciona para a tela principal do cardápio (evita ficar travado no resumo)
  setTimeout(() => { window.location.href = 'index.html'; }, 400);
}
