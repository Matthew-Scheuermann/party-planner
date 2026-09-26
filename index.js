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

// grab events
const upcomingParties = document.querySelector("#events");
const partyDetails = document.querySelector("#details");
partyDetails.innerHTML = `<li>Select a party to see details.</li>`;

//click listener
upcomingParties.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  getPartyDetails(id);
});

// api fetch
const getParties = async () => {
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2608-ftb-ct-web-pt/events",
    );
    const result = await response.json();
    state.parties = result.data;

    upcomingParties.innerHTML = state.parties
      .map((party) => `<li data-id="${party.id}">${party.name}</li>`)
      .join("");
  } catch (error) {
    upcomingParties.innerHTML = `<li>Something went wrong loading parties.</li>`;
  }
};

const getPartyDetails = async (id) => {
  try {
    const response = await fetch(
      `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2608-ftb-ct-web-pt/events/${id}`,
    );
    const result = await response.json();
    state.selectedParty = result.data;

    partyDetails.innerHTML = `
      <li>${state.selectedParty.name}</li>
      <li>${state.selectedParty.id}</li>
      <li>${state.selectedParty.date}</li>
      <li>${state.selectedParty.description}</li>
      <li>${state.selectedParty.location}</li>
    `;
  } catch (error) {
    partyDetails.innerHTML = `<li>Something went wrong loading details.</li>`;
  }
};

getParties();
