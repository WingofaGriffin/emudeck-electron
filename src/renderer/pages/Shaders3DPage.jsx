import React, { useState, useContext, useRef, useEffect } from 'react';
import { GlobalContext } from 'context/globalContext';
import Wrapper from 'components/molecules/Wrapper/Wrapper';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

import Shaders3D from 'components/organisms/Wrappers/Shaders3D';

function Shaders3DPage() {
  const { state, setState } = useContext(GlobalContext);
  const { shaders } = state;
  const [statePage] = useState({
    disabledNext: false,
    disabledBack: false,
    data: '',
    dom: undefined,
  });
  const { disabledNext, disabledBack, data, dom } = statePage;
  const shaderSet = (shaderStatus) => {
    setState({
      ...state,
      shaders: {
        ...shaders,
        classic3d: shaderStatus,
      },
    });
  };



  return (
    <div style={{ height: '100vh' }} >
      
      <Wrapper>
        <Header title="Configure CRT Shader for Classic 3D Games" />
        <Shaders3D
          data={data}
          onClick={shaderSet}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
        <Footer
          next="frontend-selector"
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </Wrapper>
    </div>
  );
}

export default Shaders3DPage;
