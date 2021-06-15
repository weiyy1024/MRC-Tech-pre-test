<template>
<div class="header">
  <div id="headerContainer">
      <img id="logo" src="~/assets/img/youtube.png" alt="">
      <!-- searchBar -->
      <form>
        <input id="searchBar" type="text">
        <button type="submit" class="icon has-text-light">
            <fa :icon='["fas" , "search"]' />
        </button>
      </form>
      <div id="member">S</div>
  </div>
  <!-- keyword search tags -->
  <div id="keywordContainer">
      <label v-for="(keyword,index) in keywords" :key="index" >
        <input type="checkbox" :value="keyword">
        <span>{{ keyword }}</span>
      </label>
    </div>
</div>
</template>
<script>
export default {
        layout: 'home',
        data() {
          return {
            keywords:['All','Music','Love songs','Games','Movies','Chellenge','Taiwan','Covid-19','TOEIC','Outfit','Workout','Engineer','Foods'],
            } 
        }
    }
</script>



