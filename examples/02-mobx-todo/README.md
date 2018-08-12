# Ten minute introduction to MobX and React

## 总结
1. Use the `@oservable` decorator or `observable(object or array)` functions to make objects trackable for MobX
2. The `@computed` decorator can be used to create functions that can automatically derive their value from the state.
3. Use `autorun` to automatically run functions that depend on some observable state. This is useful for logging, making network requests, etc.
4. Use the `@observer` decorator from the mobx-react package to make your React components truly reactive. They will update automatically and efficiently. Even when used in large complex applications with large amounts of data.

## 相关资料
- [Ten minute introduction to MobX and React](https://mobx.js.org/getting-started.html)
- [mobx-react-todomvc](https://github.com/mobxjs/mobx-react-todomvc)
- [mobx-reactive2015-demo](https://github.com/mobxjs/mobx-reactive2015-demo)