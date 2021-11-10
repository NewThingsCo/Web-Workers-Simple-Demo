/** intensive.js **/

const intensive = (num) => {
    const arr = [];
    for(let i = 0; i <= num; i++) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                arr.push(i);
                break;
            }
        }
    }
    return arr;
};
