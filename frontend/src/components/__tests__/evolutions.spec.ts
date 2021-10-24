import { shallowMount, createLocalVue } from "@vue/test-utils";
import Evolutions from "../evolutions.vue";
import { sampleEvolutionPokemon } from "../../../tests/mocks/mock-props";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("component/evolutions.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Evolutions, {
      propsData: { pokemonEvolutions: [sampleEvolutionPokemon] },
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
