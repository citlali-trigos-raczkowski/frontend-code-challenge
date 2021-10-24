import { PokemonGalleryItemMockProp } from "../../../tests/mocks/mock-props";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import PokemonTile from "../pokemon-tile.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("components/pokemon-tile.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(PokemonTile, {
      propsData: PokemonGalleryItemMockProp,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("includes link to the pokemon", async () => {
    const wrapper = shallowMount(PokemonTile, {
      propsData: PokemonGalleryItemMockProp,
      localVue,
    });

    const aWrapper = wrapper.find("router-link-stub");
    expect(aWrapper.attributes().to).toBe(
      PokemonGalleryItemMockProp.pokemon.name
    );
  });

  it("heart toggle listens", async () => {
    const wrapper = shallowMount(PokemonTile, {
      propsData: PokemonGalleryItemMockProp,
      localVue,
    });
    const heartToggle = wrapper.find("heart-toggle-stub");
    heartToggle.trigger("togglepokemonfavorite");

    expect(heartToggle.attributes().heartcolor).toBe("pink");
  });
});
