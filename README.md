# Analogclock - Widget für FTUI

Zeigt eine Analoge Uhr an.

```html
<div data-type="analogclock">
</div>
```
Stellt eine circa 100 Pixel große Analoguhr dar.


[b]data-size[/b]
Ändert die Größe der Uhr.
[code]
<div data-type="analogclock"
     data-size="200">
</div>
[/code]


[b]data-body[/b]
Ändert das "Drumherum" der Uhr. Möglicher Inhalt:
[list]
	[li]none    =   transparenter Hintergrund[/li]
	[li]round   =   rundes, schwarzes Gehäuse. STANDARD[/li]
	[li]small    =   runder, weißer Hintergrund.[/li]
	[li]green   =   rundes, grünes Gehäuse (Österreich).[/li]
	[li]square  =   quadratisches, blaues Gehäuse (Deutsche Bahn)[/li]
	[li]vienna   =   Wiener Würfeluhr[/li]
[/list][code]
<div data-type="analogclock"
     data-size="200"
     data-body="small">
</div>
[/code]


[b]data-body-color[/b]
Ändert die Hintergrundfarbe des Ziffernblatts.
[code]
<div data-type="analogclock"
     data-size="200"
     data-body-color="#AA6900">
</div>
[/code]


[b]data-stroke-color[/b]
Ändert die "Gehäusefarbe" bei data-body="round" bzw. den Standardwerten.
[code]
<div data-type="analogclock"
     data-size="200"
     data-body="round"
     data-stroke-color="#AA6900">
</div>
[/code]


[b]data-dial[/b]
Ändert die Darstellung des Ziffernblatts.
[list]
	[li]none    =   Ohne Zifferblatt.[/li]
	[li]hour    =   Zifferblatt mit Stundenstrichen (DIN 41091, Teil 3).[/li]
	[li]full       =   Zifferblatt mit Minuten- und Stundenstrichen (DIN 41091, Teil 1). STANDARD[/li]
	[li]austria  =   Zifferblatt mit Minuten- und Stundenstrichen (Österreich)[/li]
	[li]swiss    =   Zifferblatt mit Minuten- und Stundenstrichen (Schweiz/Bauhaus)[/li]
	[li]vienna   =   Zifferblatt mit Minuten- und Stundenstrichen (Wiener Würfeluhr)[/li]
[/list]
[code]
<div data-type="analogclock"
     data-size="200"
     data-dial="swiss">
</div>
[/code]


[b]data-dial-color[/b]
Änder die Farbe der Stunden- und Minutenstriche.
[code]
<div data-type="analogclock"
     data-size="200"
     data-dial-color="green">
</div>
[/code]


[b]data-hour[/b]
Änder das Aussehen des Stundenzeigers.
[list]
	[li]pointed   =   spitzer Balkenzeiger (DIN 41092, Teil 3) STANDARD[/li]
	[li]bar         =   stumpfer Balkenzeiger (Deutsche Bahn)[/li]
	[li]swiss      =   stumpfer, keilförmiger Zeiger (Schweiz/Bauhaus)[/li]
	[li]vienna    =   Wiener Würfeluhr[/li]
[/list]
[code]
<div data-type="analogclock"
     data-size="200"
     data-hour="swiss">
</div>
[/code]


[b]data-hour-color[/b]
Änder die Farbe des Stundenzeigers.
[code]
<div data-type="analogclock"
     data-size="200"
     data-hour-color="#3D4C66">
</div>
[/code]


[b]data-minute[/b]
Änder das Aussehen des Minutenzeigers.
[list]
	[li]pointed   =   spitzer Balkenzeiger (DIN 41092, Teil 3) STANDARD[/li]
	[li]bar         =   stumpfer Balkenzeiger (Deutsche Bahn)[/li]
	[li]swiss      =   stumpfer, keilförmiger Zeiger (Schweiz/Bauhaus)[/li]
	[li]vienna    =   Wiener Würfeluhr[/li]
[/list]
[code]
<div data-type="analogclock"
     data-size="200"
     data-minute="vienna">
</div>
[/code]


[b]data-minute-color[/b]
Änder die Farbe des Minutenzeigers.
[code]
<div data-type="analogclock"
     data-size="200"
     data-minute-color="#468751">
</div>
[/code]


[b]data-second[/b]
Ändert das Aussehen des Sekundenzeigers.
[list]
	[li]none       =   ohne Sekundenzeiger[/li]
	[li]hole        =   Loch-Zeiger (DIN 41071, Teil 2)[/li]
	[li]bar         =   Keil-Zeiger (DIN 41071, Teil 1) STANDARD[/li]
	[li]swiss      =   Kellen-Zeiger (Schweiz)[/li]
	[li]longhole  =   Loch-Zeiger (Deutsche Bahn)[/li]
[/list]
[code]
<div data-type="analogclock"
     data-size="200"
     data-second="hole">
</div>
[/code]


[b]data-second-color[/b]
Änder die Farbe des Sekundenzeigers.
[code]
<div data-type="analogclock"
     data-size="200"
     data-second-color="yellow">
</div>
[/code]


[b]data-boss[/b]
Ändert das Aussehen des Mittelpunkt's / der Achsabdeckung.
[list]
	[li]small      =   kleiner Mittelpunkt[/li]
	[li]medium  =   mittelgrpßer Mittelpunkt[/li]
	[li]big         =   großer Mittelpunkt[/li]
	[li]none      =   kein Mittelpunkt[/li]
[/list]
[code]
<div data-type="analogclock"
     data-size="200"
     data-boss="big">
</div>
[/code]


[b]data-boss-color[/b]
Änder die Farbe des Mittelpunkt's / der Achsabdeckung.
[code]
<div data-type="analogclock"
     data-size="200"
     data-boss="big"
     data-boss-color="red">
</div>
[/code]


[b]data-mbehave[/b]
Verhalten des Minutenzeigers.
[list]
	[li]bounce   =   springender Minutenzeiger STANDARD[/li]
	[li]ebounce  =   springender und federnder Minutenzeiger[/li]
	[li]creep      =   schleichender Minutenzeiger[/li]
[/list]
[code]
<div data-type="analogclock"
     data-size="200"
     data-mbehave="ebounce">
</div>
[/code]


[b]data-sbehave[/b]
Änder das Verhalten des Sekundenzeigers.
[list]
	[li]bounce   =   springender Sekundenzeiger STANDARD[/li]
	[li]ebounce  =   springender und federnder Sekundenzeiger[/li]
	[li]creep      =   schleichender Sekundenzeiger[/li]
	[li]hasty      =   voreiliger Sekundenzeiger[/li]
[/list]
[code]
<div data-type="analogclock"
     data-size="200"
     data-sbehave="hasty">
</div>
[/code]


[b]Und "last but not least" habe ich ein Datum ins Ziffernblatt implementiert  ;D[/b]

[b]data-date-color[/b]
Zeigt das aktuelle Datum in der angegebenen Farbe im Ziffernblatt (über allem. Zieger liegen hinter dem Datum).
[code]
<div data-type="analogclock"
     data-size="200"
     data-date-color="black">
</div>
[/code]
Ohne data-date-color wird kein Datum dargestellt!



Die Uhr basiert auf der "Bahnhofsuhr" von [url=http://www.3quarks.com]3quarks.com[/url] - Rüdiger Appel

Download:

Grüße^^
