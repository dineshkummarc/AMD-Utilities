[Integralist](http://www.integralist.co.uk/) - AMD Utilities
================================

Description
-----------

All modules have been forked directly from [@millermedeiros](https://github.com/millermedeiros) [repo](https://github.com/millermedeiros/amd-utils/) - I've just taken the modules I was interested in and set-up my own examples.

Example
-------

Path: http://amd:8888/Array/

~~~~ html
<!doctype html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>AMD Array Methods</title>
	</head>
	<body>
		<script data-main="init" src="../require.js"></script>
	</body>
</html>
~~~~

~~~~ javascript
require(['filter'], function(filter){
	
	var obj = { test:'abc' };
	
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter
	function filterCallback(value, index, array) {
		console.log(this, value, index, array);		
		
		return (value === 'a' || value === 'c') ? true : false; // keep either of these two values in new Array
		
	}
	
	console.group('filter');
		var A = filter(['a','b','c'], filterCallback),
			B = filter(['a','b','c'], filterCallback, obj);
		console.log(A, B);
	console.groupEnd();
	
});
~~~~~