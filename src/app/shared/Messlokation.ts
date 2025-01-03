interface Messlokation {
    id: number,
    anfrageID: string,
    messlokationID: string,

    plz: string,
    stadt: string,
    strasse: string,
    hausnummer: string,

    jahresverbrauch_kWh: number,
    spitzenlast_kW: number,
    profil: string,
    kommentar: string,

    fortschritt:                number;
    status:                     string;
    style:                      string;

    gesperrt: boolean,
    bearbeitet: string,
    erstellt: string,
}

const messlokationInit: Messlokation = {
    id: 1,
    anfrageID: "123",
    messlokationID: "DE123456",
    plz: "22222",
    stadt: "Hamburg",
    strasse: "Dagobertstr.",
    hausnummer: "1a",
    jahresverbrauch_kWh: 100000,
    spitzenlast_kW: 200000,
    profil: "H0",
    kommentar: "Kommentar einfügen",
    fortschritt: 33,
    status: "TODO",
    style: "primary",
    gesperrt: true,
    erstellt: "1.1.1999",
    bearbeitet: "2.1.1999",
};

export { Messlokation, messlokationInit };