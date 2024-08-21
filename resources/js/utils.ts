export const shuffleArray = <T>(array: T[]): T[] => {
    let currentIndex = array.length;
    let temporaryValue: T;
    let randomIndex: number;

    // Mientras queden elementos por mezclar...
    while (currentIndex !== 0) {
        // Seleccionar un elemento sin mezclar...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Intercambiarlo con el elemento en la posición actual
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};
