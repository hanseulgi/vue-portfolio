<template>
  <div class="lists-wrap">
    <div class="list-filter">
      <label><input type="radio" v-model="selectedCategory" value="All"> All</label>
      <label><input type="radio" v-model="selectedCategory" value="2022" /> 2022</label>
      <label><input type="radio" v-model="selectedCategory" value="2021" /> 2021</label>
      <label><input type="radio" v-model="selectedCategory" value="2020" /> 2020</label>
    </div>
    <div class="lists-view">
      <ul class="view-list">
        <li class="view-items" :key="i" v-for="(portfolio, i) in portfolioList">
          <img class="porject-image" :src="portfolio.image" />
          <span class="project-name">{{portfolio.name}}</span>
          <p class="project-description">{{portfolio.description}}</p>
          <a class="project-url" v-bind:href="portfolio.url">링크 이동</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default { 

  data() {
    return {
      portfolioList: [],
      selectedCategory: "All",
      isActive: false,
    };
  },
  created() {
    this.getList();
  },
  computed: {
		portfolioList: function() {
			var vm = this;
			var category = vm.selectedCategory;

			if(category === "All") {
				return vm.portfolioList;
			} else {
				return vm.portfolioList.filter(function(portfolio) {
					return portfolio.category === category;
				});
			}
		}
	},
  methods: {
    async getList() {
      this.portfolioList = await this.$api("https://a9dbae70-de04-4018-aaf2-13e1b7a17d2d.mock.pstmn.io/portfolioList","get");  //postman에 넣어둔 json형태 data
    },
    activate() {
      this.isActive = true;
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
