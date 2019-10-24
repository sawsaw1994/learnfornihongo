import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

import N3 from '@/components/n3/index'
import N3Kanji from '@/components/n3/kanji/index'
import N3KanjiExercises from '@/components/n3/kanji/exercises/index'

import N3KanjiExercises01 from '@/components/n3/kanji/exercises/01'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/n3',
      name: 'N3',
      component: N3
    },
    {
      path: '/n3/kanji',
      name: 'N3 Kanji',
      component: N3Kanji
    },
    {
      path: '/n3/kanji/exercises',
      name: 'N3 Kanji Exercises',
      component: N3KanjiExercises
    },
    {
      path: '/n3/kanji/exercises/01',
      name: 'N3 Kanji Exercises 01',
      component: N3KanjiExercises01
    }
  ]
})
