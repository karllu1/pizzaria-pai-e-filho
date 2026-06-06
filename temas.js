(function () {
  const TEMAS_VALIDOS = new Set(['normal', 'sao-joao', 'natal', 'pascoa', 'namorados']);

  function dataLocalSemHora(data) {
    return new Date(data.getFullYear(), data.getMonth(), data.getDate());
  }

  function diasEntre(inicio, fim) {
    const umDia = 24 * 60 * 60 * 1000;
    return Math.round((dataLocalSemHora(fim) - dataLocalSemHora(inicio)) / umDia);
  }

  // Algoritmo anonimo gregoriano, valido para os anos usados no calendario atual.
  function calcularPascoa(ano) {
    const a = ano % 19;
    const b = Math.floor(ano / 100);
    const c = ano % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mes = Math.floor((h + l - 7 * m + 114) / 31);
    const dia = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(ano, mes - 1, dia);
  }

  function estaNoPeriodoDaPascoa(hoje) {
    const pascoa = calcularPascoa(hoje.getFullYear());
    const distancia = diasEntre(pascoa, hoje);
    return distancia >= -7 && distancia <= 2;
  }

  function detectarTema(dataAtual) {
    const params = new URLSearchParams(window.location.search);
    const temaForcado = (params.get('tema') || '').toLowerCase();
    if (TEMAS_VALIDOS.has(temaForcado)) return temaForcado;

    const hoje = dataAtual || new Date();
    const mes = hoje.getMonth() + 1;
    const dia = hoje.getDate();

    if (mes === 6 && dia === 12) return 'namorados';
    if (mes === 6) return 'sao-joao';
    if (mes === 12) return 'natal';
    if (estaNoPeriodoDaPascoa(hoje)) return 'pascoa';

    return 'normal';
  }

  function aplicarTema(tema) {
    const temaSeguro = TEMAS_VALIDOS.has(tema) ? tema : 'normal';
    const raiz = document.documentElement;
    [...TEMAS_VALIDOS].forEach(nome => raiz.classList.remove('tema-' + nome));
    raiz.classList.add('tema-' + temaSeguro);
    raiz.dataset.tema = temaSeguro;
    return temaSeguro;
  }

  function atualizarTextosSazonais() {
    const tema = document.documentElement.dataset.tema || 'normal';
    const textos = {
      normal: {
        badge: '',
        hero: 'Monte seu pedido com até 2 sabores e borda recheada',
        resumo: 'Complete os dados para finalizar seu pedido',
        info: '🍕 Pizza quentinha'
      },
      'sao-joao': {
        badge: 'Arraiá Pai e Filho',
        hero: 'São João paraibano com pizza quentinha, combos, doces e borda recheada',
        resumo: 'Complete os dados para finalizar seu pedido no clima do São João',
        info: '🔥 Clima de São João'
      },
      natal: {
        badge: 'Natal Pai e Filho',
        hero: 'Pizza quentinha para reunir a família no clima de Natal',
        resumo: 'Complete os dados para finalizar seu pedido de Natal',
        info: '🎄 Especial de Natal'
      },
      pascoa: {
        badge: 'Páscoa Pai e Filho',
        hero: 'Doces, chocolate e pizza quentinha para celebrar a Páscoa',
        resumo: 'Complete os dados para finalizar seu pedido de Páscoa',
        info: '🍫 Semana da Páscoa'
      },
      namorados: {
        badge: 'Dia dos Namorados',
        hero: 'Uma pizza especial para dividir com quem você gosta',
        resumo: 'Complete os dados para finalizar seu pedido especial',
        info: '❤️ Especial dos Namorados'
      }
    };

    const atual = textos[tema] || textos.normal;
    document.querySelectorAll('.arraia-badge').forEach(el => {
      el.textContent = atual.badge;
    });
    const heroTexto = document.querySelector('.hero p');
    if (heroTexto) heroTexto.textContent = atual.hero;
    const resumoTexto = document.querySelector('.cliente-header p');
    if (resumoTexto) resumoTexto.textContent = atual.resumo;
    const temaInfo = document.getElementById('temaInfo');
    if (temaInfo) temaInfo.textContent = atual.info;
  }

  const temaAtual = aplicarTema(detectarTema());
  window.PizzariaTema = {
    aplicarTema,
    calcularPascoa,
    detectarTema,
    estaNoPeriodoDaPascoa,
    temaAtual
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', atualizarTextosSazonais);
  } else {
    atualizarTextosSazonais();
  }
})();
