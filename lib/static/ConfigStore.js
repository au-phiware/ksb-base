export default class ConfigStore {
  constructor() {
    this.id = 'ConfigStore'
    this.version = 1
    this.current = {}
    this.next = {}
    this.last = {}
    this.flags = {
      modified: false,
      initialised: false,
      created: true
    }
  }
  initialise() {}
  isModified() {}
  set(){}
  get(){}
  resolve(){}
  match(){}
  serialize(){}
}
