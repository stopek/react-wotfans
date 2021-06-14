import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('xl')]: {
      maxWidth: '90%'
    },
  },
}));

export default function AppContainer({ children, ...props }) {
  const classes = useStyles();
  return (
    <Parent {...props}>
      <Container maxWidth="lg" className={classes.root}>{children}</Container>
    </Parent>
  );
};
