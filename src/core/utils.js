export var uid = (function () {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    return function (length) {
        if (length === void 0) { length = 20; }
        var result = '';
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
})();
export var noop = function () { return null; };
var Subject = /** @class */ (function () {
    function Subject(value) {
        var _this = this;
        this.subscribers = [];
        this.next = function (value) {
            _this.value = value;
            _this.subscribers.forEach(function (sub) { return sub(value); });
        };
        this.subscribe = function (callback) {
            _this.subscribers.push(callback);
            return function () {
                _this.subscribers.splice(_this.subscribers.indexOf(callback), 1);
            };
        };
        this.getState = function () { return _this.value; };
        this.value = value;
    }
    return Subject;
}());
export { Subject };
