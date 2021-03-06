export default theme => ({
    topbar: {
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      right: 'auto',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    drawerPaper: {
      borderRight: 0,
      zIndex: 1200,
      width: '271px',
      top: theme.topBar.height,
      position: "fixed",
      left: "0px"
    },
    sidebar: {
      width: '270px'
    },
    content: {
      height: '100%',
      padding: theme.spacing(3),
      paddingTop: theme.spacing(9),
      backgroundColor: `url(${"https://i.imgur.com/0PPaRPt.jpeg"})`,
      //backgroundColor: theme.palette.background.default,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      marginLeft: '270px'
    },
    [theme.breakpoints.down('sm')]: {
      content: {
        padding: 0,
        paddingTop: theme.spacing(9)
      }
    }
  });
  