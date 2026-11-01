'use strict';

(function () {
  const { parseRoute, onHashChange } = globalThis.ACCA.router;
  const app = document.getElementById('app');

  function render() {
    app.textContent = JSON.stringify(parseRoute(window.location.hash));
  }

  onHashChange(render);
  render();
})();
