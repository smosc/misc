var expStr = function(i, z)
{
	// Find x-X matches, remove from input string, and add all chars inbetween to output
	i.match(/.-./g).forEach(function(x, y)
	{
		for (y = x.charCodeAt(0); y <= x.charCodeAt(2); y++)
		{
			z = (z ? z : "") + String.fromCharCode(y);
			i = i.replace(x, "");
		}
	});
	// Cycle through remaining chars in input string, add if string doesn't already contain
	i.split("").forEach(function(x)
	{
		z += (z.indexOf(x)===-1 ? x : "");
	});
	return z;
};
