import Route from "@ember/routing/route";

export default class BarRoute extends Route {
  async beforeModel() {
    return this.transitionTo("foo");
  }
}
