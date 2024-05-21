// Il y a un objet ladder qui permet de monter et descendre :

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this
    },
    ShowStep: function() {
        alert(this.step);
        return this
    }
};