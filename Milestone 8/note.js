/* 
JSX: JSX helps us to write HTML in javascript.

component: components that are made by us in react template. ex- <Person></Person>

props: every parent component can pass some information to it's child component 
by giving them props. We can pass any js value through props, inlcuding objects,
arrays and functions.

useState: useState helps us to update value in ui. like increasing or decreasing
the value.

useEffect: most of the time  we use useEffect to load data from API.



life cycle of component
in react, the component life cycle referse to the series of phases a component
goes through from creation to deletion. these phases can be broken down into four main categories:
1. initialization: the component is created and its constructor function is called.
2. mounting: the component is added to the dom and its render method is called.
3. updating: when the component's state or props change, react re-renders the component and calls
its lifecycle mthods in this phases.
4. unmounting: when a component is removed from the dom, its cleanup methods are called.
during each of these phases, react proved hooks, methods, and callbacks that developer can use to
control the component's behaviour, manage its state, and interact with the dom. understanding the
component lifecylce is cruicial for creating efficient and robust react applications.
*/