var prime = (num) => {
    for (var i = 0; i <= num; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                break;
            }
        }
    }
};

var disableElm = function(elm) {
    elm.classList.add('spinner');
    elm.setAttribute('disabled', 'disabled');
}

var enableElm = function(elm) {
    elm.classList.remove('spinner');
    elm.removeAttribute('disabled');
}

var runHeavyTaskMainThread = function(elm) {
    disableElm(elm);
    // setTimeout exists to allow the button a chance to change
    // otherwise that too is blocked by the prime calculations
    setTimeout(function() {
        prime(200000);
        enableElm(elm);
    }, 100)
};

var runHeavyTaskWorkerThread = function(elm) {
    disableElm(elm);
    var worker = new Worker("./worker.js");
    worker.postMessage(200000);
    worker.addEventListener('message', function() {
        enableElm(elm);
    });
};
