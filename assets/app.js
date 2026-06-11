/* Agentic Government Protocol — interactive home demo.
 * Progressive enhancement: if this script doesn't run, the demo degrades to
 * a fully readable, stacked walkthrough. No dependencies. */
(function () {
  'use strict';
  /* Per-channel copy. The protocol (right column) never changes — only how the
   * person on the left reaches it. */
  var CHANNELS = {
    agent: 'Through <strong>Maria’s own consumer AI agent</strong> — the assistant she already uses. It speaks AGP to the government agent for her. The exchange on the right is identical on every channel.',
    app:   'Through a <strong>free government-offered agent app</strong> — no third-party account needed. Same AGP exchange on the right.',
    sms:   'By <strong>texting 1‑800‑GOVERNMENT</strong> — a text-only agent carries the very same exchange for anyone without a smartphone or data plan.',
    phone: 'By <strong>calling 1‑800‑GOVERNMENT</strong> and talking to a voice agent — full access with no app at all. The protocol on the right is unchanged.'
  };

  var demos = document.querySelectorAll('[data-demo]');
  Array.prototype.forEach.call(demos, function (demo) {
    var tabs    = Array.prototype.slice.call(demo.querySelectorAll('.demo__tab'));
    var bubbles = Array.prototype.slice.call(demo.querySelectorAll('.bubble'));
    var panels  = Array.prototype.slice.call(demo.querySelectorAll('.demo__bts'));
    var dots    = Array.prototype.slice.call(demo.querySelectorAll('.demo__dot'));
    var chans   = Array.prototype.slice.call(demo.querySelectorAll('.demo__chan'));
    var note    = demo.querySelector('[data-channel-note]');
    var chat    = demo.querySelector('[data-chat]');
    var prev    = demo.querySelector('.demo__prev');
    var next    = demo.querySelector('.demo__next');
    if (!tabs.length) return;

    chans.forEach(function (c) {
      c.addEventListener('click', function () { setChannel(c.getAttribute('data-channel')); });
    });
    function setChannel(key) {
      if (!CHANNELS[key]) return;
      demo.setAttribute('data-channel', key);
      chans.forEach(function (c) {
        var on = c.getAttribute('data-channel') === key;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-checked', on ? 'true' : 'false');
      });
      if (note) note.innerHTML = CHANNELS[key];
    }

    var n = tabs.length, i = 0;
    demo.setAttribute('data-enhanced', '');

    function render() {
      tabs.forEach(function (t, idx) {
        var active = idx === i;
        t.classList.toggle('is-active', active);
        t.classList.toggle('is-done', idx < i);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
        t.tabIndex = active ? 0 : -1;
      });
      bubbles.forEach(function (b) {
        b.classList.toggle('is-shown', (+b.getAttribute('data-stage')) <= i);
      });
      panels.forEach(function (p, idx) { p.classList.toggle('is-active', idx === i); });
      dots.forEach(function (d, idx) { d.classList.toggle('is-on', idx === i); });
      if (prev) prev.disabled = i === 0;
      if (next) next.textContent = i === n - 1 ? 'Start over ↻' : 'Next step →';
      // Keep the latest message in view within the fixed-height chat column.
      if (chat) chat.scrollTop = chat.scrollHeight;
    }

    function go(to) { i = Math.max(0, Math.min(n - 1, to)); render(); }

    tabs.forEach(function (t, idx) {
      t.addEventListener('click', function () { go(idx); });
      t.addEventListener('keydown', function (e) {
        var k = e.key;
        if (k === 'ArrowRight' || k === 'ArrowDown') { e.preventDefault(); go(i + 1); tabs[i].focus(); }
        else if (k === 'ArrowLeft' || k === 'ArrowUp') { e.preventDefault(); go(i - 1); tabs[i].focus(); }
        else if (k === 'Home') { e.preventDefault(); go(0); tabs[0].focus(); }
        else if (k === 'End') { e.preventDefault(); go(n - 1); tabs[n - 1].focus(); }
      });
    });
    if (prev) prev.addEventListener('click', function () { go(i - 1); });
    if (next) next.addEventListener('click', function () { go(i === n - 1 ? 0 : i + 1); });

    render();
  });
})();
