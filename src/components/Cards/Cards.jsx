import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./Cards.module.css";
import infectedImg from "../../images/infected.png";
import recoveredImg from "../../images/recovered.png";
import deathsImg from "../../images/deaths.png";

import CardItem from "./CardItem";

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardItem
          title="Infected"
          lastUpdate={lastUpdate}
          confirmed={confirmed.value}
          desc="Number of active cases of COVID-19"
          style={styles.infected}
          icon={infectedImg}
        />
        <CardItem
          title="Recovered"
          lastUpdate={lastUpdate}
          confirmed={recovered.value}
          desc="Number of recovered from COVID-19"
          style={styles.recovered}
          icon={recoveredImg}
        />
        <CardItem
          title="Deaths"
          lastUpdate={lastUpdate}
          confirmed={deaths.value}
          desc="Number of deaths caused by COVID-19"
          style={styles.deaths}
          icon={deathsImg}
        />
      </Grid>
    </div>
  );
}

export default Cards;
