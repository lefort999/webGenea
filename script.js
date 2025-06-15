function onChange() {
    current_selected_item = document.getElementById("cb-profession").value;
    output_text_element = document.getElementById("output-label");
    console.log("La profession sélectionnée est :", current_selected_item)
    output_text_element.value = current_selected_item;
    if (current_selected_item === "Douanier") {
        output_text_element.value = "C'est une belle profession"
    }
    else if (current_selected_item === "Boulanger") {
        output_text_element.value = "Baguette"
    }
}
