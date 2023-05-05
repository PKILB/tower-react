import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { eventsService } from "../services/EventsService";
import EventCard from "../components/EventCard";
import unsplash from "../assets/img/Unsplash.svg";
import "./Styles/HomePage.scss"

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

  // const filterCategory = useRef('')
  useEffect(() => {
    getEvents()
  }, []);

  return (
    <section className="home-page">
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
          <div className="position-relative">
          <img src={unsplash} alt="" className="img-size"/>
            <div className="row position-absolute top-0 start-0 py-3 px-5">
              <div className="col-12">
                <h3>
                  Get ahead of the scalpers.
                </h3>
                <h3>
                  Reserve your seat now with
                </h3>
                <h3>
                  real events for real people.
                </h3>
              </div>
            </div>
          </div>
            <div className="row">

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-11 m-auto">
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