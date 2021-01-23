import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    borderRadius:'3%',
    "&:hover": {
      transition: '500ms',
      transform:'scale(1.04)',
    }
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
