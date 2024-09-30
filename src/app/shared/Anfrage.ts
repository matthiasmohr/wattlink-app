export interface Anfrage {
    User: string;
    AnfrageID: string;
    // Step 1
    JahresverbrauchStrom:       number;
    JahresverbrauchGas:         number;
    Oekostrom:                  boolean;
    Biogas:                     boolean;
    // Step 2
    AnzahlLieferstellen:        string
    GewerblichOderPrivat:       string
    // Step 3
    Beliefersituation:          string
    Zeitfenster:                string
    WasIstDirWichtig:           string
    // Step 4
    Informationsergaenzung:     string
    // Step 5
    Firma:                      string
    PersoenlicherName:          string
    Email:                      string
    Telefon:                    string;
    // Techn. Daten
    Anfragezeit:                string;
    Gesperrt:                   boolean;
    Erstellt:                   string;
    Bearbeitet:                 string;
}