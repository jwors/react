# 优化使用redux

1. 采用**createSelector**，它类似useMemo,会缓存内容,如果依赖内容没有变化  就会读取缓存内容  
2. createEntityAdapter可以用来解决 下面问题1

***

# React 渲染行为

1.React 的默认行为是当父组件渲染时，React 会递归渲染其中的所有子组件！可用Memo解决  
2. 
