Vue.component('movie-detail',{
	props:['movie'],

	template:`
         <div><div class="card-deck text-center" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="movie.Poster" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{movie.Title}}</h5>
    <a href="http://imdb.com/title/{{movie.imdbid}}" class="btn btn-primary">Movie Details</a>
  </div>
</div></div>
	`
	
});

new Vue({
	 el:"#movieapp",
	 data:{
	 	searchKey:'',
	 	moviesList:[]
	 },
	 
	 methods:{

	 	searchMovies()
	 	{
	 		var url='http://www.omdbapi.com/?s='+this.searchKey+'&apikey=e0620bd4';
	 		fetch(url)
	 		.then(response=>response.json())
	 		.then(data=>{
	 			this.moviesList=data;
	 		})
	 	}
	 }
})
