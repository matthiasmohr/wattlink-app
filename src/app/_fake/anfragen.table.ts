export class AnfragenTable {
    public static anfragen: any = [
        {
            id: 1,
            user: '',
            anfrageID: '',
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

            // Techn. Daten
            anfragezeit: '',
            gesperrt: false,
            erstellt: '',
            bearbeitet: ''
        }]
}