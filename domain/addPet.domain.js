function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function addPetProcessor(newPet) {
    const processedPet = {};
    const randomID = uuidv4();
    const processedPetFullBD = new Date(newPet.petBirthDate);
    processedPet.name = newPet.addPetName;
    processedPet.species = newPet.petSpecies;
    processedPet.sex = newPet.petSex;
    processedPet.birthYear = processedPetFullBD.getFullYear();
    // month is 0 indexed
    processedPet.birthMonth = processedPetFullBD.getMonth();
    processedPet.birthDay = processedPetFullBD.getDate();
    processedPet.breed = newPet.petBreed;
    processedPet.medications = newPet.petMeds;
    processedPet.vet = newPet.vetClinicName;
    if (!processedPet.id) {
        processedPet.id = randomID;
    }
    return processedPet;
}

module.exports = addPetProcessor;