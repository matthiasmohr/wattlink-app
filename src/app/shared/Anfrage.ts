interface Anfrage {
    id: number;
    user: string;
    anfrageID: string;
    // Step 1
    jahresverbrauchStrom:       number;
    jahresverbrauchGas:         number;
    oekostrom:                  boolean;
    biogas:                     boolean;
    // Step 2
    anzahlLieferstellen:        '1-1' | '2-10' | '11-50' | '51+';
    informationsergaenzung:     '1' | '2' | '3';
    anfrageBezeichnung:         string;
    // Step 3
    beliefersituation:          '1' | '2' | '3';
    lieferbeginn:               string;
    wasIstWichtig:              string;
    // Step 4
    firma:                      string;
    vorname:                    string;
    nachname:                   string;
    email:                      string;
    telefon:                    string;
    anfragesteller:             '1' | '2' | '3' | '4' | '5' | '6';
    anfragestellerBeschreibung: string;

    fortschritt:                number;
    status:                     string;
    style:                      string;
    // Techn. Daten
    anfragezeit:                string;
    gesperrt:                   boolean;
    erstellt:                   string;
    bearbeitet:                 string;
}

const inits: Anfrage = {
    id: 1,
    user: '',
    anfrageID: '1',
    // Step 1
    jahresverbrauchStrom:       150000,
    jahresverbrauchGas:         300000,
    oekostrom:                  true,
    biogas:                     false,
    // Step 2
    anzahlLieferstellen:        '2-10',
    informationsergaenzung:     '2',
    anfrageBezeichnung:         'Testanfrage',
    // Step 3
    beliefersituation:          '2',
    lieferbeginn:               '1.10.2025',
    wasIstWichtig:              'Mir ist alles wichtig!',
    // Step 4
    firma:                      'M&S Corporation',
    vorname:                    'Dagobert',
    nachname:                   'Duck',
    email:                      'du@c.k',
    telefon:                    '12345',
    anfragesteller:             '4',
    anfragestellerBeschreibung: 'Riesiges Imperium',

    fortschritt:                0,
    status:                     "ToDo",
    style:                      "primary",
    // Techn. Daten
    anfragezeit:                '',
    gesperrt:                   false,
    erstellt:                   '',
    bearbeitet:                 ''
};

export { Anfrage, inits };