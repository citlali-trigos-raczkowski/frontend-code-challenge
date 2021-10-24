import { PokemonGalleryItemMockProp } from "../../../tests/mocks/mock-props";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import PokemonList from "../pokemon-list.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("components/pokemon-list.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(PokemonList, {
      propsData: PokemonGalleryItemMockProp,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("includes link to the pokemon", async () => {
    const wrapper = shallowMount(PokemonList, {
      propsData: PokemonGalleryItemMockProp,
      localVue,
    });

    const aWrapper = wrapper.find("router-link-stub");
    expect(aWrapper.attributes().to).toBe(
      PokemonGalleryItemMockProp.pokemon.name
    );
  });

  it("heart toggle listens", async () => {
    const wrapper = shallowMount(PokemonList, {
      propsData: PokemonGalleryItemMockProp,
      localVue,
    });
    const heartToggle = wrapper.find("heart-toggle-stub");
    heartToggle.trigger("togglepokemonfavorite");

    expect(heartToggle.attributes().heartcolor).toBe("pink");
  });
});
