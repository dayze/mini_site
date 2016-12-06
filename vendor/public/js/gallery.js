document.addEventListener("DOMContentLoaded", function () { //wait for DOM, vanilla JS
    var controller = new controllerGallery();
    controller.init();
});

var controllerGallery = function () {
    this.centerDiV = wlSelect('.header');
    this.gallerieContent = wlSelect('#gallery-content');
    this.highlightPicture = wlSelect('.highlightPicture');
};

controllerGallery.prototype.eventClickPicture = function () {
    var that = this;
    this.gallerieContent.addEventListener("click", function (ev) {
        that.changeHighlightPicture(ev.target);
    })

};

controllerGallery.prototype.changeHighlightPicture = function (target) {
    var srcHighlightPicture = target.getAttribute('src');
    this.highlightPicture.setAttribute('src',srcHighlightPicture);
};

controllerGallery.prototype.init = function () {
    this.eventClickPicture()


};



