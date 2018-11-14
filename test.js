const {comprehensionList} = require('./');

console.log(
    comprehensionList(x => x * 10)
        ([10, 30])
        (x => x % 2 === 0, x => x <= 18  || x >= 22)
);