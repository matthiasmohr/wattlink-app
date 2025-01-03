export class AnfragenTable {
    public static anfragen: any = [
        {
            id: 2,
            user: '',
            anfrageID: '2',
            // Step 1
            jahresverbrauchStrom: 150000,
            jahresverbrauchGas: 300000,
            oekostrom: "true",
            biogas: "false",
            // Step 2
            anzahlLieferstellen: '2-10',
            informationsergaenzung: '2',
            anfrageBezeichnung: 'Testanfrage',
            // Step 3
            beliefersituation: '2',
            lieferbeginn: '1.10.2025',
            wasIstWichtig: 'Mir ist alles wichtig!',
            // Step 4
            firma: 'M&S Corporation',
            vorname: 'Dagobert',
            nachname: 'Duck',
            email: 'du@c.k',
            telefon: '12345',
            anfragesteller: '4',
            anfragestellerBeschreibung: 'Riesiges Imperium',

            fortschritt: 30,
            status: "TODO",
            style: "primary",
            // Techn. Daten
            anfragezeit: '1.10.2024',
            gesperrt: false,
            erstellt: '',
            bearbeitet: ''
        },
        {
            id: 4,
            user: '',
            anfrageID: '4',
            // Step 1
            jahresverbrauchStrom: 300000,
            jahresverbrauchGas: 500000,
            oekostrom: "false",
            biogas: "true",
            // Step 2
            anzahlLieferstellen: '2-10',
            informationsergaenzung: '2',
            anfrageBezeichnung: 'Neue Anfrage',
            // Step 3
            beliefersituation: '2',
            lieferbeginn: '1.12.2024',
            wasIstWichtig: 'Mir auch!',
            // Step 4
            firma: 'NewCo.',
            vorname: 'Lara',
            nachname: 'Duck',
            email: 'lara@c.k',
            telefon: '54321',
            anfragesteller: '4',
            anfragestellerBeschreibung: 'Riesiges Imperium',

            fortschritt: 80,
            status: "TODO",
            style: "info",
            // Techn. Daten
            anfragezeit: '1.9.2023',
            gesperrt: false,
            erstellt: '',
            bearbeitet: ''
        }]
}