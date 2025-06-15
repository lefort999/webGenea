function onChange() {
    current_selected_item = document.getElementById("cb-profession").value;
    output_text_element = document.getElementById("output-label");
    console.log("La profession sélectionnée est :", current_selected_item)
    output_text_element.value = current_selected_item;
}