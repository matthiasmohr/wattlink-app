interface Nachricht {
    partnerprofilID: string,
    anfrageID: string,
    nachrichtTitel: string,
    nachrichtInhalt: string,
    erzeuger: string,
    linkText: string,
    link: string,

    icon: string,
    stil: string,
    emailRequested: boolean,

    sichtbarKunde: boolean,
    sichtbarVersorger: boolean,
    sichtbarAgent: boolean,

    erstellt: string,
    bearbeitet: string
}

export { Nachricht } ;