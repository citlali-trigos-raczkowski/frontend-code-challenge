import {
  SuccessAlertPropData,
  FailureAlertPropData,
} from "../../../tests/mocks/mock-props";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import FavoriteAlert from "../favorite-alert.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("components/favorite-alert.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(FavoriteAlert, {
      propsData: {
        SuccessAlertPropData,
      },
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("alert values are as expected", async () => {
    const wrapper = shallowMount(FavoriteAlert, {
      propsData: SuccessAlertPropData,
      localVue,
    });

    const aWrapper = wrapper.find("v-alert-stub");
    expect(aWrapper.attributes().id).toBe("favorite-alert");
    expect(aWrapper.attributes().dismissible).toBe("true");
  });

  it("updating show removes the alert", async () => {
    const wrapper = shallowMount(FavoriteAlert, {
      propsData: FailureAlertPropData,
      localVue,
    });
    expect(wrapper.text()).toContain("Failed to unfavorite Ivysaur");
    wrapper.setData({ show: false });
  });
});
