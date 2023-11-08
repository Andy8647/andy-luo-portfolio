import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialIcon(props) {
  const { link, icon, label } = props;
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default SocialIcon;
