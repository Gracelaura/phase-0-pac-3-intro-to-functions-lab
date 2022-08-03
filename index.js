function shout(string) {
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string.toUpperCase()=== string){return "YES INDEED!"}
    return "YES  INDEED!"
}
// function sayHiToHeadphonedRoommate(string) {
// if (string === "Let's have dinner together!"){return "I would love to!"}
//     return "I would love to!"
 
//  function sayHiToHeadphonedRoommate(string) {
//     if (string.toLowerCase()=== string){return "I can't hear you!"}
//     return "I can't hear you!"
//  }
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!"
    }
  
    if (string.toUpperCase() === string) {
      return "YES INDEED!"
    }
  
    if (string === "Let's have dinner together!") {
      return "I would love to!"
    }
  }