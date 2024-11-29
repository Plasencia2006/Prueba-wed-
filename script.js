function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteList = document.getElementById("noteList");

    if (noteInput.value.trim() !== "") {
        const newNote = document.createElement("li");
        const noteContent = document.createElement("span"); 
        noteContent.textContent = noteInput.value; 
        const deleteButton = document.createElement("button"); 
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("botonEliminar");
        deleteButton.onclick = function () {
            noteList.removeChild(newNote);
        };
        newNote.appendChild(noteContent);
        newNote.appendChild(deleteButton);
        noteList.appendChild(newNote);
        noteInput.value = "";
    } else {
        alert("Por favor, escriba una nota antes de agregar.");
    }
}
