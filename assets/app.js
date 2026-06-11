/* Agentic Government Protocol — interactive home demo.
 * Progressive enhancement: if this script doesn't run, the demo degrades to
 * a fully readable, stacked walkthrough. No dependencies. */
(function () {
  'use strict';
  var demos = document.querySelectorAll('[data-demo]');
  Array.prototype.forEach.call(demos, function (demo) {
    var tabs    = Array.prototype.slice.call(demo.querySelectorAll('.demo__tab'));
    var bubbles = Array.prototype.slice.call(demo.querySelectorAll('.bubble'));
    var panels  = Array.prototype.slice.call(demo.querySelectorAll('.demo__bts'));
    var dots    = Array.prototype.slice.call(demo.querySelectorAll('.demo__dot'));
    var prev    = demo.querySelector('.demo__prev');
    var next    = demo.querySelector('.demo__next');
    if (!tabs.length) return;

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
