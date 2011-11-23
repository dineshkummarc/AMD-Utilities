[Integralist](http://www.integralist.co.uk/) - AMD Utilities
================================

Description
-----------

All modules have been forked directly from [@millermedeiros](https://github.com/millermedeiros) [repo](https://github.com/millermedeiros/amd-utils/) - I've just taken the modules I was interested in and set-up my own examples.

Example
-------

~~~~ javascript
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
~~~~~