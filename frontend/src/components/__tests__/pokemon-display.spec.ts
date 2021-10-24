import { PokemonDisplayMockProp } from "../../../tests/mocks/mock-props";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import PokemonDisplay from "../pokemon-display.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("components/pokemon-display.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(PokemonDisplay, {
      propsData: PokemonDisplayMockProp,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  //   it("button opens up detail view", async () => {
  //     const wrapper = shallowMount(PokemonDisplay, {
  //       propsData: PokemonDisplayMockProps,
  //       localVue,
  //     });

  //     const aWrapper = wrapper.find("router-link-stub");
  //     expect(aWrapper.attributes().to).toBe(sampleEvolutionPokemon.name);
  //   });
});
