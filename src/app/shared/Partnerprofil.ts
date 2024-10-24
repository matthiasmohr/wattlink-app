interface Partnerprofil {
    id: number,
    email: string
    vorname: string
    nachname: string
    firma: string
    position: string
    telefon: string
    kunde: boolean
    kundeSigniert: boolean
    lieferant: boolean
    erstellt: string
    bearbeitet: string
}

export { Partnerprofil };