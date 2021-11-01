import { cprefix } from "../prefrences";

class Sound {
    private element: HTMLAudioElement;
    private selector: string;
    private parent: Element;

  constructor(audioFile: string, parentElement: Element) {
      this.selector = `${cprefix}-notification`
      this.element = new Audio(audioFile);
      this.parent = parentElement;


      this.make();

      return this;
  }

  private make() {
    this.element.id = this.selector;

    if (!this.parent.querySelector('#' + this.selector)) {
      this.parent.appendChild(this.element)
    }

  }

  public get instance() {
      return this.element;
  }
}

export default Sound;