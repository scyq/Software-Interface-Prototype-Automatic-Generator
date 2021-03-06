import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NaviBar from './NaviBar';
import Typography from '@material-ui/core/Typography';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import MainPanel from './MainPanel';
import Index from './home/Home';
import ShowCase from './ShowCase';



/* 每一步的内容 */
function getSteps() {
  return ['应用场景', '风格配色', '猜您喜欢', '微调修改'];
}


export default function App() {
  const [status, setStatus] = useState(-1);
  const [customFunction, setFunction] = useState("您还未输入");

  const [design, setDesign] = useState({
      "layout": [],
      "navigate": [],
      "template": []
  });

  /* 到哪儿一步了 */
  const [activeStep, setActiveStep] = useState(0);

  /* 颜色 */
  const [primaryColor, setPrimary] = useState("#ffffff");
  const [secondaryColor, setSecondary] = useState("#ffffff");

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      height: "100vh",
      flexDirection: "column",
    },
    NaviBar: {
      marginTop: '80px',
      width: '100%',
      background: '#fff',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    BarTitle: {
      flexGrow: 1
    },

    MainPanel: {
      display: "flex",      
      flexGrow: 1,
      width: '100%',
    },

    previewPanel: {
      overflow: "scroll"
    }
  }));

  const classes = useStyles();

  if (status === -1) {
    return (
      // <CustomDesign>

      // </CustomDesign>
      <Index 
        setStatus={setStatus}
      >
      </Index>
    );
  }
  else if (status === 0) {
    return (
      <Container component="main" className={classes.root}>
        <AppBar style={{ background: "#36648B" }}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap className={classes.BarTitle}>
              软件交互界面原型自动生成系统
            </Typography>
            <IconButton color="inherit" onClick={() => {
              const w = window.open('about:blank');
              w.location.href = 'https://github.com/scyq/Software-Interface-Prototype-Automatic-Generator';
            }}>
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className={classes.NaviBar}>
          <NaviBar
            getSteps={getSteps}
            activeStep={activeStep}
          >
          </NaviBar>
        </div>

        <div className={classes.MainPanel}>
          <MainPanel
            getSteps={getSteps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            setStatus={setStatus}
            setDesign={setDesign}
            setFunction={setFunction}
            customFunction={customFunction}
            design={design}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            setPrimary={setPrimary}
            setSecondary={setSecondary}
          >

          </MainPanel>
        </div>

      </Container>
    );
  }
  else if (status === 1) {
    return (
      <ShowCase 
        template={design["template"]}
        setStatus={setStatus}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >

      </ShowCase>);
  }

}