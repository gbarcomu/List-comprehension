Array.prototype.restrictAll = function (restrictions) {
    return restrictions.reduce((list, filt) => list.filter(elem => filt(elem)), this);
}

const comprehensionList = expression => generator => (...restrictions) =>
    new Array(generator[1] - generator[0] + 1).fill(0)
        .map((_, i) => i + generator[0])
        .restrictAll(restrictions)
        .map(x => expression(x));

module.exports = {
    comprehensionList
};