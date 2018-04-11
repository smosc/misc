var expStr = function(i,z){
	i.match(/.-./g).forEach(function(x,y){
		i=i.replace(x,"");
		for(y=x.charCodeAt(0);y<=x.charCodeAt(2);y++){
			z=(z?z:"")+String.fromCharCode(y);
        }
    });
	i.split("").forEach(function(x){
		z+=(!z.match(new RegExp(x.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),"g"))?x:"");
    });
	return z;
};
