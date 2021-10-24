import { shallowMount, createLocalVue } from "@vue/test-utils";
import NightModeToggle from "../night-mode-toggle.vue";
import VueRouter from "vue-router";
import { NightModeToggleMockData } from "../../../tests/mocks/mock-props";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/night-mode-toggle.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(NightModeToggle, {
      propsData: NightModeToggleMockData,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
