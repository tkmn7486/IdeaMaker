<template>
  <div class="character">
      <div class="chr_contents">
        <h1>>>キャラクター関連</h1>
        <h2>▶基礎要素</h2>
        <h4>年齢：<h3>{{age}}</h3><button class="choice_button" @click="choice_age">再抽選</button></h4>

        <h2>▶内面</h2>
        <h4>性格：<h3>{{character}}</h3><button class="choice_button" @click="choice_character">再抽選</button></h4>
        <h4>口癖：<h3>{{spetial_word}}</h3><button class="choice_button" @click="choice_SWord">再抽選</button></h4>

        <h2>▶外面</h2>
        <h4>身体的性別：<h3>{{body_sex}}</h3><button class="choice_button" @click="choice_body_sex">再抽選</button></h4>
        <h4>身長：<h3>{{height}}</h3><button class="choice_button" @click="choice_height">再抽選</button></h4>
        <h4>髪型：<h3>{{heir}}</h3><button class="choice_button" @click="choice_heir">再抽選</button></h4>
        <button class="AllRandomButton" @click="choice">全部ランダム</button>
      </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'character',
  setup(){

// 身体的性別
      let body_sex = ref("---")
      let body_sexs = ref([
          "男","女","無性","両性"
      ])

// 性格
      let character = ref("---")
      let characters = ref([
          "楽観的","真面目","短気","メンヘラ","天然","耽美","大人しい","めんどくさがり","穏やか","神経質","自信家","超ネガティブ","超ポジティブ","ドケチ","傲慢","無気力"
      ])

// 身長
      let height = ref("---")
      let heights = ref([
          "3cm","15cm","80cm-100cm","110cm-130cm","140cm-150cm","160cm-170cm","180cm-190cm","200cm-220cm","5m","10m","50m","100m"
      ])

// 年齢
      let age = ref("---")
      let ages = ref([
          "5歳","10歳","15歳","20歳","25歳","30歳","35歳","40歳","50歳","60歳","70歳","80歳","90歳","100歳","1000歳","10000歳","年齢不詳","不老不死"
      ])

// 髪型
      let heir = ref("---")
      let heirs = ref([
          "スキンヘッド","スポーツ刈り","ハゲ(残り僅か)","ハゲ（若干後退）","ハゲ(頭頂部のみ)","ショート","ミディアム","ロング","超ロング","ボブ","リーゼント","七三カット","アップバング","ウルフカット","ツンツンヘアー","ツインテール","ポニーテール","センター分け","ポンパドール","チョンマゲ","無造作","マッシュ","前髪スカスカ"
      ])

      let spetial_word = ref("---")
      let spetial_words = ref([
          "語尾は「～だぜ」","「計算通り」","「なんとかなるさ」","「楽勝」","「めんどくさーい」","「どうせ～なんて…」"
      ])

// 一括抽選
      const choice=()=>{
          choice_character();
          choice_height();
          choice_SWord();
          choice_heir();
          choice_body_sex();
          choice_age();
      }

// 個別抽選
      const choice_character=()=>{
          character.value = characters.value[getRandomInt(0,characters.value.length)]
      }

      const choice_height=()=>{
          height.value = heights.value[getRandomInt(0,heights.value.length)]
      }

      const choice_SWord=()=>{
          spetial_word.value = spetial_words.value[getRandomInt(0,spetial_words.value.length)]
      }

      const choice_age=()=>{
          age.value = ages.value[getRandomInt(0,ages.value.length)]
      }

      const choice_body_sex=()=>{
          body_sex.value = body_sexs.value[getRandomInt(0,body_sexs.value.length)]
      }

      const choice_heir=()=>{
          heir.value = heirs.value[getRandomInt(0,heirs.value.length)]
      }
      


      const getRandomInt=(min, max)=>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }

      return{
          character,
          characters,
          height,
          heights,
          age,
          ages,
          heir,
          heirs,
          body_sex,
          body_sexs,
          spetial_word,
          spetial_words,
          choice,
          choice_character,
          choice_height,
          choice_age,
          choice_SWord,
          choice_body_sex,
          choice_heir,
          getRandomInt,

      }
  }
}
</script>

<style>
h2{
    padding-top:10px;
}

h3{
    display:inline;
    text-align:center;
}

h4{
    text-align:center;
}

.character{
    border:solid;
    border-radius:10px;
    background-color:rgb(255, 252, 210);
    width:400px;
    margin:0 auto;
}

.AllRandomButton{
    border:solid 2px;
    border-radius:10px;
    font-size:20px;
    padding:5px;
    margin:0 auto;
}

.choice_button{
    margin-left:10px;
}



.chr_contents{
    padding:15px;
}
    
</style>