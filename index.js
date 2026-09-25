// STATE
const state = {};

// HTML Skeleton
const appBody = document.querySelector("#app");
appBody.innerHTML = `
  <h1>Party Planner</h1>
  <main>
    <section id="party-list-section">
      <h2>Upcoming Parties</h2>
         <ul id="events"></ul>
    </section>
    <section id="details-section">
      <h2>Party Details</h2>
         <ul id="details"></ul>
    </section>
  </main>
`;
