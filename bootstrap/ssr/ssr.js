import { mergeProps, useSSRContext, ref, onMounted, unref, withCtx, createTextVNode, computed, onUnmounted, renderSlot, onBeforeUnmount, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, watch, shallowRef, resolveDynamicComponent, withKeys, nextTick, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderClass, ssrRenderStyle, ssrRenderTeleport, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { useForm, Head, Link, router, usePage, createInertiaApp } from "@inertiajs/vue3";
import { format, differenceInDays, addDays, formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale/index.js";
import VueDatePicker from "@vuepic/vue-datepicker";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$G = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/InputError.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/InputLabel.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$E = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/PrimaryButton.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$D = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "border-gray-300 focus:border-orange-600 focus:ring-orange-600 rounded-md shadow-sm",
        value: __props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TextInput.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent));
      _push(`<div class="mb-4 text-sm text-gray-600"> This is a secure area of the application. Please confirm your password before continuing. </div><form><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password",
        value: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        autocomplete: "current-password",
        autofocus: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="flex justify-end mt-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        class: ["ml-4", { "opacity-25": unref(form).processing }],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Confirm `);
          } else {
            return [
              createTextVNode(" Confirm ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><!--]-->`);
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$C
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent));
      _push(`<div class="mb-4 text-sm text-gray-600"> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
      if (__props.status) {
        _push(`<div class="mb-4 font-medium text-sm text-green-600">${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autofocus: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-end mt-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        class: { "opacity-25": unref(form).processing },
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Email Password Reset Link `);
          } else {
            return [
              createTextVNode(" Email Password Reset Link ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><!--]-->`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$B
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit }) {
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded border-gray-300 text-orange-600 shadow-sm focus:ring-orange-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Checkbox.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      _push(`<div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:w-6/12 space-y-6"><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">`);
      if (__props.status) {
        _push(`<div class="mb-4 font-medium text-sm text-green-600">${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autofocus: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password",
        value: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="block mt-4"><label class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$A, {
        name: "remember",
        checked: unref(form).remember,
        "onUpdate:checked": ($event) => unref(form).remember = $event
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600">Запомнить меня</span></label></div><div class="flex items-center justify-end mt-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        class: ["ml-4", { "opacity-25": unref(form).processing }],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Войти `);
          } else {
            return [
              createTextVNode(" Войти ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header><h2 class="text-lg font-medium text-gray-900">Создать нового пользователя</h2><p class="mt-1 text-sm text-gray-600"> Создавая пользователя убедитесь в правильности e-mail и подберите безопасный пароль (не менее 8 символов) </p></header><form class="mt-6 space-y-6"><div class="max-w-xl"><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "name",
        value: "Имя"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="lg:flex lg:justify-between lg:items-center"><div class="mt-4 lg:w-2/6 lg:text-center items-center">`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password",
        value: "Пароль"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        ref: "passwordInput",
        required: "",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="mt-4 lg:w-2/6 lg:text-center">`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password_confirmation",
        value: "Подтверждение пароля"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password_confirmation",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        ref: "passwordConfirmation",
        required: "",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.password_confirmation
      }, null, _parent));
      _push(`</div><div class="mt-4 lg:w-1/5"><label>`);
      _push(ssrRenderComponent(_sfc_main$A, {
        name: "is_admin",
        checked: unref(form).is_admin,
        "onUpdate:checked": ($event) => unref(form).is_admin = $event
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600">С правами администратора</span></label></div></div><div class="flex items-center sm:justify-start mt-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        class: ["ml-4", { "opacity-25": unref(form).processing }],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Сохранить `);
          } else {
            return [
              createTextVNode(" Сохранить ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="ml-5 text-sm text-gray-600">Сохранено.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form><!--]-->`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent));
      _push(`<form><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autofocus: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password",
        value: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password_confirmation",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        required: "",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.password_confirmation
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-end mt-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        class: { "opacity-25": unref(form).processing },
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reset Password `);
          } else {
            return [
              createTextVNode(" Reset Password ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><!--]-->`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent));
      _push(`<div class="mb-4 text-sm text-gray-600"> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
      if (verificationLinkSent.value) {
        _push(`<div class="mb-4 font-medium text-sm text-green-600"> A new verification link has been sent to the email address you provided during registration. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div class="mt-4 flex items-center justify-between">`);
      _push(ssrRenderComponent(PrimaryButton, {
        class: { "opacity-25": unref(form).processing },
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Resend Verification Email `);
          } else {
            return [
              createTextVNode(" Resend Verification Email ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log Out`);
          } else {
            return [
              createTextVNode("Log Out")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><!--]-->`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "border rounded-lg m-auto hover:bg-green-100 focus:bg-green-100 transition duration-200",
    title: "Сохранить"
  }, _attrs))}><svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="-6.5 0 32 32"><path d="M12.2 4.5V9h2.4l-4.8 6-5-5.9h2.6V4.5h4.8zm4.1 7.5 2.9 4.5.3 1.5v8.7c0 .5-.4.8-.8.8H.8a.8.8 0 0 1-.8-.8V18l.3-1.5L3.2 12c.1-.4.7-.8 1-.8h1.4l1.3 1.6H4.3l-2.6 4.7v.2h16.1v-.2l-2.5-4.7h-2.7l1.3-1.6h1.3c.4 0 1 .4 1.1.8zm-8.8 9H12c.4 0 .7-.3.7-.8 0-.4-.3-.8-.7-.8H7.5c-.5 0-.8.4-.8.8 0 .5.3.8.8.8z"></path></svg></button>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/buttons/SaveButton.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const SaveButton = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$4]]);
const totalDaysHolding = "7";
const minBoxImage = 1;
const maxBoxImage = 4;
const normalizeData = (date) => {
  return format(new Date(date), "do MMMM yyyy", { locale: ru });
};
const isHoldingDateExpired = (date) => {
  let now = /* @__PURE__ */ new Date();
  let startHoldingDate = new Date(date);
  return differenceInDays(now, startHoldingDate) > totalDaysHolding;
};
const deadlineDate = (date = /* @__PURE__ */ new Date()) => {
  let deadline = addDays(new Date(date), totalDaysHolding);
  return format(deadline, "do MMMM yyyy", { locale: ru });
};
const daysFromCreate = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru });
};
const CreateBox_vue_vue_type_style_index_0_scoped_905e4a85_lang = "";
const _sfc_main$u = {
  __name: "CreateBox",
  __ssrInlineRender: true,
  props: {
    lastAddedBox: {
      type: Object
    },
    cellId: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    console.log({}.TOTAL_DAYS_HOLDING);
    const form = useForm({
      cell_id: props.cellId,
      customer: "",
      product: "",
      invoice: "",
      date_add: /* @__PURE__ */ new Date()
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Добавляем на хранение" }, null, _parent));
      _push(`<section class="mx-auto product w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 border drop-shadow-xl p-3 bg-slate-50 font-sans" data-v-905e4a85><span class="absolute w-full flex flex-row-reverse" data-v-905e4a85><svg class="h-7 w-7 relative right-8 transition duration-300 text-gray-600 hover:text-gray-400 active:text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24" data-v-905e4a85><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-905e4a85></path></svg></span><div class="product__image" data-v-905e4a85></div><h1 class="text-center text-lg text-gray-700" data-v-905e4a85>Добавляем продукт в ячейку № ${ssrInterpolate(unref(form).cell_id)}</h1><div class="flex justify-center underline" data-v-905e4a85><button class="text-xs text-center text-gray-500" data-v-905e4a85>(или продолжить последний добавленный)</button></div><form class="flex flex-col" data-v-905e4a85><div class="flex flex-col my-3 gap-2" data-v-905e4a85><div data-v-905e4a85>`);
      _push(ssrRenderComponent(_sfc_main$F, { for: "invoice" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Накладная`);
          } else {
            return [
              createTextVNode("Накладная")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "invoice",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).invoice,
        "onUpdate:modelValue": ($event) => unref(form).invoice = $event,
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.invoice
      }, null, _parent));
      _push(`</div><div data-v-905e4a85>`);
      _push(ssrRenderComponent(_sfc_main$F, { for: "customer" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Заказчик`);
          } else {
            return [
              createTextVNode("Заказчик")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "customer",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).customer,
        "onUpdate:modelValue": ($event) => unref(form).customer = $event,
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.customer
      }, null, _parent));
      _push(`</div><div data-v-905e4a85>`);
      _push(ssrRenderComponent(_sfc_main$F, { for: "product" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Заказ`);
          } else {
            return [
              createTextVNode("Заказ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "product",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).product,
        "onUpdate:modelValue": ($event) => unref(form).product = $event,
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.product
      }, null, _parent));
      _push(`</div><label class="flex justify-between text-sm md:text-base font-medium text-sm text-gray-700" data-v-905e4a85> Начало хранения <span data-v-905e4a85>${ssrInterpolate(unref(normalizeData)(unref(form).date_add))}</span></label><label class="flex justify-between text-sm md:text-base font-medium text-sm text-gray-700" data-v-905e4a85> Окончание хранения <span data-v-905e4a85>${ssrInterpolate(unref(deadlineDate)(unref(form).date_add))}</span></label><small class="${ssrRenderClass([
        unref(isHoldingDateExpired)(unref(form).date_add) ? "text-rose-600 transition animate-pulse" : "text-green-600",
        "text-center my-1"
      ])}" data-v-905e4a85>Товар хранится на складе не более ${ssrInterpolate(unref(totalDaysHolding))} дней!</small></div>`);
      _push(ssrRenderComponent(SaveButton, null, null, _parent));
      _push(`</form></section><!--]-->`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/CreateBox.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const CreateBox = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-905e4a85"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateBox
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    width: "15",
    height: "15"
  }, _attrs))}><path stroke="#f6f6f6" stroke-width="1" d="M4 15.83V8c0-.3.17-.6.44-.75h.01l7.17-4.04.05-.03a.7.7 0 0 1 .66 0l7.28 4.1c.24.14.39.4.39.67v7.88a.8.8 0 0 1-.4.69l-7.22 4.26a.75.75 0 0 1-.76 0L4.4 16.52a.8.8 0 0 1-.39-.7ZM12 21v-9m0 0L4 7.5m16 0L12 12"></path></svg>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ApplicationLogo.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$s = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white"
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Dropdown.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-orange-400 text-left text-base font-medium text-orange-700 focus:outline-none focus:text-orange-800 focus:bg-orange-100 focus:border-orange-700 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/DropdownLink.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-orange-400 text-left text-base font-medium text-orange-700 bg-orange-50 focus:outline-none focus:text-orange-800 focus:bg-orange-100 focus:border-orange-700 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value,
        onClick: ($event) => _ctx.$emit("click")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ResponsiveNavLink.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const HeaderNav_vue_vue_type_style_index_0_scoped_99971129_lang = "";
const _sfc_main$p = {
  __name: "HeaderNav",
  __ssrInlineRender: true,
  setup(__props) {
    let showingNavigationDropdown = ref(false);
    function closeNavigationDropdown() {
      setTimeout(() => {
        showingNavigationDropdown.value = false;
      }, 300);
    }
    onMounted(() => {
      window.addEventListener("scroll", closeNavigationDropdown);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", closeNavigationDropdown);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["bg-white border-b border-gray-100 w-full", unref(showingNavigationDropdown) ? "z-50" : ""]
      }, _attrs))} data-v-99971129><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-dots-darker" data-v-99971129><div class="flex justify-between h-12" data-v-99971129><div class="flex" data-v-99971129><div class="shrink-0 flex items-center" data-v-99971129>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("main"),
        class: "transition duration-300 hover:scale-110",
        onClick: closeNavigationDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, {
              class: "block h-9 w-auto fill-current text-gray-800",
              tabindex: "0"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, {
                class: "block h-9 w-auto fill-current text-gray-800",
                tabindex: "0"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6" data-v-99971129><div class="ml-3 relative" data-v-99971129>`);
      _push(ssrRenderComponent(_sfc_main$s, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md" data-v-99971129${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150" data-v-99971129${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-v-99971129${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-99971129${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$r, {
              href: _ctx.route("profile.edit"),
              active: _ctx.route().current("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Мой профиль `);
                } else {
                  return [
                    createTextVNode(" Мой профиль ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.auth.user.is_admin) {
              _push2(ssrRenderComponent(_sfc_main$r, {
                href: _ctx.route("users.show"),
                active: _ctx.route().current("users.show")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Пользователи `);
                  } else {
                    return [
                      createTextVNode(" Пользователи ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$r, {
              href: _ctx.route("history", { period: "week" }),
              active: _ctx.route().current("history")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` История `);
                } else {
                  return [
                    createTextVNode(" История ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$r, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Выйти `);
                } else {
                  return [
                    createTextVNode(" Выйти ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$r, {
                href: _ctx.route("profile.edit"),
                active: _ctx.route().current("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Мой профиль ")
                ]),
                _: 1
              }, 8, ["href", "active"]),
              _ctx.$page.props.auth.user.is_admin ? (openBlock(), createBlock(_sfc_main$r, {
                key: 0,
                href: _ctx.route("users.show"),
                active: _ctx.route().current("users.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Пользователи ")
                ]),
                _: 1
              }, 8, ["href", "active"])) : createCommentVNode("", true),
              createVNode(_sfc_main$r, {
                href: _ctx.route("history", { period: "week" }),
                active: _ctx.route().current("history")
              }, {
                default: withCtx(() => [
                  createTextVNode(" История ")
                ]),
                _: 1
              }, 8, ["href", "active"]),
              createVNode(_sfc_main$r, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Выйти ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-mr-2 flex items-center sm:hidden" data-v-99971129><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" data-v-99971129><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" data-v-99971129><path class="${ssrRenderClass({
        hidden: unref(showingNavigationDropdown),
        "inline-flex": !unref(showingNavigationDropdown)
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-99971129></path><path class="${ssrRenderClass({
        hidden: !unref(showingNavigationDropdown),
        "inline-flex": unref(showingNavigationDropdown)
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-99971129></path></svg></button></div></div></div><div class="${ssrRenderClass([{ block: unref(showingNavigationDropdown), hidden: !unref(showingNavigationDropdown) }, "sm:hidden absolute top-12 w-full bg-white text-center"])}" data-v-99971129><div class="pt-3 pb-3 border border-gray-200" data-v-99971129><div class="px-4 text-center" data-v-99971129><div class="font-medium text-base text-gray-800" data-v-99971129>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500" data-v-99971129>${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1" data-v-99971129>`);
      _push(ssrRenderComponent(_sfc_main$q, {
        href: _ctx.route("profile.edit"),
        onClick: closeNavigationDropdown,
        active: _ctx.route().current("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Мой профиль`);
          } else {
            return [
              createTextVNode(" Мой профиль")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.auth.user.is_admin) {
        _push(ssrRenderComponent(_sfc_main$q, {
          href: _ctx.route("users.show"),
          onClick: closeNavigationDropdown,
          active: _ctx.route().current("users.show")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Пользователи `);
            } else {
              return [
                createTextVNode(" Пользователи ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$q, {
        href: _ctx.route("history", { period: "week" }),
        onClick: closeNavigationDropdown,
        active: _ctx.route().current("history")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` История`);
          } else {
            return [
              createTextVNode(" История")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$q, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Выйти `);
          } else {
            return [
              createTextVNode(" Выйти ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/partials/HeaderNav.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const HeaderNav = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-99971129"]]);
const DefaultLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main$o = {
  __name: "DefaultLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
      _push(ssrRenderComponent(HeaderNav, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/DefaultLayout.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __default__$1 = {
  layout: _sfc_main$o
};
const _sfc_main$n = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Главная" }, null, _parent));
      _push(`<div><template><h2 class="font-semibold text-xl text-gray-800 leading-tight">Главная страница</h2></template><div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 text-gray-900">Вы залогинились!</div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    title: "Удалить",
    class: "border rounded-lg m-auto hover:bg-red-200 focus:bg-red-200 transition duration-200"
  }, _attrs))}><svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5h12M9 5v0a4 4 0 0 1 6 0v0M9 20h6a2 2 0 0 0 2-2V9c0-.6-.4-1-1-1H8a1 1 0 0 0-1 1v9c0 1.1.9 2 2 2Z"></path></svg></button>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/buttons/DeleteButton.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const DeleteButton = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$l = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "md"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mt-20 mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Modal.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const EditBox_vue_vue_type_style_index_0_scoped_5476d450_lang = "";
const _sfc_main$k = {
  __name: "EditBox",
  __ssrInlineRender: true,
  props: {
    box: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      cell_id: props.box.cell_id,
      customer: props.box["customer"],
      product: props.box["product"],
      invoice: props.box["invoice"],
      date_add: props.box["created_at"]
    });
    let isModalOpen = ref(false);
    const openModal = () => {
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Внесение изменений" }, null, _parent));
      _push(`<section class="mx-auto product w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 border drop-shadow-xl p-3 bg-slate-50 font-sans" data-v-5476d450><span class="absolute w-full flex flex-row-reverse" data-v-5476d450><svg class="h-7 w-7 relative right-8 transition duration-300 text-gray-600 hover:text-gray-400 active:text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24" data-v-5476d450><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-5476d450></path></svg></span><div class="product__image" data-v-5476d450></div><h1 class="text-center text-lg text-gray-700" data-v-5476d450>Изменение продукта в ячейке № ${ssrInterpolate(unref(form).cell_id)}</h1><form class="flex flex-col" data-v-5476d450><div class="flex flex-col my-3 gap-2" data-v-5476d450><div data-v-5476d450>`);
      _push(ssrRenderComponent(_sfc_main$F, { for: "invoice" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Накладная`);
          } else {
            return [
              createTextVNode("Накладная")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "invoice",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).invoice,
        "onUpdate:modelValue": ($event) => unref(form).invoice = $event,
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.invoice
      }, null, _parent));
      _push(`</div><div data-v-5476d450>`);
      _push(ssrRenderComponent(_sfc_main$F, { for: "customer" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Заказчик`);
          } else {
            return [
              createTextVNode("Заказчик")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "customer",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).customer,
        "onUpdate:modelValue": ($event) => unref(form).customer = $event,
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.customer
      }, null, _parent));
      _push(`</div><div data-v-5476d450>`);
      _push(ssrRenderComponent(_sfc_main$F, { for: "product" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Заказ`);
          } else {
            return [
              createTextVNode("Заказ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "product",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).product,
        "onUpdate:modelValue": ($event) => unref(form).product = $event,
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.product
      }, null, _parent));
      _push(`</div><label class="flex justify-between text-sm md:text-base font-medium text-sm text-gray-700" data-v-5476d450> Начало хранения <span data-v-5476d450>${ssrInterpolate(unref(normalizeData)(unref(form).date_add))}</span></label><label class="flex justify-between text-sm md:text-base font-medium text-sm text-gray-700" data-v-5476d450> Окончание хранения <span data-v-5476d450>${ssrInterpolate(unref(deadlineDate)(unref(form).date_add))}</span></label><small class="${ssrRenderClass([
        unref(isHoldingDateExpired)(unref(form).date_add) ? "text-rose-600 transition animate-pulse" : "text-green-600",
        "text-center my-1"
      ])}" data-v-5476d450>Товар хранится на складе не более ${ssrInterpolate(unref(totalDaysHolding))} дней!</small></div><div class="flex space-y-1" data-v-5476d450>`);
      _push(ssrRenderComponent(SaveButton, null, null, _parent));
      _push(ssrRenderComponent(DeleteButton, {
        onClick: ($event) => openModal()
      }, null, _parent));
      _push(`</div></form></section>`);
      _push(ssrRenderComponent(_sfc_main$l, {
        show: unref(isModalOpen),
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 flex items-center m-auto" data-v-5476d450${_scopeId}><p class="px-5 text-center" data-v-5476d450${_scopeId}>Я подтверждаю удаление выбранного продукта!</p>`);
            _push2(ssrRenderComponent(DeleteButton, {
              onClick: ($event) => unref(router).delete(`/box/destroy/${__props.box.id}`)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 flex items-center m-auto" }, [
                createVNode("p", { class: "px-5 text-center" }, "Я подтверждаю удаление выбранного продукта!"),
                createVNode(DeleteButton, {
                  onClick: ($event) => unref(router).delete(`/box/destroy/${__props.box.id}`)
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/EditBox.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const EditBox = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-5476d450"]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditBox
}, Symbol.toStringTag, { value: "Module" }));
const HistoryPagination_vue_vue_type_style_index_0_scoped_a77265f2_lang = "";
const _sfc_main$j = {
  __name: "HistoryPagination",
  __ssrInlineRender: true,
  props: ["boxes"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row items-center justify-between bg-white px-10 py-4 sm:px-6" }, _attrs))} data-v-a77265f2><div class="sm:hidden mb-2" data-v-a77265f2><p class="text-sm text-gray-700" data-v-a77265f2> Показано <span class="font-medium" data-v-a77265f2>${ssrInterpolate(__props.boxes.from)}</span> - <span class="font-medium" data-v-a77265f2>${ssrInterpolate(__props.boxes.to)}</span> из <span class="font-medium" data-v-a77265f2>${ssrInterpolate(__props.boxes.total)}</span> результатов </p></div><div class="flex flex-1 justify-between sm:hidden" data-v-a77265f2><div data-v-a77265f2>`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.boxes.prev_page_url,
        as: "button",
        disabled: props.boxes.current_page == 1,
        class: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 enable:hover:bg-gray-50 disabled:opacity-75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Предыдущая `);
          } else {
            return [
              createTextVNode(" Предыдущая ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: __props.boxes.next_page_url,
        as: "button",
        disabled: __props.boxes.current_page == __props.boxes.last_page,
        class: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 enable:hover:bg-gray-50 disabled:opacity-75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Следующая `);
          } else {
            return [
              createTextVNode(" Следующая ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" data-v-a77265f2><div data-v-a77265f2><p class="text-sm text-gray-700" data-v-a77265f2> Показано <span class="font-medium" data-v-a77265f2>${ssrInterpolate(__props.boxes.from)}</span> - <span class="font-medium" data-v-a77265f2>${ssrInterpolate(__props.boxes.to)}</span> из <span class="font-medium" data-v-a77265f2>${ssrInterpolate(__props.boxes.total)}</span> результатов </p></div><div data-v-a77265f2><nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination" data-v-a77265f2>`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.boxes.prev_page_url,
        as: "button",
        disabled: __props.boxes.current_page == 1,
        class: "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 enable:hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only" data-v-a77265f2${_scopeId}>Предыдущая</span><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-v-a77265f2${_scopeId}><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" data-v-a77265f2${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Предыдущая"),
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.boxes.links.slice(1, -1), (link) => {
        _push(ssrRenderComponent(unref(Link), {
          href: link.url,
          class: ["relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0", [link.active ? "active" : ""]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.boxes.next_page_url,
        as: "button",
        disabled: __props.boxes.current_page == __props.boxes.last_page,
        class: "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 enable:hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only" data-v-a77265f2${_scopeId}>Следующая</span><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-v-a77265f2${_scopeId}><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" data-v-a77265f2${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Следующая"),
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div></div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/History/partials/HistoryPagination.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const HistoryPagination = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-a77265f2"]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HistoryPagination
}, Symbol.toStringTag, { value: "Module" }));
const main = "";
const HistoryPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$i = {
  __name: "HistoryPage",
  __ssrInlineRender: true,
  props: {
    boxes: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const totalDaysHolding2 = "5";
    ref("week");
    const date = ref();
    const form = useForm({
      start_date: null,
      finish_date: null
    });
    const submit = (modelData) => {
      date.value = modelData;
      form.start_date = date.value[0];
      form.finish_date = date.value[1];
      form.post(route("history.filter"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "История" }, null, _parent));
      _push(`<div class="grid grid-cols-2 sm:flex items-center mx-20 gap-6 mt-3">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("history", { period: "week" }),
        class: ["history-link", { "history-link__active": _ctx.route().current("history", { period: "week" }) }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Неделя`);
          } else {
            return [
              createTextVNode("Неделя")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("history", { period: "2weeks" }),
        class: ["history-link", { "history-link__active": _ctx.route().current("history", { period: "2weeks" }) }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`2 недели`);
          } else {
            return [
              createTextVNode("2 недели")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("history", { period: "month" }),
        class: ["history-link", { "history-link__active": _ctx.route().current("history", { period: "month" }) }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Месяц`);
          } else {
            return [
              createTextVNode("Месяц")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("history", { period: "all" }),
        class: ["history-link", { "history-link__active": _ctx.route().current("history", { period: "all" }) }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Все`);
          } else {
            return [
              createTextVNode("Все")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid-cols-2 w-52 sm:w-96">`);
      _push(ssrRenderComponent(unref(VueDatePicker), {
        locale: "ru",
        format: "dd.MM.yyyy HH:mm",
        range: "",
        "auto-apply": "",
        placeholder: "Выберите даты",
        "model-value": date.value,
        "onUpdate:modelValue": submit,
        "input-class-name": "dp-custom-input",
        "calendar-cell-class-name": "dp-custom-cell"
      }, null, _parent));
      _push(`</div></div>`);
      if (__props.boxes.data.length) {
        _push(`<table class="mt-5 mx-auto mx-4 md:mx-6 lg:mx-8 xl:mx-12"><thead><tr><th class="md:w-1/12 p-2">Ячейка</th><th class="md:w-2/12 p-2">Накладная</th><th class="hidden md:table-cell md:w-3/12 p-2">Заказчик</th><th class="hidden xl:table-cell md:w-5/12 p-2">Продукт</th><th class="md:w-1/12 p-2">Принят</th><th class="md:w-1/12 p-2">Удален</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(__props.boxes.data, (box) => {
          _push(`<tr><td class="text-center border noselect">${ssrInterpolate(box.cell_id)}</td><td class="text-center border noselect">${ssrInterpolate(box.invoice)}</td><td class="hidden md:table-cell text-center border noselect">${ssrInterpolate(box.customer)}</td><td class="hidden xl:table-cell text-center border noselect">${ssrInterpolate(box.product)}</td><td class="text-center border noselect">${ssrInterpolate(unref(normalizeData)(box.created_at))}</td><td class="text-center border noselect">${ssrInterpolate(box.deleted_at ? unref(normalizeData)(box.deleted_at) : "")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<div class="flex mx-auto mt-10 text-lg text-center p-2 italic outline-dotted outline-3 outline-offset-8 outline-slate-300 rounded-lg"><p>По текущему запросу записи отсутствуют или потерялись на складе...</p></div>`);
      }
      if (__props.boxes.total > unref(totalDaysHolding2)) {
        _push(ssrRenderComponent(HistoryPagination, {
          boxes: props.boxes,
          class: "mt-6"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/History/HistoryPage.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const BoxStateImage_vue_vue_type_style_index_0_scoped_fbbe9437_lang = "";
const _sfc_main$h = {
  __name: "BoxStateImage",
  __ssrInlineRender: true,
  props: {
    cell: {
      type: Object || null,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.cell.box) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["box", [unref(isHoldingDateExpired)(__props.cell.box.created_at) ? "box-forgotten" : "box-ok"]],
          tabindex: "0"
        }, _attrs))} data-v-fbbe9437><span class="box__cell" data-v-fbbe9437>${ssrInterpolate(__props.cell.id)}</span></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "box box-to-create",
          tabindex: "0"
        }, _attrs))} data-v-fbbe9437><span class="box__cell" data-v-fbbe9437>${ssrInterpolate(__props.cell.id)}</span></div>`);
      }
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/BoxStateImage.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const BoxStateImage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-fbbe9437"]]);
const HomeWithImage_vue_vue_type_style_index_0_scoped_9a2f4d22_lang = "";
const _sfc_main$g = {
  __name: "HomeWithImage",
  __ssrInlineRender: true,
  props: {
    cells: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 relative" }, _attrs))} data-v-9a2f4d22><div class="grid grid-cols-2 gap-y-7 justify-items-center w-full mt-5 md:mt-5 relative pb-8 pt-2" data-v-9a2f4d22><!--[-->`);
      ssrRenderList(__props.cells.slice(0, 8), (cell) => {
        _push(ssrRenderComponent(BoxStateImage, {
          key: cell.id,
          cell
        }, null, _parent));
      });
      _push(`<!--]--><img class="shelf shelf-1" data-v-9a2f4d22><img class="shelf shelf-2" data-v-9a2f4d22><img class="shelf shelf-3" data-v-9a2f4d22><img class="shelf shelf-4" data-v-9a2f4d22></div><div class="grid grid-cols-2 gap-y-7 justify-items-center w-full mt-14 md:mt-5 relative pb-8 pt-2" data-v-9a2f4d22><!--[-->`);
      ssrRenderList(__props.cells.slice(8, 16), (cell) => {
        _push(ssrRenderComponent(BoxStateImage, {
          key: cell.id,
          cell
        }, null, _parent));
      });
      _push(`<!--]--><img class="shelf shelf-5" data-v-9a2f4d22><img class="shelf shelf-6" data-v-9a2f4d22><img class="shelf shelf-7" data-v-9a2f4d22><img class="shelf shelf-8" data-v-9a2f4d22></div><div class="grid grid-cols-2 gap-y-7 justify-items-center w-full mt-14 md:mt-5 relative pb-8 pt-2" data-v-9a2f4d22><!--[-->`);
      ssrRenderList(__props.cells.slice(16, 24), (cell) => {
        _push(ssrRenderComponent(BoxStateImage, {
          key: cell.id,
          cell
        }, null, _parent));
      });
      _push(`<!--]--><img class="shelf shelf-9" data-v-9a2f4d22><img class="shelf shelf-10" data-v-9a2f4d22><img class="shelf shelf-11" data-v-9a2f4d22><img class="shelf shelf-12" data-v-9a2f4d22></div></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/partials/HomeWithImage.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const HomeWithImage = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-9a2f4d22"]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomeWithImage
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  __name: "BoxStateRow",
  __ssrInlineRender: true,
  props: {
    cell: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.cell.box) {
        _push(`<tr${ssrRenderAttrs(mergeProps({
          class: "border hover:bg-slate-200",
          tabindex: "0"
        }, _attrs))}><td class="${ssrRenderClass([{
          "animate-pulse": unref(isHoldingDateExpired)(__props.cell.box.created_at),
          "bg-red-100/80": unref(isHoldingDateExpired)(__props.cell.box.created_at)
        }, "text-center border noselect"])}">${ssrInterpolate(__props.cell.id)}</td><td class="text-center border noselect">${ssrInterpolate(__props.cell.box.invoice)}</td><td class="hidden md:table-cell text-center border noselect">${ssrInterpolate(__props.cell.box.customer)}</td><td class="hidden xl:table-cell text-center border noselect">${ssrInterpolate(__props.cell.box.product)}</td><td class="${ssrRenderClass([{
          "animate-pulse": unref(isHoldingDateExpired)(__props.cell.box.created_at),
          "text-rose-600": unref(isHoldingDateExpired)(__props.cell.box.created_at)
        }, "text-center border noselect"])}">${ssrInterpolate(unref(daysFromCreate)(__props.cell.box.created_at))}</td></tr>`);
      } else {
        _push(`<tr${ssrRenderAttrs(mergeProps({
          class: "border hover:bg-slate-200",
          tabindex: "0"
        }, _attrs))}><td class="text-center border noselect bg-green-100/50">${ssrInterpolate(__props.cell.id)}</td><td colspan="4" class="text-center border noselect"></td></tr>`);
      }
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/BoxStateRow.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const HomeWithTable_vue_vue_type_style_index_0_scoped_9184781d_lang = "";
const _sfc_main$e = {
  __name: "HomeWithTable",
  __ssrInlineRender: true,
  props: {
    cells: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(mergeProps({ class: "mt-5 mx-auto mx-4 md:mx-6 lg:mx-8 xl:mx-12 mb-6" }, _attrs))} data-v-9184781d><thead data-v-9184781d><tr data-v-9184781d><th class="md:w-1/12 p-2" data-v-9184781d>Ячейка</th><th class="md:w-2/12 p-2" data-v-9184781d>Накладная</th><th class="hidden md:table-cell md:w-3/12 p-2" data-v-9184781d>Заказчик</th><th class="hidden xl:table-cell md:w-5/12 p-2" data-v-9184781d>Продукт</th><th class="md:w-1/12 p-2" data-v-9184781d>Принят на хранение</th></tr></thead><tbody data-v-9184781d><!--[-->`);
      ssrRenderList(__props.cells, (cell) => {
        _push(ssrRenderComponent(_sfc_main$f, {
          key: cell.id,
          cell,
          class: `cell-${cell.box}`
        }, null, _parent));
      });
      _push(`<!--]--></tbody></table>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/partials/HomeWithTable.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const HomeWithTable = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-9184781d"]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomeWithTable
}, Symbol.toStringTag, { value: "Module" }));
const MainPage_vue_vue_type_style_index_0_scoped_6d3559de_lang = "";
const _sfc_main$d = {
  __name: "MainPage",
  __ssrInlineRender: true,
  props: {
    cells: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const homePage = shallowRef(HomeWithImage);
    const cells = ref([]);
    onMounted(() => {
      cells.value = props.cells;
      Echo.channel("box-changed").listen("BroadcastBoxChangedEvent", (e) => {
        let cellIdForChanging = e.cell_id;
        let changingBox = cells.value.find((cell) => cell.id === cellIdForChanging);
        changingBox.box = e.box;
        console.log(e);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="toggle animate__animated animate__fadeInDown" data-v-6d3559de><button class="${ssrRenderClass([{ active: homePage.value === HomeWithImage }, "toggle__button"])}" data-v-6d3559de><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-7 h-7" viewBox="0 0 24 24" data-v-6d3559de><path stroke-linecap="round" stroke-linejoin="round" d="m2.3 15.8 5.1-5.2a2.3 2.3 0 0 1 3.2 0l5.1 5.2m-1.4-1.6 1.4-1.4a2.3 2.3 0 0 1 3.1 0l3 3m-18 3.7h16.4a1.5 1.5 0 0 0 1.6-1.5V6a1.5 1.5 0 0 0-1.6-1.5H3.9A1.5 1.5 0 0 0 2.3 6v12a1.5 1.5 0 0 0 1.5 1.5zM14.2 8.2h0v0h0v0zm.4 0a.4.4 0 1 1-.7 0 .4.4 0 0 1 .7 0z" data-v-6d3559de></path></svg></button><button class="${ssrRenderClass([{ active: homePage.value === HomeWithTable }, "toggle__button"])}" data-v-6d3559de><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-7 h-7" viewBox="0 0 24 24" data-v-6d3559de><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" data-v-6d3559de></path></svg></button></div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(homePage.value), { cells: cells.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/MainPage.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const MainPage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-6d3559de"]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MainPage
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/DangerButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const DangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$b = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SecondaryButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900">Удаление аккаунта</h2><p class="mt-1 text-sm text-gray-600"> Удаляя аккаунт будьте в курсе, что все ваши ресурсы, права доступа и данные будут безвозвратно утеряны! </p></header>`);
      _push(ssrRenderComponent(DangerButton, { onClick: confirmUserDeletion }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Я устал, удаляем`);
          } else {
            return [
              createTextVNode("Я устал, удаляем")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$l, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Вы же случайно нажали на кнопку удаления?.. </h2><h3 class="text-lg font-medium text-gray-900"${_scopeId}> ... или нет?! </h3><p class="mt-1 text-sm text-gray-600"${_scopeId}> Удаляя аккаунт будьте в курсе, что все ваши ресурсы, права доступа и данные будут безвозвратно утеряны! </p><p class="mt-3 text-sm text-gray-600"${_scopeId}> Подтвердите удаление аккаунта вводом своего пароля </p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$F, {
              for: "password",
              value: "Password",
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              placeholder: "Ваш пароль",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$b, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Я передумал `);
                } else {
                  return [
                    createTextVNode(" Я передумал ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(DangerButton, {
              class: ["ml-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: deleteUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Удаляем, решено `);
                } else {
                  return [
                    createTextVNode(" Удаляем, решено ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Вы же случайно нажали на кнопку удаления?.. "),
                createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " ... или нет?! "),
                createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Удаляя аккаунт будьте в курсе, что все ваши ресурсы, права доступа и данные будут безвозвратно утеряны! "),
                createVNode("p", { class: "mt-3 text-sm text-gray-600" }, " Подтвердите удаление аккаунта вводом своего пароля "),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$F, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }),
                  createVNode(_sfc_main$D, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    placeholder: "Ваш пароль",
                    onKeyup: withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                  createVNode(_sfc_main$G, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-center" }, [
                  createVNode(_sfc_main$b, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Я передумал ")
                    ]),
                    _: 1
                  }),
                  createVNode(DangerButton, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Удаляем, решено ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Изменение пароля</h2><p class="mt-1 text-sm text-gray-600"> Не рекомендуем использовать один пароль для входа на все сайты в интернете </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "current_password",
        value: "Текущий пароль"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password",
        value: "Новый пароль"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password_confirmation",
        value: "Подтвердите новый пароль"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Сохранить`);
          } else {
            return [
              createTextVNode("Сохранить")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Сохранено.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">${ssrInterpolate(_ctx.$page.props.auth.user.name)}, здесь все о Вас</h2><p class="mt-1 text-sm text-gray-600"> Обновление профиля и адреса электронной почты </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "name",
        value: "Имя"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="text-sm mt-2 text-gray-800"> Your email address is unverified. `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 font-medium text-sm text-green-600"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Сохранить`);
          } else {
            return [
              createTextVNode("Сохранить")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Сохранено.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Профиль" }, null, _parent));
      _push(`<template><h2 class="font-semibold text-xl text-gray-800 leading-tight">Profile</h2></template><div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        "must-verify-email": __props.mustVerifyEmail,
        status: __props.status,
        class: "max-w-xl"
      }, null, _parent));
      _push(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">`);
      _push(ssrRenderComponent(_sfc_main$9, { class: "max-w-xl" }, null, _parent));
      _push(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">`);
      _push(ssrRenderComponent(_sfc_main$a, { class: "max-w-xl" }, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "UpdateUserPassword",
  __ssrInlineRender: true,
  props: ["userId"],
  setup(__props) {
    const props = __props;
    const form = useForm({
      user_id: props.userId,
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Изменение пароля</h2><p class="mt-1 text-sm text-gray-600"> Используйте только в случае, если пользователь забыл пароль. Не забудьте оповестить пользователя о смене пароля! </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password",
        value: "Новый пароль"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password",
        ref: "passwordInput",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password_confirmation",
        value: "Подтвердите новый пароль"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Сохранить`);
          } else {
            return [
              createTextVNode("Сохранить")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Сохранено.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Partials/UpdateUserPassword.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "UpdateUserProfile",
  __ssrInlineRender: true,
  props: ["user"],
  setup(__props) {
    const props = __props;
    const form = useForm({
      user_id: props.user.id,
      name: props.user.name,
      email: props.user.email,
      is_admin: Boolean(props.user.is_admin)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Вы в профиле пользователя ${ssrInterpolate(props.user.name)}</h2><p class="mt-1 text-sm text-gray-600"> Как администратор Вы имеете право на обновление профиля, адреса электронной почты и выдачу прав администратора </p><p class="mt-1 text-sm text-gray-600"> Будьте внимательны и не вносите изменения без необходимости! </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "name",
        value: "Имя"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-4 lg:w-1/5"><label>`);
      _push(ssrRenderComponent(_sfc_main$A, {
        name: "is_admin",
        checked: unref(form).is_admin,
        "onUpdate:checked": ($event) => unref(form).is_admin = $event
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600">С правами администратора</span></label></div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Сохранить`);
          } else {
            return [
              createTextVNode("Сохранить")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Сохранено.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Partials/UpdateUserProfile.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "UsersTable",
  __ssrInlineRender: true,
  props: ["users"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header><h2 class="text-lg font-medium text-gray-900">Все пользователи программы</h2><p class="mt-1 text-sm text-gray-600"> Выбрав пользователя Вы, как администратор, можете внести изменения в его профиль </p></header><div class="overflow-x-auto"><div class="w-full"><div class="bg-white shadow-md rounded my-6"><table class="min-w-max w-full table-auto"><thead><tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"><th class="py-3 px-6 text-center">Имя</th><th class="py-3 px-6 text-center hidden md:table-cell">E-mail</th><th class="py-3 px-6 text-center hidden sm:table-cell">Статус</th><th class="py-3 px-6 text-center">Действия</th></tr></thead><tbody class="text-gray-600 text-sm font-light"><!--[-->`);
      ssrRenderList(props.users, (user) => {
        _push(`<tr class="border-b border-gray-200 hover:bg-gray-100"><td class="py-3 px-6 text-left"><p>${ssrInterpolate(user.name)}</p></td><td class="hidden md:table-cell py-3 px-6 text-center"><p>${ssrInterpolate(user.email)}</p></td><td class="py-3 px-6 text-center hidden sm:table-cell">`);
        if (user.is_admin) {
          _push(`<span class="bg-orange-200 text-orange-800 py-1 px-3 rounded-full text-xs">Админ</span>`);
        } else {
          _push(`<span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Пользователь</span>`);
        }
        _push(`</td><td class="py-3 px-6 text-center"><div class="flex item-center justify-center"><div class="w-5 mx-3 transform hover:text-orange-500 hover:scale-110">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("users.edit", { id: user.id })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="w-5 mx-3 transform hover:text-orange-500 hover:scale-110">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("users.destroy", { id: user.id }),
          method: "post"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Partials/UsersTable.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "UsersPage",
  __ssrInlineRender: true,
  props: ["users"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Пользователи" }, null, _parent));
      _push(`<div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">`);
      _push(ssrRenderComponent(_sfc_main$y, null, null, _parent));
      _push(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">`);
      _push(ssrRenderComponent(_sfc_main$4, { users: __props.users }, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/UsersPage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "UsersProfilePage",
  __ssrInlineRender: true,
  props: ["user"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        user: props.user
      }, null, _parent));
      _push(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        userId: props.user.id
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/UsersProfilePage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const GuestLayout_vue_vue_type_style_index_0_scoped_32c65575_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-4 sm:pt-0 bg-gray-100 shelves" }, _attrs))} data-v-32c65575>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GuestLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-32c65575"]]);
const WelcomePage_vue_vue_type_style_index_0_scoped_f9db0c7c_lang = "";
const __default__ = {
  layout: GuestLayout
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "WelcomePage",
  __ssrInlineRender: true,
  setup(__props) {
    const emailInput = ref(null);
    let modalImg = ref(getModalImg());
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    function getModalImg() {
      return Math.floor(Math.random() * (maxBoxImage - minBoxImage + 1)) + minBoxImage;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-4 bg-white rounded-lg p-2 md:w-4/12" }, _attrs))} data-v-f9db0c7c><form class="flex flex-col" data-v-f9db0c7c><div data-v-f9db0c7c><div class="${ssrRenderClass([`login_img__${unref(modalImg)}`, "login_img"])}" data-v-f9db0c7c></div><div data-v-f9db0c7c>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        ref_key: "emailInput",
        ref: emailInput,
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autofocus: "",
        onChange: ($event) => unref(form).errors.email = ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-3" data-v-f9db0c7c>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        for: "password",
        value: "Пароль"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        id: "password",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        onChange: ($event) => {
          unref(form).errors.password = "";
          unref(form).errors.email = "";
        }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="flex justify-center mt-2" data-v-f9db0c7c><label class="flex items-center" data-v-f9db0c7c>`);
      _push(ssrRenderComponent(_sfc_main$A, {
        name: "remember",
        checked: unref(form).remember,
        "onUpdate:checked": ($event) => unref(form).remember = $event
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600" data-v-f9db0c7c>Запомнить меня</span></label></div><div class="flex justify-center mt-2" data-v-f9db0c7c>`);
      _push(ssrRenderComponent(PrimaryButton, {
        class: ["justify-center w-1/4", { "opacity-25": unref(form).processing }],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Войти `);
          } else {
            return [
              createTextVNode(" Войти ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WelcomePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WelcomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9db0c7c"]]);
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WelcomePage
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_0, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_1, "./Pages/Auth/Login.vue": __vite_glob_0_2, "./Pages/Auth/Register.vue": __vite_glob_0_3, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_4, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_5, "./Pages/CreateBox.vue": __vite_glob_0_6, "./Pages/Dashboard.vue": __vite_glob_0_7, "./Pages/EditBox.vue": __vite_glob_0_8, "./Pages/History/HistoryPage.vue": __vite_glob_0_9, "./Pages/History/partials/HistoryPagination.vue": __vite_glob_0_10, "./Pages/Main/MainPage.vue": __vite_glob_0_11, "./Pages/Main/partials/HomeWithImage.vue": __vite_glob_0_12, "./Pages/Main/partials/HomeWithTable.vue": __vite_glob_0_13, "./Pages/Profile/Edit.vue": __vite_glob_0_14, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_15, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_16, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_17, "./Pages/Users/Partials/UpdateUserPassword.vue": __vite_glob_0_18, "./Pages/Users/Partials/UpdateUserProfile.vue": __vite_glob_0_19, "./Pages/Users/Partials/UsersTable.vue": __vite_glob_0_20, "./Pages/Users/UsersPage.vue": __vite_glob_0_21, "./Pages/Users/UsersProfilePage.vue": __vite_glob_0_22, "./Pages/WelcomePage.vue": __vite_glob_0_23 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
