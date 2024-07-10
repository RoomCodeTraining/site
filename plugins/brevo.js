// plugins/brevo.js
export default ({ app }) => {
if (process.client) {
(function(d, w, c) {
w.BrevoConversationsID = '668eb35ad7576d3cd356435e';
w[c] = w[c] || function() {
(w[c].q = w[c].q || []).push(arguments);
};
var s = d.createElement('script');
s.async = true;
s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
if (d.head) d.head.appendChild(s);
})(document, window, 'BrevoConversations');
}
};
