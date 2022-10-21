const Main = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
    },
    cacheSelectors: function () {
        this.$questions = document.querySelectorAll('.question');
        this.$answers = document.querySelectorAll('.hidden');
    },
    bindEvents: function () {
        const self = this;
        //this.$buttonForm.onclick=self.Events.onclick_Simulated.bind(self);
        //addEventListener("click", function() {gotoNode(result.name);}, false);
        self.$questions.forEach((element, index) => {
            element.addEventListener("click", function () {
                self.Events.selectQuestion(index);
            }, false);
        });
    },
    Events: {
        selectQuestion: function (index) {
            console.log(Main.$questions);
            Main.$questions.forEach((element, _index) => {
                if (index == _index) {
                    element.classList.add('selected');
                    Main.$answers[index].classList.remove('hidden');
                }
                else {
                    element.classList.remove('selected');
                    Main.$answers[_index].classList.add('hidden');
                }
            });
        }
    }
}
Main.init();