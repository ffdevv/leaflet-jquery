class NamedClass {
  static get _name() {
    return "NamedClass";
  }
  static getClassName() {
    return this._name;
  }
  getClassName() {
    return this.constructor.getClassName();
  }
}

// derive in this way:
/*
  class DerivedClass extends NamedClass {
      static get _name() { return 'DerivedClass'; }
  }
*/

export default NamedClass;
