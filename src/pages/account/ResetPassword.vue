<template>
  <Layout>
    <h1 class="text-2xl mt-12 font-bold text-center mb-12">
      Введите новый пароль
    </h1>

    <form
      class="flex flex-col w-full justify-center items-center mb-4 px-10 sm:px-0"
      @submit.prevent="submit"
    >
      <div
        v-if="showSuccessMessage"
        class="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 py-4 px-2 bg-green-200 rounded mb-2 border border-green-700 text-gray-900 flex"
      >
        <span class="mr-2">✅</span> Пароль успешно изменен
      </div>

      <div
        v-if="showErrorMessage"
        class="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 py-4 px-2 bg-red-200 rounded mb-2 border border-red-700 text-gray-900 flex"
      >
        <span class="mr-8">❌</span>
        <ul class="list-disc">
          <li v-for="(err, index) in errorText" :key="index">
            {{ err }}
          </li>
        </ul>
      </div>

      <div class="flex flex-col w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <div class="w-full mb-4">
          <label class="block text-sm mb-2 text-gray-600" for="password"
            >Пароль</label
          >
          <input
            id="password"
            v-model.trim="$v.password.$model"
            name="new-password"
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="password"
            :class="{ 'border-red-600': $v.password.$error }"
          />
          <ClientOnly>
            <password
              v-model="password"
              class="max-w-none"
              :strength-meter-only="true"
              :secure-length="8"
              :toggle="true"
              :show-password="true"
            />
          </ClientOnly>
          <div v-if="!$v.password.minLength" class="text-red-600">
            Пароль должен иметь минимум
            {{ $v.password.$params.minLength.min }} знаков.
          </div>
          <div
            v-if="$v.password.$error && !$v.password.required"
            class="text-red-600"
          >
            Поле обязательно для заполнения
          </div>
        </div>

        <div class="w-full mb-4">
          <label class="block text-sm mb-2 text-gray-600" for="repeatPassword"
            >Введите пароль еще раз</label
          >
          <input
            id="repeatPassword"
            v-model.trim="$v.repeatPassword.$model"
            name="new-password"
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="password"
            :class="{ 'border-red-600': $v.repeatPassword.$error }"
          />
          <div v-if="!$v.repeatPassword.sameAsPassword" class="text-red-600">
            Пароли не совпадают
          </div>
        </div>
        <button
          type="submit"
          class="w-full px-6 py-4 mx-auto block font-bold text-white rounded bg-purple-500"
        >
          Подтвердить
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
import { validationMixin } from 'vuelidate';
import { required, minLength, sameAs } from 'vuelidate/lib/validators';
import Password from 'vue-password-strength-meter';

export default {
  components: { Password },
  mixins: [validationMixin],
  data() {
    return {
      password: '',
      repeatPassword: '',
      token: '',
      showSuccessMessage: false,
      showErrorMessage: false,
      errorText: '',
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    repeatPassword: {
      sameAsPassword: sameAs('password'),
    },
  },
  metaInfo: {
    title: 'Сброс пароля',
  },
  mounted() {
    this.token = this.$route.query.code;
    if (!this.token) {
      this.$router.replace({ path: '/' });
    }
  },
  methods: {
    async submit() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.showSuccessMessage = false;
          this.showErrorMessage = false;
        } else {
          await this.$store.dispatch('auth/resetPassword', {
            hash: this.token,
            password: this.password,
            confirmPassword: this.repeatPassword,
          });

          this.password = '';
          this.repeatPassword = '';

          this.showSuccessMessage = true;
          this.showErrorMessage = false;
        }
      } catch (e) {
        if (e.response.data.message) {
          this.errorText = e.response.data.message;
        }
        this.showSuccessMessage = false;
        this.showErrorMessage = true;
      }
    },
  },
};
</script>

<style scoped>
.Password {
  max-width: none;
}
</style>
