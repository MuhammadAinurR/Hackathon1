// Function to create checkboxes
function createCheckboxes(data) {
    const container = document.getElementById("checkboxContainer");

    data.forEach(item => {
        // Create label element
        const label = document.createElement("label");
        label.setAttribute("for", item.id);
        label.className = "flex cursor-pointer gap-3";

        // Create checkbox input
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "size-4 rounded border-gray-300";
        checkbox.id = item.id;

        // Create text for label
        const labelText = document.createElement("strong");
        labelText.className = "font-medium text-gray-900";
        labelText.textContent = item.label;

        // Append elements
        label.appendChild(checkbox);
        label.appendChild(labelText);
        container.appendChild(label);
    });
}

function getFormData(data) {
    const idSet = new Set();
    const result = [];

    data.forEach(obat => {
        obat.gejala.forEach(symptom => {
            const id = symptom.toLowerCase(); // Convert to lowercase to handle case sensitivity
            
            // Check if id is not already in the Set
            if (!idSet.has(id)) {
                idSet.add(id); // Add id to the Set to mark it as seen
                result.push({ id: id, label: symptom });
            }
        });
    });

    result.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });

    return result;
}

// prepare data for pilih gejala display
const checkboxData = getFormData(dataObat);

// Call function to create checkboxes when the page loads
document.addEventListener("DOMContentLoaded", createCheckboxes(checkboxData));

// Function to retrieve checked checkbox values
function getCheckedValues() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    const checkedValues = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedValues.push(checkbox.id); // or checkbox.nextSibling.textContent to get the label text
        }
    });

    return checkedValues;
}


// Example of how to use the function
function handleCheckboxChange() {
    const checkedValues = getCheckedValues();
    return checkedValues;
}

// Attach event listener to handle checkbox changes
// document.addEventListener("change", handleCheckboxChange); 
