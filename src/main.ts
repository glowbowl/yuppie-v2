import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  async function setInitialOpacity(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        let bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.setAttribute('style', 'opacity: 1.0;');

        resolve();
      } catch(error: any) {
        console.error(`Error on set initial opacity value: ${error}`);

        reject(error);
      }
    });
  }

  async function setFade(): Promise<void> {
    const initialDate: Date = new Date('2024-03-18');
    const daysDeadline: number = 15;
    const dayMilliseconds: number = (1000 * 60 * 60 * 24);
    let currentDate: Date = new Date();

    let timeDifferentBetweenDates: number = (currentDate.getTime() - initialDate.getTime());
    let daysDifferentBetweenDates: number = Math.round(timeDifferentBetweenDates / dayMilliseconds);

    let bodyElement: HTMLBodyElement = document.getElementsByTagName('body')[0];

    if(daysDifferentBetweenDates >= daysDeadline) {
      bodyElement.style.opacity = '0.0';
    } else {
      const reduceFromOpacity: number = 0.0166666666667;
      let newOpacity: number = (parseFloat(bodyElement.style.opacity) - (reduceFromOpacity * daysDifferentBetweenDates));

      bodyElement.style.opacity = newOpacity.toString();
    }
  }
