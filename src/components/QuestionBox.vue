<template>
  <div class="question-box-container">
    <b-jumbotron>
      <b-row>
        <b-col><span class="questionNumber">Question: {{ index+1 }}/10</span></b-col>
        <b-col><b-button size="sm" variant="danger" @click="reset" 
          v-b-tooltip.hover title="Resets your score to 0 and lets you reappear the quiz">
            Reset Quiz</b-button></b-col>
      </b-row>
       <template #lead>
        {{ htmlDecode(currentQuestion.question) }}
      </template>

      <hr class="my-3" />

      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in shuffledAnswers" 
          :key="index"
          @click.prevent="selectAnswer(index)"
          :class="[answerClass(index)]">
          {{ htmlDecode(answer) }}
        </b-list-group-item>
      </b-list-group>

      <b-button @click="back" variant="warning" :disabled="index === 0">
        Back
      </b-button>
      <b-button
        variant="primary"
        v-on:click="submitAnswer"
        :disabled="selectedIndex === null || answered">
        Submit
      </b-button>
      <b-button @click="next" variant="success" :disabled="index === 9">
          Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
    back: Function,
    index: Number,
    numTotal: Number,
    numCorrect: Number,
    reset: Function
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    },
    
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null
        this.shuffleAnswers()
        this.answered = false
      },
    },
  },
  methods: {
    htmlDecode(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    },
    selectAnswer(index) {
      this.selectedIndex = index
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ]
      this.shuffledAnswers = _.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      )
    },
    submitAnswer() {
      let isCorrect = false
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }
      this.increment(isCorrect)
      this.answered = true

      if(this.numTotal == 9) {
        const options = {title: 'Thank You for Playing!', size: 'sm'}
        this.$dialogs.alert('You have scored ' + this.numCorrect + ' out of 10. Select any category to play again.', options)
        .then(res => {
          console.log(res) // {ok: true|false|undefined}
        })
      }
    },
    answerClass(index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index)
        answerClass = 'selectedAnswer'
      else if (this.answered && this.correctIndex === index)
        answerClass = 'correct'
      else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      )
        answerClass = 'incorrect'
      else answerClass = ''

      return answerClass
    }
  },
}
</script>

<style scoped>
.jumbotron {
  margin-top: 10px;
  padding: 20px;
}

.questionNumber {
  margin-left: 0;
}

.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
  color: white;
}

.btn:hover {
    color: white;
}

.selectedAnswer {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: rgba(245, 90, 90, 0.829);
}
</style>
