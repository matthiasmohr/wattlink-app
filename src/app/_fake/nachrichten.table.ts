export class NachrichtenTable {
    public static nachrichten: any = [
        {
            id: 1,
            nachrichtTitel: "Eine neue Nachricht",
            nachrichtInhalt: "du hast ein neues Angebot erhalten von einem tollen Versorger",
            erzeuger: "System",
            linkText: null,
            link: null,

            icon: "communication/com003.svg",
            stil: "secondary",

            sichtbarKunde: true,
            sichtbarVersorger: true,
            sichtbarAgent: true,

            erstellt: "01.01.2022",
            bearbeitet: "01.01.2022"
        },
        {
            id: 2,
            nachrichtTitel: "Eine neue Information über Dateien",
            nachrichtInhalt: "Hier hast du neue Dateien bekommen",
            erzeuger: "System",
            linkText: null,
            link: null,

            icon: "communication/com003.svg",
            stil: "primary",

            sichtbarKunde: true,
            sichtbarVersorger: true,
            sichtbarAgent: true,

            erstellt: "02.01.2022",
            bearbeitet: "02.01.2022"
        },
        {
            id: 3,
            nachrichtTitel: "Ein neuer Link",
            nachrichtInhalt: "Auf diesem Knopf kannst du einen Link drücken. Versuch mal.",
            erzeuger: "System",
            linkText: "Klick hier",
            link: "www.google.de",

            stil: "warning",
            icon: "communication/com003.svg",

            sichtbarKunde: true,
            sichtbarVersorger: true,
            sichtbarAgent: true,

            erstellt: "03.01.2022",
            bearbeitet: "03.01.2022"
        },
        ]
}