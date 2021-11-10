const intensive = (num) => {
    for(let i = 0; i <= num; i++) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                break;
            }
        }
    }
};

// Worker Global Scope, worker script
// 'self' simply returns the current context (WorkerGlobalScope)
self.addEventListener('message', function(event) {
    const num = event.data;
    intensive(num);

    self.postMessage('done');
    self.close();
});


