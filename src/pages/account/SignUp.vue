<template>
  <Layout>
    <h1 class="text-2xl mt-12 font-bold text-center mb-12">
      Создайте свой аккаунт
    </h1>

    <SocialLogin></SocialLogin>

    <div class="flex items-center justify-center mb-4">
      <div
        class="flex items-center flex-no-wrap w-7/12 sm:w-6/12 md:w-5/12 lg:w-4/12"
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
        class="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 py-4 px-2 bg-red-200 rounded mb-2 border border-red-700 text-gray-900"
      >
        ❗️ {{ error }}
      </div>

      <div class="flex flex-col w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <div class="w-full mb-2">
          <label class="block text-sm mb-2 text-gray-600" for="sign-up-email"
            >Почта</label
          >
          <input
            id="sign-up-email"
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
          <label class="block text-sm mb-2 text-gray-600" for="sign-up-password"
            >Пароль</label
          >
          <input
            id="sign-up-password"
            v-model.trim="$v.password.$model"
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="password"
            placeholder="Минимум 6 знаков"
            autocomplete="new-password"
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

        <div class="w-full mb-4">
          <label class="text-gray-500 font-bold">
            <input
              v-model="checkbox"
              class="mr-2 leading-tight"
              type="checkbox"
            />
            <span class="text-sm">
              Получать бонусные шансы, важные новости и другое! Вы всегда
              сможете отключить это в своем профиле.
            </span>
          </label>
        </div>

        <div
          v-if="isRegSucceed"
          class="py-2 px-2 bg-green-500 rounded mb-2 border border-green-700 text-white"
        >
          Вы успешно зарегистрированы
        </div>
        <button
          type="submit"
          class="w-full px-6 py-4 mx-auto block font-bold text-white rounded bg-purple-500"
        >
          Создать аккаунт
        </button>
      </div>
    </form>

    <form-helper
      helper-text="У вас уже есть аккаунт?"
      href="/account/sign-in/"
      button-text="Войти"
    />
  </Layout>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { email, minLength, required } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex';
import FormHelper from '~/components/FormHelper';
import SocialLogin from '~/components/SocialLogin';

export default {
  components: {
    FormHelper,
    SocialLogin,
  },
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
      checkbox: false,
      error: '',
    };
  },
  metaInfo: {
    title: 'Зарегистрироваться',
  },
  computed: {
    ...mapGetters('auth', ['isRegSucceed']),
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
          await this.$store.dispatch('auth/register', {
            email: this.email,
            password: this.password,
            checkbox: this.checkbox,
          });
          this.error = '';
          this.$v.reset();
        }
      } catch (e) {
        if (e.response) {
          this.error = 'Такой пользователь уже существует';
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
