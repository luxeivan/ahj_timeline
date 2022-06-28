export default class Timeline {
  constructor(areaForTimeline, objText) {
    this.objText = objText;
    this.areaForTimeline = document.querySelector(`.${areaForTimeline}`);
    this.render();
  }

  render() {
    this.timeline = document.createElement('div');
    this.timeline.classList.add('timeline');
    this.timeline.innerHTML = `
        <ul class="timeline__list">
            <li class="timeline__item"></li>
        </ul>
        <form action="" class="timeline__form">
            <input type="text" class="timeline__input">
        </form>
        `;
    this.areaForTimeline.append(this.timeline);
    this.timelineList = document.querySelector('.timeline__list');
    this.timelineForm = document.querySelector('.timeline__form');
    this.timelineInput = document.querySelector('.timeline__input');
    this.timelineForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      if (this.timelineInput.value.length > 2) {
        this.objText.requestGeo();
      }
    });
  }

  addMessage(message) {
    this.timelineList.append(message);
    this.timelineList.scrollTop = this.timelineList.scrollHeight - this.timelineList.clientHeight;
  }
}
