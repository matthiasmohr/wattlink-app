interface Messlokation {
    id: string,
    anfrage: string,

    melo: string,

    plz: string,
    stadt: string,
    strasse: string,
    hausnummer: string,

    jahresverbrauch_kWh: number,
    spitzenlast_kW: number,
    profil: string,

    fortschritt:                number;
    status:                     string;
    style:                      string;

    erstellt: string,
    bearbeitet: string,
}

const inits: Messlokation = {
    id: "1",
    anfrage: "Anfrage",
    melo: "DE123456",
    plz: "22222",
    stadt: "Hamburg",
    strasse: "Dagobertstr.",
    hausnummer: "1a",
    jahresverbrauch_kWh: 100000,
    spitzenlast_kW: 200000,
    profil: "H0",
    fortschritt: 33,
    status: "TODO",
    style: "primary",
    erstellt: "1.1.1999",
    bearbeitet: "2.1.1999",
};

export { Messlokation, inits };