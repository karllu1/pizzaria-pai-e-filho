// ===================== DADOS DO CARDÁPIO =====================
const itens = [
  // 🍕 PIZZAS TRADICIONAIS
  { nome:"Mussarela",         desc:"Molho de tomate, mussarela e orégano.",                                                              p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Calabresa",         desc:"Molho de tomate, mussarela, calabresa e orégano.",                                                   p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"4 Queijos",         desc:"Molho de tomate, mussarela, tomate, requeijão, parmesão, provolone e orégano.",                     p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Marguerita",        desc:"Molho de tomate, mussarela, tomate, manjericão e orégano.",                                          p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Mista",             desc:"Molho de tomate, mussarela, presunto e orégano.",                                                    p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Mista 2",           desc:"Molho de tomate, mussarela, presunto, calabresa e orégano.",                                         p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Cheddar",           desc:"Molho de tomate, mussarela, cheddar e orégano.",                                                     p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Bacon",             desc:"Molho de tomate, mussarela, bacon e orégano.",                                                       p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Frango com Bacon",  desc:"Molho de tomate, mussarela, frango, bacon e orégano.",                                               p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Frango com Milho",  desc:"Molho de tomate, mussarela, frango, milho verde e orégano.",                                         p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Frango com Cheddar",desc:"Molho de tomate, mussarela, frango, cheddar e orégano.",                                             p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Toscana",           desc:"Molho de tomate, mussarela, calabresa, cebola, parmesão e orégano.",                                 p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Portuguesa",        desc:"Molho de tomate, mussarela, presunto, tomate, pimentão, cebola, ovos e orégano.",                   p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Americana",         desc:"Molho de tomate, mussarela, bacon, ovos e orégano.",                                                 p:25, g:35, cat:"pizza", sub:"tradicionais" },
  { nome:"Argentina",         desc:"Molho de tomate, mussarela, bacon, milho verde, requeijão e orégano.",                               p:25, g:35, cat:"pizza", sub:"tradicionais" },
  // ⭐ PIZZAS ESPECIAIS
  { nome:"Sertaneja",         desc:"Molho de tomate, mussarela, carne de sol e orégano.",                                                p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Sertaneja Cremosa", desc:"Molho de tomate, mussarela, carne de sol, requeijão e orégano.",                                     p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Moda da Casa",      desc:"Molho de tomate, mussarela, frango, calabresa, carne de sol, cheddar, requeijão, milho e orégano.", p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Caipira",           desc:"Molho de tomate, mussarela, frango, calabresa, cebola, ovos, milho e orégano.",                      p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Baiana",            desc:"Molho de tomate, mussarela, calabresa, cebola, ovos, molho de pimenta e orégano.",                   p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Siciliana",         desc:"Molho de tomate, mussarela, calabresa, bacon, uva passa, milho, requeijão e orégano.",               p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Tropeiro",          desc:"Molho de tomate, mussarela, calabresa, carne de sol, cebola, parmesão, ovos e orégano.",             p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Suprema Pai e Filho",desc:"Molho de tomate, mussarela, frango, carne de sol, tomate, uva passa, requeijão e orégano.",        p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Camarão",           desc:"Molho de tomate, mussarela, camarão ao alho e óleo, requeijão e orégano.",                           p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Atum",              desc:"Molho de tomate, mussarela, atum, cebola, requeijão e orégano.",                                     p:30, g:40, cat:"pizza", sub:"especiais" },
  { nome:"Lombinho Canadense",desc:"Molho de tomate, mussarela, lombinho, requeijão e orégano.",                                         p:30, g:40, cat:"pizza", sub:"especiais" },
  // 🍫 PIZZAS DOCES TRADICIONAIS
  { nome:"Brigadeiro",        desc:"Mussarela, brigadeiro e granulado.",                                p:25, g:35, cat:"doce", sub:"tradicionais" },
  { nome:"Banana Condensada", desc:"Mussarela, banana, canela e leite condensado.",                    p:20, g:35, cat:"doce", sub:"tradicionais" },
  { nome:"Coquinho",          desc:"Mussarela, brigadeiro e coco ralado.",                             p:25, g:35, cat:"doce", sub:"tradicionais" },
  { nome:"Doce de Leite",     desc:"Mussarela e doce de leite.",                                       p:25, g:35, cat:"doce", sub:"tradicionais" },
  // ⭐ PIZZAS DOCES ESPECIAIS
  { nome:"Banana Nevada",     desc:"Mussarela, banana e chocolate branco.",                             p:30, g:40, cat:"doce", sub:"especiais" },
  { nome:"Banoffe",           desc:"Mussarela, banana, doce de leite, amendoim e chocolate branco.",   p:30, g:40, cat:"doce", sub:"especiais" },
  { nome:"Dois Amores",       desc:"Mussarela, chocolate branco e chocolate ao leite.",                 p:30, g:40, cat:"doce", sub:"especiais" },
  { nome:"Charge",            desc:"Mussarela, brigadeiro, amendoim e doce de leite.",                  p:30, g:40, cat:"doce", sub:"especiais" },
  // 🥤 BEBIDAS
  { nome:"Coca-Cola 1,5L",         preco:13, cat:"bebida" },
  { nome:"Guaraná Antarctica 1L",  preco:8,  cat:"bebida" },
  { nome:"Pepsi 1L",               preco:8,  cat:"bebida" },
];

// Lista de adicionais disponíveis (preco: 0 = grátis / verduras)
const ADICIONAIS_LISTA = [
  { nome: 'Calabresa',   preco: 5 },
  { nome: 'Frango',      preco: 5 },
  { nome: 'Carne de sol',preco: 5 },
  { nome: 'Bacon',       preco: 5 },
  { nome: 'Presunto',    preco: 5 },
  { nome: 'Requeijão',   preco: 5 },
  { nome: 'Cheddar',     preco: 5 },
  { nome: 'Ovos',        preco: 5 },
  { nome: 'Milho',       preco: 5 },
  { nome: 'Uva passa',   preco: 5 },
  { nome: 'Tomate',      preco: 0 },
  { nome: 'Pimentão',    preco: 0 },
  { nome: 'Cebola',      preco: 0 },
];

// Preços adicionais de borda por tamanho (P = Pequena, G = Grande)
const BORDA_PRECOS = {
  'Sem borda':           { P: 0,  G: 0  },
  'Requeijão':           { P: 5,  G: 8  },
  'Cheddar':             { P: 5,  G: 8  },
  'Chocolate Branco':    { P: 5,  G: 9  },
  'Chocolate ao Leite':  { P: 5,  G: 9  },
};

// ===================== ESTADO DA APLICAÇÃO =====================
let pedido = [];        // lista de itens no carrinho
let catAtiva = null;    // categoria selecionada atualmente
let filtroAtivo = 'todos'; // filtro de subcategoria ativo

// Estado interno do modal de montar pizza
let modalTamanho = 'P';
let modalSabores = [];
let modalBordaNome = 'Sem borda';
let modalCatAtual = 'pizza';
let modalAdicionais = [];       // adicionais selecionados (máx. 1x cada)

// ===================== NAVEGAÇÃO =====================
function irParaCategorias(){
  document.getElementById('sec-cat').scrollIntoView({ behavior:'smooth' });
}

function ativarCat(cat){
  catAtiva = cat;
  // remove destaque de todas as categorias e aplica na selecionada
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('ativo'));
  document.getElementById('cat-'+cat).classList.add('ativo');

  // exibe filtros apenas para pizzas e doces
  const filtros = document.getElementById('filtros');
  if(cat === 'pizza' || cat === 'doce'){
    filtros.style.display = 'flex';
    filtroAtivo = 'todos';
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
    document.getElementById('f-todos').classList.add('ativo');
  } else {
    filtros.style.display = 'none';
  }

  renderizar(cat, 'todos');
  document.getElementById('cardapio').style.display = 'block';
  // pequeno atraso para suavizar a rolagem após renderização
  setTimeout(()=>{ document.getElementById('cardapio').scrollIntoView({ behavior:'smooth', block:'start' }); }, 80);
}

