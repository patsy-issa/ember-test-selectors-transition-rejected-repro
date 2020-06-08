import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | transition aborts on redirect", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting / redirects to foo", async function (assert) {
    await visit("/");

    assert.equal(currentURL(), "/foo");
  });
});
