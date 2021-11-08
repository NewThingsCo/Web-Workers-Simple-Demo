var prime = (num) => {
    for (var i = 0; i <= num; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                break;
            }
        }
    }
};
