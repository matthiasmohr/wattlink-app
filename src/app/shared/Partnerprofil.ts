interface Partnerprofil {
    partnerprofilID: string,
    email: string
    emailAktiviert: boolean
    vorname: string
    nachname: string
    firma: string
    position: string
    telefon: string
    kunde: boolean
    kundeAktiviert: boolean
    lieferant: boolean
    lieferantAktiviert: boolean
    erstellt: string
    bearbeitet: string
}

export { Partnerprofil };