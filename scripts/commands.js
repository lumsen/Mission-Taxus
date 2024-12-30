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
    return "Kontakt: email@example.com";
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