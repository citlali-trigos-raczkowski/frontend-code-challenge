import { shallowMount, createLocalVue } from "@vue/test-utils";
import Title from "../title.vue";
import VueRouter from "vue-router";
import { TitleMockData } from "../../../tests/mocks/mock-props";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/title.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Title, {
      propsData: TitleMockData,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("prop title is displayed", () => {
    const wrapper = shallowMount(Title, {
      propsData: TitleMockData,
      localVue,
    });
    expect(wrapper.text()).toContain("");
  });

  it("includes link back home", () => {
    const wrapper = shallowMount(Title, {
      propsData: TitleMockData,
      localVue,
    });
    const aWrapper = wrapper.find("router-link-stub");
    expect(aWrapper.attributes().to).toBe("/");
  });
});
