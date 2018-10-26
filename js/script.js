//Incio de loading
var loading = document.querySelector('.loading');
window.onload = () => {
	loading.classList.add('loadingOpacity');
	setTimeout(()=>{
		loading.classList.add('ghost');
	}, 500);
};
//Fin de loading
/*Modal */
// var imagenes=[2,4,1,3,1,2,3,4,4,2,4,2];
// var galeria= document.getElementById("my-grid");
// for(imagen of imagenes){
// 	galeria.innerHTML+=`
// 	<div  style="width: 18rem;">
//         <a href="#" data-toggle="modal" data-target="#exampleModal"><img class="card-img-top" src="../img/areas/2.jpg" alt="Card image cap"></a>
// 	</div>
// 	<!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//     </button>    
//         <div class="modal-dialog modal-lg text-center " role="document">
//            <img src="../img/areas/2.jpg" alt="" class="img-fluid rounded">
//         </div>
//     </div>
// </div>
// 	`
// }
/*Incio de flecha*/
window.onscroll = function() {onScroll()};
var arrow = document.getElementById("arrow");
function onScroll() {
	//Flecha y moon Sun
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
		arrow.classList.add("animacion3");
	}else{
		arrow.classList.remove("animacion3");
	}
}
/*Fin de Flecha*/