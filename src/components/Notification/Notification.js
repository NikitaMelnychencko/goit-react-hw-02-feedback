import s from './Notification.module.scss';
const Notification = ({ message }) => {
  return <p className={s.Notification}>{message}</p>;
};

export default Notification;
