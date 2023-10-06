let pianoContainer = document.getElementsByClassName("piano-container");
const base = "./audio/";

window.onload = () => {
  // Code to execute when the window (web page) loads completely.
  // This ensures that the script runs after all elements have been loaded.
  for (let index = 1; index <= 24; index++) {
    // Loop that iterates from 1 to 24 (inclusive).
    // This will create the keys for the piano.
    let div = document.createElement("div");
    // Create a new <div> element for each piano key.

    div.classList.add(index < 10 ? "black-key" : "white-key");
    // Add classes to the <div> element based on whether the index is less than 10 or not.
    // Keys 1 to 9 will be assigned the "black-key" class, and keys 10 to 24 will be assigned the "white-key" class.

    const number = index <= 9 ? "0" + index : index;
    // Generate a two-digit number string for the audio file based on the index.
    // If index is less than or equal to 9, prepend a "0" to the index to make it two digits.

    div.addEventListener("click", () => {
      // Add a click event listener to the <div> element.
      // This function will be executed when the div (key) is clicked.
      new Audio(`${base}key${number}.mp3`).play();
      // Create a new Audio object using the constructed audio file path.
      // The constructed path will be something like "./audio/key01.mp3" for index = 1.
      // Play the audio file using the play() method.
      

/*
${base} refers to the base path for audio files defined earlier in the code (e.g., ./audio/).
key${number}.mp3 constructs the filename based on the key's number. For example, if number is "01", then the filename would be "key01.mp3".
.play()

The play() method is called on the created Audio object.
This method plays the audio associated with the Audio object, which in this case is the audio file corresponding to the clicked piano key.*/
    });

    pianoContainer[0].appendChild(div);
    // Append the created <div> element (key) to the piano container.
  }
};
