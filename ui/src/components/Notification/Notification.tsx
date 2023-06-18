import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { hideErrorNotification } from 'state_management/actions/notification/notification.actions';
import { IProps } from './IProps';

const Notification = ({ open, message }: IProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClose = (): void => {
    dispatch(hideErrorNotification());
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity="error">
        {message}
      </MuiAlert>
    </Snackbar>
  );
};
export default Notification;
