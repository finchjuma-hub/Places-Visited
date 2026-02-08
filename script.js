function Place(location, landmarks, timeOfYear, notes, image){
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
    this.image = image;
}

Place.prototype.displayDetails = function(){
    return `${this.location} | Landmarks: ${this.landmarks.join(", ")} 
  | Best time: ${this.timeOfYear} | Notes: ${this.notes}`;
};

const places =[
    new Place("Kisumu", ["Citam Kisumu", "Kisumu Town"], "Spring", "Perfect place to find fish."),
    new Place("Nairobi", ["Wilson Airport", "University of Nairobi"], "Autum", "Great balance for study and exploration."),
    new Place("Mombasa", ["Show room", "Beautiful hotels", "White sandy beaches", "Fort Jesus"], "Summer", "Coastal city with rich history"),
    new Place("Kakamega", ["Mumias sugar factory", "Kakamega Forest"], "Rainy season", "Known for lush rainforest and biodiversity."),
    new Place("Tigoni", ["Tea Plantations"], "Cool season", "Beautiful highlands with scenic tea farms."),
    new Place("Naivasha", ["Artcaffe mall"], "Spring", "Popular for lakeside relaxation and hiking.")
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
}