function filtrar(sub){
  filtroAtivo = sub;
  // atualiza botão de filtro ativo
  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
  document.getElementById('f-'+sub).classList.add('ativo');
  renderizar(catAtiva, sub);
}

// ===================== RENDERIZAR CARDÁPIO =====================
function renderizar(cat, sub){
  const cardapio = document.getElementById('cardapio');
  // filtra itens pela categoria e subcategoria
  let lista = itens.filter(i => i.cat === cat);
  if(sub && sub !== 'todos') lista = lista.filter(i => i.sub === sub);

  cardapio.innerHTML = '';

  lista.forEach((item, idx) => {
    if(item.cat === 'bebida'){
      // cartão de bebida com botão de adicionar direto
      cardapio.innerHTML += `
        <div class="item" style="animation-delay:${idx*0.04}s">
          <div class="item-info">
            <p>${item.nome}</p>
            <small>Bebida gelada</small>
          </div>
          <button class="item-add" onclick="add('${item.nome}', ${item.preco})">
            R$ ${item.preco},00
          </button>
        </div>`;
    } else {
      // cartão de pizza/doce com botões de tamanho que abrem o modal
      cardapio.innerHTML += `
        <div class="item" style="animation-delay:${idx*0.04}s">
          <div class="item-info">
            <p>${item.nome}</p>
            <small>${item.desc}</small>
            <div class="precos">
              <button class="preco-tag" onclick="abrirModal('${item.cat}', '${item.nome}', ${item.p}, ${item.g}, 'P')">🍕 P — R$ ${item.p}</button>
              <button class="preco-tag" onclick="abrirModal('${item.cat}', '${item.nome}', ${item.p}, ${item.g}, 'G')">🍕 G — R$ ${item.g}</button>
            </div>
          </div>
        </div>`;
    }
  });
}

