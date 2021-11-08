var prime = (num) => {
    for (var i = 0; i <= num; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                break;
            }
        }
    }
};

// Worker Global Scope, worker script
// 'self' simply returns the current context (WorkerGlobalScope)
self.addEventListener('message', function(event) {
    const num = event.data;
    prime(num);

    self.postMessage('done');
    self.close();
});


