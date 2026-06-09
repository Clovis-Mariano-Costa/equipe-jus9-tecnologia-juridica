(function(){
  var authOrigin = 'https://jus9tecnologia.com.br';
  var list = document.querySelector('[data-profile-review-list]');
  var auditList = document.querySelector('[data-profile-audit-list]');
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
        '<label class="small">Observacao da revisao<textarea rows="2" data-review-notes="' + escapeHtml(item.id) + '" placeholder="Motivo ou cuidado humano."></textarea></label>' +
        '<div class="review-actions">' +
          '<button class="btn primary" type="button" data-review-action="aprovar" data-review-id="' + escapeHtml(item.id) + '">Aprovar</button>' +
          '<button class="btn" type="button" data-review-action="pendente" data-review-id="' + escapeHtml(item.id) + '">Pendente</button>' +
          '<button class="btn danger" type="button" data-review-action="reprovar" data-review-id="' + escapeHtml(item.id) + '">Reprovar</button>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderAudit(items){
    if(!auditList) return;
    if(!items.length){
      auditList.innerHTML = '<p class="small">Nenhuma decisao registrada ainda.</p>';
      return;
    }
    auditList.innerHTML = items.map(function(item){
      return '<article class="notice profile-audit-item">' +
        '<strong>' + escapeHtml(item.action || 'acao') + ' | ' + escapeHtml(item.status || 'status') + '</strong>' +
        '<p>' + escapeHtml(item.name || 'sem nome') + ' | ' + escapeHtml(item.email || 'sem e-mail') + '</p>' +
        '<p class="small">Protocolo: ' + escapeHtml(item.id || '') + ' | Revisor: ' + escapeHtml(item.reviewer && item.reviewer.profile || 'nao informado') + ' | ' + escapeHtml(item.at || '') + '</p>' +
        (item.notes ? '<p class="small">Observacao: ' + escapeHtml(item.notes) + '</p>' : '') +
      '</article>';
    }).join('');
  }

  async function sendAction(id, action){
    var notesField = document.querySelector('[data-review-notes="' + CSS.escape(id) + '"]');
    var notes = notesField ? notesField.value : '';
    setStatus('Registrando decisao governada...');
    var response = await fetch(authOrigin + '/api/profile-requests/action', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, action: action, notes: notes })
    });
    var payload = await response.json().catch(function(){ return null; });
    if(!response.ok || !payload || !payload.ok){
      throw new Error((payload && (payload.error || payload.message)) || 'acao_nao_confirmada');
    }
    setStatus('Decisao registrada: ' + payload.status + '.');
    await load();
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
      loadAudit();
    } catch (_) {
      setStatus('Falha temporaria ao consultar o backend governado.');
      render([]);
      renderAudit([]);
    }
  }

  async function loadAudit(){
    if(!auditList) return;
    try {
      var response = await fetch(authOrigin + '/api/profile-requests/audit', {
        credentials: 'include',
        cache: 'no-store'
      });
      var payload = await response.json().catch(function(){ return null; });
      if(!response.ok || !payload || !payload.ok){
        renderAudit([]);
        return;
      }
      renderAudit(payload.items || []);
    } catch (_) {
      renderAudit([]);
    }
  }

  if(reload) reload.addEventListener('click', load);
  list.addEventListener('click', async function(event){
    var button = event.target.closest('[data-review-action]');
    if(!button) return;
    button.disabled = true;
    try {
      await sendAction(button.getAttribute('data-review-id'), button.getAttribute('data-review-action'));
    } catch (error) {
      setStatus('Nao foi possivel registrar decisao. Motivo: ' + (error.message || 'falha temporaria') + '.');
    } finally {
      button.disabled = false;
    }
  });
  load();
})();
