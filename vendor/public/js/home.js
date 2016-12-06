document.addEventListener("DOMContentLoaded", function () { //wait for DOM, vanilla JS
    var controller = new controllerHome();
    controller.init();
});

var controllerHome = function () {

};

controllerHome.prototype.stickyBar = function () {
    wlSelect("#nav").style = "position:fixed";

};

controllerHome.prototype.init = function () {
    this.stickyBar();
};



