# React

Mes jau kuris laikas mokame fetchint, tačiau dar to nesame darę su React.

Šiandien, naudojant hooks (useEffect ir useState), reikės sukurti puslapį, kuris:

1. Fetchinsins duomenys su useEffect();
2. Kol neužsikrovė duomenys iš fetch - rodys "Loading.." tekstą (čia naudosim conditional išmoktą vakar);
3. Kai pasikraus - duomenys bus išsaugoti useState ir iš ten - atsivaizduos puslapyje;
4. Paspaudus delete mygtuką - ištrinins įrašas (pasileis funkciją, kuri update'ins useState prafiltruodama array).
   
Užduoties URL: https://golden-whispering-show.glitch.me

POST'indami galite pridėti daugiau prekių.

Užduotis (naudokite komponentus!):
![pav](src/assets/uzd.avif)

## Add product 

1. kai pridedamas naujas produktas, paslepti forma 
2. Kai tik uzsikrauna pulapis, forma nesimato. ji pasirodo kai paspaudziam mygtuka virs formos
3. mygtukas keicia pavadinima priklausomai ar rodyti ar slepti forma.
