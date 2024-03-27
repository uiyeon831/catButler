import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import * as Styled from './style';

import CloseIcon from '../icons/CloseIcon';
import SuccessAlertIcon from '../icons/SuccessAlertIcon';
import InformationalAlertIcon from './../icons/InformationalAlertIcon';
import WarningAlertIcon from './../icons/WarningAlertIcon';
import ErrorAlertIcon from './../icons/ErrorAlertIcon';


export default function Alert({ onClose }) {
  const alertText = useSelector(state => state.alertModal.alertText);
  const alertType = useSelector(state => state.alertModal.type);
  const alertIsOpen = useSelector(state => state.alertModal.open);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setTimeout(() => {
      onClose?.()
    }, 100);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
      handleClose();
    }, 3000)
  },[alertIsOpen])
  
  const WhichIcon = () => {
    switch (alertType) {
      case 'success' :
        return <SuccessAlertIcon />

      case 'informational' :
        return <InformationalAlertIcon />

      case 'warning' :
        return <WarningAlertIcon />

      case 'error' :
        return <ErrorAlertIcon />
    }
  }

  return (
    <Styled.AlertContainer $type={alertType} $isOpen={isOpen}>
      <div className='alertContainer'>
        <div className='textBox'>
          {WhichIcon()}
          {alertText}
        </div>
        <button onClick={() => {
          setIsOpen(false);
          handleClose();
        }}>
          <CloseIcon />
        </button>
      </div>
    </Styled.AlertContainer>
  )
}