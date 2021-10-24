import { shallowMount, createLocalVue } from "@vue/test-utils";
import SearchBar from "../nav-components/search-bar.vue";
import VueRouter from "vue-router";
import { SearchBarMockData } from "../../../tests/mocks/mock-props";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/search-bar.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: SearchBarMockData,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("placeholder displays as expected", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: SearchBarMockData,
      localVue,
    });
    const placeholder = wrapper.find("v-text-field-stub");
    expect(placeholder.attributes().placeholder).toEqual(
      "Search for your favorite Pokemon..."
    );
  });
});
