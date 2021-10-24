import { sampleEvolutionPokemon } from "../../../tests/mocks/mock-props";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import EvolutionTile from "../evolution-tile.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("components/evolution-tile.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(EvolutionTile, {
      propsData: { pokemon: sampleEvolutionPokemon },
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("button opens up detail view", async () => {
    const wrapper = shallowMount(EvolutionTile, {
      propsData: { pokemon: sampleEvolutionPokemon },
      localVue,
    });

    const aWrapper = wrapper.find("router-link-stub");
    expect(aWrapper.attributes().to).toBe(sampleEvolutionPokemon.name);
  });
});
