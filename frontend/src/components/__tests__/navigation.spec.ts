import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navigation from "../navigation.vue";
import VueRouter from "vue-router";
import { NavigationMockData } from "../../../tests/mocks/mock-props";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/navigation.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Navigation, {
      propsData: NavigationMockData,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
