import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h3>Question & Answer :</h3>
            <h5>1. How does React work?</h5>
            <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
            <h5>2. Difference between State and props in react.</h5>
            <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.
                Props make components reusable by giving components the ability to receive data from their parent component in the form of props. They are equivalent to function parameters.
            </p>
            <h5>
                3. What can we do without fetching data using useEffect in react?</h5>
            <p>The useEffect Hook allows to perform side effects in components.
                We can directly updating the DOM and use timers in react without fetching data with API useing useEffect.</p>
        </div>
    );
};

export default Blogs;