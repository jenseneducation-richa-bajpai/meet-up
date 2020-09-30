import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import History from "@/views/History.vue";
import Header from "@/components/Header.vue";
import EventsList from "@/components/EventsList.vue";
import routes from "@/router/routes.js";
import store from "@/store/index.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App.vue", () => {
  it("renders a child component History via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

    router.push("/history");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(History).exists()).toBe(true);
  });
});

describe("History.vue", () => {
  it("renders a child component Header via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(History, {
      localVue,
      router,
      store,
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });

  it("renders a child component EventsList via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(History, {
      localVue,
      router,
      store,
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(EventsList).exists()).toBe(true);
  });
});
