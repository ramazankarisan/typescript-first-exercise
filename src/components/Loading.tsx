import React, { FunctionComponent } from 'react';

interface ICountryProps {
  loading: boolean
}
const Loading: FunctionComponent<ICountryProps> = (props) => {

  const {loading} = props;
  
  if(loading){
    return <>Loading...</>
  }
  return <>
    {props.children}
  </>;
};

export default Loading
