let items = [];

function Create(item) {
    items.push(item);
}

function Read() {
    items.forEach(function(item) {
            console.log(item);
        });
}

function Update(index, newItem) {
    items[index] = newItem;
}

function Delete(index) {
    items.splice(index, 1);
}
