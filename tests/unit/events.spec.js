import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue,
} from "@vue/test-utils";
import Events from "@/components/Events.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Review from "../../src/components/Review.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();
router.push("/description/1");

describe("Events", () => {
  let store;

  let review = [
    {
      comment: "Nice",
      eventId: 9,
      id: 2,
    },
  ];
  it("should show the correct name in the event component", async () => {
    let wrapper, event;
    (event = {
      name: "October Design meet up",
    }),
      (store = new Vuex.Store({
        state: {
          review: review,
          commentBtn: false,
        },
      }));
    wrapper = shallowMount(Events, {
      localVue,
      store,
      propsData: {
        event: event,
      },
      stubs: {
        RouterLink: RouterLinkStub,
        Header: true,
        Review: true,
      },
    });
    let expected = event.name;
    let actual = wrapper.find(".event-name").text();
    expect(actual).toBe(expected);
  });

  it("should show the correct location in the event component", async () => {
    store = new Vuex.Store({
      state: {
        commentBtn: false,
        review: review,
      },
    });
    let wrapper, event;
    (event = {
      location: "Surrbrusgatan, Stockholm",
    }),
      (wrapper = shallowMount(Events, {
        localVue,
        store,
        propsData: {
          event: event,
        },
        stubs: {
          RouterLink: RouterLinkStub,
          Header: true,
          Review: true,
        },
      }));
    let expected = event.location;
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
    store = new Vuex.Store({
      state: {
        commentBtn: false,
        review: review,
      },
    });
    let wrapper;
    wrapper = mount(Events, {
      localVue,
      store,
      router: router,
      propsData: { event: event },
      stubs: {
        RouterLink: RouterLinkStub,
        Header: true,
        Review: true,
      },
    });
    const expected = "/description/1";
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props("to")).toBe(expected);
  });
});
