
<template>
  <div id="app" oncopy="return false" oncut="return false" onpaste="return false">
    <!-- <img src="./assets/logo.png"> -->
    <Header/>

    <div v-if="homePage">
      <transition name="moveInUp">
         <router-view/>
      </transition>
    </div>
    <div v-else>
      <b-container class="bv-example-row" fluid>
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <b-row>
          <b-col cols="12" sm="8" md="9" lg="9" xl="9">
            <transition name="moveInUp">
              <router-view/>
            </transition>
          </b-col>
          <b-col cols="12" sm="4" md="3" lg="3" xl="3">
            <b-card-group class="text-left">

              <b-card no-body class="rounded-0 border-0" v-for="(items,index) in showLists" :key="index" :header="items.header">
                <b-list-group flush>
                  <b-list-group-item 
                  class="px-4 border-0 d-flex justify-content-between align-items-center" 
                  v-for="(options,i) in items.options" 
                  :key="i" 
                  :href='options.href'>
                    {{options.text}}<b-badge variant="primary" pill>{{options.count}}</b-badge>
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>

      </b-container>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
      return {
        homePage: true,
        showLists: [
          {
            header: 'N3',
            options: [
              {
                text: 'Kanji',
                href: '/n3/kanji',
                count: 35
              },
              {
                text: 'Grammer',
                href: '/n3/grammer',
                count: 22
              },
              {
                text: 'Listening',
                href: '/n3/listening',
                count: 40
              }
            ]
          }
        ]
      }
  },
  created: function () {
    if (this.$route.fullPath !== '/') {
      this.homePage = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
div[class^="col"] {
  padding: 0;
}
.bg-info {
  background: rgb(41,95,45);
  background: linear-gradient(90deg, rgba(41,95,45,1) 0%, rgba(86,123,62,1) 0%);
}
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
