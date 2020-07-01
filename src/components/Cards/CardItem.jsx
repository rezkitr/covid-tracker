import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

function CardItem(props) {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, props.style)}
    >
      <CardContent>
        <img src={props.icon} alt="cases" className={styles.image} />
        <Typography color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5">
          {" "}
          <CountUp
            start={0}
            end={props.confirmed}
            duration={2.5}
            separator="."
          />{" "}
        </Typography>
        <Typography color="textSecondary">
          {new Date(props.lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{props.desc}</Typography>
      </CardContent>
    </Grid>
  );
}

export default CardItem;
