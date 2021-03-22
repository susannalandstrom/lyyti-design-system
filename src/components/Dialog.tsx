import { MouseEventHandler } from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  DialogProps as MuiDialogProps,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Button from './Button';
import CogIcon from './icons/Cog';

const useStyles = makeStyles({
  titlePadding: {
    '& h2': { paddingRight: '40px' },
  },
  closeIcon: {
    position: 'absolute',
    right: '24px',
    padding: '4px',
    width: 'min-content',
    minWidth: '32px',
    borderRadius: '50%',
  },
});

export interface DialogProps extends MuiDialogProps {
  dialogTitle: JSX.Element | string;
  dialogContent: JSX.Element | string;
  dialogActions?: JSX.Element | JSX.Element[];
}

const Dialog = ({
  dialogTitle,
  dialogContent,
  dialogActions,
  ...props
}: DialogProps): JSX.Element => {
  const classes = useStyles();
  return (
    <MuiDialog {...props}>
      <MuiDialogTitle className={classes.titlePadding}>
        {dialogTitle}
        {/* TODO Change icon to closeIcon */}
        <Button
          onClick={props.onClose as MouseEventHandler<HTMLButtonElement>}
          className={classes.closeIcon}>
          <CogIcon />
        </Button>
      </MuiDialogTitle>
      <MuiDialogContent>{dialogContent}</MuiDialogContent>
      {dialogActions ? <MuiDialogActions>{dialogActions}</MuiDialogActions> : null}
    </MuiDialog>
  );
};

export default Dialog;