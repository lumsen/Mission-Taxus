# Mission-Taxus

## Projektübersicht

Mission-Taxus ist eine simulierte Terminal-Seite, die als Intranet für die Forschungseinrichtung "Station Taxus" dient. Die Seite bietet verschiedene Befehle, um Informationen über Projekte, Kontaktinformationen und das Organigramm der Einrichtung abzurufen.

## Installation

1. Klone das Repository:
    ```sh
    git clone https://github.com/username/Mission-Taxus.git
    ```
2. Navigiere in das Projektverzeichnis:
    ```sh
    cd Mission-Taxus
    ```

## Nutzung

Öffne die `index.html` Datei in einem Webbrowser, um die simulierte Terminal-Seite zu verwenden.

## Verfügbare Befehle

- `clear`: Löscht das Terminalfenster.
- `help`: Zeigt die Liste der verfügbaren Befehle an.
- `about`: Zeigt Informationen über diese simulierte Terminal-Seite an.
- `projects`: Zeigt die verfügbaren Projekte an, außer Projekten, die mit "x" beginnen.
- `contact`: Zeigt Kontaktinformationen an.
- `organigram`: Zeigt das Organigram der Forschungseinrichtung "Station Taxus" an.

## Projekte

Die Projekte sind in der Datei `scripts/commands.js` definiert und können über den Befehl `projects` abgerufen werden.

## Hinzufügen neuer Befehle

Um einen neuen Befehl hinzuzufügen, befolge diese Schritte:

1. Füge eine neue Beschreibung zum `commandDescriptions` Objekt in `scripts/commands.js` hinzu:
    ```javascript
    commandDescriptions.neuerBefehl = "Beschreibung des neuen Befehls.";
    ```

2. Füge eine neue Funktion zum `commands` Objekt in `scripts/commands.js` hinzu:
    ```javascript
    commands.neuerBefehl = function() {
      // Implementierung des neuen Befehls
      return "Ausgabe des neuen Befehls";
    };
    ```

3. Speichere die Datei und lade die Webseite neu, um den neuen Befehl zu testen.