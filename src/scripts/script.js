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

// ===================== DEFINIÇÃO DOS COMBOS =====================
// Apenas pizzas tradicionais salgadas são permitidas nos combos
const COMBOS = [
  {
    id: 'tradicional',
    nome: 'Combo Tradicional',
    emoji: '🍕',
    badge: 'Mais pedido',
    preco: 45,
    descricaoItens: [
      '1 Pizza Tradicional G (à sua escolha)',
      'Guaraná Antarctica 1L ou Pepsi 1L',
      'Entrega inclusa'
    ],
    descricaoModal: '🍕 1 Pizza Tradicional G + 🥤 Refrigerante 1L + 🛵 Entrega  — tudo por R$ 45,00',
    pizzas: [
      { slot: 'Pizza (sabores até 2)', tamanho: 'G', qtd: 1 }
    ],
    bebidas: ['Guaraná Antarctica 1L', 'Pepsi 1L'],
    temEscolhaBebida: true,
  },
  {
    id: 'familia',
    nome: 'Combo Família',
    emoji: '👨‍👩‍👧',
    badge: 'Para a família',
    preco: 80,
    descricaoItens: [
      '2 Pizzas Tradicionais G (à sua escolha)',
      'Coca-Cola 1,5L',
      'Entrega inclusa'
    ],
    descricaoModal: '🍕 2 Pizzas Tradicionais G + 🥤 Coca-Cola 1,5L + 🛵 Entrega  — tudo por R$ 80,00',
    pizzas: [
      { slot: '1ª Pizza (sabores até 2)', tamanho: 'G', qtd: 1 },
      { slot: '2ª Pizza (sabores até 2)', tamanho: 'G', qtd: 1 },
    ],
    bebidas: ['Coca-Cola 1,5L'],
    temEscolhaBebida: false,
  },
  {
    id: 'doce',
    nome: 'Combo Loucos por Doce',
    emoji: '🍫',
    badge: 'Especial doces',
    preco: 55,
    descricaoItens: [
      '1 Pizza Tradicional G (salgada ou doce)',
      '1 Pizza Tradicional P (salgada ou doce)',
      'Entrega inclusa'
    ],
    descricaoModal: '🍕 1 Pizza Tradicional G + 🍕 1 Pizza Tradicional P + 🛵 Entrega  — tudo por R$ 55,00',
    pizzas: [
      { slot: 'Pizza Grande (sabores até 2)', tamanho: 'G', qtd: 1 },
      { slot: 'Pizza Pequena (sabores até 2)', tamanho: 'P', qtd: 1 },
    ],
    bebidas: [],
    temEscolhaBebida: false,
  },
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

// Preços adicionais de borda por tamanho
const BORDA_PRECOS = {
  'Sem borda':           { P: 0,  G: 0  },
  'Requeijão':           { P: 5,  G: 8  },
  'Cheddar':             { P: 5,  G: 8  },
  'Chocolate Branco':    { P: 5,  G: 9  },
  'Chocolate ao Leite':  { P: 5,  G: 9  },
};

// ===================== HORÁRIO DE FUNCIONAMENTO =====================
// Segunda: fechado
// Terça a Domingo: pedidos a partir 17:15, funciona 17:30–22:00
function verificarHorario() {
  const agora = new Date();
  // 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sab
  const diaSemana = agora.getDay();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const totalMinutos = hora * 60 + minuto;

  const PRE_ABERTURA   = 17 * 60 + 15; // 17:15
  const ABERTURA       = 17 * 60 + 30; // 17:30
  const FECHAMENTO     = 22 * 60;       // 22:00

  const banner = document.getElementById('horarioBanner');

  if (diaSemana === 1) {
    // Segunda-feira: fechado
    banner.className = 'horario-banner segunda';
    banner.innerHTML = '😴 Hoje é segunda-feira — estamos descansando! Voltamos terça às 17h30';
    return;
  }

  if (totalMinutos >= PRE_ABERTURA && totalMinutos < ABERTURA) {
    // Pré-abertura: pode fazer pedido mas ainda não está servindo
    const minRestantes = ABERTURA - totalMinutos;
    banner.className = 'horario-banner pre-abertura';
    banner.innerHTML = `<span class="pulse"></span> Abrimos em ${minRestantes} min! Já pode montar seu pedido 🍕`;
    return;
  }

  if (totalMinutos >= ABERTURA && totalMinutos < FECHAMENTO) {
    // Aberto!
    const minParaFechar = FECHAMENTO - totalMinutos;
    const hFechar = Math.floor(minParaFechar / 60);
    const mFechar = minParaFechar % 60;
    let textoFecha = '';
    if (hFechar > 0) textoFecha = `Fechamos em ${hFechar}h${mFechar > 0 ? mFechar + 'min' : ''}`;
    else textoFecha = `Fechamos em ${mFechar} min`;
    banner.className = 'horario-banner aberto';
    banner.innerHTML = `<span class="pulse"></span> Estamos abertos! 🍕 ${textoFecha}`;
    return;
  }

  // Fora do horário
  const diasNomes = ['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
  let proximaAbertura = '';
  const aindaAbreHoje = totalMinutos < ABERTURA; // antes das 17h30, ainda abre hoje

  if (aindaAbreHoje) {
    // Ainda vai abrir hoje
    proximaAbertura = 'Abrimos hoje às 17h30';
  } else if (diaSemana === 0) {
    // Domingo após as 22h: segunda é fechado, próxima é terça
    proximaAbertura = 'Próxima abertura: terça-feira às 17h30';
  } else {
    // Após o fechamento: verifica amanhã
    const amanha = (diaSemana + 1) % 7;
    if (amanha === 1) proximaAbertura = 'Próxima abertura: terça-feira às 17h30'; // amanhã é segunda
    else proximaAbertura = `Abrimos amanhã (${diasNomes[amanha]}) às 17h30`;
  }
  banner.className = 'horario-banner fechado';
  banner.innerHTML = `🔒 Fechado no momento — ${proximaAbertura}`;
}

// Retorna true se está no horário de atendimento (17:30–22:00, exceto segunda)
function estaAberto() {
  const agora = new Date();
  const diaSemana = agora.getDay();
  if (diaSemana === 1) return false;
  const totalMinutos = agora.getHours() * 60 + agora.getMinutes();
  return totalMinutos >= (17 * 60 + 30) && totalMinutos < (22 * 60);
}

// Chama ao carregar e atualiza a cada 30 segundos
verificarHorario();
setInterval(verificarHorario, 30000);

// ===================== ESTADO DA APLICAÇÃO =====================
let pedido = [];
let catAtiva = null;
let filtroAtivo = 'todos';

// Estado do modal de montar pizza
let modalTamanho = 'P';
let modalSabores = [];
let modalBordaNome = 'Sem borda';
let modalCatAtual = 'pizza';
let modalAdicionais = [];

// Estado do modal de combo
let comboAtual = null;      // objeto do combo selecionado
let comboSabores = [];      // array de arrays, um por slot de pizza
let comboBebidaSelecionada = null;

// ===================== NAVEGAÇÃO =====================
function irParaCategorias(){
  document.getElementById('sec-cat').scrollIntoView({ behavior:'smooth' });
}

function ativarCat(cat){
  catAtiva = cat;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('ativo'));
  document.getElementById('cat-'+cat).classList.add('ativo');

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
  setTimeout(()=>{ document.getElementById('cardapio').scrollIntoView({ behavior:'smooth', block:'start' }); }, 80);
}

function filtrar(sub){
  filtroAtivo = sub;
  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
  document.getElementById('f-'+sub).classList.add('ativo');
  renderizar(catAtiva, sub);
}

// ===================== RENDERIZAR CARDÁPIO =====================
function renderizar(cat, sub){
  const cardapio = document.getElementById('cardapio');

  if (cat === 'combo') {
    renderizarCombos();
    return;
  }

  let lista = itens.filter(i => i.cat === cat);
  if(sub && sub !== 'todos') lista = lista.filter(i => i.sub === sub);

  cardapio.innerHTML = '';

  lista.forEach((item, idx) => {
    if(item.cat === 'bebida'){
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

// ===================== RENDERIZAR COMBOS =====================
function renderizarCombos(){
  const cardapio = document.getElementById('cardapio');
  cardapio.innerHTML = `<div class="combo-grid">` + COMBOS.map((combo, idx) => `
    <div class="combo-card" style="animation-delay:${idx*0.1}s">
      <div class="combo-img-wrapper">
        <div class="combo-img-overlay"></div>
        <span class="combo-img-emoji">${combo.emoji}</span>
        <span class="combo-badge">${combo.badge}</span>
      </div>
      <div class="combo-body">
        <div class="combo-info">
          <h3>${combo.nome}</h3>
          <ul class="combo-itens">
            ${combo.descricaoItens.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
        <div class="combo-preco-area">
          <div class="combo-preco">R$ ${combo.preco},00</div>
          <button class="combo-btn" onclick="abrirModalCombo('${combo.id}')">Montar</button>
        </div>
      </div>
    </div>
  `).join('') + `</div>`;
}

// ===================== MODAL MONTAR PIZZA =====================
function abrirModal(cat, nomeInicial, precoP, precoG, tam){
  modalTamanho = tam;
  modalSabores = [{ nome: nomeInicial, p: precoP, g: precoG }];
  modalBordaNome = 'Sem borda';
  modalCatAtual = cat;
  modalAdicionais = [];

  document.querySelectorAll('.tam-btn').forEach(b => b.classList.remove('ativo'));
  document.getElementById('tam-' + tam).classList.add('ativo');

  atualizarLabelsTamanho();
  renderizarSaboresModal();
  renderizarAdicionaisModal();

  document.querySelectorAll('.borda-btn').forEach(b => b.classList.remove('ativo'));
  document.querySelector('.borda-btn').classList.add('ativo');
  atualizarInfoBorda();
  atualizarResumoModal();

  document.getElementById('modalPizza').classList.add('aberto');
  document.getElementById('modalOverlay').classList.add('aberto');
}

function fecharModal(){
  document.getElementById('modalPizza').classList.remove('aberto');
  document.getElementById('modalOverlay').classList.remove('aberto');
}

function atualizarLabelsTamanho(){
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
  const saboresCat = itens.filter(i => i.cat === 'pizza' || i.cat === 'doce');

  lista.innerHTML = '';
  saboresCat.forEach(item => {
    const selecionado = modalSabores.some(s => s.nome === item.nome);
    const maxAtingido = modalSabores.length >= 2 && !selecionado;
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
    if(modalSabores.length === 1){
      showToast('⚠️ Selecione pelo menos 1 sabor!');
      return;
    }
    modalSabores.splice(idx, 1);
  } else {
    if(modalSabores.length >= 2){
      showToast('⚠️ Máximo 2 sabores por pizza!');
      return;
    }
    modalSabores.push({ nome, p: precoP, g: precoG });
  }
  renderizarSaboresModal();
  atualizarLabelsTamanho();
  atualizarResumoModal();
}

function escolherTamanho(tam, btn){
  modalTamanho = tam;
  document.querySelectorAll('.tam-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  atualizarLabelsTamanho();
  atualizarInfoBorda();
  atualizarResumoModal();
}

function escolherBordaModal(nome, _, btn){
  modalBordaNome = nome;
  document.querySelectorAll('.borda-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  atualizarInfoBorda();
  atualizarLabelsTamanho();
  atualizarResumoModal();
}

function atualizarInfoBorda(){
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
    const s1 = modalTamanho === 'P' ? modalSabores[0].p : modalSabores[0].g;
    const s2 = modalTamanho === 'P' ? modalSabores[1].p : modalSabores[1].g;
    precoBase = (s1 / 2) + (s2 / 2);
  } else {
    precoBase = modalTamanho === 'P' ? modalSabores[0].p : modalSabores[0].g;
  }

  const precoBorda = BORDA_PRECOS[modalBordaNome]?.[modalTamanho] || 0;
  const precoAdicionais = modalAdicionais.reduce((soma, a) => soma + a.preco, 0);

  return precoBase + precoBorda + precoAdicionais;
}

function atualizarResumoModal(){
  const preco = calcPrecoModal();
  const nomes = modalSabores.map(s => s.nome).join(' + ');
  document.querySelector('#modalResumo span:first-child').textContent = nomes || 'Selecione ao menos 1 sabor';
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

  let descricao = `${nomes} (${modalTamanho})`;
  if(modalBordaNome !== 'Sem borda') descricao += ` + Borda ${modalBordaNome}`;
  if(modalAdicionais.length > 0) descricao += ` + Extras: ${modalAdicionais.map(a => a.nome).join(', ')}`;

  let detalhe = `Pizza ${modalTamanho} — ${nomes}`;
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
    modalAdicionais.splice(idx, 1);
  } else {
    modalAdicionais.push({ nome, preco });
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

// ===================== MODAL COMBO =====================
function abrirModalCombo(comboId) {
  comboAtual = COMBOS.find(c => c.id === comboId);
  if (!comboAtual) return;

  // Inicializa arrays de sabores, um por slot de pizza
  comboSabores = comboAtual.pizzas.map(() => []);
  comboBebidaSelecionada = comboAtual.bebidas.length === 1 ? comboAtual.bebidas[0] : null;

  // Título
  document.getElementById('modalComboTitulo').textContent = `🎁 ${comboAtual.nome}`;

  // Descrição
  document.getElementById('modalComboDescricao').textContent = comboAtual.descricaoModal;

  // Slots de pizza
  const container = document.getElementById('comboPizzasContainer');
  container.innerHTML = '';
  comboAtual.pizzas.forEach((pizza, idx) => {
    container.innerHTML += `
      <div class="combo-pizza-slot">
        <div class="modal-section">
          <h3>${pizza.slot} <span class="hint">(Tamanho ${pizza.tamanho}) • Escolha até 2 sabores tradicionais</span></h3>
          <p class="combo-pizza-selecionada" id="comboSaborInfo${idx}">Nenhum sabor selecionado</p>
          <div class="sabores-lista" id="comboSaboresLista${idx}" style="max-height:180px;"></div>
        </div>
      </div>`;
  });

  // Bebida (se tiver escolha)
  const bebidaContainer = document.getElementById('comboBebidaContainer');
  if (comboAtual.temEscolhaBebida) {
    bebidaContainer.style.display = 'block';
    const opcoes = document.getElementById('comboBebidaOpcoes');
    opcoes.innerHTML = '';
    comboAtual.bebidas.forEach((beb, i) => {
      opcoes.innerHTML += `
        <button class="borda-btn ${i === 0 ? 'ativo' : ''}" onclick="escolherComboBebida('${beb}', this)">
          ${beb}
        </button>`;
    });
    if (!comboBebidaSelecionada) comboBebidaSelecionada = comboAtual.bebidas[0];
  } else {
    bebidaContainer.style.display = 'none';
  }

  // Renderiza os sabores de cada slot
  comboAtual.pizzas.forEach((_, idx) => renderizarSaboresCombo(idx));

  atualizarResumoCombo();

  document.getElementById('modalCombo').classList.add('aberto');
  document.getElementById('modalComboOverlay').classList.add('aberto');
}

function fecharModalCombo() {
  document.getElementById('modalCombo').classList.remove('aberto');
  document.getElementById('modalComboOverlay').classList.remove('aberto');
}

// Só mostra pizzas tradicionais (salgadas e doces)
function getSaboresTradicionais() {
  return itens.filter(i => i.sub === 'tradicionais' && (i.cat === 'pizza' || i.cat === 'doce'));
}

function renderizarSaboresCombo(slotIdx) {
  const lista = document.getElementById(`comboSaboresLista${slotIdx}`);
  if (!lista) return;

  // No combo "loucos por doce", o slot 1 (pizza P) só aceita doces tradicionais
  let saboresTrad;
  if (comboAtual && comboAtual.id === 'doce' && slotIdx === 1) {
    saboresTrad = itens.filter(i => i.cat === 'doce' && i.sub === 'tradicionais');
  } else {
    saboresTrad = getSaboresTradicionais();
  }

  const selecionados = comboSabores[slotIdx] || [];

  lista.innerHTML = '';
  saboresTrad.forEach(item => {
    const selecionado = selecionados.some(s => s.nome === item.nome);
    const maxAtingido = selecionados.length >= 2 && !selecionado;
    const catLabel = item.cat === 'doce' ? ' 🍫' : '';
    lista.innerHTML += `
      <div class="sabor-item ${selecionado ? 'selecionado' : ''} ${maxAtingido ? 'desabilitado' : ''}"
           onclick="${maxAtingido ? '' : `toggleSaborCombo(${slotIdx}, '${item.nome}', ${item.p}, ${item.g})`}">
        <div class="sabor-nome">${item.nome}${catLabel}</div>
        <div class="sabor-check">${selecionado ? '✓' : ''}</div>
      </div>`;
  });

  // Atualiza texto informativo do slot
  const infoEl = document.getElementById(`comboSaborInfo${slotIdx}`);
  if (infoEl) {
    infoEl.textContent = selecionados.length > 0
      ? '✅ ' + selecionados.map(s => s.nome).join(' + ')
      : 'Nenhum sabor selecionado';
  }
}

function toggleSaborCombo(slotIdx, nome, precoP, precoG) {
  const selecionados = comboSabores[slotIdx];
  const idx = selecionados.findIndex(s => s.nome === nome);
  if (idx >= 0) {
    if (selecionados.length === 1) {
      showToast('⚠️ Selecione pelo menos 1 sabor!');
      return;
    }
    selecionados.splice(idx, 1);
  } else {
    if (selecionados.length >= 2) {
      showToast('⚠️ Máximo 2 sabores por pizza!');
      return;
    }
    selecionados.push({ nome, p: precoP, g: precoG });
  }
  renderizarSaboresCombo(slotIdx);
  atualizarResumoCombo();
}

function escolherComboBebida(nome, btn) {
  comboBebidaSelecionada = nome;
  document.querySelectorAll('#comboBebidaOpcoes .borda-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  atualizarResumoCombo();
}

function atualizarResumoCombo() {
  if (!comboAtual) return;
  const pizzasOk = comboSabores.every(s => s.length > 0);
  const textoEl = document.getElementById('comboResumoTexto');

  if (!pizzasOk) {
    textoEl.textContent = 'Selecione os sabores de todas as pizzas';
  } else {
    const pizzasTexto = comboSabores.map((s, i) =>
      `Pizza ${i+1}: ${s.map(x => x.nome).join(' + ')}`
    ).join(' | ');
    const bebidaTexto = comboBebidaSelecionada ? ` | ${comboBebidaSelecionada}` : '';
    textoEl.textContent = pizzasTexto + bebidaTexto;
  }

  document.getElementById('comboPreco').textContent = `R$ ${comboAtual.preco},00`;
}

function confirmarCombo() {
  if (!comboAtual) return;

  // Valida que todos os slots têm pelo menos 1 sabor
  for (let i = 0; i < comboSabores.length; i++) {
    if (comboSabores[i].length === 0) {
      showToast(`⚠️ Escolha o sabor da ${i + 1}ª pizza!`);
      return;
    }
  }

  // Monta descrição resumida para o carrinho
  const pizzasNomes = comboSabores.map((s, i) => {
    const tam = comboAtual.pizzas[i].tamanho;
    return `Pizza ${tam}: ${s.map(x => x.nome).join(' + ')}`;
  }).join(', ');

  const bebidaDesc = comboBebidaSelecionada ? ` + ${comboBebidaSelecionada}` : '';
  const nomePedido = `🎁 ${comboAtual.nome}`;
  const detalhe = `${comboAtual.nome} — ${pizzasNomes}${bebidaDesc} + Entrega`;

  pedido.push({
    nome: nomePedido,
    detalhe,
    preco: comboAtual.preco,
    tipo: 'combo'
  });

  atualizarBadge();
  atualizarDrawer();
  fecharModalCombo();
  showToast('🎁 Combo adicionado ao pedido!');
}

// ===================== BEBIDAS =====================
function add(nome, preco){
  pedido.push({ nome, detalhe: nome, preco, tipo:'outro' });
  atualizarBadge();
  showToast('✅ ' + nome + ' adicionado!');
  atualizarDrawer();
}

function remover(idx){
  pedido.splice(idx, 1);
  atualizarBadge();
  atualizarDrawer();
}

function calcTotal(){
  return pedido.reduce((soma, item) => soma + item.preco, 0);
}

function atualizarBadge(){
  document.getElementById('badge').textContent = pedido.length;
}

function atualizarDrawer(){
  const lista = document.getElementById('listaPedido');
  if(pedido.length === 0){
    lista.innerHTML = `<li class="carrinho-vazio"><span class="big">🍕</span>Seu pedido está vazio.<br>Adicione itens do cardápio!</li>`;
  } else {
    lista.innerHTML = '';
    pedido.forEach((item, idx) => {
      lista.innerHTML += `
        <li>
          <div class="item-desc">
            ${item.nome}
            ${item.tipo !== 'outro' ? `<small>${item.detalhe}</small>` : ''}
          </div>
          <span style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
            R$ ${item.preco.toFixed(2).replace('.',',')}
            <button class="remover" onclick="remover(${idx})">✕</button>
          </span>
        </li>`;
    });
  }
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
  if(!estaAberto()){
    showToast('🔒 Estamos fechados! Pedidos das 17h30 às 22h (fecha seg.)');
    return;
  }
  let msg = '🍕 *Pedido - Pai e Filho Pizzaria*%0A%0A';
  pedido.forEach(i => {
    msg += `• ${i.detalhe} — R$ ${i.preco.toFixed(2).replace('.',',')}%0A`;
  });
  msg += `%0A*Total: R$ ${calcTotal().toFixed(2).replace('.',',')}*`;
  window.open('https://wa.me/5583991664896?text=' + msg);
}

// ===================== NOTIFICAÇÃO FLUTUANTE (TOAST) =====================
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}