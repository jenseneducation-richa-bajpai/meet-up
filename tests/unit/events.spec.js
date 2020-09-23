import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue,
} from "@vue/test-utils";
import Events from "@/components/Events.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
router.push("/description/1");

describe("Events", () => {
  it("should show the correct name in the event component", async () => {
    let wrapper, event;
    (event = {
      name: "October Design meet up",
    }),
      (wrapper = shallowMount(Events, {
        propsData: {
          event: event,
        },
        stubs: {
          "router-link": true,
          Header: true,
        },
      }));
    let expected = "October Design meet up";
    let actual = wrapper.find(".event-name").text();
    expect(actual).toBe(expected);
  });

  it("should show the correct location in the event component", async () => {
    let wrapper, event;
    (event = {
      location: "Surrbrusgatan, Stockholm",
    }),
      (wrapper = shallowMount(Events, {
        propsData: {
          event: event,
        },
        stubs: {
          "router-link": true,
          Header: true,
        },
      }));
    let expected = "Surrbrusgatan, Stockholm";
    let actual = wrapper.find(".place").text();
    expect(actual).toBe(expected);
  });

  it("should go to /description/1", () => {
    let event = {
      id: 1,
      name: "October Design meet up",
      date: "Thu Oct 1",
      time: "6:00 PM",
      location: "Surrbrusgatan, Stockholm",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
    };
    let wrapper;
    wrapper = mount(Events, {
      localVue,
      router: router,
      propsData: { event: event },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const expected = "/description/1";
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props("to")).toBe(expected);
  });
});
