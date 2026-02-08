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