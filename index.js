const receivesAFunction = (fun) => {
    returnsANamedFunction();
    return fun();
};
const returnsANamedFunction = function() {
    return function a() {
        1 + 1;
    };
};
const returnsAnAnonymousFunction = () => {
    return function() {
        1 + 1;
    };
};