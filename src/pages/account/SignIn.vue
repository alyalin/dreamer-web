<template>
  <Layout>
    <div>
      <h1 class="text-2xl mt-12 font-bold text-center mb-12">
        Добро пожаловать на Дример!
      </h1>

      <SocialLogin></SocialLogin>

      <div class="flex items-center justify-center mb-4">
        <div
          class="flex items-center flex-no-wrap w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 px-10 sm:px-0"
        >
          <div class="h-px w-full bg-gray-400" />
          <div class="mx-1 text-gray-500">
            или
          </div>
          <div class="h-px w-full bg-gray-400" />
        </div>
      </div>

      <form
        class="flex flex-col w-full justify-center items-center mb-4 px-10 sm:px-0"
        @submit.prevent="submit"
      >
        <div
          v-if="error"
          class="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 py-4 px-2 bg-red-200 rounded mb-2 border border-red-700 text-gray-900 flex"
        >
          <span class="mr-8">❌</span>
          <ul class="list-disc">
            <li v-for="(err, index) in error" :key="index">
              {{ err }}
            </li>
          </ul>
        </div>

        <div
          class="flex flex-col w-full w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12"
        >
          <div class="w-full mb-2">
            <label class="block text-sm mb-2 text-gray-600" for="sign-in-email"
              >Почта</label
            >
            <input
              id="sign-in-email"
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

          <div class="w-full mb-4">
            <label
              class="block text-sm mb-2 text-gray-600"
              for="sign-in-password"
              >Пароль</label
            >
            <input
              id="sign-in-password"
              v-model.trim="$v.password.$model"
              class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="password"
              name="current-password"
              autocomplete="current-password"
              placeholder="Минимум 6 знаков"
              :class="{ 'border-red-600': $v.password.$error }"
            />
            <div v-if="!$v.password.minLength" class="text-red-600">
              Введите минимум {{ $v.password.$params.minLength.min }} знаков
            </div>
            <div
              v-if="$v.password.$error && !$v.password.required"
              class="text-red-600"
            >
              Поле обязательно для заполнения
            </div>
          </div>

          <button
            type="submit"
            class="w-full px-6 py-4 mx-auto block font-bold text-white rounded bg-purple-500"
          >
            Войти
          </button>
        </div>
      </form>

      <div class="flex justify-center mb-4">
        <g-link class="text-purple-500 no-underline" to="/account/recover/">
          Забыли пароль?
        </g-link>
      </div>

      <form-helper
        helper-text="У вас нет аккаунта?"
        href="/account/sign-up/"
        button-text="Зарегистрироваться"
      />
    </div>
  </Layout>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';
import FormHelper from '~/components/FormHelper';
import SocialLogin from '~/components/SocialLogin';

export default {
  components: {
    FormHelper,
    SocialLogin,
  },
  mixins: [validationMixin],
  metaInfo: {
    title: 'Войти в свой профиль',
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(0),
    },
  },
  methods: {
    async submit() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
        } else {
          await this.$store.dispatch('auth/login', {
            email: this.email,
            password: this.password,
          });
        }
      } catch (e) {
        if (!e.status) {
          this.error = ['Что-то пошло не так'];
        }
        if (e.response.data.message) {
          console.dir(e);
          const errors = e.response.data.message;

          if (typeof errors === 'string') {
            this.error = [e.response.data.message];
          }

          if (errors instanceof Array) {
            this.error = e.response.data.message;
          }
        }
      }
    },

    reset() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>
