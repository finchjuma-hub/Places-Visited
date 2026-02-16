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
    new Place("Kisumu", ["Citam Kisumu", "Kisumu Town"], "Spring", "Perfect place to find fish.", "images/WhatsApp Image 2026-02-08 at 20.28.19.jpeg"),
    new Place("Nairobi", ["Wilson Airport", "University of Nairobi"], "Autum", "Great balance for study and exploration.", "images/WhatsApp Image 2026-02-08 at 20.41.52.jpeg"),
    new Place("Mombasa", ["Show room", "Beautiful hotels", "White sandy beaches", "Fort Jesus"], "Summer", "Coastal city with rich history.", "images/WhatsApp Image 2026-02-08 at 20.32.27.jpeg"),
    new Place("Kakamega", ["Mumias sugar factory", "Kakamega Forest"], "Rainy season", "Known for lush rainforest and biodiversity.", "images/WhatsApp Image 2026-02-08 at 20.26.17.jpeg"),
    new Place("Tigoni", ["Tea Plantations"], "Cool season", "Beautiful highlands with scenic tea farms.", "images/WhatsApp Image 2026-02-08 at 21.52.40.jpeg"),
    new Place("Naivasha", ["Artcaffe mall"], "Spring", "Popular for lakeside relaxation and hiking.", "images/WhatsApp Image 2026-02-08 at 20.32.55.jpeg"),
    new Place("Nyahururu",["Thompson falls"], "Spring", "Popular for the majesic water fall.", "images/WhatsApp Image 2026-02-08 at 20.41.48.jpeg"),
    new Place("Nanyuki", ["Glacier pool"], "Cool season", "Water that comes from melted snow from Mt.Kenya.", "images/WhatsApp Image 2026-02-08 at 20.41.48 (1).jpeg")
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