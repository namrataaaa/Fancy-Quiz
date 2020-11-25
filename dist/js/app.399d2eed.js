(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],d=0,h=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Fancy-Quiz/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0c7e":function(e,t,n){},"1ce2":function(e,t,n){"use strict";n("0c7e")},2193:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=n("5f5b"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{numCorrect:e.numCorrect,numTotal:e.numTotal,categoryName:e.categoryName}}),n("b-container",[n("b-row",{attrs:{"align-h":"between"}},[n("b-col",{attrs:{cols:"5"}},[n("Category",{attrs:{selectCategory:e.selectCategory}})],1),n("b-col",{attrs:{cols:"4"}},[n("b-button",{attrs:{variant:"info",id:"btn-play"},on:{click:e.howToPlay}},[e._v("How to play ")])],1)],1),n("b-row",{ref:"questionContainer"},[n("b-col",[n("Loading"),e.questions.length&&e.categoryId?n("QuestionBox",{attrs:{currentQuestion:e.questions[e.index],next:e.next,increment:e.increment,back:e.back,index:e.index,numTotal:e.numTotal,numCorrect:e.numCorrect,reset:e.reset}}):e._e()],1)],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",{attrs:{tabs:""}},[n("b-nav-item",{attrs:{disabled:""}},[n("b",[e._v("Fancy Quiz")])]),n("b-nav-item",{attrs:{disabled:""}},[e._v("Score: "+e._s(e.numCorrect)+"/"+e._s(e.numTotal))]),n("b-nav-item",{attrs:{disabled:""}},[e._v("Category: "+e._s(e.categoryName))])],1)],1)},c=[],u={props:["numCorrect","numTotal","categoryName"]},l=u,d=(n("e2e0"),n("2877")),h=Object(d["a"])(l,i,c,!1,null,"466da4da",null),f=h.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-box-container"},[n("b-jumbotron",{scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(" "+e._s(e.htmlDecode(e.currentQuestion.question))+" ")]},proxy:!0}])},[n("b-row",[n("b-col",[n("span",{staticClass:"questionNumber"},[e._v("Question: "+e._s(e.index+1)+"/10")])]),n("b-col",[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",variant:"danger",title:"Resets your score to 0 and lets you reappear the quiz"},on:{click:e.reset}},[e._v(" Reset Quiz")])],1)],1),n("hr",{staticClass:"my-3"}),n("b-list-group",e._l(e.shuffledAnswers,(function(t,r){return n("b-list-group-item",{key:r,class:[e.answerClass(r)],on:{click:function(t){return t.preventDefault(),e.selectAnswer(r)}}},[e._v(" "+e._s(e.htmlDecode(t))+" ")])})),1),n("b-button",{attrs:{variant:"warning",disabled:0===e.index},on:{click:e.back}},[e._v(" Back ")]),n("b-button",{attrs:{variant:"primary",disabled:null===e.selectedIndex||e.answered},on:{click:e.submitAnswer}},[e._v(" Submit ")]),n("b-button",{attrs:{variant:"success",disabled:9===e.index},on:{click:e.next}},[e._v(" Next")])],1)],1)},p=[],b=n("2ef0"),y=n.n(b),g={props:{currentQuestion:Object,next:Function,increment:Function,back:Function,index:Number,numTotal:Number,numCorrect:Number,reset:Function},data(){return{selectedIndex:null,correctIndex:null,shuffledAnswers:[],answered:!1}},computed:{answers(){let e=[...this.currentQuestion.incorrect_answers];return e.push(this.currentQuestion.correct_answer),e}},watch:{currentQuestion:{immediate:!0,handler(){this.selectedIndex=null,this.shuffleAnswers(),this.answered=!1}}},methods:{htmlDecode(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value},selectAnswer(e){this.selectedIndex=e},shuffleAnswers(){let e=[...this.currentQuestion.incorrect_answers,this.currentQuestion.correct_answer];this.shuffledAnswers=y.a.shuffle(e),this.correctIndex=this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)},submitAnswer(){let e=!1;if(this.selectedIndex===this.correctIndex&&(e=!0),this.increment(e),this.answered=!0,9==this.numTotal){const e={title:"Thank You for Playing!",size:"sm"};this.$dialogs.alert("You have scored "+this.numCorrect+" out of 10. Select any category to play again.",e).then(e=>{console.log(e)})}},answerClass(e){let t="";return t=this.answered||this.selectedIndex!==e?this.answered&&this.correctIndex===e?"correct":this.answered&&this.selectedIndex===e&&this.correctIndex!==e?"incorrect":"":"selectedAnswer",t}}},w=g,v=(n("1ce2"),Object(d["a"])(w,m,p,!1,null,"23ed295d",null)),x=v.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-category",text:"Select a category to play "}},e._l(e.categories,(function(t,r){return n("b-dropdown-item",{key:r,staticClass:"dropdown-option",on:{click:function(n){return n.preventDefault(),e.selectCategory(t.id,t.name)}}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)},C=[],k={props:{selectCategory:Function},data(){return{categories:[]}},methods:{},mounted:function(){fetch("https://opentdb.com/api_category.php",{method:"get"}).then(e=>e.json()).then(e=>{this.categories=e.trivia_categories})}},T=k,I=(n("e2fb"),Object(d["a"])(T,_,C,!1,null,"e6ee9970",null)),j=I.exports,O=n("9062"),Q=n.n(O);n("e40d");r["default"].use(Q.a);var P={name:"App",components:{Header:f,QuestionBox:x,Category:j,Loading:Q.a},data(){return{questions:[],index:0,numCorrect:0,numTotal:0,categoryId:0,categoryName:"",fullPage:!1}},methods:{next(){this.index<10&&this.index++},increment(e){e&&this.numCorrect++,this.numTotal++},back(){this.index--},selectCategory(e,t){let n=this.$loading.show({container:this.fullPage?null:this.$refs.questionContainer,canCancel:!1,loader:"bars"});setTimeout(()=>{n.hide()},1500),this.categoryId=e,this.categoryName=t,fetch("https://opentdb.com/api.php?amount=10&category="+this.categoryId+"&difficulty=easy&type=multiple",{method:"get"}).then(e=>e.json()).then(e=>{this.questions=e.results}),this.numTotal=0,this.numCorrect=0,this.index=0},reset(){this.index=0,this.numTotal=0,this.numCorrect=0},howToPlay(){const e={title:"How To Play",size:"md"};this.$dialogs.alert("The rules are pretty simple. Select a category of your choice and start playing. You will have 10 questions. For each question, select your answer, submit it and then click on next. If your answer is correct, your score will increase. If you forgot a submit an answer for a question, go back and submit it. At the end of submitting all the 10 answers, you will get your final score. Happy Playing!",e).then(e=>{console.log(e)})}}},q=P,A=(n("034f"),Object(d["a"])(q,s,a,!1,null,null,null)),N=A.exports,S=(n("f9e3"),n("2dd8"),n("62bb"),n("1aa0")),$=n.n(S);r["default"].use($.a),r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({render:e=>e(N)}).$mount("#app")},"85ec":function(e,t,n){},e2e0:function(e,t,n){"use strict";n("eda5")},e2fb:function(e,t,n){"use strict";n("2193")},eda5:function(e,t,n){}});
//# sourceMappingURL=app.399d2eed.js.map