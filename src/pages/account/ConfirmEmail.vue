<template>
  <Layout>
    <h1 class="text-2xl mt-12 font-bold text-center mb-2">
      Почта успешно подтверждена.
    </h1>

    <div class="text-center mt-10">
      <g-link class="text-2xl" to="/">
        ⟵ Вернуться на главную
      </g-link>
    </div>
  </Layout>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { validationMixin } from 'vuelidate';
  import { email, required } from 'vuelidate/lib/validators';

  export default {
    mixins: [validationMixin],
    data() {
      return {
        email: '',
        password: '',
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
        this.$v.$touch();
        if (this.$v.$invalid) {
        } else {
          // await this.$store.dispatch('auth/login', {
          //   email: this.email,
          //   password: this.password
          // })
        }
      },
    },
  };
</script>

<style></style>
