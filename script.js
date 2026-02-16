function Place(location, landmarks, timeOfYear, notes, image){
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
    this.image = image;
}

Place.prototype.displayDetails = function(){
    return{
      landmarks: this.landmarks,
      timeOfYear: this.timeOfYear,
      notes: this.notes,
      image: this.image
    };
  };

const places =[
    new Place(
      "Kisumu",
      ["Citam Kisumu", "Kisumu Town"],
      "Spring",
      "Perfect place to find fish.",
      "images/kisumu.jpg"
    ),
    new Place(
      "Nairobi",
      ["Wilson Airport", "University of Nairobi"],
      "Autum",
      "Great balance for study and exploration.",
      "images/nairobi.jpg"
    ),
    new Place(
      "Mombasa",
      ["Fort Jesus", "White Sandy Beaches"],
      "Summer",
      "Coastal city with rich history.",
      "images/mombasa.jpg"
    )
];  

const container = document.querySelector(".places-container");

places.forEach(place => {
    const card = document.createElement("div");
    card.className = "place-card";

    const title = document.createElement("h2");
    title.className = "place-title";
    title.textContent = place.location;

    const details =document.createElement("div");
    details.className = "place-details hidden";
    details.innerHTML = `
    <p><strong>Landmarks:</strong> ${place.landmarks.join(", ")}</p>
    <p><strong>Best Time:</strong> ${place.timeOfYear}</p>
    <p><strong>Notes:</strong> ${place.notes}</p>
    <img src="${place.image}" alt="${place.location}" class="place-image">
  `;

  title.addEventListener("click", () => {
    details.classList.toggle("hidden");
  });

  card.appendChild(title);
  card.appendChild(details);
  container.appendChild(card);
});