// ===================== MODAL MONTAR PIZZA =====================
function abrirModal(cat, nomeInicial, precoP, precoG, tam){
  // inicializa estado do modal com o item clicado
  modalTamanho = tam;
  modalSabores = [{ nome: nomeInicial, p: precoP, g: precoG }];
  modalBordaNome = 'Sem borda';
  modalCatAtual = cat;
  modalAdicionais = []; // reseta adicionais

  // destaca o tamanho selecionado
  document.querySelectorAll('.tam-btn').forEach(b => b.classList.remove('ativo'));
  document.getElementById('tam-' + tam).classList.add('ativo');

  atualizarLabelsTamanho();
  renderizarSaboresModal();
  renderizarAdicionaisModal();

  // reseta seleção de borda para "Sem borda"
  document.querySelectorAll('.borda-btn').forEach(b => b.classList.remove('ativo'));
  document.querySelector('.borda-btn').classList.add('ativo');
  atualizarInfoBorda();
  atualizarResumoModal();

  // abre o modal com animação
  document.getElementById('modalPizza').classList.add('aberto');
  document.getElementById('modalOverlay').classList.add('aberto');
}

function fecharModal(){
  document.getElementById('modalPizza').classList.remove('aberto');
  document.getElementById('modalOverlay').classList.remove('aberto');
}

function atualizarLabelsTamanho(){
  // calcula preço base respeitando lei federal (meio a meio = metade + metade)
  let baseP, baseG;
  if(modalSabores.length === 2){
    baseP = (modalSabores[0].p / 2) + (modalSabores[1].p / 2);
    baseG = (modalSabores[0].g / 2) + (modalSabores[1].g / 2);
  } else if(modalSabores.length === 1){
    baseP = modalSabores[0].p;
    baseG = modalSabores[0].g;
  } else {
    baseP = 0; baseG = 0;
  }
  const bordaP = BORDA_PRECOS[modalBordaNome]?.P || 0;
  const bordaG = BORDA_PRECOS[modalBordaNome]?.G || 0;
  const adicionaisTotal = modalAdicionais.reduce((s, a) => s + a.preco, 0);
  document.querySelector('#tam-P span').textContent = baseP > 0 ? `R$ ${(baseP + bordaP + adicionaisTotal).toFixed(2).replace('.',',')}` : 'Pequena';
  document.querySelector('#tam-G span').textContent = baseG > 0 ? `R$ ${(baseG + bordaG + adicionaisTotal).toFixed(2).replace('.',',')}` : 'Grande';
}

