
document.querySelector('#calculate').addEventListener('click', calculateDilution)

function calculateDilution() {
  const batchSize = document.querySelector('#volume').value
  const dilution = document.querySelector('#dilution').value
  const unit = document.querySelector('#unit').value
  let waterToAdd = dilution * batchSize / (100 - dilution);
  let roundedWater = Math.round((waterToAdd + Number.EPSILON) * 100) /100
  document.querySelector('#dilutionNeeded').innerText =  `You will need to add ${roundedWater} ${unit} of water to reach ${dilution}% batch dilution `
}