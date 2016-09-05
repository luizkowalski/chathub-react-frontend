import React from 'react';

const styles = {
  root: {
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#03a9f4',
    color: 'white',
    padding: '16px',
    fontSize: '1.5em',
  },
  button: {
    right: '2px',
    top: '2px',
  },
};

const MaterialTitlePanel = (props) => {
  const rootStyle = props.style ? {...styles.root, ...props.style} : styles.root;

  return (
    <div style={rootStyle}>
      { props.button ? <a href="#" onClick={props.buttonAction} className="pull-right button is-danger" style={styles.button}>{props.buttonLabel}</a> : ''}
      <div style={styles.header}>{props.title}</div>
      {props.children}
    </div>
  );
};

export default MaterialTitlePanel;
