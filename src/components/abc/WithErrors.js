import {NamedClass} from './NamedClass';

class WithErrors extends NamedClass {
  static get _name() { return 'WithErrors'; }
  
  static _err(type, msg) { return `${this._name}.${type}: ${msg}`; }
  static _runtimeErr(msg) { return this._err('Runtime', msg); }
  static _typeErr(msg) { return this._err('Type', msg); }
  static _valueErr(msg) { return this._err('Value', msg); }
  static _notImplementedErr(msg) { return this._err('NotImplementedError', msg); }
  
  _runtimeErr(msg) { return this.constructor._runtimeErr(msg); }
  _typeErr(msg) { return this.constructor._typeErr(msg); }
  _valueErr(msg) { return this.constructor._valueErr(msg); }
  _notImplementedErr(msg) { return this.constructor._notImplementedErr(msg); }
}

export {
  WithErrors,
};
