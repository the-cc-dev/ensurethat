'use strict';

module.exports = function () {
  var Validator = function () {};

  Validator.prototype.name = 'string';

  Validator.prototype.isValid = function (value) {
    return typeof value === 'string';
  };

  Validator.prototype.defaultValue = function () {
    return '';
  };

  return Validator;
};
