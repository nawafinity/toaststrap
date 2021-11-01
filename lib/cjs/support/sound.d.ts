declare class Sound {
    private element;
    private selector;
    private parent;
    constructor(audioFile: string, parentElement: Element);
    private make;
    get instance(): HTMLAudioElement;
}
export default Sound;
