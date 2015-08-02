--- 
layout: post 
title:  "La cattedrale e il bazaar" 
date:   2015-08-02 16:46:00 
categories: books
---

Excerpts from Eric Steven Raymond, *La cattedrale e il bazaar*, 1998.

## <a name="33-36">[33-36](#33-36)</a>
>Per anni avevo predicato il vangelo Unix degli strumenti agili, dei prototipi immediati e della programmazione evolutiva. Ma ero anche convinto che esistesse un punto critico di complessità al di sopra del quale si rendesse necessario un approccio centralizzato e a priori. Credevo che il software più importante (sistemi operativi e strumenti davvero ingombranti come Emacs) andasse realizzato come le cattedrali, attentamente lavorato a mano da singoli geni o piccole bande di maghi che lavoravano in splendido isolamento,

Pag. 3.

## <a name="37-41">[37-41](#37-41)</a>
>Rimasi non poco sorpreso dallo stile di sviluppo proprio di Linus Torvalds – diffondere le release presto e spesso, delegare ad altri tutto il possibile, essere aperti fino alla promiscuità. Nessuna cattedrale da costruire in silenzio e reverenza. Piuttosto, la comunità Linux assomigliava a un grande e confusionario bazaar, pullulante di progetti e approcci tra loro diversi (efficacemente simbolizzati dai siti contenenti l’archivio di Linux dove apparivano materiali prodotti da chiunque). Un bazaar dal quale soltanto una serie di miracoli avrebbe potuto far emergere un sistema stabile e coerente.

Pag. 3.

## <a name="67-68">[67-68](#67-68)</a>
>1. Ogni buon lavoro software inizia dalla frenesia personale di uno sviluppatore.

Pag. 5.

## <a name="73-74">[73-74](#73-74)</a>
>2. I bravi programmatori sanno cosa scrivere. I migliori sanno cosa riscrivere (e riusare).

Pag. 5.

## <a name="81-85">[81-85](#81-85)</a>
>La tradizione di condivisione dei codici tipica del mondo Unix ha sempre favorito il riutilizzo dei sorgenti (questo il motivo per cui il progetto GNU ha scelto come sistema operativo di base proprio Unix, nonostante alcune serie riserve sullo stesso). Il mondo Linux ha spinto questa tradizione vicina al suo al limite tecnologico; sono generalmente disponibili terabyte di codice open source. È quindi probabile che, impiegando del tempo a cercare il lavoro di qualcuno quasi ben fatto, si ottengano i risultati voluti. E ciò vale assai più nel mondo Linux che altrove.

Pag. 6.

## <a name="115">[115](#115)</a>
>Coltivati in maniera appropriata, gli utenti possono trasformarsi in co-sviluppatori.

Pag. 8.

## <a name="116-21">[116-21](#116-21)</a>
>Altro punto di forza della tradizione Unix, portato felicemente agli estremi da Linux, è che molti utenti sono essi stessi degli hacker. Ed essendo i sorgenti disponibili a tutti, posso diventare degli hacker molto efficaci. Qualcosa di tremendamente utile per ridurre il tempo necessario al debugging. Con un po’ d’incoraggiamento, ogni utente è in grado di diagnosticare problemi, suggerire soluzioni, aiutare a migliorare il codice in maniera impensabile per una persona sola. 6. Trattare gli utenti come co-sviluppatori è la strada migliore per ottenere rapidi miglioramenti del codice e debugging efficace. È facile sottovalutare la potenza di un simile effetto.

Pag. 8.

## <a name="121-24">[121-24](#121-24)</a>
>In realtà un po’ tutti noi del mondo open source eravamo soliti sottovalutare drasticamente il fatto che tale potenza crescesse di pari passo con il numero degli utenti e con la complessità del sistema. Finché Linus Torvalds ci ha mostrato le cose in maniera diversa. In realtà ritengo che la mossa più scaltra e consequenziale di Linus non sia stata la costruzione del kernel di Linux in sé, bensì la sua invenzione del modello di sviluppo di Linux.

Pag. 8.

## <a name="152-56">[152-56](#152-56)</a>
>7. Distribuisci presto. Distribuisci spesso. E presta ascolto agli utenti. L’innovazione introdotta da Linus non consisteva tanto nel seguire questa pratica (qualcosa di simile faceva parte da molto tempo della tradizione del mondo Unix), quanto piuttosto nel farla crescere a un tale livello d’intensità da raggiungere la medesima complessità del lavoro di programmazione che stava facendo. A quei tempi (intorno al 1991) non era raro che egli diffondesse versioni del nuovo kernel anche più di una volta al giorno!

