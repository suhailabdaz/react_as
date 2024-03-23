# namaste_react


# parcel
- Dev Build
- Local Server
- HMR-Hot Module Replacement
- File watching algorithms (written in c++)
- caching - faster builds
- image optimization
- minification
- bundling
- compressing
- Error handling
- consistent hashing
- differential bundling
- code splitting
- tree shaking

# componenets
- piece of logic that returns a jsx 
- jsx then transforms into the react element(object)

# props
- to dynamically generate the component
- just like passing args to js functions

# hooks
- built in react functions
- useState(),useEffect()....

# virtual DOM
- representation of actual DOM
- js object(react element)

# reconciliation
- camparing the virtual DOMS ,then re render the component 
- when a setstate() functions triggers or changes the compnennt

# React fiber
- React's core algorithm

# useState and useEffect
- Thesse are examples of hook which are prebuild functions that only can be used inside a component.

# Types of routing
- server side routing 
- client side routing


# Redux
- intall @reduxjs/toolkit and react-redux
- build our store
- connect the store to our app
- slice(cart slice)
- dispatch (action)
- selector

# Types of testing
- unit testing
- integration testing
- end to end testing(e2e)

# Setting up testing in our app
- install react testing library
- install jest
- install babel dependencies
- configure babel
- configure parcel file to disable its babel
- configure jest (npx jest --init)
- install @babel/preset-react to include jsx inside the test case
- configure the babel config to include the  @babel/preset-react
- install @testing-library/jest-dom