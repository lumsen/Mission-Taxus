// Beschreibungstexte für die Befehle
const commandDescriptions = {
  clear: "Löscht das Terminalfenster.",
  help: "Zeigt die Liste der verfügbaren Befehle an.",
  about: "Zeigt Informationen über diese simulierte Terminal-Seite an.",
  projects: 'Zeigt die verfügbaren Projekte an, außer Projekten, die mit "x" beginnen.',
  contact: "Zeigt Kontaktinformationen an.",
  organigramm: 'Zeigt das Organigramm der Forschungseinrichtung "Station Taxus" an.',
};

// Funktionalität der Befehle
const commands = {
  clear: function () {
    output.innerHTML = "";
  },
  help: function () {
    return Object.keys(commandDescriptions)
      .map((cmd) => `<b>${cmd}</b>: ${commandDescriptions[cmd]}`)
      .join("\n");
  },
  about: function () {
    return "Dies ist eine simulierte Terminal-Seite.";
  },
  projects: function () {
    const projectList = Object.keys(projects)
      //.filter((proj) => !proj.startsWith("x"))
      .join(", ");
    return `Verfügbare Projekte: ${projectList}`;
  },
  contact: function () {
    return "Kontakt: email.SC-T@cmr.com";
  },
	personal: function () {
    const personalList = Object.keys(personal)
      .join(", ");
    return `Liste der Mitarbeitenden: ${personalList}`;
  },
  organigramm: function () {
    return `
Organigramm der Forschungseinrichtung "Station Taxus"
    Stationsleitung: Dr. Helen Warden
    Stellv. Stationsleitung: Dr. Simon Verner
    |
    +-- Medizin (SC-T/MZ)
    |   Teamleiter medizinische Forschung: Dr. Konrad Schirmer
    |   +-- Arzt: Dr. Julian Zellmann
    |   |   +-- Arzt: Dr. Robert Sievers
    |   |   +-- Pädiaterin: Dr. Marion Nestler
    |   +-- Pathologe: Dr. Franz Limbus
    |   |   +-- Pflegefachmann: Simon Nachtigall
    |
    +-- Medizin-Psychologie (SC-T/MPZ)
    |   Teamleiter Psychologie: Dr. Stefan Kramme
    |   +-- Psychiater: Dr. Torsten Oberdorfer
    |   +-- Psychologische Psychotherapeutin: Maria Riedmann
    |
    +-- Pharmakologie (SC-T/PZ)
    |   Teamleiterin pharmakologische Forschung: Dr. Petra Pharmon
    |   +-- Biochemiker: Dr. Tobias Isomer
    |   |   +-- Chemielaborant: Lukas Reagens
    |   +-- Pharmakologe: Dr. Max Vitamer
    |   |   +-- PTA: Julia Pulvermann
    |
    +-- Veterinär (SC-T/VZ)
    |   Teamleiterin Veterinärforschung: Dr. Viktoria Petermann
    |   +-- Veterinär: Dr. Leon Wiesler
    |   +-- Wissenschaftlicher Mitarbeiter: Dr. Victor Forscher
    |   +-- Tierpfleger: Jan Albrecht
    |
    +-- Sicherheit (SC-T/IS)
    |   Teamleiter Sicherheit: Bernd Wachter
    |   +-- Sicherheit: Erik Schildmann
    |   +-- Sicherheit: Lars Wächter
    |
    +-- Verwaltung (SC-T/VT)
        Teamleiter Verwaltung: Carsten Orlich
        +-- Verwaltungsfachangestellte: Annika Metz-Schimmel
        |   +-- IT: Ansgar Kode
        +-- Hausmeister: Anton Kehrig
        |   +-- Koch: Marcel Breuer
		
Aufrufen der einzelnen Mitarbeitenden nach dem Schema: personal vornameNachname
          `;
  },
};

