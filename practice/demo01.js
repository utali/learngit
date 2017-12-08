var shape = {
    name: "reactangle",
    propup: function () {
        var _this = this;
        console.log("This inside prop(): " + this.name);
        setTimeout(function () {
            console.log("This inside setTimeout(): " + _this.name);
            console.log("I'm a " + _this.name + "!");
        }, 3000);
    }
};
shape.propup();
