import { shallowMount, createLocalVue } from "@vue/test-utils";
import DropdownFilter from "../nav-components/dropdown-filter.vue";
import VueRouter from "vue-router";
import { DropdownFilterMockData } from "../../../tests/mocks/mock-props";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/dropdown-filter.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(DropdownFilter, {
      propsData: DropdownFilterMockData,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