// Projektdefinitionen
const projects = {
  gasPipeline: `
Projektname: <span class="color1">Gas Pipeline Expansion</span>
Beschreibung:
    Dieses Projekt umfasst die Erweiterung des bestehenden Gasleitungsnetzes, um die Versorgungssicherheit zu erhöhen. 
    Es wird über 300 Kilometer neue Leitungen verlegt, die die Verteilung von Erdgas in ländliche Gebiete verbessern.
Ziele:
    1. Erhöhung der Versorgungssicherheit
    2. Anbindung neuer Regionen
    3. Kapazitätserweiterung
Status: In Bearbeitung
Verantwortlicher: Max Mustermann
  `,
  gasStorage: `
Projektname: <span class="color2">Gas Storage Facility</span>
Beschreibung:
    Aufbau einer neuen Gasspeicheranlage zur Lagerung von überschüssigem Erdgas während der Sommermonate. 
    Die Anlage hat eine Kapazität von 50 Millionen Kubikmetern und soll helfen, Versorgungsengpässe im Winter zu vermeiden.
Ziele:
    1. Erhöhung der Speicherkapazität
    2. Versorgungssicherheit im Winter
    3. Optimierung der Gasversorgung
Status: Abgeschlossen
Verantwortlicher: Erika Musterfrau
  `,
  gasConversion: `
Projektname: <span class="color3">Gas-to-Liquid Conversion Plant</span>
Beschreibung:
    Entwicklung einer Anlage zur Umwandlung von Erdgas in flüssige Brennstoffe wie Diesel und Kerosin. 
    Dies ermöglicht eine flexiblere Nutzung von Erdgas und reduziert die Abhängigkeit von importierten Flüssigbrennstoffen.
Ziele:
    1. Diversifizierung der Energiequellen
    2. Erhöhung der Energieunabhängigkeit
    3. Innovation in der Gasverarbeitung
Status: Geplant
Verantwortlicher: John Doe
  `,
  xrayAnalysis: `
Projektname: <span class="color1">X-Ray Analysis Improvement</span>
Beschreibung:
    Dieses Projekt zielt darauf ab, die Technologie der Röntgenanalyse zu verbessern, um genauere und schnellere Ergebnisse zu erzielen.
Ziele:
    1. Verbesserung der Bildqualität
    2. Reduzierung der Analysezeit
    3. Erhöhung der Sicherheit für Benutzer
Status: In Bearbeitung
Verantwortlicher: Dr. Xenia Zahn
  `,
  miceMore: `
Projektname: <span class="color4">Mice and more</span>
Beschreibung:
    Testung der Orientierungsfähigkeit unter Einfluss von Substanz xTra im Vergleich zu N2O und Placebo.
Ziele:
    1. Ermittlung von Kontraindikationen
    2. Beurteilung der Wirkung von xTra auf das Orientierungsvermögen
    3. Vergleich zu Experimenten mit Bots
Status: In Bearbeitung
Verantwortlicher: Dr. Xavier Charles 
  `,
};

