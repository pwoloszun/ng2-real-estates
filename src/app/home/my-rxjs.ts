interface MyObserver {
  next(value);
  error?(error);
  complete?();
}

interface MyObservable {
  subscribe(callback);
}

interface MySubscriptionFn {
  (observer: MyObserver);
}

// Observables are like functions with zero arguments, but generalize those to allow multiple values.

// Subscribing to an Observable is like calling a function, providing a set of callbacks(observer) where the data will be delivered to.
function createObservable(subscriptionFn: MySubscriptionFn): MyObservable {
  return; // TODO
}

export function testRx() {

  // function passed to createObservable represents an "Observable execution",
  // a lazy computation that only happens for each Observer that subscribes

  let source$ = createObservable(function (observer: MyObserver) {
    observer.next(123);
  });

  let obs1: MyObserver = {
    next(value)  {
      console.log("obs1 val", value);
    }
  };

  let obs2: MyObserver = {
    next(value)  {
      let modified = value + 10;
      console.log("obs2 val", modified);
    }
  };

  source$.subscribe(obs1);
  source$.subscribe(obs2);

}

export {
  createObservable,
  MyObservable,
  MyObserver,
}
