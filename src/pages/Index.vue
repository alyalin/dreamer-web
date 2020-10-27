<template>
  <Layout>
    <div class="relative">
      <div
        id="heroSection"
        class="container relative flex mx-auto px-8 md:px-2"
      >
        <div id="heroSectionTitle" class="relative w-full lg:w-8/12 z-20">
          <h1
            class="leading-none text-5xl lg:text-7xl xl:text-8xl font-black font-display text-white"
          >
            Мечты <br />
            сбываются
          </h1>
          <p
            class="text-accent mt-2 font-display font-semibold text-xl lg:text-2xl xl:text-3xl"
          >
            у тех, кто готов отдавать
          </p>

          <p
            class="w-full md:w-8/12 lg:w-9/12 font-display text-base xl:text-xl text-white mt-10"
          >
            Dreamer даёт возможность любому человеку провести день мечты с
            кумиром и сделать мир чуточку добрее
          </p>

          <g-link
            to="/become-a-dreamer/"
            class="mt-20 inline-flex font-display bg-accent text-xl lg:text-2xl text-brown font-bold py-3 px-8 lg:px-16 tracking-wider no-underline"
            style="border-radius: 20px"
          >
            Стать дримером
          </g-link>
        </div>
      </div>
      <div
        class="hidden absolute lg:inline-block whitespace-no-wrap top-0 overflow-hidden w-full"
        style="height: 680px"
        :style="{ paddingLeft: heroSectionMargin }"
      >
        <Card
          class="mr-16 inline-block whitespace-normal pointer-events-none"
          style="opacity: 0.05"
          img-url="~/assets/yurec.png"
          feature-first-line="Гуляем по секретному Питеру вместе с Fuze"
          feature-second-line="Детский дом «Маленький принц»"
        >
          <template v-slot:image>
            <g-image src="~/assets/yurec.png" />
          </template>
        </Card>

        <Card
          class="mr-16 inline-block whitespace-normal"
          img-url="~/assets/yurec.png"
          feature-first-line="Мощно зависаем на съемках у Дудя"
          feature-second-line="Фонд Константина Хабенского"
        >
          <template v-slot:image>
            <g-image src="~/assets/yurec.png" />
          </template>
        </Card>

        <Card
          class="mr-16 inline-block whitespace-normal"
          img-url="~/assets/yurec.png"
          feature-first-line="Мощно зависаем на съемках у Дудя"
          feature-second-line="Фонд Константина Хабенского"
        >
          <template v-slot:image>
            <g-image src="~/assets/yurec.png" />
          </template>
        </Card>
      </div>
    </div>

    <div class="container mx-auto px-8 lg:px-2 font-display dreams-section">
      <h2
        class="leading-none text-5xl lg:text-7xl xl:text-8xl font-black text-white inline-flex mb-12"
      >
        Дримы <sup class="text-2xl align-text-top text-primary">321</sup>
      </h2>

      <p class="text-accent font-semibold mb-16 text-xl lg:text-2xl xl:text-3xl">
        Нет, тебе не приснилось – ты можешь стать участником любого из этих
        событий уже сейчас
      </p>
    </div>

    <div
      class="overflow-x-scroll w-full whitespace-no-wrap scroll"
      style="height: 680px"
      :style="{ paddingLeft: dreamersSectionMargin }"
    >
      <Card
        class="inline-block align-top mr-10 lg:mr-16 whitespace-normal"
        img-url="~/assets/yurec.png"
        feature-first-line="Мощно зависаем на съемках у Дудя"
        feature-second-line="Фонд Константина Хабенского"
      >
        <template v-slot:image>
          <g-image src="~/assets/yurec.png" />
        </template>
      </Card>

      <PlaceholderCard class="inline-block align-top mr-10 lg:mr-16 whitespace-normal">
        <template v-slot:content>
          <div class="px-8 py-20 lg:pt-40 lg:px-16">
            <g-image class="mb-16" src="~/assets/logo-sign.svg"></g-image>
            <span class="text-3xl lg:text-4xl font-black text-white"
              >Здесь <br />
              может быть ваше событие</span
            >
          </div>
        </template>
      </PlaceholderCard>

      <PlaceholderCard
        class="inline-block align-top mr-10 lg:mr-16 whitespace-normal"
        :background="false"
      >
        <template v-slot:content>
          <div class="px-8 py-20 lg:pt-40 lg:px-16">
            <g-image class="mb-16" src="~/assets/logo-sign.svg"></g-image>
            <span class="text-3xl lg:text-4xl font-black text-white"
              >Новые <br />
              события <br />
              уже совсем скоро!</span
            >
          </div>
        </template>
      </PlaceholderCard>
    </div>

    <div
      id="howItWorks"
      class="container mx-auto px-8 md:px-2 lg:mt-64 font-display"
    >
      <p class="text-accent font-semibold text-xl lg:text-2xl xl:text-3xl mb-4">
        Короткая инструкция
      </p>
      <h2 class="leading-none text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-12">
        Как это <br />
        работает
      </h2>
    </div>

    <div
      class="overflow-x-auto w-full mx-auto px-2 whitespace-no-wrap scroll"
      :style="{ paddingLeft: howItWorksMargin }"
    >
      <div
        class="inline-block flex-shrink-0 how-it-works-elem mr-20 lg:mr-40 whitespace-normal"
      >
        <g-image class="mb-2" src="~/assets/event.svg" width="60" />
        <h3
          class="text-2xl xl:text-4xl text-accent leading-6 lg:leading-9 font-bold mb-4"
        >
          Выбери дрим событие
        </h3>
        <p class="text-white text-xl xl:text-2xl">
          Dreamer вместе со звёздными партнёрами готовит уникальные события или
          <strong>Дримы</strong>, которые доступны каждому участнику нашего
          благотворительного розыгрыша
        </p>
      </div>
      <div
        class="inline-block how-it-works-elem flex-shrink-0 mr-20 lg:mr-40 whitespace-normal"
      >
        <g-image class="mb-2" src="~/assets/doughnut.svg" width="60" />
        <h3
          class="text-2xl xl:text-4xl text-accent leading-6 lg:leading-9 font-bold mb-4"
        >
          Поддержи доброе дело
        </h3>
        <p class="text-white text-xl xl:text-2xl">
          Сделай взнос на странице Дрима – можно оставить любую сумму, начиная
          от 200 руб. Чем больше взнос, тем больше шанс стать победителем Дрима.
        </p>
      </div>
      <div
        class="inline-block how-it-works-elem flex-shrink-0 mr-20 lg:mr-40 whitespace-normal"
      >
        <g-image class="mb-2" src="~/assets/event.svg" width="60" />
        <h3
          class="text-2xl xl:text-4xl text-accent leading-6 lg:leading-9 font-bold mb-4"
        >
          Выиграй главный приз
        </h3>
        <p class="text-white text-xl xl:text-2xl">
          Победитель будет выбран рандомайзером в момент окончания розыгрыша.
          Шансы на победу есть у каждого участника, а процедура розыгрыша
          абсолютно прозрачная.
          <span class="block mt-8"
            ><g-link class="text-accent underline" to="/"
              >Читать подробнее</g-link
            ></span
          >
        </p>
      </div>
    </div>

    <div class="relative mt-40 lg:mt-64 dreamer-helps mb-20 lg:mb-0">
      <div class="container relative flex mx-auto px-8 md:px-2">
        <div class="relative w-full z-20 lg:pt-20">
          <h2
            class="leading-none text-5xl lg:text-7xl xl:text-8xl font-black font-display text-white mb-10"
          >
            Дример <br />
            помогает
          </h2>
          <p class="text-white w-full lg:w-6/12 text-xl lg:text-2xl xl:text-3xl">
            Мы помогаем проверенным благотворительным организациям по всей
            России, предоставляя доступ к новому поколению диджитал
            жертвователей
          </p>
        </div>
      </div>
      <div
        class="hidden lg:absolute lg:top-0 lg:inline-block whitespace-no-wrap overflow-hidden w-full"
        style="height: 680px"
        :style="{ paddingLeft: heroSectionMargin }"
      >
        <InvolveCard
          class="inline-block align-top whitespace-normal mr-16 pointer-events-none"
          style="opacity: 0.05"
          amount="2 325 000"
          events="23"
          donates="1584"
        >
          <template v-slot:image>
            <g-image src="~/assets/dom-s-maykom-logo.png" />
          </template>
        </InvolveCard>

        <InvolveCard
          class="inline-block align-top whitespace-normal mr-16 pointer-events-none"
          amount="2 325 000"
          events="23"
          donates="1584"
        >
          <template v-slot:image>
            <g-image src="~/assets/dom-s-maykom-logo.png" />
          </template>
        </InvolveCard>

        <InvolveCard
          class="inline-block align-top whitespace-normal pointer-events-none"
          amount="2 325 000"
          events="23"
          donates="1584"
        >
          <template v-slot:image>
            <g-image src="~/assets/dom-s-maykom-logo.png" />
          </template>
        </InvolveCard>
      </div>
    </div>

    <div class="pb-32">
      <div
        class="block lg:hidden overflow-x-scroll w-full whitespace-no-wrap scroll"
        style="height: 565px"
        :style="{ paddingLeft: dreamersSectionMargin }"
      >
        <InvolveCard
          class="inline-block mr-10 align-top whitespace-normal"
          amount="2 325 000"
          events="23"
          donates="1584"
        >
          <template v-slot:image>
            <g-image src="~/assets/dom-s-maykom-logo.png" />
          </template>
        </InvolveCard>

        <InvolveCard
          class="inline-block mr-10 align-top whitespace-normal"
          amount="1 325 000"
          events="10"
          donates="1024"
        >
          <template v-slot:image>
            <g-image src="~/assets/dom-s-maykom-logo.png" />
          </template>
        </InvolveCard>

        <InvolveCard
          class="inline-block mr-10 align-top whitespace-normal"
          amount="325 000"
          events="1"
          donates="1584"
        >
          <template v-slot:image>
            <g-image src="~/assets/dom-s-maykom-logo.png" />
          </template>
        </InvolveCard>
      </div>
    </div>
  </Layout>
