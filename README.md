## TestyAutomatyczne
### Instalacja

npm install

### Uruchomienie

npm test wdio.conf.conf.js

### Adres testowanej strony

http://automationpractice.com/index.php  

### Uwagi:
 Test może zostać przerwany z powodu błędu 503 - najczęściej tak się działo w godzinach wczesno wieczornych, czasu lokalnego.  
 Innym powodem nieprzechodzenia testu może być niezgodność wersji Chrome i Chromedrivera. 
 Na stronie  
 https://www.npmjs.com/package/chromedriver  
 można sprawdzić jaka jest najświeższa wersja oraz jakie wersje powinny być połączone z wcześniejszymi wersjami Chrome.
 Aby dopasować wersję chromedriver'a trzeba:  
 - zmienić numer jego wersji w pliku package.json  
 - usunąć katalog node_modules (jeżeli już jest utworzony)  
 - usunąć plik package-loc.json.  
 
 Następnie  
 npm install  
 i powinno działać... u mnie działa ;)
