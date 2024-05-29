/**
 * 
 * @param fn 
 * @param delay 
 * @returns 
 */
export function debounce (fn: Function, delay: number) {
  let timeOut: ReturnType<typeof setTimeout> | undefined = undefined;

  return function(...args: any) {
    clearTimeout(timeOut);

    timeOut = setTimeout(() => fn(...args), delay);
  }
}

export class DebounceClass {
  _timer: ReturnType<typeof setTimeout> | undefined;
  
  constructor() {
    this._timer = undefined;
  }

  debounce(fn: Function, delay: number) {
    const self = this;
    return function(...args: any) {
      clearTimeout(self._timer);
      
      self._timer = setTimeout(() => fn(...args), delay);
    }
  }
}