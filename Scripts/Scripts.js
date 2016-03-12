/**
 * Created by Dorota Przeniosło on 2016-02-29.
 */

function MaterialModule() {

    function initBindings() {

        $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 240
                edge: 'left', // Choose the horizontal origin
                closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
            }
        );
    }

    function initialize() {
        initBindings();
    }

    return {
        init: initialize
    };
}



$( document ).ready(function(){
    var uiModule = MaterialModule();
    uiModule.init();
});