/**
 * @credit https://stackoverflow.com/a/31530946
 * @param duration
 * @constructor
 */
import ToastFactory from "../ToastFactory"

export const ProgressComponent = (factory: ToastFactory) => {
  const { duration } = factory.options;


  const progressElement = document.createElement("div");
  progressElement.classList.add('toast-footer');
  const indicatorElement = document.createElement("div");
  indicatorElement.classList.add('toast-footer-inner');
  progressElement.appendChild(indicatorElement);


  const start = () => {
    factory.progressStartTime = new Date().getTime();

    if (duration > 0) {
      factory.progressInterval = setInterval(() => {
        if (!factory.pauseProgressInterval) {
          const diff = Math.round(new Date().getTime() - factory.progressStartTime);
          let value = Math.round(diff / duration * 100);
          value = value > 100 ? 100 : value;

          indicatorElement.style.width = value + '%'

          if (diff >= duration) {
            clearInterval(factory.progressInterval)
          }

        }
      }, 100)
    }
  }

  // Start progress
  start()

  return progressElement;
}
