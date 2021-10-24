import { shallowMount, createLocalVue } from "@vue/test-utils";
import NotFound from "../not-found.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("views/not-found.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(NotFound, {
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("includes link to Pikachu", async () => {
    const wrapper = shallowMount(NotFound, {
      localVue,
    });

    const aWrapper = wrapper.find("#not-found-link-pikachu");
    expect(aWrapper.attributes().to).toBe("/pikachu");
  });
  it("includes link home", async () => {
    const wrapper = shallowMount(NotFound, {
      localVue,
    });

    const aWrapper = wrapper.find("#not-found-link-home");
    expect(aWrapper.attributes().to).toBe("/");
  });
});
