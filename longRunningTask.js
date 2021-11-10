const prime = (num) => {
    for(let i = 0; i <= num; i++) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                break;
            }
        }
    }
};

const disableElm = function(elm) {
    elm.classList.add('spinner');
    elm.setAttribute('disabled', 'disabled');
};

const enableElm = function(elm) {
    elm.classList.remove('spinner');
    elm.removeAttribute('disabled');
};

const runHeavyTaskMainThread = function(elm) {
    disableElm(elm);
    // setTimeout exists to allow the button a chance to change
    // otherwise that too is blocked by the prime calculations
    setTimeout(function() {
        prime(200000);
        enableElm(elm);
    }, 100)
};

const runHeavyTaskWorkerThread = function(elm) {
    if(!window.Worker) {
        alert('Web workers are not supported by your browser.')
        return;
    }
    disableElm(elm);
    var worker = new Worker("./worker.js");
    worker.postMessage(200000);
    worker.addEventListener('message', function() {
        enableElm(elm);
    });
};
