var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceraptors';
var newDinosaur = dinosaur.toUpperCase();

var changedText = text.replace('Velociraptor', newDinosaur);

console.log(changedText.slice(0,changedText.length/2));
