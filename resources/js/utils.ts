export const shuffleArray = <T>(array: T[]): T[] => {
    // Hacer una copia superficial del array original
    const arrayCopy = [...array];
    let currentIndex = arrayCopy.length;
    let temporaryValue: T;
    let randomIndex: number;

    // Mientras queden elementos por mezclar...
    while (currentIndex !== 0) {
        // Seleccionar un elemento sin mezclar...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Intercambiarlo con el elemento en la posición actual
        temporaryValue = arrayCopy[currentIndex];
        arrayCopy[currentIndex] = arrayCopy[randomIndex];
        arrayCopy[randomIndex] = temporaryValue;
    }

    return arrayCopy; // Retorna la copia mezclada
};

export const getURLToSendMessageToWhatsapp = ({
    whatsappNumber,
    message,
}: {
    whatsappNumber: string;
    message: string;
}) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
    )}`;
};

export const handleWhatsappButton = ({ commodity }: { commodity: string }) => {
    const url = getURLToSendMessageToWhatsapp({
        whatsappNumber: `51967083176`,
        message: `Hola Heat Factory, estoy interesado en consultar *${commodity}*, agradezco me puedas brindar más información.`,
    });
    window.open(url, "_blank");
};

export function decodeHtml(html: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.documentElement.textContent || "";
}

export const dateFormatter = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
});

export const decodeSlug = (slug: string): string => {
    const withSpaces = slug.replace(/-/g, " ");

    const capitalized =
        withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);

    return capitalized;
};
