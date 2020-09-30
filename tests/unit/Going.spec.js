import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Going from "@/components/Going.vue";
import Events from "@/components/Events.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Going", () => {
  it("should have to show  1 product  when rendering", async () => {
    let wrapper, events;
    events = [
      {
        id: 1,
        name: "October Design meet up",
        date: "Thu Oct 1",
        time: "6:00 PM",
        location: "Surrbrusgatan, Stockholm",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
      },
      {
        id: 8,
        name: "Indo Art Forms",
        date: "Sun Oct 18",
        time: "4:00 PM",
        location: "Vasagatan, Stockholm",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
      },
    ];

    wrapper = mount(Going, {
      propsData: { events },
      stubs: {
        "router-link": true,
        Header: true,
      },
    });
    const expected = 1;
    const actual = wrapper.findAll(".going").length;
    expect(actual).toBe(expected);
  });
});
