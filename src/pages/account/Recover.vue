<template>
  <Layout>
    <h1 class="text-2xl mt-12 font-bold text-center mb-2">
Забыли пароль?
</h1>
    <div class="text-center mb-12">
Не волнуйтесь, shit happens
</div>

    <form
      class="flex flex-col w-full justify-center items-center mb-4 px-10 sm:px-0"
      @submit.prevent="submit"
    >
      <div
        v-if="showSuccessMessage"
        class="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 py-4 px-2 bg-green-200 rounded mb-2 border border-green-700 text-gray-900 flex"
      >
        <span class="mr-2">✅</span> Письмо отправлено на ваш почтовый ящик
      </div>

      <div
        v-if="showErrorMessage"
        class="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 py-4 px-2 bg-red-200 rounded mb-2 border border-red-700 text-gray-900 flex"
      >
        <span class="mr-2">❌</span> Что-то пошло не так, проверьте свой
        почтовый ящик, возможно письмо уже там
      </div>

      <div class="flex flex-col w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <div class="w-full mb-4">
          <label class="block text-sm mb-2 text-gray-600" for="email"
            >Почта</label
          >
          <input
            id="email"
            v-model.trim="$v.email.$model"
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="email@example.ru"
            :class="{ 'border-red-600': $v.email.$error }"
          />
          <div v-if="!$v.email.email" class="text-red-600">
            Введен неверный формат почты
          </div>
          <div
            v-if="$v.email.$error && !$v.email.required"
            class="text-red-600"
          >
            Поле обязательно для заполнения
          </div>
        </div>
        <button
          type="submit"
          class="w-full px-6 py-4 mx-auto block font-bold text-white rounded bg-purple-500"
        >
          Восстановить пароль
        </button>
      </div>
    </form>

    <div class="flex items-center justify-center mb-4 px-10 sm:px-0">
      <div
        class="flex flex-col items-center flex-no-wrap w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12"
      >
        <div class="h-px w-full bg-gray-400 mb-4" />
        <div class="inline-flex text-lg">
          <h2 class="font-bold mr-2">
Передумали?
</h2>
          <g-link
            to="/account/sign-in/"
            class="text-purple-500 font-bold no-underline"
          >
            Войти
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import DeviceDetector from 'device-detector-js';
import { mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import { email, required } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
      showSuccessMessage: false,
      showErrorMessage: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  metaInfo: {
    title: 'Восстановление пароля',
  },
  computed: {
    ...mapGetters('auth', ['isAuth']),
  },
  methods: {
    async submit() {
      try {
        const deviceDetector = new DeviceDetector();
        const userAgent = navigator.userAgent;
        const device = deviceDetector.parse(userAgent);

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.showSuccessMessage = false;
          this.showErrorMessage = false;
        } else {
          await this.$store.dispatch('auth/recoverPassword', {
            email: this.email,
            osName: device.os.name,
            browserName: device.client.name,
          });
          this.email = '';
          this.$v.$reset();
          this.showSuccessMessage = true;
          this.showErrorMessage = false;
        }
      } catch (e) {
        this.showErrorMessage = true;
      }
    },
  },
};
</script>

<style></style>
