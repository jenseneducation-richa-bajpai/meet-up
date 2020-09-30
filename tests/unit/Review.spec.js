import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Review from "../../src/components/Review.vue";
import Comment from "../../src/components/Comment.vue";
import Vuex from "vuex";


const localVue = createLocalVue();
localVue.use(Vuex);


describe("Review", () => {
  let wrapper;
  let actions;
  let store;

  let review = [];
  actions = {
    addReview: jest.fn(),
  };

  store = new Vuex.Store({
    actions,
    state: {
      review: review,
    },
  });
  it("should show one Comment in Review.vue", () => {
    let data = () => ({
      content: "",
    });
    let newStore = new Vuex.Store({
      actions,
      state: {
        review: [{ id: 1, comment: "Nice", eventId: 1 }],
      },
    });
    wrapper = mount(Review, {
      localVue,
      data: data,
      store: newStore,
      stubs: {
        RouterLink: RouterLinkStub,
      },
      propsData: {
        review: [{ id: 1, comment: "Nice", eventId: 1 }],
        eventId: 1,
      },
    });

    const expected = true;

    expect(wrapper.findComponent(Comment).exists()).toBe(expected);
  });

  it("should not show Comment.vue in Review when no comments", () => {
    let data = () => ({
      content: "",
    });
    wrapper = mount(Review, {
      localVue,
      data: data,
      store,
      stubs: {
        RouterLink: RouterLinkStub,
      },
      propsData: {
        eventId: 1,
      },
    });

    const expected = false;

    expect(wrapper.findComponent(Comment).exists()).toBe(expected);
  });
});

