import { IconWrapper, Name, Phone } from './Contact.styled';
import PropTypes from 'prop-types';
import { ImBin } from 'react-icons/im';

export function Contact({contact: {id, name, phone}, onRemoveContact}) {

  return (
    <>
      <Name>{name}</Name>
      <Phone>tel.:{phone}</Phone>
      <IconWrapper>
        <ImBin size={20} onClick={() => onRemoveContact(id)} />
      </IconWrapper>
    </>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  onRemoveContact: PropTypes.func,
}
