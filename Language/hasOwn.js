define(function () {

    /**
     * Safer Object.hasOwnProperty
     * @author Miller Medeiros
     * @version 0.1.0 (2012/01/19)
     */
    function hasOwn(obj, prop){
		return Object.prototype.hasOwnProperty.call(obj, prop);
    }

	return hasOwn;

});