Pag. 10.

## <a name="159-63">[159-63](#159-63)</a>
>Linus è un gran bell’hacker (quanti di noi saprebbero realizzare per intero un sistema operativo di qualità?). Ma a livello concettuale Linux non rappresentava alcun significativo salto in avanti. Linus non è (almeno, non ancora) quel genio innovativo del design allo stesso modo, ad esempio, di Richard Stallman o James Gosling (di NeWS e Java). Piuttosto, Linus mi sembrava un genio dell’engineering, dotato di un sesto senso per evitare bug e strade senza uscita, oltre che di un ottimo fiuto per arrivare dal punto A al punto B con il minimo sforzo possibile. Non a caso l’intero design di Linux trasuda queste qualità e rispecchia l’approccio essenzialmente conservativo e semplificativo tipico di Linus.

Pag. 11.

## <a name="166-73">[166-73](#166-73)</a>
>Linus tendeva a stimolare e ricompensare costantemente i suoi hacker/utenti – stimolati dalla soddisfazione di sé per aver preso parte all’azione, ricompensati dalla vista dei miglioramenti costanti (perfino giornalieri) ottenuti nel loro lavoro. Linus puntava direttamente a massimizzare il numero di ore/uomo coinvolte nello sviluppo e nel debugging, rischiando perfino la possibile instabilità del codice e l’estinguersi del contributo degli utenti qualora fosse risultato impossibile tener traccia di qualche serio bug. Linus si comportava seguendo una concezione più o meno riassumibile come segue: 8. Stabilita una base di beta-tester e co-sviluppatori sufficientemente ampia, ogni problema verrà rapidamente definito e qualcuno troverà la soluzione adeguata. O, in modo meno formale, “Dato un numero sufficiente di occhi, tutti i bug vengono a galla”. Io la chiamo la “Legge di Linus”.

Pag. 11.

## <a name="175-77">[175-77](#175-77)</a>
>“Qualcuno scopre il problema,” dice Linus, “e qualcun altro lo comprende. E secondo me il compito più difficile è proprio trovarlo”. Ma il punto è che entrambe le cose tendono ad accadere piuttosto rapidamente. Questa ritengo che sia la differenza fondamentale tra lo stile a cattedrale e quello a bazaar.

Pag. 12.

## <a name="180-83">[180-83](#180-83)</a>
>Nella concezione a bazaar, d’altra parte, si dà per scontato che generalmente i bug siano fenomeni marginali – o che almeno divengano rapidamente tali se esposti all’attenzione di migliaia di volenterosi co-sviluppatori che soppesano ogni nuova release. Ne consegue la rapidità di diffusione per ottenere maggiori correzioni, e come positivo effetto collaterale, c’è meno da perdere se viene fuori qualche toppa raffazzonata.

Pag. 12.

## <a name="192">[192](#192)</a>	
>“Il debugging è parallelizzabile”.

Pag. 13.

## <a name="195-97">[195-97](#195-97)</a>
>In pratica, nel mondo Linux la perdita di efficienza a livello teorico, dovuta alla duplicazione di lavoro da parte di quanti seguono il debugging, non arriva quasi mai a rappresentare un problema. Uno degli effetti della policy “distribuire presto e spesso” è proprio quello di minimizzare tale duplicazione di lavoro propagando rapidamente le soluzioni giunte col feedback degli utenti.

Pag. 13.

## <a name="200-203">[200-203](#200-203)</a>
>Ciò per via del fatto che con un maggior numero di utenti ci sono più modi differenti di verificare il programma. Un effetto amplificato quando costoro sono anche co-sviluppatori. Ciascuno affronta il compito della definizione dei bug con un approccio percettivo e analitico leggermente differente, una diversa angolazione per affrontare il problema. L’effetto Delfi pare funzionare esattamente sulla base di tali differenze.

Pag. 14.

## <a name="221-22">[221-22](#221-22)</a>
>Meglio combinare una struttura dati intelligente e un codice non eccezionale che non il contrario.

Pag. 15.

## <a name="235-36">[235-36](#235-36)</a>
>Questi semplici accorgimenti produssero una ricompensa immediata.

