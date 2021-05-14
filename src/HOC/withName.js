const withName = name => WrappedComponent => {
  const logger = () => console.log('hello');
  return props => <WrappedComponent {...props} name={name} logger={logger} />;
};

/** Полная запись */
// const withName = name => {
//   return WrappedComponent => {
//     const logger = () => console.log('hello');
//     return props => <WrappedComponent {...props} name={name} logger={logger} />;
//   };
// };

export default withName;
