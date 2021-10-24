import { shallowMount, createLocalVue } from "@vue/test-utils";
import Footer from "../footer.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/footer.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Footer, {
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("includes expected values", () => {
    const wrapper = shallowMount(Footer, {
      localVue,
    });
    expect(wrapper.text()).toContain("Thanks for visiting!");
    expect(wrapper.text()).toContain("mdi-linkedin");
    expect(wrapper.text()).toContain("mdi-github");
  });
});
