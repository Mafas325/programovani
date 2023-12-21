function setup() {
    noCanvas();

    print(`ListA: ${sortedListA}`);
    print(`ListB: ${sortedListB}`);

    print(`Merged: ${merge(sortedListA, sortedListB)}`);
}

// Funkce merge dostance dva setřízené seznamy.
// Doplňte ji, aby seznamy 'slila' do jednoho setřízeného seznamu.
// Není potřeba nic znovu třídit, stačí přidávat do výsledného seznamu ve správném pořadí




function merge(listA, listB) {
    let out = [];
    let délka = listA.length + listB.length
    let a = 0
    let b = 0
    for(let i = 0; i < délka; i++){
        if (a >= listA.length){
            out.push(listB[b])
            b = b+1
        }
        else if (b >= listB.length){
            out.push(listA[a])
            a = a+1
        }
        
        else if (listA[a] < listB[b]){
            out.push(listA[a])
            a=a+1
        }
        else {
            out.push(listB[b])
            b=b+1
        }

        
    }
    

    return out;
}