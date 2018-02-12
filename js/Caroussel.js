let contadorImagen = 1;
let total = 15;
let contadorImagenDerecha = 0;
let contadorImagenIzquierda = 0;
function photo(x) {
	let imagen = document.getElementById('imagen');
	let imagenIzquierda = document.getElementById('imagenIzquierda');
	let imagenDerecha = document.getElementById('imagenDerecha');
	contadorImagen = contadorImagen + x;
	contadorImagenDerecha = contadorImagen-x;
	contadorImagenIzquierda = contadorImagenIzquierda+x;
	if(contadorImagen > total){
			contadorImagen = 1;
			contadorImagenDerecha = 15;
			contadorImagenIzquierda = contadorImagen+1;
		}
	else if(contadorImagen < 1){
			contadorImagen = total;
			contadorImagenDerecha = 15-1;
			contadorImagenIzquierda = 1;
		}else{
			contadorImagenIzquierda = contadorImagen+1;
			contadorImagenDerecha = contadorImagen-1;
	}
			imagenDerecha.src = "http://jeitests.com/namecouple/image/milton-m-"+ contadorImagenDerecha +".jpg";
			imagenIzquierda.src = "http://jeitests.com/namecouple/image/milton-m-"+ contadorImagenIzquierda +".jpg";
			imagen.src = "http://jeitests.com/namecouple/image/milton-m-"+ contadorImagen +".jpg";
}


