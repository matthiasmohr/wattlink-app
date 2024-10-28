interface Nachricht {
    id: number,
    nachrichtTitel: string,
    nachrichtInhalt: string,
    erzeuger: string,
    linkText: string,
    link: string,

    icon: string,
    stil: string,

    sichtbarKunde: boolean,
    sichtbarVersorger: boolean,
    sichtbarAgent: boolean,

    erstellt: string,
    bearbeitet: string
}

export { Nachricht } ;