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
