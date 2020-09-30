import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import Attending from "@/views/Attending.vue";
import Header from "@/components/Header.vue";
import Going from "@/components/Going.vue";
import routes from "@/router/routes.js";
import store from "@/store/index.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App.vue", () => {
  it("renders a child component Attending via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

    router.push("/attending");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Attending).exists()).toBe(true);
  });
});

describe("Attending.vue", () => {
  it("renders a child component Going via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(Attending, {
      localVue,
      router,
      store,
    });

   
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Going).exists()).toBe(true);
  });

  it("renders a child component Header via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(Attending, {
      localVue,
      router,
      store,
    });

   
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });
});