function renderizarSaboresModal(){
  const lista = document.getElementById('listaSabores');
  // lista todos os sabores de pizza e doce disponíveis
  const saboresCat = itens.filter(i => i.cat === 'pizza' || i.cat === 'doce');

  lista.innerHTML = '';
  saboresCat.forEach(item => {
    const selecionado = modalSabores.some(s => s.nome === item.nome);
    const maxAtingido = modalSabores.length >= 2 && !selecionado; // bloqueia se já tem 2 sabores
    lista.innerHTML += `
      <div class="sabor-item ${selecionado ? 'selecionado' : ''} ${maxAtingido ? 'desabilitado' : ''}"
           onclick="${maxAtingido ? '' : `toggleSabor('${item.nome}', ${item.p}, ${item.g})`}">
        <div>
          <div class="sabor-nome">${item.nome}</div>
        </div>
        <div class="sabor-preco">P R$ ${item.p} / G R$ ${item.g}</div>
        <div class="sabor-check">${selecionado ? '✓' : ''}</div>
      </div>`;
  });

  atualizarTextoSabores();
}

function atualizarTextoSabores(){
  // atualiza o texto que mostra os sabores selecionados
  const el = document.getElementById('saboresSelecionados');
  if(modalSabores.length === 0){
    el.textContent = 'Nenhum sabor selecionado';
  } else {
    el.textContent = '✅ ' + modalSabores.map(s => s.nome).join(' + ');
  }
}

function toggleSabor(nome, precoP, precoG){
  const idx = modalSabores.findIndex(s => s.nome === nome);
  if(idx >= 0){
    // impede remover o único sabor restante
    if(modalSabores.length === 1){
      showToast('⚠️ Selecione pelo menos 1 sabor!');
      return;
    }
    modalSabores.splice(idx, 1); // remove sabor já selecionado
  } else {
    if(modalSabores.length >= 2){
      showToast('⚠️ Máximo 2 sabores por pizza!');
      return;
    }
    modalSabores.push({ nome, p: precoP, g: precoG }); // adiciona novo sabor
  }
  renderizarSaboresModal();
  atualizarLabelsTamanho();
  atualizarResumoModal();
}

