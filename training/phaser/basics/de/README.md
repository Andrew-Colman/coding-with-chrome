# Game Engine - Grundlagen

## Spiel
Ein Spiel kennt mehrere Spielzustände, die je nach Benutzeraktion ausgeführt werden.
Einfache Spiele haben einen Startbildschirm, den eigentlichen Spiele Bildschirm und evt. einen Highscore Bildschirm.

## Spielzustände
![][game_states]

Jeder Spielzustand ist weiter unterteilt in die nachfolgende 5 Bereiche.
Nicht immer werden alle 5 Bereiche verwendet, meistens werden nur die Bereiche **Vorausladen**, **Anlegen** und **Eingabe** verwendet.

### Vorausladen
![][preload_area]

Hier werden alle verwendeten Grafiken und Sounddateien, die für das Spiel nötig sind angeben und vorausgeladen.
Bei den verwendeten Grafiken ist es wichtig dass diese so gut wie keinen Rand haben und einen transparenten Hintergrund besitzen.
Ansonsten kann es sein dass dieser im Spiel sichtbar ist oder eine Figure schon vorher zusammen stößt.

### Anlegen
![][create_area]

Hier wird das allgemeines Aussehen des Spielzustands festgelegt.
Es wird also genau definiert wo welche Grafik erscheinen soll und auch um welche Art es sich handelt, da es bei Spielen verschiedene Arten von Grafiken und Objekten gibt.

### Eingabe
![][input_area]

Hier wird festgelegt was passieren soll wenn eine Eingabe per Maus, Tastatur oder auf dem Bildschirm erfolgt.

### Aktualisieren
![][update_area]

In diesem Bereich wird festgelegt was passieren soll, wenn zwei Objekte zusammen gestoßen sind oder den sichtbaren Bereich verlassen haben.

### Ausgabe
![][render_area]

Bei den meisten Spielen wird der anzuzeigende Inhalt ca. 60 mal in der Sekunde (60fps) aktualisiert.
Dieser Bereich wird meist nur für die Fehlersuche verwendet um sich z.B. die Position von verschiedenen Objekten anzeigen zu lassen.

## Die verschiedenen Arten von Grafiken
Grundsätzlich kann man die Arten von Grafiken in 4 Bereiche unterteilen.

### Bild
Das ist die einfachste Art einer Grafik, diese wird meist einfach nur auf dem Bildschirm angezeigt und hat eine feste Position.
Dies kann ein einfaches Logo, Hintergrundbild oder auch einfach nur eine Grafik um den Bildschirm zu verschönern.

### Sprite
![][sprite]

Ein Sprite ist eine erweiterte Art der Grafik und erlaubt weitere Eigenschaften wie einfache Veränderungen, reagieren auf Eingabe / Ereignisse, Animationen und mehr.
Diese Art der Grafik wird meist am häufigsten beim Spielen verwendet.

### Tile Sprite
![][tile_sprite]

Ein Tile Sprite ist ein Sprite das sich wiederholt und meist auch animiert ist.
Diese Art der Grafik wird meist für den Boden / Decke oder sich bewegende Hintergründe verwendet.

### Physik Sprite
![][physic_sprite]

Ein Physik Sprite ist im Grunde eine erweiterte Art des Sprite mit dem Unterschied dass man physikalische Eigenschaften festlegen kann wie z.B. Anziehungskraft, Schwerkraft, Beschleunigung.
Diese Art der Grafik findet Verwendung bei allen beweglichen Grafiken wie z.B. der Spielfigure oder auch Hindernissen.

## Die verschiedenen Arten von Texten
Texte können im **Anlegen** Bereich erstellt werden, wobei man die folgenden drei Arten unterscheidet.

## Einfache Texte
![][text_block]

Die einfachste Art eines Text, wird auf dem Bildschirm angezeigt z.B. der Spiele Titel oder sonstige Beschriftungen.

## Dynamische Texte
![][dynamic_text_block]

Dynamische Texte werden verwendet wenn der Inhalt sich ändert.
So werden dynamische Texte verwendet um eine Highscore oder das aktuelle Level anzuzeigen.

## Aktion Texte
![][action_text_block]

Bei Aktion Texte kann festgelegt werden, was bei einem Klick auf den Text passieren soll.
Der häufigste Anwendungsfall ist der “Starte Game” Text beim Anfang eines Spieles.

# Die verschiedene Arten der Eingabe
Die meisten Spiele lassen sich wahlweise entweder per Maus, Tastatur oder Bildschirm steuern.

## Festlegen der Eingabe Überwachung
Zuerst muss im **Anlegen** Bereich festgelegt werden welche Art von Eingabe erfasst werden soll. Dies kann eine einzelne Taste, die Pfeiltasten oder die Maustaste sein.

### Vordefinierte Tastertur Tasten
![][capture_spacebar]

Bei Spielen, die nur eine Eingabe benötigen, ist die Leertaste die einfachste Wahl.
Diese wird auch meist verwendet um eine Figure springen zu lassen.

### Speziele Tastertur Taste
![][capture_keyboard_key]

Falls gewünscht können natürlich auch andere Tasten verwendet werden, wie ASDW welche häufig als Alternative für die Pfeiltasten verwendet werden.

### Pfeiltasten
![][capture_cursor_keys]

Die Pfeiltasten werden für die Steuerung der Figure nach oben, unten, rechts und links verwendet.

### Maustasten / Touch Bildschirm
![][capture_mouse_keys]

Für alle Geräte die keine Tastertur haben, eigenet sich die Maustaste oder der Touch Bildschirm als Eingabegerät.

## Festlegen der Aktionen
Anschließend muss im **Eingabe** Bereich festgelegt werden was bei einem Tastendruck passieren soll.
Hierbei unterscheidet man zwei Arten “beim betätigen” und “beim gedrückt lassen”.

### Beim betätigen
Beim betätigen führt die Aktion immer nur einmal aus wenn eine Taste gedrückt ist.
Dies wird für das Springen einer Figure verwendet oder in allen Fällen, in denen eine Aktion nur einmal ausgeführt werden soll.

### Beim gedrückt lassen
Beim gedrückt lassen führt die Aktion mehrmals aus solange die Taste gedrückt ist.
Dies ist hilfreich wenn man den Spieler in verschiedene Richtungen bewegen will ohne jedesmal erneut auf die Taste drücken zu müssen.


[game_states]: images/game_states.png

[preload_area]: images/preload_area.png
[create_area]: images/create_area.png
[input_area]: images/input_area.png
[update_area]: images/update_area.png
[render_area]: images/render_area.png

[sprite]: images/sprite.png
[tile_sprite]: images/tile_sprite.png
[physic_sprite]: images/physic_sprite.png

[text_block]: images/text_block.png
[dynamic_text_block]: images/dynamic_text_block.png
[action_text_block]: images/action_text_block.png

[capture_spacebar]: images/capture_spacebar.png
[capture_keyboard_key]: images/capture_keyboard_key.png
[capture_cursor_keys]: images/capture_cursor_keys.png
[capture_mouse_keys]: images/capture_mouse_keys.png
