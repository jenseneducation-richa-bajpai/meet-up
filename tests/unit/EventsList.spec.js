import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import EventsList from "@/components/EventsList.vue";

import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
/* localVue.use(VueRouter);
const router = new VueRouter(); */

describe("EventsList", () => {
  let wrapper;
  let actions;
  let store;
  let events = [
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
      id: 2,
      name: "Biking Hiking",
      date: "Sat Oct 10",
      time: "11:00 AM",
      location: "Ursvik, Sundbyberg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
    },
    {
      id: 3,
      name: "Stress Management",
      date: "Sun Oct 11",
      time: "5:00 PM",
      location: "Helenelund, Sollentuna",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
    },
    {
      id: 4,
      name: "AWS meetup",
      date: "Wed Oct 8",
      time: "5:00 PM",
      location: "Rotebro, Sollentuna",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
    },
    {
      id: 5,
      name: "Speech Cafe",
      date: "Thu Oct 15",
      time: "5:00 PM",
      location: "Nacka, Stockholm ",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
    },
    {
      id: 6,
      name: "Click-o-click",
      date: "Sat Oct 3",
      time: "6:00 PM",
      location: "Gamlastan, Stockholm",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
    },
    {
      id: 7,
      name: "Board Games",
      date: "Sat Oct 17",
      time: "3:00 PM",
      location: "Slussen, Stockholm",
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
  let review = [
    {
      comment: "Nice",
      eventId: 9,
      id: 1,
    },
  ];

  beforeEach(() => {
    actions = {
      getAttend: () => jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      state: {
        review: review,
        commentBtn: false,
      },
    });
    wrapper = mount(EventsList, {
      localVue,
      store,
      propsData: { events },
      stubs: {
        RouterLink: RouterLinkStub,
        Header: true,
      },
    });
  });
  it("should have to show  8 products  when rendering", () => {
    const expected = events.length;

    const actual = wrapper.findAll(".event").length;

    expect(actual).toBe(expected);
  });
});