Pag. 16.

## <a name="238-39">[238-39](#238-39)</a>
>Se tratti i beta tester come se fossero la risorsa più preziosa, replicheranno trasformandosi davvero nella risorsa più preziosa a disposizione.

Pag. 16.

## <a name="245-46">[245-46](#245-46)</a>
>Mi sono reso immediatamente conto che l’implementazione affidabile di tale funzione avrebbe reso pressoché obsoleta ogni altra modalità di consegna della posta.

Pag. 16.

## <a name="257-58">[257-58](#257-58)</a>
>La cosa migliore, dopo l’avere buone idee, è riconoscere quelle che arrivano dagli utenti. Qualche volta sono le migliori.

Pag. 17.

## <a name="258-60">[258-60](#258-60)</a>
>Fatto interessante, è facile scoprire che se sei completamente onesto e autocritico su quanto è dovuto agli altri, il mondo intero ti tratterà come se ogni bit di quell’invenzione fosse opera tua, mentre impari a considerare con sempre maggior modestia il tuo genio innato.

Pag. 17.

## <a name="286-90">[286-90](#286-90)</a>
>Non esitare a buttar via opzioni inanellate una sull’altra quando puoi rimpiazzarle senza perdere in efficienza. Diceva Antoine de Saint-Exupéry (aviatore e designer di aerei, quando non scriveva libri per bambini): 13. “La perfezione (nel design) si ottiene non quando non c’è nient’altro da aggiungere, bensì quando non c’è più niente da togliere.” Quando il codice diventa migliore e più semplice, allora vuol dire che va bene.

Pag. 19.
	
## <a name="299">[299](#299)</a>
Credo che simili risultati siano impossibili da perseguire o da pianificare.

Pag. 20.

## <a name="300-301">[300-301](#300-301)</a>
>L’unico modo per provarci è farsi venire un sacco di idee, oppure avere la capacità di portare le idee degli altri al di là del punto in cui essi stessi credevano potessero arrivare.

Pag. 20.

## <a name="317-18">[317-18](#317-18)</a>
>Ogni strumento dovrebbe rivelarsi utile nella maniera che ci si attende, ma uno strumento davvero ben fatto si presta ad utilizzi che non ci si aspetterebbe mai.

Pag. 21.

## <a name="353-54">[353-54](#353-54)</a>
>16. Quando il linguaggio usato non è affatto vicino alla completezza di Turing, un po’ di zucchero sintattico può esserti

Pag. 23.

## <a name="362-67">[362-67](#362-67)</a>
>qualifiche del leader del progetto sia lo stato del codice al momento della diffusione pubblica e della nascita della possibile comunità di co-sviluppatori. È alquanto evidente come lo stile bazaar non consenta la scrittura del codice partendo da zero. Si possono fare test, trovare i bug, migliorare il tutto, ma sarebbe molto difficile dar vita dall’inizio a un progetto in modalità bazaar. Linus non lo ha fatto. Neppure io. La nascente comunità di sviluppatori deve avere qualcosa da far girare e con cui giocare. Quando s’inizia a costruire la comunità, bisogna essere in grado di presentare una promessa plausibile.

Pag. 24.

## <a name="369-71">[369-71](#369-71)</a>
>Quando Linux e fetchmail vennero diffusi pubblicamente, erano dotati di un design di base forte e attraente. Molte persone ritengono che il modello bazaar da me presentato riveli correttamente questa fase critica, per poi da qui saltare alla conclusione che sia indispensabile un elevato livello di intuizione e bravura da parte di chi guida il progetto.

Pag. 25.

## <a name="373-76">[373-76](#373-76)</a>
>È dunque vero che il leader/coordinatore di un progetto in stile bazaar debba possedere un eccezionale talento nel design? Oppure può cavarsela facendo leva sui talenti altrui? Non credo sia essenziale che il coordinatore possa produrre design eccezionali, ma è assolutamente centrale che sia capace di riconoscere le buone idee progettuali degli altri.

Pag. 25.

## <a name="379-81">[379-81](#379-81)</a>
>I primi lettori di questo testo mi hanno fatto i complimenti mettendo a fuoco la mia propensione a sottovalutare l’originalità del design nei progetti in stile bazaar perchè ne possiedo a volontà io stesso, e quindi la dò per scontata. In effetti, c’è qualcosa di vero in quest’affermazione; il design (in alternativa al codice o al debugging) è la mia capacità migliore.

