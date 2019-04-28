//ADD YOUR CODE HERE.

class Player{
    constructor(data){
        this.steps = data.steps;
        this.step = this.steps[0];
    }
    play(){
        const element = $(this.step.selector)[0];
        const next = showTip(element, this.step.content, this.step.placement, this.step.next !== null)
        const interaction = (event) => {
            next.removeEventListener("click", interaction);
            hideTip();
            this.step.next !== null && this.playNext();
        };
        $(element).on('hidden.bs.popover', interaction)
        next.addEventListener("click", interaction);
    }
    playNext(){
        this.step = getFirst(getItemsById(this.steps, this.step.next));
        this.play();
    }
}

new Player(getGuideData()).play();