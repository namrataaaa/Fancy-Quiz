<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numTotal="numTotal" :categoryName="categoryName"/>
    
    <b-container >
      <b-row align-h="between">
        <b-col cols="5"><Category 
        :selectCategory="selectCategory"/></b-col>
        <b-col cols="4"><b-button variant="info" id="btn-play" @click="howToPlay">How to play </b-button></b-col>
      </b-row>
      <b-row ref="questionContainer">
        <b-col>
          
          <Loading />
          <!-- <loading
          :active="isLoading"
          :is-full-page="fullPage"
          :loader="loader"
          :can-cancel="false" /> -->
          <QuestionBox
            v-if="questions.length && categoryId"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
            :back="back"
            :index="index"
            :numTotal="numTotal"
            :numCorrect="numCorrect"
            :reset="reset"
          />
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'
import Category from './components/Category.vue'

import Vue from 'vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading)

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox,
    Category,
    Loading
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      categoryId: 0,
      categoryName: "",
      fullPage: false,
    }
  },
  methods: {
    next() {
      if(this.index < 10)
        this.index++
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
    },
    back() {
      this.index--
    },
    selectCategory(categoryId, categoryName) {
      let loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.questionContainer,
          canCancel: false,
          loader: "bars"
        })
        setTimeout(() => {
          loader.hide()
        },1500)  

      this.categoryId = categoryId
      this.categoryName = categoryName
      fetch('https://opentdb.com/api.php?amount=10&category='+ this.categoryId + '&difficulty=easy&type=multiple', {
        method: 'get',
      })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          this.questions = jsonData.results
        })

        this.numTotal = 0
        this.numCorrect = 0
        this.index = 0
  
      },
    reset() {
      this.index = 0;
      this.numTotal = 0;
      this.numCorrect = 0;
    },
    howToPlay() {
      const options = {title: 'How To Play', size: 'md'}
        this.$dialogs.alert('The rules are pretty simple. Select a category of your choice and start playing. You will have 10 questions. For each question, select your answer, submit it and then click on next. If your answer is correct, your score will increase. If you forgot a submit an answer for a question, go back and submit it. At the end of submitting all the 10 answers, you will get your final score. Happy Playing!', options)
        .then(res => {
          console.log(res) // {ok: true|false|undefined}
        })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#btn-play {
  margin-top: 10px;
}

@media only screen and (max-width: 420px) {
  #btn-play {
    padding: 6px 2.1px;
  
  }
}
</style>
