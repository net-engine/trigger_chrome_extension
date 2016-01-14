document.addEventListener('DOMContentLoaded', function() {
  setupLinks();
  setupTaskIdInput();
});

function setupLinks() {
  var links = Array.prototype.slice.call(document.getElementsByTagName('a'));

  links.forEach(function(link) {
    link.onclick = function(element) {
      chrome.tabs.create({ url: element.target.href });
    };
  });
}

function setupTaskIdInput() {
  document.getElementById('taskId').onkeyup = function(element) {
    if(element.keyCode === 13) {
      chrome.tabs.create({ url: 'https://netengine.triggerapp.com/tasks/' + element.target.value });
    }
  };
}
