import { mount } from "@vue/test-utils";
import Evolutions from "../evolutions.vue";
import EvolutionTile from "../evolution-tile.vue";

// describe("App", () => {
  // Inspect the raw component options
//   it("has data", () => {
//     expect(typeof Evolutions.component).toBe("function");
//   });
// });

describe("Mounted App", () => {
  const wrapper = mount(Evolutions);

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      "<h2 id='fall-left'>Evolutions</h2>"
    );
  });

  // it's also easy to check for the existence of elements
  it("has a buttons", () => {
      console.log(wrapper.findAllComponents)
    expect(wrapper.get("pokemon-evolution-tile")).toBe(true);
  });

//   it("renders correctly with different data", async () => {
//     wrapper.setData({ x1: 5, x2: 10 });
//     await wrapper.vm.$nextTick();
//     expect(wrapper.text()).toContain("10");
//   });

//   it("button click without correct sum", () => {
//     expect(wrapper.vm.message).toBe("");
//     const button = wrapper.find("button");
//     button.trigger("click");
//     expect(wrapper.vm.message).toBe("TRY AGAIN");
//   });

//   it("button click with correct sum", () => {
//     wrapper.setData({ guess: "15" });
//     const button = wrapper.find("button");
//     button.trigger("click");
//     expect(wrapper.vm.message).toBe("SUCCESS!");
//   });
});