import PropTypes from 'prop-types';
import s from './Notification.module.scss';
const Notification = ({ message }) => {
  return <p className={s.Notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
