function Place(location, landmarks, timeOfYear, notes){
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

Place.prototype.displayDetails = function(){
    return{
      landmarks: this.landmarks,
      timeOfYear: this.timeOfYear,
      notes: this.notes
    };
  };

const places =[
    new Place(
      "Kisumu",
      ["Citam Kisumu", "Kisumu Town"],
      "Spring",
      "Perfect place to find fish."
    ),
    new Place(
      "Nairobi",
      ["Wilson Airport", "University of Nairobi"],
      "Autumn",
      "Great balance for study and exploration."
    ),
    new Place(
      "Mombasa",
      ["Fort Jesus", "White Sandy Beaches"],
      "Summer",
      "Coastal city with rich history."
    )
];  

const container = document.querySelector(".places-container");

places.forEach(place => {
    const card = document.createElement("div");
    card.className = "place-card";

    const title = document.createElement("h2");
    title.textContent = place.location;

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "place-details hidden";

    title.addEventListener("click", () => {
      const details = place.displayDetails();

      detailsDiv.innerHTML = `
        <p><strong>Landmarks:</strong> ${details.landmarks.join(", ")}</p>
        <p><strong>Best Time:</strong> ${details.timeOfYear}</p>
        <p><strong>Notes:</strong> ${details.notes}</p>
      `;

      detailsDiv.classList.toggle("hidden");
    });

  card.appendChild(title);
  card.appendChild(detailsDiv);
  container.appendChild(card);
});