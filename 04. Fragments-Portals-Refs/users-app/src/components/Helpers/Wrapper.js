// Helps for avoiding rendering multiple div wrappers in the DOM for each component
const Wrapper = (props) => {
  return props.children;
}

export default Wrapper;