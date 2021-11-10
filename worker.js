/** worker.js **/
importScripts('./intensive.js')

// Worker Global Scope, worker script
// 'self' simply returns the current context (WorkerGlobalScope)
self.addEventListener('message', function(event) {
    const num = event.data;
    const data = intensive(num);

    self.postMessage(data);
    self.close();
});


