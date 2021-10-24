import { shallowMount, createLocalVue } from "@vue/test-utils";
import HeartToggle from "../heart-toggle.vue";
import VueRouter from "vue-router";
import { HeartToggleMockData } from "../../../tests/mocks/mock-props";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/heart-toggle.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(HeartToggle, {
      propsData: HeartToggleMockData,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("color sets as expected", () => {
    const wrapper = shallowMount(HeartToggle, {
      propsData: HeartToggleMockData,
      localVue,
    });

    const aWrapper = wrapper.find("v-btn-stub");
    expect(aWrapper.attributes().color).toBe(HeartToggleMockData.heartColor);
  });
});
