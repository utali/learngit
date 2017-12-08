var shape = {
    name: "reactangle",
    propup: function() {

        console.log("This inside prop(): " + this.name);

        setTimeout(() => {
            console.log("This inside setTimeout(): " + this.name);
            console.log("I'm a " + this.name + "!");
        },3000);
    }
};

shape.propup();