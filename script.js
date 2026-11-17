    const writingBox = document.getElementById("writingBox");

    document.getElementById("backgroundColor").addEventListener("input", event => {
      writingBox.style.backgroundColor = event.target.value;
    });

    document.getElementById("textColor").addEventListener("input", event => {
      writingBox.style.color = event.target.value;
    });

    document.getElementById("fontFamily").addEventListener("change", event => {
      writingBox.style.fontFamily = event.target.value;
    });