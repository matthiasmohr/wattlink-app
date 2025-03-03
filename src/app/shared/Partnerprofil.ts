interface Partnerprofil {
    partnerprofilID: string,
    email: string
    emailAktiviert: boolean
    vorname: string
    nachname: string
    firma: string
    plz: string
    stadt: string
    strasse: string
    hausnummer: string
    position: string
    telefon: string
    kunde: boolean
    kundeStatus: string
    kundeAktiviert: boolean
    docuSignEnvelopeID: string
    lieferant: boolean
    lieferantAktiviert: boolean
    erstellt: string
    bearbeitet: string
}

export { Partnerprofil };