import React, { useEffect, useState } from "react";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { eventsService } from "../services/EventsService";

export default function HomePage() {
  useEffect(() => {
    getEvents()
  }, []);

  let events = AppState.events.map((event) => {
    return (
      <div className="col-4 col-md-12" key={event.id}>

      </div>
    );
  });

  async function getEvents() {
    try {
      await eventsService.getEvents();
    } catch (error) {
      Pop.error(error)
    }
  }

}