function escolherTamanho(tam, btn){
  modalTamanho = tam;
  // atualiza destaque visual do tamanho selecionado
  document.querySelectorAll('.tam-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  atualizarLabelsTamanho();
  atualizarInfoBorda();
  atualizarResumoModal();
}

function escolherBordaModal(nome, _, btn){
  modalBordaNome = nome;
  // atualiza destaque visual da borda selecionada
  document.querySelectorAll('.borda-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  atualizarInfoBorda();
  atualizarLabelsTamanho();
  atualizarResumoModal();
}

function atualizarInfoBorda(){
  // exibe o custo adicional da borda selecionada
  const precos = BORDA_PRECOS[modalBordaNome];
  const el = document.getElementById('bordaModalInfo');
  if(!precos || precos.P === 0){
    el.textContent = '✅ Sem borda';
  } else {
    el.textContent = `✅ ${modalBordaNome} — P: +R$ ${precos.P} / G: +R$ ${precos.G}`;
  }
}

function calcPrecoModal(){
  if(modalSabores.length === 0) return 0;

  let precoBase;
  if(modalSabores.length === 2){
    // LEI FEDERAL: pizza meio a meio cobra metade do preço de cada sabor
    // independente de serem do mesmo grupo ou não
    const s1 = modalTamanho === 'P' ? modalSabores[0].p : modalSabores[0].g;
    const s2 = modalTamanho === 'P' ? modalSabores[1].p : modalSabores[1].g;
    precoBase = (s1 / 2) + (s2 / 2);
  } else {
    // sabor único: preço normal
    precoBase = modalTamanho === 'P' ? modalSabores[0].p : modalSabores[0].g;
  }

  // soma custo da borda
  const precoBorda = BORDA_PRECOS[modalBordaNome]?.[modalTamanho] || 0;

  // soma adicionais selecionados
  const precoAdicionais = modalAdicionais.reduce((soma, a) => soma + a.preco, 0);

  return precoBase + precoBorda + precoAdicionais;
}

function atualizarResumoModal(){
  // atualiza bloco de resumo com nomes dos sabores e preço total
  const preco = calcPrecoModal();
  const nomes = modalSabores.map(s => s.nome).join(' + ');

  // aviso de lei federal quando há 2 sabores de categorias diferentes
  let avisoLei = '';
  if(modalSabores.length === 2){
    const subs = modalSabores.map(s => itens.find(i => i.nome === s.nome)?.sub);
    if(subs[0] !== subs[1]){
    }
  }

  document.querySelector('#modalResumo span:first-child').textContent = (nomes || 'Selecione ao menos 1 sabor') + avisoLei;
  document.getElementById('modalPreco').textContent = 'R$ ' + preco.toFixed(2).replace('.', ',');
}

function confirmarPizza(){
  if(modalSabores.length === 0){
    showToast('⚠️ Selecione pelo menos 1 sabor!');
    return;
  }

  const nomes = modalSabores.map(s => s.nome).join(' / ');
  const preco = calcPrecoModal();
  const precoBorda = BORDA_PRECOS[modalBordaNome]?.[modalTamanho] || 0;

  // monta descrição resumida para exibir no carrinho
  let descricao = `${nomes} (${modalTamanho})`;
  if(modalBordaNome !== 'Sem borda') descricao += ` + Borda ${modalBordaNome}`;
  if(modalAdicionais.length > 0) descricao += ` + Extras: ${modalAdicionais.map(a => a.nome).join(', ')}`;

  // monta detalhe completo para a mensagem do WhatsApp
  let detalhe = `Pizza ${modalTamanho} — ${nomes}`;
  if(modalSabores.length === 2){
    const subs = modalSabores.map(s => itens.find(i => i.nome === s.nome)?.sub);
  }
  if(modalBordaNome !== 'Sem borda') detalhe += ` | Borda ${modalBordaNome} (+R$ ${precoBorda},00)`;
  if(modalAdicionais.length > 0){
    const totalAdicionais = modalAdicionais.reduce((s, a) => s + a.preco, 0);
    detalhe += ` | Adicionais: ${modalAdicionais.map(a => a.nome).join(', ')}`;
    if(totalAdicionais > 0) detalhe += ` (+R$ ${totalAdicionais},00)`;
  }

  pedido.push({ nome: descricao, detalhe, preco, tipo: 'pizza' });

  atualizarBadge();
  atualizarDrawer();
  fecharModal();
  showToast('🍕 Pizza adicionada ao pedido!');
}

// ===================== ADICIONAIS =====================
function renderizarAdicionaisModal(){
  const grid = document.getElementById('adicionaisGrid');
  grid.innerHTML = '';
  ADICIONAIS_LISTA.forEach(adicional => {
    const selecionado = modalAdicionais.some(a => a.nome === adicional.nome);
    const labelPreco = adicional.preco === 0 ? 'Grátis' : `+R$ ${adicional.preco}`;
    grid.innerHTML += `
      <button class="adicional-btn ${selecionado ? 'selecionado' : ''}"
              onclick="toggleAdicional('${adicional.nome}', ${adicional.preco})">
        ${adicional.nome}
        <span class="adicional-preco">${labelPreco}</span>
      </button>`;
  });
  atualizarInfoAdicionais();
}

function toggleAdicional(nome, preco){
  const idx = modalAdicionais.findIndex(a => a.nome === nome);
  if(idx >= 0){
    modalAdicionais.splice(idx, 1); // desmarca se já estava selecionado
  } else {
    modalAdicionais.push({ nome, preco }); // marca o adicional
  }
  renderizarAdicionaisModal();
  atualizarLabelsTamanho();
  atualizarResumoModal();
}

function atualizarInfoAdicionais(){
  const el = document.getElementById('adicionaisInfo');
  if(modalAdicionais.length === 0){
    el.textContent = '';
    return;
  }
  const nomes = modalAdicionais.map(a => a.nome).join(', ');
  const total = modalAdicionais.reduce((s, a) => s + a.preco, 0);
  el.textContent = total > 0
    ? `✅ ${nomes} (+R$ ${total},00)`
    : `✅ ${nomes} (grátis)`;
}

// ===================== BEBIDAS =====================
function add(nome, preco){
  // adiciona bebida diretamente ao pedido
  pedido.push({ nome, detalhe: nome, preco, tipo:'outro' });
  atualizarBadge();
  showToast('✅ ' + nome + ' adicionado!');
  atualizarDrawer();
}

function remover(idx){
  // remove item pelo índice e atualiza a tela
  pedido.splice(idx, 1);
  atualizarBadge();
  atualizarDrawer();
}

function calcTotal(){
  // soma os preços de todos os itens do pedido
  return pedido.reduce((soma, item) => soma + item.preco, 0);
}

function atualizarBadge(){
  // atualiza o contador de itens no botão do carrinho
  document.getElementById('badge').textContent = pedido.length;
}

function atualizarDrawer(){
  const lista = document.getElementById('listaPedido');
  if(pedido.length === 0){
    // exibe mensagem de carrinho vazio
    lista.innerHTML = `<li class="carrinho-vazio"><span class="big">🍕</span>Seu pedido está vazio.<br>Adicione itens do cardápio!</li>`;
  } else {
    lista.innerHTML = '';
    pedido.forEach((item, idx) => {
      lista.innerHTML += `
        <li>
          <div class="item-desc">
            ${item.nome}
            ${item.tipo === 'pizza' ? `<small>${item.detalhe}</small>` : ''}
          </div>
          <span style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
            R$ ${item.preco.toFixed(2).replace('.',',')}
            <button class="remover" onclick="remover(${idx})">✕</button>
          </span>
        </li>`;
    });
  }
  // atualiza o total exibido no rodapé do carrinho
  document.getElementById('total').textContent = 'R$ ' + calcTotal().toFixed(2).replace('.',',');
}

// ===================== CARRINHO =====================
function abrirCarrinho(){
  document.getElementById('drawer').classList.add('aberto');
  document.getElementById('overlay').classList.add('aberto');
  atualizarDrawer();
}
function fecharCarrinho(){
  document.getElementById('drawer').classList.remove('aberto');
  document.getElementById('overlay').classList.remove('aberto');
}

// ===================== FINALIZAR PEDIDO =====================
function finalizarPedido(){
  if(pedido.length === 0){
    showToast('⚠️ Adicione itens antes de finalizar!');
    return;
  }
  // monta a mensagem de texto formatada para o WhatsApp
  let msg = '🍕 *Pedido - Pai e Filho Pizzaria*%0A%0A';
  pedido.forEach(i => {
    msg += `• ${i.detalhe} — R$ ${i.preco.toFixed(2).replace('.',',')}%0A`;
  });
  msg += `%0A*Total: R$ ${calcTotal().toFixed(2).replace('.',',')}*`;
  // abre o WhatsApp com a mensagem pré-preenchida
  window.open('https://wa.me/5583991664896?text=' + msg);
}

// ===================== NOTIFICAÇÃO FLUTUANTE (TOAST) =====================
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');       // faz o toast aparecer
  setTimeout(() => toast.classList.remove('show'), 2200); // some após 2,2 segundos
}