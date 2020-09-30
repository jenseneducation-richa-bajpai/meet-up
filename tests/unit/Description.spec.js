/* ------1-----*/

import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub,
} from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import Description from "@/views/Description.vue";
import routes from "@/router/routes.js";
import store from "@/store/index.js";
/* import Vuex from "vuex"; */

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App.vue", () => {
  it("renders a child component Description via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

    router.push("/description/1");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Description).exists()).toBe(true);
  });
});

 describe("Description", () => {
  it("should go back to home when meetup clicked", () => {
    const router = new VueRouter({ routes });
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
    wrapper = mount(Description, {
      localVue,
      router: router,
      store,
      propsData: { event: event },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    router.push("/");
    const expected = "/";
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props("to")).toBe(expected);
  });
}); 
