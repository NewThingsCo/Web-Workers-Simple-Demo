/** longRunningTask.js **/

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
        console.log(
            intensive(200000)
        );
        enableElm(elm);
    }, 100)
};

const runHeavyTaskWorkerThread = function(elm) {
    if(!window.Worker) {
        alert('Web workers are not supported by your browser.')
        return;
    }
    disableElm(elm);
    const worker = new Worker("./worker.js");
    worker.postMessage(200000);
    worker.addEventListener('message', function(data) {
        console.log(data.data);
        enableElm(elm);
    });
};