Pag. 25.

## <a name="384-85">[384-85](#384-85)</a>
>Credo insomma che il progetto di fetchmail abbia avuto successo in parte perché ho limitato la mia tendenza a esser bravo; ciò va (almeno) contro l’essenzialità dell’originalità del design per il successo dei progetti a bazaar. Consideriamo Linux.

Pag. 25.

## <a name="387-91">[387-91](#387-91)</a>
>È chiaro che occorrano capacità di un certo livello per il design e il codice, ma personalmente mi aspetto, da quasi tutte le persone che pensano seriamente di lanciare un progetto bazaar, un livello superiore. Il mercato interno della reputazione della comunità open source esercita una sottile pressione sulle persone in modo che non si lancino dei progetti se non si è abbastanza competenti per seguirli. Finora quest’approccio ha funzionato piuttosto bene.

Pag. 26.

## <a name="392-93">[392-93](#392-93)</a>
>Il coordinatore o leader deve essere in grado di comunicare efficacemente con gli altri.

Pag. 26.

## <a name="404-5">[404-5](#404-5)</a>
>In “The Mythical Man-Month”, Fred Brooks osserva come il tempo del programmatore non sia calcolabile; aggiungendo altri sviluppatori ad un progetto in ritardo, lo si fa tardare ancora di più.

Pag. 27.

## <a name="405-8">[405-8](#405-8)</a>
>Secondo lui, i costi della complessità e delle comunicazioni di un progetto crescono esponenzialmente con il numero degli sviluppatori coinvolti, mentre il lavoro cresce soltanto in senso lineare. Quest’affermazione è nota come la “Legge di Brooks”, ed è considerata una verità pressoché universale.

Pag. 27.

## <a name="408-11">[408-11](#408-11)</a>
>Il classico di Gerald Weinberg “The Psychology Of Computer Programming” spiega in che modo, a posteriori, sia possibile individuare una vitale correzione alla tesi di Brooks. Parlando di “programmazione senza ego”, Weinberg fa notare come laddove gli sviluppatori non si dimostrano territoriali rispetto al proprio codice, incoraggiando altre persone a cercare bug e offrire miglioramenti, questi ultimi prendono corpo molto più in fretta che altrove.

Pag. 27.

## <a name="415-16">[415-16](#415-16)</a>
>Ovvero, pur rimandando la scrittura del codice un’attività prettamente solitaria, la questione davvero importante rimane la capacità di sfruttare l’attenzione e la potenza dell’intera comunità.

Pag. 28.

## <a name="416-20">[416-20](#416-20)</a>
>Lo sviluppatore che impiega soltanto il proprio cervello su un progetto chiuso risulterà sempre dietro allo sviluppatore che sa come creare un contesto aperto, evolutivo dove sono centinaia le persone che si occupano dei miglioramenti e del debugging. Ma una serie di elementi hanno impedito al mondo tradizionale Unix di applicare tale approccio. Tra questi, gli impedimenti legali connessi alle varie licenze, ai segreti e agli interessi commerciali. Altro impedimento (in retrospettiva), il fatto che allora Internet non fosse ancora abbastanza sviluppata.

Pag. 28.

## <a name="422-23">[422-23](#422-23)</a>
>Il Bell Lab, il MIT, UC Berkeley – queste le dimore dell’innovazione che rimangono leggendarie e potenti ancor’oggi.

Pag. 28.

## <a name="424-27">[424-27](#424-27)</a>
>Non ritengo una combinazione il fatto che la gestazione di Linux sia coincisa con la nascita del World Wide Web, e che Linux si sia lasciato alle spalle l’infanzia negli stessi anni 1993-1994 che hanno visto il decollo dei provider locali e l’esplosione dell’interesse di massa per Internet. Linus è stata la prima persona ad aver imparato come giocare secondo le nuove regole rese possibili dalla diffusione di Internet.

Pag. 28.

## <a name="432-33">[432-33](#432-33)</a>
>dell’anarchico russo del XIX secolo Pyotr Alexeyvich Kropotkin, “Memorie di un rivoluzionario”:

Pag. 29.

