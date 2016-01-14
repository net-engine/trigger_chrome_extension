document.addEventListener('DOMContentLoaded', function() {
  setupLinks();
});

function setupLinks() {
  var links = Array.prototype.slice.call(document.getElementsByTagName('a'));

  links.forEach(function(link) {
    link.onclick = function(element) {
      chrome.tabs.create({ url: element.target.href });
    };
  });
}
