import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { eventsService } from "../services/EventsService";
import EventCard from "../components/EventCard";
import unsplash from "../assets/img/Unsplash.svg";

  function HomePage() {
  async function getEvents() {
    try {
      await eventsService.getEvents();
    } catch (error) {
      Pop.error(error.message)
    }
  }
  let events = (AppState.events.map(e => {
    return (
      <div className="col-md-4" key={e.id}>
        <EventCard event={e}/>
      </div>
    );
  }));
  useEffect(() => {
    getEvents()
  }, []);

  return (
    <section className="home-page">
      <div className="container my-3">
        <div className="row">
          <div className="">
          <img src={unsplash} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <div className="row">
              {events}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage)