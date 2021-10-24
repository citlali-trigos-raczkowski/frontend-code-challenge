import { shallowMount, createLocalVue } from "@vue/test-utils";
import Loader from "../loader.vue";
import VueRouter from "vue-router";
import { ExpectedLoaderData } from "../../../tests/mocks/expected-data";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/loader.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Loader, {
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("includes expected values", () => {
    const wrapper = shallowMount(Loader, {
      localVue,
    });
    const aWrapper = wrapper.find("v-progress-circular-stub");

    expect(aWrapper.attributes().size).toBe(ExpectedLoaderData.size);
    expect(aWrapper.attributes().width).toBe(ExpectedLoaderData.width);
    expect(aWrapper.attributes().indeterminate).toBe(
      ExpectedLoaderData.indeterminate
    );
    expect(aWrapper.attributes().color).toBe(ExpectedLoaderData.color);
  });
});
