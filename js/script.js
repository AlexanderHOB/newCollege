//Incio de loading
var loading = document.querySelector('.loading');
window.onload = () => {
		loading.classList.add('loadingOpacity');
	setTimeout(()=>{
		loading.classList.add('ghost');
	}, 500);
};
//Fin de loading