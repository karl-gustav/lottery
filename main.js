"use strict";

function init(doc, global) {
    const list = doc.getElementById('content');
    const urlParams = global.location.hash.substr(1);
    if (!urlParams) {
        global.location.hash = '#Bob,Alice,Jane';
        return;
    }
    const params = urlParams.split(',');
    const randomParams = shuffle(params);
    const htmlParams = randomParams
        .map(function(param) {
            return '<li>' + param + '</li>';
        })
        .join('\n');
    list.innerHTML = htmlParams;
}

init(document, window);

if ("onhashchange" in window) {
	window.onhashchange = function () {
	    init(document, window);
	};
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
