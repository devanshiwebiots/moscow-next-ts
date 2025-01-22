import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Fragment, useEffect, useState } from "react";
import { Col } from "reactstrap";
import CalendarEvents from "./CalendarEvents";
import { calenderEventClick } from "./CalenderFunction";
import  FullCalendar from "@fullcalendar/react";
import { CalenderInitialData } from "@/Data/Applications/Calendar";

const DragCalendar = () => {
  const state = useState(CalenderInitialData)[0];
  useEffect(() => {
    let draggableEl = document.getElementById("external-events") as HTMLElement;
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);

  

  return (
    <Fragment>
      <CalendarEvents />
      <Col xxl="9" md="12" className="box-col-12">
        <div className="demo-app-calendar" id="mycalendartest">
          <FullCalendar
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            rerenderDelay={10}
            eventDurationEditable={false}
            editable={true}
            droppable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={state.calendarEvents}
            eventClick={calenderEventClick}            
          />
        </div>
      </Col>
    </Fragment>
  );
};
export default DragCalendar;


// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import { Fragment, useEffect, useState } from "react";
// import { Col } from "reactstrap";
// import CalendarEvents from "./CalendarEvents";
// import { calenderEventClick } from "./CalenderFunction";
// import FullCalendar from "@fullcalendar/react";
// import { CalenderInitialData } from "@/Data/Applications/Calendar";

// const DragCalendar = () => {
//   const [state, setState] = useState(CalenderInitialData);

//   useEffect(() => {
//     let draggableEl = document.getElementById("external-events") as HTMLElement;
//     new Draggable(draggableEl, {
//       itemSelector: ".fc-event",
//       eventData: function (eventEl) {
//         let title = eventEl.getAttribute("title");
//         let id = eventEl.getAttribute("data");
//         return {
//           title: title,
//           id: id,
//         };
//       },
//     });
//     console.log("calendar data..", draggableEl);
//   }, []);

//   const handleEventReceive = (info:any) => {
//     // Assign the primary color to the dropped event
//     info.event.setProp("backgroundColor", "#1a5f7f"); // Replace '#007bff' with your primary color
//     info.event.setProp("borderColor", "#1a5f7f");

//     // Update the state with the new event
//     setState((prevState) => ({
//       ...prevState,
//       calendarEvents: [...prevState.calendarEvents, info.event],
//     }));
//   };

//   return (
//     <Fragment>
//       <CalendarEvents />
//       <Col xl="9" md="8" className="box-col-12">
//         <div className="demo-app-calendar" id="mycalendartest">
//           <FullCalendar
//             initialView="dayGridMonth"
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay",
//             }}
//             rerenderDelay={10}
//             eventDurationEditable={false}
//             editable={true}
//             droppable={true}
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             events={state.calendarEvents}
//             eventClick={calenderEventClick}
//             eventReceive={handleEventReceive} // Add this line to handle event drops
//           />
//         </div>
//       </Col>
//     </Fragment>
//   );
// };

// export default DragCalendar;
