(function(){
  var storageKey = 'jus9EquipePerfisGovernadosV1';
  var forms = document.querySelectorAll('[data-local-profile-form]');
  var drafts = document.querySelector('[data-profile-drafts]');
  if(!forms.length) return;

  function read(){
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); }
    catch(_) { return []; }
  }

  function write(items){
    try { localStorage.setItem(storageKey, JSON.stringify(items.slice(0, 80))); }
    catch(_) {}
  }

  function render(){
    if(!drafts) return;
    var items = read();
    if(!items.length){
      drafts.innerHTML = '<p class="small">Nenhum rascunho local salvo ainda.</p>';
      return;
    }
    drafts.innerHTML = items.map(function(item){
      return '<article class="notice"><strong>' + escapeHtml(item.name) + '</strong><p>' +
        escapeHtml(item.email) + ' | ' + escapeHtml(item.scope) + ' | ' + escapeHtml(item.profile) +
        '</p><p class="small">' + escapeHtml(item.module || 'sem modulo') + '</p></article>';
    }).join('');
  }

  function escapeHtml(text){
    return String(text || '').replace(/[<>&"]/g, function(ch){
      return ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[ch]);
    });
  }

  forms.forEach(function(form){
    form.addEventListener('submit', function(event){
      event.preventDefault();
      var data = new FormData(form);
      var item = {
        id: 'perfil-' + Date.now(),
        scope: form.getAttribute('data-profile-scope') || 'equipe',
        name: data.get('name') || '',
        email: data.get('email') || '',
        profile: data.get('profile') || '',
        module: data.get('module') || '',
        notes: data.get('notes') || '',
        hasImageDraft: !!(data.get('image') && data.get('image').name),
        createdAt: new Date().toISOString()
      };
      var items = read();
      items.unshift(item);
      write(items);
      form.reset();
      render();
    });
  });

  render();
})();
