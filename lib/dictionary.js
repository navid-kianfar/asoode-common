"use strict";
exports.__esModule = true;
exports.NumberDictionary = exports.StringDictionary = void 0;
var StringDictionary = /** @class */ (function () {
    function StringDictionary() {
        this.items = {};
        this.count = 0;
    }
    StringDictionary.prototype.containsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    StringDictionary.prototype.length = function () {
        return this.count;
    };
    StringDictionary.prototype.add = function (key, value) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }
        this.items[key] = value;
    };
    StringDictionary.prototype.remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    StringDictionary.prototype.item = function (key) {
        return this.items[key];
    };
    StringDictionary.prototype.keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    StringDictionary.prototype.values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return StringDictionary;
}());
exports.StringDictionary = StringDictionary;
var NumberDictionary = /** @class */ (function () {
    function NumberDictionary() {
        this.items = {};
        this.count = 0;
    }
    NumberDictionary.prototype.containsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    NumberDictionary.prototype.length = function () {
        return this.count;
    };
    NumberDictionary.prototype.add = function (key, value) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }
        this.items[key] = value;
    };
    NumberDictionary.prototype.remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    NumberDictionary.prototype.item = function (key) {
        return this.items[key];
    };
    NumberDictionary.prototype.keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(+prop);
            }
        }
        return keySet;
    };
    NumberDictionary.prototype.values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return NumberDictionary;
}());
exports.NumberDictionary = NumberDictionary;
