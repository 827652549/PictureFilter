
		var objStyle = document.getElementById("f").style; //获取图片figure元素的style
		var blur = 0;
		var brightness = 1;
		var contrast = 1;
		var grayscale=0;
		var hueRotate=0;
		var invert=0;
		var opacity=1;
		var saturate=1;
		var sepia=0;		
		function Change(v) {
			if(v.id=="blur"){
				blur=v.value;
				on();
			}else if(v.id=="brightness"){
				brightness=v.value;
				on();
			}else if(v.id=="contrast"){
				contrast=v.value;
				on();
			}else if(v.id=="grayscale"){
				grayscale=v.value;
				on();
			}else if(v.id=="hue-rotate"){
				hueRotate=v.value;
				on();
			}else if(v.id=="invert"){
				invert=v.value;
				on();
			}else if(v.id=="opacity"){
				opacity=v.value;
				on();
			}else if(v.id=="saturate"){
				saturate=v.value;
				on();
			}else if(v.id=="sepia"){
				sepia=v.value;
				on();
			}
		}

		function on() {
		var str = "blur(" + blur + "px) brightness(" + brightness + ") contrast("+contrast+") grayscale("+grayscale+") hue-rotate("+hueRotate+"deg) invert("+invert+") opacity("+opacity+") saturate("+saturate+") sepia("+sepia+")";
			objStyle.filter =str;
			objStyle.webkitFilter = str;
		}
