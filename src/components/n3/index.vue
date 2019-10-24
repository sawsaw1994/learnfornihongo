<template>

<div class='exercise_01'>
    <b-breadcrumb :items="items" class="rounded-0 mb-0"></b-breadcrumb>
</div>

</template>

<script>

export default {
  name: 'Exercise01',
  data () {
    return {
      items: [
        {
          text: 'N3',
          active: true
        }
      ]
    }
  },
  created: function () {
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
