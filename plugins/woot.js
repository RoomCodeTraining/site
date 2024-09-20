// plugins/woot.js

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  // Fonction pour charger Chatwoot
  const loadChatwoot = () => {
    (function(d, t) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function() {
        window.chatwootSDK.run({
          websiteToken: 'CQ2TLqqMfybCMmpd7gg7ufEa',
          baseUrl: BASE_URL
        });
      }
    })(document, "script");
  };

  // Appel de la fonction pour charger Chatwoot
  loadChatwoot();
});
