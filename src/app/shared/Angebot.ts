interface Angebot {
    partnerprofilID:         string,
    anfrageID:               string,
    angebotID:               string,
    angebotenVon:            string,
    angebotenVonKurzbeschreibung: string,
    angebotenVonLogo:           string,
    angebotTitel:            string,
    angebotKurzbeschreibung: string,
    angebotLangbeschreibung: string,
    status:                  string,
    jahresgrundpreisEur:     number,
    verbrauchspreisCentKwh:  number,
    leistungspreisEurKw:     number,
    bindefrist:              string,
    erstellt:                string,
    bearbeitet:              string,
    domainmodellversion:     string,
}

export { Angebot } ;