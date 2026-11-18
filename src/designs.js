// Small first-party enhancements; every page works without them. Code Apache-2.0.
// Written by developer.indi-gupte@AgentiCCells.dinis, round 1 (pattern from the Marc Noah site's lib.mjs SCRIPT).
// 1. The Designs link becomes a button that opens the dialog (aria-haspopup and aria-controls set here, C46).
// 2. Copy buttons on /agents/. 3. Turn over on The Card design.
(function () {
  var d = document, opener = null;
  var dlg = d.getElementById('designs');
  d.querySelectorAll('[data-dialog="designs"]').forEach(function (a) {
    if (!dlg || !dlg.showModal) return;
    a.setAttribute('aria-haspopup', 'dialog');
    a.setAttribute('aria-controls', 'designs');
    a.setAttribute('role', 'button');
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault(); opener = a; dlg.showModal();
      var h = d.getElementById('dlg-h'); if (h) h.focus();
    });
    a.addEventListener('keydown', function (e) { if (e.key === ' ') { e.preventDefault(); a.click(); } });
  });
  if (dlg) {
    dlg.addEventListener('click', function (e) {
      if (e.target !== dlg) return;
      var r = dlg.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dlg.close();
    });
    dlg.addEventListener('close', function () { if (opener) { opener.focus(); opener = null; } });
  }
  d.querySelectorAll('pre.prompt').forEach(function (pre) {
    if (!navigator.clipboard) return;
    var b = d.createElement('button'); b.type = 'button'; b.className = 'copy'; b.textContent = 'Copy';
    b.addEventListener('click', function () {
      navigator.clipboard.writeText(pre.textContent).then(function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 2000); });
    });
    pre.insertAdjacentElement('afterend', b);
  });
  // 4. Click to play: the youtube-nocookie.com frame is made only on a press.
  d.querySelectorAll('a[data-yt]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      var f = d.createElement('iframe');
      f.src = a.getAttribute('data-yt'); f.title = a.getAttribute('data-title') || 'Video';
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true;
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      a.replaceWith(f); f.focus();
    });
  });
  var card = d.querySelector('.bcard');
  if (card) {
    var front = card.querySelector('.face.front'), back = card.querySelector('.face.back'), btn = d.getElementById('turn');
    card.classList.add('js');
    var set = function (flipped) {
      card.classList.toggle('flipped', flipped);
      front.setAttribute('aria-hidden', flipped ? 'true' : 'false'); back.setAttribute('aria-hidden', flipped ? 'false' : 'true');
      front.inert = flipped; back.inert = !flipped;
      btn.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    };
    btn.hidden = false; set(false);
    btn.addEventListener('click', function () { set(!card.classList.contains('flipped')); });
  }
})();
