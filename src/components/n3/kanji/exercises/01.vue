<template>

<div class='exercise_01'>
    <b-breadcrumb :items="items" class="rounded-0 mb-0"></b-breadcrumb>
    <b-list-group class="text-left mb-3">
      <b-list-group-item v-for='(item, index) in lists' :key='index' class="rounded-0">
        <div>{{index+1}}. {{item.questionStart}}<b style='text-decoration: underline;'>{{item.questionMiddle}}</b>{{item.questionEnd}}</div>
        <label v-for='(ans, j) in item.answer' :key='j' class="ml-3 mb-0">
            <input type='radio' :name='`${index}`' :value='j' @click='checkAnswer(ans.choose,item.correct,parseInt(index)+1)'> {{ans.choose}}
        </label>
      </b-list-group-item>
    </b-list-group>
   <div>
      <b-button id="show-btn" @click="checkResults">Check Results</b-button>

      <b-modal ref="my-modal" scrollable centered title="Using Component Methods" hide-footer hide-header>
        <div class="d-block text-center">
          <h3>{{examMsg}}</h3>
          <div v-show='showWorngAnswer'>
            Incorrect Number => [{{showWorngAnswer}}]
          </div>
          <div class='block' v-show="worngAnswer.length">
            <b-link href='02' class='float-left'>&lt;&lt; Exercise 02</b-link>
            <b-link href='03' class='float-right'>Exercise 03 >></b-link>
          </div>
        </div>
        <b-button class='mt-3' block @click='hideModal' v-show='worngAnswer.length'>Close Me</b-button>
      </b-modal>
   </div>
</div>

</template>

<script>

export default {
  name: 'Exercise01',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          text: 'N3',
          href: '/n3'
        },
        {
          text: 'Kanji',
          href: '/n3/kanji'
        },
        {
          text: 'Exercises',
          href: '/n3/kanji/exercises'
        },
        {
          text: '01',
          active: true
        }
      ],
      examMsg: '',
      show: false,
      choosed: [],
      showWorngAnswer: '',
      worngAnswer: [],
      lists: [
        {
          questionStart: '頭が',
          questionMiddle: 'いたい',
          questionEnd: 'ので、薬を飲んだ。',
          answer: [
            {
              choose: '病い'
            },
            {
              choose: '疾い'
            },
            {
              choose: '症い'
            },
            {
              choose: '痛い'
            }
          ],
          correct: '痛い'
        }
      ]
    }
  },
  created: function () {
    this.lists.map((num, i) => {
      this.choosed.push(i + 1)
      this.shuffle(num.answer)
    })
    this.lists = this.shuffle(this.lists)
  },
  methods: {
    checkAnswer: function (e, correct, number) {
      if (e !== correct) {
        var found = this.worngAnswer.find(function (element) {
          return element === number
        })
        if (!found) this.worngAnswer.push(number)
      } else {
        this.worngAnswer = this.worngAnswer.filter(function (obj) {
          return obj !== number
        })
      }
      this.worngAnswer.sort(function (a, b) {
        return a - b
      })
      this.choosed = this.choosed.filter(function (obj) {
        return obj !== number
      })
    },
    shuffle: function (array) {
      var currentIndex = array.length
      var temporaryValue
      var randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
    checkResults: function () {
      console.log(this.worngAnswer)
      console.log(this.choosed.length)
      if (this.choosed.length) {
        this.examMsg = 'Choose the answer for each question!'
        this.$refs['my-modal'].show()
      } else {
        if (this.worngAnswer.length) {
          let text = ''
          this.worngAnswer.map((worng, index) => {
            text += worng
            if (this.worngAnswer.length - 1 !== index) {
              text += ','
            }
          })
          this.showWorngAnswer = text
          this.examMsg = 'Please Try Again!!!'
        } else {
          this.examMsg = 'Congratulation!!!'
          this.showWorngAnswer = ''
        }
        this.$refs['my-modal'].show()
      }
    },
    hideModal: function () {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