// Personalliste
const personal = {
  heleneWarden: `
Name: <span class="color1">Dr. Helene Warden</span>
Funktion:
    Stationsleiterin
Bereich:
    Leitung
Personalnummer: 005897
Letzter Login: 2021-12-17 08:06:00
Bemerkung: 
    Langjährige Führungserfahrung, exzellentes Organisationstalent.
  `,
  simonVerner: `
Name: <span class="color1">Dr. Simon Verner</span>
Funktion:
    Stellv. Stationsleiter
Bereich:
    Leitung
Personalnummer: 003978
Letzter Login: 2022-01-01 10:25:05
Bemerkung: 
    Hervorragender Teamplayer, übernimmt oft zusätzliche Aufgaben.
  `,
  julianZellmann: `
Name: <span class="color1">Dr. Julian Zellmann</span>
Funktion:
    Arzt
Bereich:
    MZ
Personalnummer: 003352
Letzter Login: 2021-12-26 07:37:18
Bemerkung: 
    Kommunikativ und beliebt bei Patienten, präziser Diagnostiker.
  `,
  robertSievers: `
Name: <span class="color1">Dr. Robert Sievers</span>
Funktion:
    Arzt
Bereich:
    MZ
Personalnummer: 004798
Letzter Login: 2021-12-17 10:07:33
Bemerkung: 
    Regelmäßige Teilnahme an internationalen Kongressen, Fokus auf Präventionsmedizin.
  `,
  marionNestler: `
Name: <span class="color1">Dr. Marion Nestler</span>
Funktion:
    Pädiaterin
Bereich:
    MZ
Personalnummer: 007753
Letzter Login: 2021-12-21 17:31:03
Bemerkung: 
    Kinderfreundlich, führt innovative Therapieansätze ein.
  `,
  franzLimbus: `
Name: <span class="color1">Dr. Franz Limbus</span>
Funktion:
    Pathologe
Bereich:
    MZ
Personalnummer: 005574
Letzter Login: 2022-05-01 21:19:33
Bemerkung: 
    Veröffentlichte regelmäßig in Fachzeitschriften, bekannt für seine akribische Arbeit.
  `,
  simonNachtigall: `
Name: <span class="color1">Simon Nachtigall</span>
Funktion:
    Pflegefachmann
Bereich:
    MZ
Personalnummer: 005191
Letzter Login: 2022-05-01 21:19:33
Bemerkung: 
    Besonders einfühlsam im Umgang mit Patienten, flexibel in der Einsatzplanung.
  `,
  konradSchirmer: `
Name: <span class="color1">Dr. Konrad Schirmer</span>
Funktion:
    Teamleiter medizinische Forschung
Bereich:
    MZ
Personalnummer: 004571
Letzter Login: 2021-12-22 00:35:07
Bemerkung: 
    Spezialisiert auf seltene Erkrankungen, hohe Erfolgsquote in klinischen Studien.
  `,
  stefanKramme: `
Name: <span class="color1">Dr. Stefan Kramme</span>
Funktion:
    Teamleiter Psychologie
Bereich:
    MPZ
Personalnummer: 008973
Letzter Login: 2022-04-29 10:51:46
Bemerkung: 
    Fördert die Weiterentwicklung seiner Mitarbeiter, interessiert an Neuropsychologie.
  `,
  torstenOberdorfer: `
Name: <span class="color1">Dr. Torsten Oberdorfer</span>
Funktion:
    Psychiater
Bereich:
    MPZ
Personalnummer: 008879
Letzter Login: 2021-12-18 09:44:05
Bemerkung: 
    Setzt moderne psychotherapeutische Methoden ein, hohe Patientenzufriedenheit.
  `,
  mariaRiedmann: `
Name: <span class="color1">Maria Riedmann</span>
Funktion:
    Psychologische Psychotherapeutin
Bereich:
    MPZ
Personalnummer: 008733
Letzter Login: 2022-06-19 22:55:53
Bemerkung: 
    Engagiert in der Patientennachsorge, immer gut vorbereitet.
  `,
  tobiasIsomer: `
Name: <span class="color1">Dr. Tobias Isomer</span>
Funktion:
    Biochemiker
Bereich:
    PZ
Personalnummer: 004898
Letzter Login: 2022-05-26 17:26:41
Bemerkung: 
    Experte für Molekularbiologie, früher oft in internationalen Forschungskooperationen tätig.
  `,
  lukasReagens: `
Name: <span class="color1">Lukas Reagens</span>
Funktion:
    Chemielaborant
Bereich:
    PZ
Personalnummer: 003211
Letzter Login: 2022-08-25 20:11:04
Bemerkung: 
    Zeigt großes technisches Geschick, führt präzise Laborexperimente durch.
  `,
  maxVitamer: `
Name: <span class="color1">Dr. Max Vitamer</span>
Funktion:
    Pharmokologe
Bereich:
    PZ
Personalnummer: 005587
Letzter Login: 2021-12-30 01:04:52
Bemerkung: 
    Fokus auf Medikamentensicherheit, arbeitet eng mit der Industrie zusammen.
  `,
  juliaPulvermann: `
Name: <span class="color1">Julia Pulvermann</span>
Funktion:
    PTA
Bereich:
    PZ
Personalnummer: 008965
Letzter Login: 2022-06-30 05:07:03
Bemerkung: 
    Organisiert das Labor effizient, arbeitet strukturiert und sauber.
  `,
  petraPharmon: `
Name: <span class="color1">Dr. Petra Pharmon</span>
Funktion:
    Teamleiterin pharmakologische Forschung
Bereich:
    PZ
Personalnummer: 004879
Letzter Login: 2021-12-23 19:29:14
Bemerkung: 
    Leitet mehrere bahnbrechende Projekte, starke Führungspersönlichkeit.
  `,
  erikSchildmann: `
Name: <span class="color1">Erik Schildmann</span>
Funktion:
    Sicherheit
Bereich:
    IS
Personalnummer: 004437
Letzter Login: 2021-12-19 03:53:19
Bemerkung: 
    Reagiert schnell und effektiv in Notfallsituationen, Teamplayer.
  `,
  larsWächter: `
Name: <span class="color1">Lars Wächter</span>
Funktion:
    Sicherheit
Bereich:
    IS
Personalnummer: 007451
Letzter Login: 2022-04-07 10:23:58
Bemerkung: 
    Technisch versiert, unterstützt auch IT-Projekte.
  `,
  berndWachter: `
Name: <span class="color1">Bernd Wachter</span>
Funktion:
    Teamleiter Sicherheit
Bereich:
    IS
Personalnummer: 007331
Letzter Login: 2021-12-27 04:50:34
Bemerkung: 
    Hat umfangreiche Erfahrungen in der Sicherheitsplanung, gut im Krisenmanagement.
  `,
  antonKehrig: `
Name: <span class="color1">Anton Kehrig</span>
Funktion:
    Hausmeister
Bereich:
    VT
Personalnummer: 006793
Letzter Login: - Fehlermeldung -
Bemerkung: 
    Hilfsbereit und zuverlässig, handwerklich geschickt.
  `,
  ansgarKode: `
Name: <span class="color1">Ansgar Kode</span>
Funktion:
    IT
Bereich:
    VT
Personalnummer: 006998
Letzter Login: 2021-12-17 15:19:38
Bemerkung: 
    Programmiert interne Tools, schnell bei Problemlösungen.
  `,
  marcelBreuer: `
Name: <span class="color1">Marcel Breuer</span>
Funktion:
    Koch
Bereich:
    VT
Personalnummer: 005575
Letzter Login: 2022-07-20 14:32:40
Bemerkung: 
    Kreativ in der Menügestaltung, sorgt für ausgewogene Mahlzeiten.
  `,
  carstenOrlich: `
Name: <span class="color1">Carsten Orlich</span>
Funktion:
    Teamleiter Verwaltung
Bereich:
    VT
Personalnummer: 001158
Letzter Login: 2021-12-16 06:44:15
Bemerkung: 
    Strukturierte Arbeitsweise, optimiert regelmäßig interne Prozesse.
  `,
  annikaMetzSchimmel: `
Name: <span class="color1">Annika Metz-Schimmel</span>
Funktion:
    Verwaltungsfachangestellte
Bereich:
    VT
Personalnummer: 008335
Letzter Login: 2021-12-22 17:16:16
Bemerkung: 
    Schnell und präzise in der Bearbeitung von Anfragen, sorgt für reibungslose Abläufe.
  `,
  viktoriaPetermann: `
Name: <span class="color1">Dr. Viktoria Petermann</span>
Funktion:
    Teamleiterin Veterinärforschung
Bereich:
    VZ
Personalnummer: 008897
Letzter Login: 2021-12-26 18:04:48
Bemerkung: 
    Schwerpunkt auf Zoonosen-Forschung, engagiert in der Öffentlichkeitsarbeit.
  `,
  leonWiesler: `
Name: <span class="color1">Dr. Leon Wiesler</span>
Funktion:
    Veterinär
Bereich:
    VZ
Personalnummer: 006987
Letzter Login: 2021-12-23 09:17:05
Bemerkung: 
    Spezialist für exotische Tierarten, leitet regelmäßig interne Workshops.
  `,
  janAlbrecht: `
Name: <span class="color1">Jan Albrecht</span>
Funktion:
    Tierpfleger
Bereich:
    VZ
Personalnummer: 002335
Letzter Login: 2022-05-30 16:30:48
Bemerkung: 
    Zuverlässig in der Tierpflege, findet schnell Zugang zu Tieren.
  `,
  victorForscher: `
Name: <span class="color1">Dr. Victor Forscher</span>
Funktion:
    Wissenschaftlicher Mitarbeiter
Bereich:
    VZ
Personalnummer: 007894
Letzter Login: 2021-12-29 11:22:13
Bemerkung: 
    Publizierte bahnbrechende Studien, unterstützte Nachwuchsforscher.
  `,
  defaultUser: `
Name: <span class="color1">user@Taxus.net</span>
Funktion:
    DefaultUser
Bereich:
    VT
Personalnummer: 000001
Letzter Login: - Fehlermeldung -
Bemerkung: 
    DefaultUser
  `,
};


/**
 * Anleitung zum Hinzufügen eines neuen Befehls:
 * 
 * 1. Fügen Sie eine neue Beschreibung zum `commandDescriptions` Objekt hinzu:
 *    Beispiel:
 *    commandDescriptions.neuerBefehl = "Beschreibung des neuen Befehls.";
 * 
 * 2. Fügen Sie eine neue Funktion zum `commands` Objekt hinzu:
 *    Beispiel:
 *    commands.neuerBefehl = function() {
 *      // Implementierung des neuen Befehls
 *      return "Ausgabe des neuen Befehls";
 *    };
 * 
 * 3. Speichern Sie die Datei und laden Sie die Webseite neu, um den neuen Befehl zu testen.
 */