</template>

<script>
import Card from '../components/Card';
import PlaceholderCard from '../components/PlaceholderCard';
import InvolveCard from '../components/InvolveCard';
export default {
  components: {
    Card,
    PlaceholderCard,
    InvolveCard,
  },
  data: function () {
    return {
      howItWorksMargin: null,
      heroSectionMargin: null,
      dreamersSectionMargin: null,
    };
  },
  metaInfo: {
    title: 'Главная',
  },
  routeMeta: {
    isAuth: true,
  },
  meta: {
    isAuth: true,
  },
  created() {
    if (process.isClient) {
      window.addEventListener('resize', this.handleResize);
    }
  },
  destroyed() {
    if (process.isClient) {
      window.removeEventListener('resize', this.handleResize);
    }
  },
  mounted() {
    this.setHowItWorksMargin();
    this.setHeroSectionMargin();
  },
  methods: {
    handleResize() {
      this.setHowItWorksMargin();
      this.setHeroSectionMargin();
    },
    setHowItWorksMargin(e) {
      const element = document.getElementById('howItWorks');
      const style = element.currentStyle || window.getComputedStyle(element);
      const margin =
        parseInt(style.paddingLeft.slice(0, -2)) +
        parseInt(style.marginLeft.slice(0, -2));
      this.howItWorksMargin = `${margin}px`;
      this.dreamersSectionMargin = `${margin}px`;
    },
    setHeroSectionMargin() {
      const wrapper = document.getElementById('heroSection');
      const title = document.getElementById('heroSectionTitle');
      const styleWrapper =
        wrapper.currentStyle || window.getComputedStyle(wrapper);
      const styleTitle = title.currentStyle || window.getComputedStyle(title);
      this.heroSectionMargin = `${
        parseInt(styleWrapper.paddingLeft.slice(0, -2)) +
        parseInt(styleWrapper.marginLeft.slice(0, -2)) +
        parseInt(styleTitle.width.slice(0, -2)) -
        400
      }px`;
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.scroll {
  /*scroll-snap-type:;*/
  /*padding-left: 12%;*/
  /*scroll-padding: 0 0 0 500px;*/
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.scroll > div {
  vertical-align: top;
  scroll-snap-align: center;
}

.dreams-section {
  margin-top: 12rem;
}

.how-it-works-elem {
  width: 280px;
}

@media (min-width: 1024px) {
  .dreamer-helps {
    padding-bottom: 22rem;
  }

  .dreams-section {
    margin-top: 25rem;
  }

  .how-it-works-elem {
    width: 330px;
  }
}
</style>
