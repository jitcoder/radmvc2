export default class Application {
  constructor() {
    this.controllers = {};
    this.stores = {};
    this.services = {};
  }

  addController(Controller, key, domElement) {
    const controller = new Controller(this);
    this.controllers[key] = controller;

    controller.$element = domElement;
    this.controllers[key].index();
  }

  addStore(Store, key) {
    this.stores[key] = new Store(this);
  }

  addService(Service, key) {
    this.services[key] = new Service(this);
  }
}
