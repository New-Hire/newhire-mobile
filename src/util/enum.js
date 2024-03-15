class Enum {
  _data

  constructor(data) {
    this._data = data
  }

  getValue(index) {
    return this._data[index]
  }
}

export default Enum
