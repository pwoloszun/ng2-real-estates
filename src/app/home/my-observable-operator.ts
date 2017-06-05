import { MyObserver, MyObservable, createObservable } from './my-rxjs';

function map(source$: MyObservable, projectFn: Function): MyObservable {
  return null; // TODO
}

export function testMap() {
  let source$ = createObservable(function (observer: MyObserver) {
    observer.next(2);
    observer.next(3);
    observer.next(-4);
    // observer.complete();
  });

  let squares$ = map(source$, function (value) {
    return value * value;
  });

  let obs2: MyObserver = {
    next(value)  {
      let modified = value + 10;
      console.log("obs2 val", modified);
    }
  };

  squares$.subscribe(obs2);
}
