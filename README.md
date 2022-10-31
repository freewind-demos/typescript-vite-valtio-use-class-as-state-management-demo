TypeScript Vite Valtio Use Class as State Management Demo
===========================

由于真正工作的是proxy，所以如果引用到了非proxy字段，就不会起作用。这个问题在class中尤为突出。

几个注意点：
1. class中的method要使用`function`风格而非`=>`风格，因为前者的`this`是动态的，使用时会正确的指向proxy对象；而后者将永远指向原来未被proxy的对象，修改将不起作用
2. 使用store时，必须使用 `store.action`风格，而不能先解构为 `const {action} = store; action()`。因为这种情况下，proxy也会失效。

所以最好按这里提示的方法来组织 actions:
https://github.com/pmndrs/valtio/wiki/How-to-organize-actions

```
npm install
npm start
```

It will open page on browser automatically.
