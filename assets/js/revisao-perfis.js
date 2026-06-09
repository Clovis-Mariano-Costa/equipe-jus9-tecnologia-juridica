(function(){
  var authOrigin = 'https://jus9tecnologia.com.br';
  var list = document.querySelector('[data-profile-review-list]');
  var status = document.querySelector('[data-profile-review-status]');
  var reload = document.querySelector('[data-profile-review-reload]');
  if(!list) return;

  function escapeHtml(text){
    return String(text || '').replace(/[<>&"]/g, function(ch){
      return ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[ch]);
    });
  }

  function setStatus(message){
    if(status) status.textContent = message;
  }

  function render(items){
    if(!items.length){
      list.innerHTML = '<p class="small">Nenhuma solicitacao governada encontrada.</p>';
      return;
    }
    list.innerHTML = items.map(function(item){
      return '<article class="notice profile-review-item">' +
        '<div><strong>' + escapeHtml(item.name) + '</strong><p>' +
        escapeHtml(item.email) + ' | ' + escapeHtml(item.profile) + ' | ' + escapeHtml(item.scope) +
        '</p></div>' +
        '<p class="small">' + escapeHtml(item.module || 'sem modulo') + ' | ' + escapeHtml(item.status || 'pendente') + '</p>' +
        '<p class="small">Protocolo: ' + escapeHtml(item.id) + '</p>' +
        '<p class="small">Origem: ' + escapeHtml(item.origin || 'nao informada') + ' | Solicitante: ' + escapeHtml(item.requesterProfile || 'nao informado') + ' | ' + escapeHtml(item.createdAt || '') + '</p>' +
      '</article>';
    }).join('');
  }

  async function load(){
    setStatus('Consultando backend governado...');
    try {
      var response = await fetch(authOrigin + '/api/profile-requests', {
        credentials: 'include',
        cache: 'no-store'
      });
      var payload = await response.json().catch(function(){ return null; });
      if(response.status === 401){
        setStatus('Entre com uma conta Google autorizada para revisar solicitacoes.');
        render([]);
        return;
      }
      if(response.status === 403){
        setStatus('Sessao ativa, mas este perfil nao possui permissao de auditoria.');
        render([]);
        return;
      }
      if(!response.ok || !payload || !payload.ok){
        setStatus('Nao foi possivel carregar solicitacoes agora.');
        render([]);
        return;
      }
      setStatus('Solicitacoes carregadas para revisao humana.');
      render(payload.items || []);
    } catch (_) {
      setStatus('Falha temporaria ao consultar o backend governado.');
      render([]);
    }
  }

  if(reload) reload.addEventListener('click', load);
  load();
})();
