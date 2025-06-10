---
author: Olaf Luijks
pubDatetime: 2024-02-05T11:59:04.597Z
title: My thoughts on NgRx SignalStore
slug: my-thoughts-on-ngrx-signalstore
featured: false
draft: false
tags:
  - state management
  - programming
  - angular
  - signals
  - ngrx
description: Why I think NgRx SignalStore is also useful in small projects
---

2024-02-06T15:56:04.255Zd NgRx on Reddit and as always the topic of boilerplate comes up. Now, in itself, that's ok with me but people tend to focus on that too much in my opinion. NgRx has its place and I always say: make sure your project needs it before you start using it and planning on pushing it into production.

Having said that I also think NgRx has its place in smaller projects, so let's explore that a little, the new and shiny Signal Store in particular.

The first paragraph of the documentation states:

> NgRx SignalStore is a fully-featured state neovimer. The simplicity and flexibility of SignalStore, coupled with its opinionated and extensible design, establish it as a versatile solution for effective state management in Angular.

Some keywords that I think are important are: `fully-featured`, `robust`, `declarative`, `simplicity`, and `opinionated`.

A lot of people don't like opinionated but I say: yeah sure, do it their way but it is well tested, it works and it works well. I made some small components with it and found it easy to understand and use and if you are an RxJS lover they offer you a rxjs-interop plugin to manage side effects and have your way with all the operators you want to throw at it.

If we imagine a store for items, you could define it like so:

```ts
export const ItemsStore 2024-02-06T15:56:04.255Z= signalStore(
  { providedIn: "root" },
  withState<ItemsState>(initialItemsState),
  withComputed(store => ({
    itemsCount: computed(() => store.items().length),
  })),
  withMethods((store, itemsService = inject(ItemsService)) => ({
    loadItems: rxMethod<void>(
      pipe(
        throttleInput(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          itemsService.fetchItems().pipe(
            tapResponse({
              next: items => patchState(store, { items: items }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          )
        )
      )
    ),
  })),
  withHooks({
    onInit({ loadItems }) {
      loadItems();
    },
  })
);
```

This looks great doesn't it and it is pretty much self-explanatory.

## Conclusion

Just like the component store has its place it's worth looking into signal store, even if your project isn't a multi-million dollar project. I don't know the developers behind NgRx but I think they made a high-quality library.

Check out the docs and have fun with it! 🔗 [https://ngrx.io/guide/signals](https://ngrx.io/guide/signals)

---

<h4 style="text-align: center; padding-bottom: 26px;">
I learned a lot reading this book and it is a nice to have reference<br /><br />
  <a 
    href="https://amzn.to/3T2txtL" target="_blank">Click here to get your copy of the book Reactive State for Angular with NgRx: Learn to build Reactive Angular Applications using NgRx
  </a>
</h4>

![image](@/assets/images/ngrx.jpg)

---