## <a name="433-39">[433-39](#433-39)</a>
>“Essendo cresciuto in una famiglia che aveva dei servitori, sono entrato nella vita attiva, al pari di tutti i giovani della mia epoca, con un notevole carico di confidenza nella necessità di comandare, impartire ordini, rimproverare, punire. Ma quando, ancora giovane, dovetti gestire degli affari seri e avere a che fare con uomini [liberi], quando ogni errore avrebbe portato da solo a pesanti conseguenze, iniziai ad apprezzare la differenza tra l’agire basato sul principio del comando e della disciplina e l’agire basato sul principio della comprensione condivisa. Il primo funziona mirabilmente in una parata militare, ma non ha valore alcuno allorché si tratta della vita reale, dove ogni obiettivo può essere raggiunto soltanto tramite i duri sforzi di molte volontà convergenti.”

Pag. 29.

## <a name="440-41">[440-41](#440-41)</a>
>il “principio del comando” è veramente impossibile da praticare tra i volontari di quel paradiso anarchico chiamato Internet.

Pag. 29.

## <a name="448-53">[448-53](#448-53)</a>
>La “funzione utilitaristica” che gli hacker di Linux vanno massimizzando non è economica in senso classico, quanto piuttosto espressione dell’intangibile, egoistica reputazione e soddisfazione che si guadagna tra gli altri hackers. (La loro motivazione potrebbe essere definita “altruista”, ma ciò significherebbe ignorare il fatto che a ben vedere l’altruismo stesso altro non è che una forma di soddisfazione egoistica). In realtà le culture del lavoro volontario che funzionano in tal modo non sono così rare; un’altra cui ho preso parte a lungo è quella dei fan della fantascienza, che al contrario del giro hacker riconosce esplicitamente come motore propulsore dietro tale attività volontaria proprio il cosiddetto “egoboo” (l’esaltazione della reputazione individuale tra gli altri fan).

Pag. 30.

## <a name="469-70">[469-70](#469-70)</a>
>19: Stabilito che il coordinatore dello sviluppo abbia a disposizione un medium almeno altrettanto affidabile di Internet, e che sappia come svolgere il ruolo di leader senza costrizione, molte teste funzionano inevitabilmente meglio di una sola.

Pag. 31.

## <a name="479-80">[479-80](#479-80)</a>
>il mondo “closed-source” non è in grado di vincere la corsa agli armamenti dell’evoluzione contro quelle comunità open source capaci di affrontare un problema con tempi e capacità superiori di diversi ordini di grandezza.

Pag. 32.

## <a name="496-99">[496-99](#496-99)</a>
>“The Psychology Of Computer Programming” di Gerald M. Weinberg (New York, Van Nostrand Reinhold 1971) presenta il concetto, malamente etichettato, di “programmazione senza ego.” Pur essendo l’autore nient’affatto tra i primi a rendersi conto della futilità del “principio del comando”, probabilmente fu il primo a riconoscere e sostenere tale punto in particolare connessione con lo sviluppo del software.

Pag. 33.

## <a name="499-504">[499-504](#499-504)</a>
>Richard P. Gabriel, occupandosi della cultura Unix dell’era pre-Linux, sosteneva con riluttanza la superiorità di un modello quasi-bazaar nel suo saggio del 1989: “Lisp: Good News, Bad News, and How To Win Big”. Anche se per molti versi un po’ datato, il testo è ancora giustamente celebrato dai fan del Lisp (incluso il sottoscritto). Qualcuno mi ha ricordato che la sezione intitolata “Worse Is Better” si propone quasi come un’anticipazione di Linux. L’articolo è disponibile sul World Wide Web: http://www.naggum.no/worse-is-better.html.

Pag. 33.

## <a name="504-9">[504-9](#504-9)</a>
>“Peopleware: Productive Projects and Teams” di De Marco e Lister (New York; Dorset House, 1987; ISBN 0-932633-05-6) è una gemma sottovalutata che mi ha fatto piacere veder citata nella retrospettiva di Fred Brooks. Anche se poco di quanto scrivono gli autori può applicarsi direttamente alle comunità Linux o open source, le loro riflessioni sulle condizioni necessarie per un lavoro creativo sono acute e valide per chiunque volesse provare ad applicare alcune delle virtù del modello bazaar in un contesto commerciale.

Pag. 33.

## <a name="511-12">[511-12](#511-12)</a>
>Ciò per l’influenza dei saggi embrionali di Mark Miller e Eric Drexler “Agoric systems” in cui venivano descritte le proprietà emergenti dell’ecologia computazionale di tipo quasi-commerciale.

Pag. 34.