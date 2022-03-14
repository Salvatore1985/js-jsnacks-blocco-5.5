/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */
const zucchineLista =
    [
        {
            name: "nera",
            peso: 500,
            lunghezza: 12,

        },
        {
            name: "siciliana",
            peso: 250,
            lunghezza: 15,

        },
        {
            name: "pugliese",
            peso: 600,
            lunghezza: 10,

        },
        {
            name: "napoletana",
            peso: 450,
            lunghezza: 16,

        },
        {
            name: "nera",
            peso: 300,
            lunghezza: 12,

        }
    ]

sumPeso = 0;
const pesoZucchine = zucchineLista.filter((element) => {
    sumPeso += element.peso;
    return sumPeso;
});
console.log(sumPeso);

