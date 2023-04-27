import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { eventsService } from "../services/EventsService";
import EventCard from "../components/EventCard";

  function HomePage() {
  async function getEvents() {
    try {
      await eventsService.getEvents();
    } catch (error) {
      Pop.error(error)
    }
  }
  let events = AppState.events.map((e) => {
    return (
      <div className="col-4 col-md-12" key={e.id}>
        <EventCard event={e}/>
      </div>
    );
  });
  useEffect(() => {
    getEvents()
  }, []);

  return (
    <section></section>
  )
}

export default observer(HomePage)