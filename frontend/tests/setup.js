import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

Vue.use(Vuetify, VueRouter, router);
