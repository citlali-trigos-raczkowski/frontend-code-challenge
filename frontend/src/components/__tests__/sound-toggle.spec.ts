import { shallowMount, createLocalVue } from "@vue/test-utils";
import SoundToggle from "../sound-toggle.vue";
import VueRouter from "vue-router";
import { SoundToggleMockData } from "../../../tests/mocks/mock-props";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/heart-toggle.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(SoundToggle, {
      propsData: SoundToggleMockData,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("sound source sets as expected", () => {
    const wrapper = shallowMount(SoundToggle, {
      propsData: SoundToggleMockData,
      localVue,
    });

    const aWrapper = wrapper.find("source");
    expect(aWrapper.attributes().src).toBe(SoundToggleMockData.sound);
  });

  it("sound plays on click", () => {
    const wrapper = shallowMount(SoundToggle, {
      propsData: SoundToggleMockData,
      localVue,
    });
    wrapper.find("v-btn-stub").trigger("click");
  });
});
