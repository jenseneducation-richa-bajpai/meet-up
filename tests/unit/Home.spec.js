import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue,
} from "@vue/test-utils";
import Home from "@/views/Home.vue";
import EventsList from "@/components/EventsList.vue";
import Events from "@/components/Events.vue";
import Header from "@/components/Header.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import store from "@/store/index.js";
import routes from "@/router/routes.js";

const localVue = createLocalVue();
localVue.use(Vuex);
const router = new VueRouter();

describe("Home", () => {
  let actions;
  let store;

  let wrapper;
  let data = {
    events: [
      {
        id: 1,
        name: "October Design meet up",
        date: "Thu Oct 1",
        time: "6:00 PM",
        image: "",
        location: "Surrbrusgatan, Stockholm",
      },
      {
        id: 2,
        name: "Biking Hiking",
        date: "Sat Oct 10",
        time: "11:00 AM",

        location: "Ursvik, Sundbyberg",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
      },
    ],
  };
  const Parent = {
    data() {
      return data;
    },
  };
  beforeEach(() => {
    actions = {
      getData: () => jest.fn(),
      getAttend: () => jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });

    wrapper = mount(Home, {
      localVue,
      store,
      /* router, */
      parentComponent: Parent,
      stubs: {
        Header: true,

        RouterLink: RouterLinkStub,
      },
    });
  });

  it("should show Event.vue component in Eventlist.vue in Home", async () => {
    let findEventslist = wrapper.findComponent(EventsList);
    await findEventslist.setProps({
      events: [
        {
          id: 1,
          name: "October Design meet up",
          date: "Thu Oct 1",
          time: "6:00 PM",
          image: "",
          location: "Surrbrusgatan, Stockholm",
        },
      ],
    });
    await wrapper.vm.$nextTick();
    let findAllEvent = findEventslist.findComponent(Events);

    expect(findAllEvent.exists()).toBe(true);
  });

  it("should check if the EventsList component is in home-view", () => {
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });
    localVue.use(VueRouter);

    const wrapper = shallowMount(Home, {
      store,
      localVue,
      router,
    });
    let actual = wrapper.findComponent(EventsList).exists();
    let expected = true;
    expect(actual).toBe(expected);
  });

  it("should check if the Header component is in home-view", () => {
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });
    localVue.use(VueRouter);

    const wrapper = shallowMount(Home, {
      store,
      localVue,
      router,
    });
    let actual = wrapper.findComponent(Header).exists();
    let expected = true;
    expect(actual).toBe(expected);
  });
});
