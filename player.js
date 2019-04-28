//ADD YOUR CODE HERE.
getItemsById = (list, id) => list.filter(item => item.id === id)
getFirst = (list) => list.length > 0 ? list[0] : null;

class Player{
    constructor(data){
        this.steps = data.steps;
        this.step = this.steps[0];
    }
    play(){
        const element = $(this.step.selector)[0];
        element.style.backgroundColor = "#999";
        const interaction = (event) => {
            element.removeEventListener("click", interaction);
            element.style.backgroundColor = "#fff";
            this.playNext();
        };
        element.addEventListener("click", interaction);
    }
    playNext(){
        this.step = getFirst(getItemsById(this.steps, this.step.next));
        this.play();
    }
}

new Player(getGuideData()).play();