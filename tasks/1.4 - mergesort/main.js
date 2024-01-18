function setup() {
    noCanvas();

    print(`List: ${randomList}`);

    print(`Sorted: ${mergesort(randomList)}`);
}

// Doplňte funkci mergesort, aby rekurzivně setřídila seznam
// Princip je jednoduchý:
//      - abychom setřídili seznam, stačí nám setřídit zvlášť jeho levou polovinu a
//        zvlášť jeho pravou polovinu a slít obě setřízené poloviny pomocí naší merge funkce
//      - na setřízení každé poloviny můžeme znovu použít funkci mergesort (která tedy setřídí poloviny každé poloviny atd.)
//      - seznam, který má pouze jeden prvek je vždy setřízený
// Trik je v tom že funkce může zavolat sama sebe
// Tomu se říká rekurze
// Je to často velmi jednoduchý způsob jak naprogramovat něco složitého, ale pozor na to aby opakované volání funkce někdy skončilo
// Je velmi lehké pomocí rekurze vytvořit program, který nikdy neskončí






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



function mergesort(list) {
    if (list.length <= 1) return list

    let right=list.slice(list.length/2, list.length)
    let left=list.slice(0, list.length/2)
    
    left = mergesort(left)
    right = mergesort(right)

    return merge(left, right);
}