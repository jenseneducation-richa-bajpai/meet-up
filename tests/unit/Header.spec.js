import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub,
} from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import Header from "@/components/Header.vue";
import routes from "@/router/routes.js";
import store from "@/store/index.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App.vue", () => {
  it("renders a child component Header via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

 
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });
});

describe("Header", () => {
  it("should go to /", () => {
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
    wrapper = mount(Header, {
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
