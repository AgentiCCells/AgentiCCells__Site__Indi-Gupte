// Small first-party enhancements; every page works without them. Code Apache-2.0.
// Written by developer.indi-gupte@AgentiCCells.dinis, round 1 (pattern from the Marc Noah site's lib.mjs SCRIPT).
// 1. The Designs link becomes a button that opens the dialog (aria-haspopup and aria-controls set here, C46).
// 2. Copy buttons on /agents/. 3. Turn over on The Card design (below 1100 px only). 4. Click to play.
// Round 2: the five dialog previews are decoded on the first hover or focus of the Designs button (R6.4), and
// "More" on The Card opens its details (R2.5).
(function () {
  var d = document, opener = null;
  var dlg = d.getElementById('designs');
  var decoded = false;
  var decodePreviews = function () {
    if (decoded || !dlg) return; decoded = true;
    dlg.querySelectorAll('img').forEach(function (img) { if (img.decode) img.decode().catch(function () {}); });
  };
  d.querySelectorAll('[data-dialog="designs"]').forEach(function (a) {
    if (!dlg || !dlg.showModal) return;
    a.addEventListener('pointerenter', decodePreviews);
    a.addEventListener('focus', decodePreviews);
    a.setAttribute('aria-haspopup', 'dialog');
    a.setAttribute('aria-controls', 'designs');
    a.setAttribute('role', 'button');
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault(); decodePreviews(); opener = a; dlg.showModal();
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
  var cards = d.getElementById('bcard');
  if (cards) {
    var fw = cards.querySelector('.front-w'), bw = cards.querySelector('.back-w'), btn = d.getElementById('turn');
    var narrow = window.matchMedia('(max-width: 1099px)');
    var set = function (flipped) {
      cards.classList.toggle('flipped', flipped);
      var flipping = narrow.matches;
      [[fw, flipping && flipped], [bw, flipping && !flipped]].forEach(function (p) {
        if (p[1]) { p[0].setAttribute('aria-hidden', 'true'); p[0].inert = true; } else { p[0].removeAttribute('aria-hidden'); p[0].inert = false; }
      });
      btn.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      btn.textContent = flipped ? 'Show the front' : 'Turn over';
    };
    cards.classList.add('js'); btn.hidden = false; set(false);
    btn.addEventListener('click', function () { set(!cards.classList.contains('flipped')); });
    if (narrow.addEventListener) narrow.addEventListener('change', function () { set(cards.classList.contains('flipped')); });
  }
  var more = d.getElementById('more');
  if (more && more.tagName === 'DETAILS') {
    var openMore = function () { if (location.hash === '#more') { more.open = true; } };
    window.addEventListener('hashchange', openMore); openMore();
    d.querySelectorAll('a[href="#more"]').forEach(function (a) { a.addEventListener('click', function () { more.open = true; }); });
  }
})();