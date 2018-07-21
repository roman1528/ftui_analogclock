# Analogclock - Widget für FTUI
Zeigt eine Analoge Uhr an.

![](https://raw.githubusercontent.com/roman1528/ftui_analogclock/master/default.png)

```html
<div data-type="analogclock">
</div>
```
Stellt eine circa 100 Pixel große Analoguhr dar.


data-size
---
Ändert die Größe der Uhr.
```html
<div data-type="analogclock"
     data-size="200">
</div>
```


data-body
---
Ändert das "Drumherum" der Uhr. Möglicher Inhalt:

	- none		=   transparenter Hintergrund
	- round		=   rundes, schwarzes Gehäuse. STANDARD
	- small		=   runder, weißer Hintergrund.
	- green		=   rundes, grünes Gehäuse (Österreich).
	- square	=   quadratisches, blaues Gehäuse (Deutsche Bahn)
	- vienna	=   Wiener Würfeluhr
```html
<div data-type="analogclock"
     data-size="200"
     data-body="small">
</div>
```


data-body-color
---
Ändert die Hintergrundfarbe des Ziffernblatts.
```html
<div data-type="analogclock"
     data-size="200"
     data-body-color="#AA6900">
</div>
```


data-stroke-color
---
Ändert die "Gehäusefarbe" bei data-body="round" bzw. den Standardwerten.
```html
<div data-type="analogclock"
     data-size="200"
     data-body="round"
     data-stroke-color="#AA6900">
</div>
```


data-dial
---
Ändert die Darstellung des Ziffernblatts.

	- none		=   Ohne Zifferblatt.
	- hour		=   Zifferblatt mit Stundenstrichen (DIN 41091, Teil 3).
	- full		=   Zifferblatt mit Minuten- und Stundenstrichen (DIN 41091, Teil 1). STANDARD
	- austria	=   Zifferblatt mit Minuten- und Stundenstrichen (Österreich)
	- swiss		=   Zifferblatt mit Minuten- und Stundenstrichen (Schweiz/Bauhaus)
	- vienna	=   Zifferblatt mit Minuten- und Stundenstrichen (Wiener Würfeluhr)

```html
<div data-type="analogclock"
     data-size="200"
     data-dial="swiss">
</div>
```


data-dial-color
---
Änder die Farbe der Stunden- und Minutenstriche.
```html
<div data-type="analogclock"
     data-size="200"
     data-dial-color="green">
</div>
```


data-hour
---
Änder das Aussehen des Stundenzeigers.

	- pointed	=   spitzer Balkenzeiger (DIN 41092, Teil 3) STANDARD
	- bar		=   stumpfer Balkenzeiger (Deutsche Bahn)
	- swiss		=   stumpfer, keilförmiger Zeiger (Schweiz/Bauhaus)
	- vienna	=   Wiener Würfeluhr

```html
<div data-type="analogclock"
     data-size="200"
     data-hour="swiss">
</div>
```


data-hour-color
---
Änder die Farbe des Stundenzeigers.
```html
<div data-type="analogclock"
     data-size="200"
     data-hour-color="#3D4C66">
</div>
```


data-minute
---
Änder das Aussehen des Minutenzeigers.

	- pointed	=   spitzer Balkenzeiger (DIN 41092, Teil 3) STANDARD
	- bar		=   stumpfer Balkenzeiger (Deutsche Bahn)
	- swiss		=   stumpfer, keilförmiger Zeiger (Schweiz/Bauhaus)
	- vienna	=   Wiener Würfeluhr

```html
<div data-type="analogclock"
     data-size="200"
     data-minute="vienna">
</div>
```


data-minute-color
---
Änder die Farbe des Minutenzeigers.
```html
<div data-type="analogclock"
     data-size="200"
     data-minute-color="#468751">
</div>
```


data-second
---
Ändert das Aussehen des Sekundenzeigers.

	- none		=   ohne Sekundenzeiger
	- hole		=   Loch-Zeiger (DIN 41071, Teil 2)
	- bar		=   Keil-Zeiger (DIN 41071, Teil 1) STANDARD
	- swiss		=   Kellen-Zeiger (Schweiz)
	- longhole	=   Loch-Zeiger (Deutsche Bahn)

```html
<div data-type="analogclock"
     data-size="200"
     data-second="hole">
</div>
```


data-second-color
---
Änder die Farbe des Sekundenzeigers.
```html
<div data-type="analogclock"
     data-size="200"
     data-second-color="yellow">
</div>
```


data-boss
---
Ändert das Aussehen des Mittelpunkts / der Achsabdeckung.

	- small		=   kleiner Mittelpunkt
	- medium	=   mittelgrpßer Mittelpunkt
	- big		=   großer Mittelpunkt
	- none		=   kein Mittelpunkt

```html
<div data-type="analogclock"
     data-size="200"
     data-boss="big">
</div>
```


data-boss-color
---
Änder die Farbe des Mittelpunkts / der Achsabdeckung.
```html
<div data-type="analogclock"
     data-size="200"
     data-boss="big"
     data-boss-color="red">
</div>
```


data-mbehave
---
Verhalten des Minutenzeigers.

	- bounce	=   springender Minutenzeiger STANDARD
	- ebounce	=   springender und federnder Minutenzeiger
	- creep		=   schleichender Minutenzeiger

```html
<div data-type="analogclock"
     data-size="200"
     data-mbehave="ebounce">
</div>
```


data-sbehave
---
Änder das Verhalten des Sekundenzeigers.

	- bounce	=   springender Sekundenzeiger STANDARD
	- ebounce	=   springender und federnder Sekundenzeiger
	- creep		=   schleichender Sekundenzeiger
	- hasty		=   voreiliger Sekundenzeiger

```html
<div data-type="analogclock"
     data-size="200"
     data-sbehave="hasty">
</div>
```


Und "last but not least" habe ich ein Datum ins Ziffernblatt implementiert  ;D

data-date-color
---
Zeigt das aktuelle Datum in der angegebenen Farbe im Ziffernblatt (über allem. Zieger liegen hinter dem Datum).
```html
<div data-type="analogclock"
     data-size="200"
     data-date-color="black">
</div>
```
Ohne data-date-color wird kein Datum dargestellt!



Die Uhr basiert auf der "Bahnhofsuhr" von http://www.3quarks.com - Rüdiger Appel
