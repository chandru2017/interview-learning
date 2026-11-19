import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet6: IQuestion[] = [
    createQuestion({
        id: 'js-26',
        topicId: 'javascript',
        title: 'What are WeakMap and WeakSet?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            "WeakMap and WeakSet are collections like Map and Set, but their keys/values don't prevent garbage collection. ",
                            'If a key in WeakMap becomes unreferenced, the entry is automatically removed. ',
                            "This is useful for caches and metadata that shouldn't keep objects alive. WeakMap keys must be objects. ",
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '**WeakMap:** stores key-value pairs where keys must be objects. ',
                            "Keys don't prevent garbage collection - if key is unreferenced, the entry is removed automatically. ",
                            '**Methods:** get(), set(), delete(), has(). No iteration, no size property. ',
                            '**WeakSet:** stores object values. Values are automatically removed when unreferenced. ',
                            '**Methods:** add(), delete(), has(). No iteration. ',
                            '**Use cases:** caches (DOM node -> cached data), metadata (store private data), avoid memory leaks. ',
                            "**Limitations:** no iteration (can't loop), no size, no forEach. ",
                            'WeakMap used in React for tracking component instances, in libraries for DOM-related caches. ',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// WeakMap - keys are garbage collected
                            const cache = new WeakMap();
                            let obj = { id: 1 };
                            cache.set(obj, 'cached data');
                            console.log(cache.get(obj)); // 'cached data'
                            obj = null; // if this becomes unreferenced elsewhere
                            // the entry in cache is automatically removed

                            // Regular Map would keep obj alive
                            const regularMap = new Map();
                            regularMap.set(obj, 'data'); // obj is kept alive
                            obj = null;
                            console.log(regularMap.size); // 1 - entry still there
                            // the object won't be garbage collected!`,
                    },
                    {
                        type: 'highlight',
                        text: `WeakMap doesn't keep keys alive. Regular Map keeps them forever. This is the key difference for garbage collection.`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `In Archer Review, we could have used WeakMap for caching component instance data, but usually didn't need to. We understood that using regular Map for things we want to keep was fine.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `A WeakMap is like a sticky note on a photo. When you throw away the photo (object becomes unreferenced), the sticky note goes with it. A regular Map is like a photo album - photos never get thrown away because the album keeps them.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'WeakMap and WeakSet store keys/values without preventing garbage collection. ',
                            'If a key in WeakMap is unreferenced, the entry is automatically removed. ',
                            'This is useful for caches and metadata. WeakMap keys must be objects. ',
                            "They don't have iteration methods or size property. ",
                            'Use them to cache data associated with objects without preventing garbage collection. ',
                            'Regular Map keeps keys alive forever. ',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['WeakMap', 'WeakSet', 'garbage collection', 'cache', 'memory efficient'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '`WeakMap` and `WeakSet` na `Map` and `Set` oda special versions. Idhula keys (WeakMap) or values (WeakSet) objects ah weak reference ah hold pannum. Andha object ku vera entha reference um illa na, garbage collector adha free pannidum, so entry um automatic ah remove aagidum.',
                            '`WeakMap` la key kandippa object ah irukkanum, value entha type um irukkalam. `WeakSet` la values object ah mattum irukkanum. Primitive values (string, number) use panna mudiyaadhu.',
                            'Idhu iterate panna mudiyaadhu, size property illa, and clear() method um illa. Because garbage collection eppo nadakkum nu predict panna mudiyaadhu.',
                            'Use cases: object ku extra data store panna (metadata), cache, private data, and already process panna objects ah track panna. Idhunaala memory leak aagaama irukkum.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Problem (Map and Set la)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`Map` and `Set` keys or values ah strong reference ah hold pannum. So entry remove pannura varaikkum, andha object memory la irukkum.',
                            'Object ah thevai illa nu `null` set pannaalum, Map la irundha, garbage collector adha free panna mudiyaadhu.',
                            'Idhu dhaan memory leak. `WeakMap` and `WeakSet` idha solve pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const map = new Map();

        let user = { name: "Ravi" };
        map.set(user, "some data");

        user = null;
        // user variable null aachu, aana map innum object ah hold pannudhu
        // Garbage collector free panna mudiyaadhu (memory leak)

        const weakMap = new WeakMap();

        let user2 = { name: "Kumar" };
        weakMap.set(user2, "some data");

        user2 = null;
        // weakMap weak reference dhaan, so object free aagum
        // Entry um automatic ah remove aagidum`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**WeakMap**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Key kandippa object ah irukkanum. Value entha type um irukkalam.',
                            'Methods: `set(key, value)`, `get(key)`, `has(key)`, `delete(key)`. Ivlo dhaan irukku.',
                            'Key object ku vera reference illa na, entry automatic ah free aagidum.',
                            'Iterate panna mudiyaadhu (`forEach`, `keys()`, `values()` illa). `size` property um illa.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const wm = new WeakMap();

        const obj = { id: 1 };
        wm.set(obj, "metadata");

        console.log(wm.get(obj)); // "metadata"
        console.log(wm.has(obj)); // true

        wm.delete(obj);
        console.log(wm.has(obj)); // false

        // wm.set("name", "Ravi"); // TypeError (key object illa)`,
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**WeakSet**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Values kandippa objects ah irukkanum. Primitive values add panna mudiyaadhu.',
                            'Methods: `add(value)`, `has(value)`, `delete(value)`.',
                            'Duplicate values add aagaadhu, Set maari dhaan.',
                            'Object ku vera reference illa na, automatic ah remove aagidum.',
                            'Iterate panna mudiyaadhu, `size` illa.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const ws = new WeakSet();

        const user1 = { name: "Ravi" };
        const user2 = { name: "Kumar" };

        ws.add(user1);
        ws.add(user2);

        console.log(ws.has(user1)); // true

        ws.delete(user1);
        console.log(ws.has(user1)); // false

        // ws.add("Ravi"); // TypeError (value object illa)`,
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Map vs WeakMap, Set vs WeakSet**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Keys: Map la entha type um use pannalam. WeakMap la object mattum.',
                            'Reference: Map strong reference hold pannum. WeakMap weak reference hold pannum.',
                            'Garbage collection: Map la irukkura objects free aagaadhu. WeakMap la irukkura objects ku vera reference illa na free aagum.',
                            'Iteration and size: Map la irukku. WeakMap la illa.',
                            'Same difference dhaan Set and WeakSet ku um.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (Cache)**',
                    },
                    {
                        type: 'code',
                        text: `const cache = new WeakMap();

        function getResult(obj) {
        if (cache.has(obj)) {
            console.log("From cache");
            return cache.get(obj);
        }

        console.log("Calculating...");
        const result = obj.value * 2; // heavy calculation nu vechukkonga
        cache.set(obj, result);
        return result;
        }

        let data = { value: 10 };

        getResult(data); // "Calculating..." (20)
        getResult(data); // "From cache" (20)

        data = null;
        // data ku vera reference illa, so object and cache entry rendum free aagum`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mudhal call la result calculate pannitu, cache la store pannrom.',
                            'Rendavadhu call la same object ku, cache la irundhu result kedaikkum.',
                            '`data = null` panna, object free aagum. Cache entry um automatic ah remove aagum, so manually clean panna thevai illa.',
                            'Normal Map use pannina, entry manually delete pannanum. Illa na memory leak aagum.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example 1: Private data (WeakMap)**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Class oda private data ah veliya irundhu access panna mudiyaadha mari store panna WeakMap use pannalam. Instance free aana, andha private data um free aagidum.',
                    },
                    {
                        type: 'code',
                        text: `const privateData = new WeakMap();

        class User {
        constructor(name, password) {
            this.name = name;
            privateData.set(this, { password });
        }

        checkPassword(input) {
            return privateData.get(this).password === input;
        }
        }

        const user = new User("Ravi", "secret123");

        console.log(user.name);                    // "Ravi"
        console.log(user.password);                // undefined
        console.log(user.checkPassword("secret123")); // true`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`password` instance la store aagala, WeakMap la store aagum.',
                            'Veliya irundhu `privateData` access illa na, password ah get panna mudiyaadhu.',
                            '`user` instance free aana, WeakMap entry um free aagidum.',
                            'Modern code la `#private` fields um use pannalam. Aana WeakMap pazhaya pattern, interview la ketpaanga.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example 2: Already processed objects track panna (WeakSet)**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Oru object ah already process pannittomaa nu track panna WeakSet use pannalam. Example: circular reference handle panna, or oru DOM element ku oru dhadava mattum listener add panna.',
                    },
                    {
                        type: 'code',
                        text: `const processed = new WeakSet();

        function initButton(button) {
        if (processed.has(button)) {
            console.log("Already initialized");
            return;
        }

        button.addEventListener("click", () => console.log("Clicked"));
        processed.add(button);
        console.log("Initialized");
        }

        const btn = document.getElementById("btn");

        initButton(btn); // "Initialized"
        initButton(btn); // "Already initialized"

        // btn DOM la irundhu remove aana, WeakSet entry um free aagum`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Button ah process pannitta, WeakSet la add pannrom.',
                            'Thirumba same button vandha, `has()` check panni skip pannrom.',
                            'Button DOM la irundhu remove aana, WeakSet la irundhu automatic ah free aagum. Detached DOM node leak aagaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '8',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Limitations**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Iterate panna mudiyaadhu, `size` illa, `clear()` illa. Garbage collection eppo nadakkum nu predict panna mudiyaadhu.',
                            'Keys or values object ah mattum irukkanum.',
                            'Entry free aagumbodhu nu namma control panna mudiyaadhu, so idha logic ku depend panna koodadhu.',
                            'Ellaa entries ah list panni paakkanum na, WeakMap use panna mudiyaadhu. Normal Map use pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '9',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, Map vs WeakMap, methods, example, limitations.',
                            '“WeakMap and WeakSet objects ah weak reference ah hold pannum. Object ku vera reference illa na, garbage collector free pannum, entry um automatic ah remove aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Keys object ah mattum irukkanum, iterate panna mudiyaadhu, `size` illa nu clear ah sollunga. Interview la idha romba ketpaanga.',
                            'Use cases mention pannunga: cache, private data, metadata, already processed objects track panrathu.',
                            'Memory leak ah avoid panna WeakMap help pannum nu sollunga. Idhu senior level answer.',
                            'Idhu garbage collection, memory leaks, and closures oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Weak = no object reference, no entry”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-27',
        topicId: 'javascript',
        title: 'What are generators?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A generator is a special function that can pause and resume. ',
                            'You write it with function* and use yield to pause. ',
                            'Each time you call next(), the generator runs until the next yield, then pauses. ',
                            'This lets you create sequences of values without calculating them all at once. ',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Generators are functions marked with  `function*` that can pause execution and resume. ',
                            '`yield` pauses and returns a value. `next()` resumes execution. ',
                            'Returns an iterator object with done (boolean) and value properties. ',
                            'Each call to `next()` runs until the next `yield`. ',
                            '**Useful for:** lazy evaluation (generate values on demand), state machines (complex workflows), async patterns (before async/await). ',
                            'Generator objects are iterable (can use in for...of loops). return value is captured as final value. `throw()` allows sending errors into generators. ',
                            '**Delegation:** `yield*` delegates to another generator. ',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `function* counter(max) {
                            let i = 0;
                            while (i < max) {
                                yield i;
                                i++;
                            }
                            }
                            const gen = counter(3);
                            console.log(gen.next()); // { value: 0, done: false }
                            console.log(gen.next()); // { value: 1, done: false }
                            console.log(gen.next()); // { value: 2, done: false }
                            console.log(gen.next()); // { value: undefined, done: true }

                            for (const num of counter(3)) {
                            console.log(num); // 0, 1, 2
                            }`,
                    },
                    {
                        type: 'highlight',
                        text: `Each next() call resumes from the previous yield. Generators are iterable, so for...of loops work naturally.`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `In Archer Review, we didn't use generators directly much, but understanding them helped us understand async/await (which is built on generators). We used iterators in some utility functions.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `A vending machine (generator). You press the button, it gives you one snack (yield). You press again, it gives another. It calculates snacks as needed, not all at once. This is lazy - on demand.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Generators are functions marked with `function*` that pause and resume with `yield`. ',
                            'Each `next()` call runs until the next `yield`. They return an iterator with `value` and `done` properties. ',
                            'Generators are useful for lazy evaluation - generating values on demand rather than all at once. ',
                            'They were the foundation for `async/await` patterns. ',
                            'You can iterate generators with `for...of` loops. ',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['generators', 'function*', 'yield', 'iterator', 'lazy evaluation'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Generator na oru special function, adhu execution ah naduvula pause pannitu, apram thirumba resume panna mudiyum. Normal function onnu start aana, mudiyura varaikkum run aagum. Generator apdi illa.',
                            'Generator function ah function* nu star (*) kooda declare pannuvom. Idha call panna code run aagaadhu, oru generator object return pannum. Andha object oda next() method call panna dhaan code run aagum.',
                            'Function kulla yield keyword varumbodhu, execution pause aagi, yield pannina value ah return pannum. next() thirumba call panna, pause aana idaththula irundhu resume aagum. next() { value, done } nu oru object return pannum.',
                            'Use cases: lazy evaluation, infinite sequences, custom iterators, and async flow control. async/await internally generators maari concept dhaan.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Normal function vs Generator**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Normal function: Call panna, start to end run aagum. Naduvula stop panna mudiyaadhu. Oru dhadava dhaan return pannum.',
                            'Generator: `yield` la pause aagum, state (local variables) remember pannum, apram resume aagum. Neraya values ah oru oru va return pannalam.',
                            'Generator function call panna, code run aagaadhu. `next()` call panna dhaan run aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Syntax and next() result**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`function*` nu star kooda declare pannuvom.',
                            '`yield` value ah return panni, function ah pause pannum.',
                            '`next()` oru object return pannum: `{ value: yielded value, done: false }`.',
                            'Function mudinjadhum `{ value: return value or undefined, done: true }` kedaikkum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function* numbers() {
        console.log("Start");
        yield 1;
        console.log("After 1");
        yield 2;
        console.log("After 2");
        return 3;
        }

        const gen = numbers(); // code run aagala, generator object mattum kedaikkum

        console.log(gen.next()); // "Start"   -> { value: 1, done: false }
        console.log(gen.next()); // "After 1" -> { value: 2, done: false }
        console.log(gen.next()); // "After 2" -> { value: 3, done: true }
        console.log(gen.next()); // { value: undefined, done: true }`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`numbers()` call panna, ethuvum print aagala. Generator object mattum kedaikkum.',
                            'Mudhal `next()` la "Start" print aagi, `yield 1` la pause aagum.',
                            'Rendavadhu `next()` pause aana idaththula irundhu resume aagi, `yield 2` la thirumba pause aagum.',
                            'Moonavadhu `next()` la `return 3` varum, so `done: true` aagum.',
                            'Adhukku apram `next()` call panna, eppavum `{ value: undefined, done: true }` dhaan.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Generator is iterable**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Generator object iterable, so `for...of`, spread operator (`...`), and `Array.from()` use pannalam.',
                            '`for...of` automatic ah `next()` call pannum, `done: true` aana nikkum.',
                            'Note: `for...of` `return` value ah ignore pannum, `yield` values mattum dhaan kedaikkum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function* colors() {
        yield "red";
        yield "green";
        yield "blue";
        }

        for (const color of colors()) {
        console.log(color); // red, green, blue
        }

        const arr = [...colors()];
        console.log(arr); // ["red", "green", "blue"]`,
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Two-way communication (next with value)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`next(value)` ku value pass panna, adhu pause aana `yield` expression oda result aagum.',
                            'Idhunaala generator kulla data ah veliya irundhu anuppalam.',
                            'Mudhal `next()` ku pass panra value ignore aagum, because adhu function ah start dhaan pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function* chat() {
        const name = yield "What is your name?";
        const city = yield "Hello " + name + ", which city?";
        return name + " from " + city;
        }

        const gen = chat();

        console.log(gen.next().value);          // "What is your name?"
        console.log(gen.next("Ravi").value);    // "Hello Ravi, which city?"
        console.log(gen.next("Pollachi").value); // "Ravi from Pollachi"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mudhal `next()` function ah start pannitu, mudhal `yield` la pause pannum.',
                            '`next("Ravi")` la "Ravi" `name` variable la store aagum.',
                            '`next("Pollachi")` la "Pollachi" `city` la store aagum, apram `return` run aagum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example 1: Infinite sequence (lazy evaluation)**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Normal array la infinite values store panna mudiyaadhu. Generator la thevai padum bodhu mattum, oru oru value ah generate pannalam. Idhu dhaan lazy evaluation.',
                    },
                    {
                        type: 'code',
                        text: `function* idGenerator() {
        let id = 1;
        while (true) {
            yield id++;
        }
        }

        const ids = idGenerator();

        console.log(ids.next().value); // 1
        console.log(ids.next().value); // 2
        console.log(ids.next().value); // 3

        // Infinite loop irundhaalum hang aagaadhu,
        // because next() call panna dhaan adutha value generate aagum`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`while (true)` irundhaalum, `yield` la pause aagurathunaala infinite loop hang aagaadhu.',
                            'Thevai padum bodhu mattum value generate aagum, so memory save aagum.',
                            'Use case: unique ID generate panna, large data stream process panna.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example 2: Pagination and custom iterator**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Periya list ah pages ah pirichu, oru dhadava oru page mattum process pannalam. Custom object ah iterable aakka um generator use pannalam.',
                    },
                    {
                        type: 'code',
                        text: `function* paginate(items, pageSize) {
        for (let i = 0; i < items.length; i += pageSize) {
            yield items.slice(i, i + pageSize);
        }
        }

        const data = [1, 2, 3, 4, 5, 6, 7];

        for (const page of paginate(data, 3)) {
        console.log(page); // [1,2,3], [4,5,6], [7]
        }

        // Custom iterator
        const range = {
        from: 1,
        to: 5,
        *[Symbol.iterator]() {
            for (let i = this.from; i <= this.to; i++) {
            yield i;
            }
        },
        };

        console.log([...range]); // [1, 2, 3, 4, 5]`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`paginate` oru dhadava oru page dhaan generate pannum, thevai padum bodhu mattum.',
                            '`*[Symbol.iterator]()` use panna, normal object ah `for...of` and spread la use pannalam.',
                            'Iterator manually ezhudhura vida, generator la code romba simple ah irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**yield* and return() / throw()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`yield*` innoru generator or iterable ku delegate pannum. Adhoda ellaa values um inga yield aagum.',
                            '`gen.return(value)` generator ah udane mudichidum. `{ value, done: true }` kedaikkum.',
                            '`gen.throw(error)` generator kulla error ah throw pannum. `try...catch` kulla handle pannalam.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function* inner() {
        yield "a";
        yield "b";
        }

        function* outer() {
        yield 1;
        yield* inner(); // inner generator ku delegate
        yield 2;
        }

        console.log([...outer()]); // [1, "a", "b", 2]

        const gen = outer();
        gen.next();               // { value: 1, done: false }
        console.log(gen.return("stop")); // { value: "stop", done: true }
        console.log(gen.next());  // { value: undefined, done: true }`,
                    },
                ],
            },
            {
                label: '8',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Generators and async/await**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'async/await generators + Promises oda concept ah base ah vachu dhaan work aagum. `await` na `yield` maari pause pannum.',
                            'Pazhaya `co` library maari tools, generator la `yield promise` pannitu, Promise resolve aana apram `next(result)` call pannum.',
                            'Ippo namma direct ah async/await use pannuvom, so generator ah async work ku use panna thevai illa.',
                            'Async generator (`async function*`) and `for await...of` um irukku. Stream or paginated API data process panna use aagum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `async function* fetchPages() {
        for (let page = 1; page <= 3; page++) {
            const res = await fetch("/api/items?page=" + page);
            yield await res.json();
        }
        }

        async function run() {
        for await (const items of fetchPages()) {
            console.log(items); // ovvoru page data
        }
        }

        run();`,
                    },
                ],
            },
            {
                label: '9',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, function* and yield, next() result, example, use cases.',
                            '“Generator oru function, yield la pause aagi, next() call panna resume aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Generator call panna code run aagaadhu, generator object dhaan kedaikkum nu clear ah sollunga. Interview la idha romba ketpaanga.',
                            'next() `{ value, done }` return pannum nu sollunga. Idhula neraya per confuse aaguvaanga.',
                            'Infinite sequence example (lazy evaluation) ezhudhi kaattunga. Idhu romba famous question.',
                            '`next(value)` use panni two-way communication pannalam nu mention pannunga. Idhu senior level answer.',
                            'Idhu iterators, async/await, and closures (generator state remember pannum) oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “yield = pause, next() = resume”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-28',
        topicId: 'javascript',
        title: 'What is currying?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Currying is breaking down a function that takes multiple arguments into a series of functions that each take one argument. ',
                            'Instead of `add(1, 2, 3)`, you do `add(1)(2)(3)`. Each function returns another function until all arguments are provided, then it executes. ',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Currying is a functional programming technique where a function taking n arguments is transformed into n functions each taking 1 argument. ',
                            '**Benefits:** partial application (create specialized functions), readability with named functions, function composition (easier to combine). ',
                            '**Implementation:** recursively return functions until all arguments collected. ',
                            '**Distinguish:** partial application (providing some arguments) vs currying (each function takes 1 argument). ',
                            "**Downsides:** overhead of multiple function calls, less readable for simple cases. Common in functional libraries. JavaScript doesn't automatically curry - you must implement it. ",
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// Normal function
                            function add(a, b, c) {
                            return a + b + c;
                            }

                            // Curried version
                            function curry(fn) {
                            return function curried(...args) {
                                if (args.length >= fn.length) {
                                return fn.apply(this, args);
                                }
                                return (...nextArgs) => curried(...args, ...nextArgs);
                            };
                            }
                            const curriedAdd = curry(add);
                            console.log(curriedAdd(1)(2)(3)); // 6
                            console.log(curriedAdd(1, 2)(3)); // 6 - also works`,
                    },
                    {
                        type: 'highlight',
                        text: `The curried function collects arguments one at a time, returning a new function until all arguments are provided.`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `In Archer Review, we used currying for creating reusable handler factories. A curried validation function would create specific validators for different fields.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `You're building a sandwich. Normal: provide all ingredients at once. Curried: add one ingredient at a time, waiting for confirmation before adding the next. Or decide later what the next ingredient is.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Currying transforms a function with multiple arguments into a series of functions each taking one argument. ',
                            '**Benefits:** include partial application (create specialized functions from general ones) and easier function composition. ',
                            '**Implementation:** return functions until all arguments are collected, then execute. ',
                            'In React, this is useful for creating handler factories or middleware. ',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: [
                            'currying',
                            'partial application',
                            'function composition',
                            'multiple arguments',
                            'functional programming',
                        ],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Currying na, multiple arguments edukkura oru function ah, oru oru argument ah edukkura functions oda chain ah maathura technique. `f(a, b, c)` ah `f(a)(b)(c)` nu maathuvom.',
                            'Ovvoru function kum oru argument kudutha, adhu adutha function ah return pannum. Kadaisi argument kedaicha apram dhaan final result return aagum.',
                            'Idhu closure use panni work aagum. Munnadi kudutha arguments ah inner functions remember pannitu irukkum.',
                            'Use cases: function ah reuse panna (partial application), reusable utility functions create panna, and function composition. Example: add(5) nu oru dhadava kudutha, adha eppavum reuse pannalam.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Normal function vs Curried function**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Normal function: Ellaa arguments um oru dhadava kudukkanum. `add(1, 2, 3)`.',
                            'Curried function: Oru oru argument ah thaniya thaniya kudukkalam. `add(1)(2)(3)`.',
                            'Rendu la um result same dhaan. Namma function ah use panra way mattum dhaan maarum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Normal function
        function add(a, b, c) {
        return a + b + c;
        }
        add(1, 2, 3); // 6

        // Curried function
        function curriedAdd(a) {
        return function (b) {
            return function (c) {
            return a + b + c;
            };
        };
        }
        curriedAdd(1)(2)(3); // 6

        // Arrow function version (short)
        const curriedAddArrow = (a) => (b) => (c) => a + b + c;
        curriedAddArrow(1)(2)(3); // 6`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`curriedAdd(1)` oru function return pannum, adhu `a = 1` ah remember pannum.',
                            '`(2)` kudutha, innoru function return aagum, adhu `a` and `b` rendaiyum remember pannum.',
                            '`(3)` kudutha, ippo ellaa arguments um kedaichiduchu, so `a + b + c` calculate aagum.',
                            'Remember panradhu closure naala dhaan.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why it is useful (partial application)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Oru argument ah mattum kudutha, adhu oru pudhu specialized function ah maarum.',
                            'Adha thirumba thirumba reuse pannalam, same argument ah thirumba kudukka thevai illa.',
                            'Code readable ah irukkum, and function composition ku useful.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const multiply = (a) => (b) => a * b;

        const double = multiply(2);
        const triple = multiply(3);

        console.log(double(5));  // 10
        console.log(triple(5));  // 15
        console.log(double(10)); // 20`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`multiply(2)` oru pudhu function return pannum, adhu eppavum `a = 2` vachirukkum.',
                            '`double` and `triple` rendum `multiply` la irundhu create aana reusable functions.',
                            'Idhu dhaan partial application.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Generic curry function (interview question)**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Edhaavadhu oru function ah curried function ah maathura utility function ezhudha interview la kekkuvaanga. Idhu romba famous question.',
                    },
                    {
                        type: 'code',
                        text: `function curry(fn) {
        return function curried(...args) {
            if (args.length >= fn.length) {
            return fn.apply(this, args);
            }

            return function (...nextArgs) {
            return curried.apply(this, [...args, ...nextArgs]);
            };
        };
        }

        function sum(a, b, c) {
        return a + b + c;
        }

        const curriedSum = curry(sum);

        console.log(curriedSum(1, 2, 3)); // 6
        console.log(curriedSum(1)(2)(3)); // 6
        console.log(curriedSum(1, 2)(3)); // 6
        console.log(curriedSum(1)(2, 3)); // 6`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`fn.length` original function ku evlo parameters irukku nu solludhu. Example: `sum` ku 3.',
                            '`args.length >= fn.length` check panni, ellaa arguments um vandhuchaa nu paarkkurom.',
                            'Vandhuchu na, `fn.apply(this, args)` use panni original function ah run pannrom.',
                            'Innum arguments kammi na, pudhu function return pannrom. Adhu pudhu arguments ah munnadi irukkura `args` oda serthu, `curried` ah thirumba call pannum.',
                            'Idhunaala `curriedSum(1, 2)(3)` maari mixed ways la um work aagum.',
                            '`args` closure naala remember aagum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Reusable logger and discount**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Same type of function ah different values oda thirumba thirumba use panna, currying use panni reusable versions create pannalam.',
                    },
                    {
                        type: 'code',
                        text: `// Logger
        const log = (level) => (message) => {
        console.log("[" + level + "] " + message);
        };

        const info = log("INFO");
        const error = log("ERROR");

        info("Server started");     // [INFO] Server started
        error("Database failed");   // [ERROR] Database failed

        // Discount
        const applyDiscount = (percent) => (price) => price - (price * percent) / 100;

        const tenPercentOff = applyDiscount(10);
        const twentyPercentOff = applyDiscount(20);

        console.log(tenPercentOff(1000));    // 900
        console.log(twentyPercentOff(1000)); // 800`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`log("INFO")` oru pudhu function return pannum, level ah remember pannum.',
                            '`info` and `error` oda level thirumba thirumba kudukka thevai illa.',
                            '`applyDiscount(10)` oru reusable `tenPercentOff` function create pannum.',
                            'Idhu dhaan currying oda real-world use.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Currying vs Partial application**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Currying: Function ah, oru oru argument edukkura nested functions ah maathum. `f(a, b, c)` -> `f(a)(b)(c)`.',
                            'Partial application: Function ku konjam arguments ah munnadiye fix pannitu, meedhi arguments ku wait pannura pudhu function create pannum. Idhu `bind()` use panni pannalam.',
                            'Rendum related dhaan, aana same illa. Currying eppavum oru argument ku oru function create pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function add(a, b, c) {
        return a + b + c;
        }

        // Partial application (bind use panni)
        const add5 = add.bind(null, 5);
        console.log(add5(2, 3)); // 10

        // Currying
        const curriedAdd = (a) => (b) => (c) => a + b + c;
        console.log(curriedAdd(5)(2)(3)); // 10`,
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, normal vs curried, closure connection, example, use cases.',
                            '“Currying na f(a, b, c) ah f(a)(b)(c) nu maathura technique, closure use panni arguments ah remember pannum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Generic `curry` function ezhudha theriyanum. `fn.length` and `args.length` compare panradhu dhaan main logic. Interview la idha romba ketpaanga.',
                            'Currying vs Partial application difference sollunga. Idhula neraya per confuse aaguvaanga.',
                            'Use cases mention pannunga: reusable functions, logger, discount, function composition.',
                            '`fn.length` default parameters or rest parameters irundha correct ah work aagaadhu nu sollunga. Idhu senior level answer.',
                            'Idhu closure, arrow functions, and `bind` oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “One argument at a time, closure remembers”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-29',
        topicId: 'javascript',
        title: 'What is function composition?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Function composition is combining multiple functions into one. ',
                            'The output of one function becomes the input of the next. ',
                            'Instead of `f(g(h(x)))`, you compose them: `compose(f, g, h)(x)`. ',
                            'This makes code more readable and reusable. ',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Function composition is combining functions where the output of one is the input of the next, creating a pipeline. ',
                            '**Implementation:** compose takes functions, returns a new function that applies them right-to-left (or left-to-right in pipe). ',
                            '**Benefits:** code reusability, readability (clear data flow), testability (small functions), modularity. Practical: data transformations, middleware chains, event handlers. ',
                            'Often paired with currying for maximum flexibility. Functional programming core principle. ',
                            'Many libraries (lodash, ramda) provide compose/pipe utilities. ',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// Simple compose
                            function compose(...fns) {
                                return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
                                }
                                // Or pipe (left to right)
                                function pipe(...fns) {
                                return (value) => fns.reduce((acc, fn) => fn(acc), value);
                            }
                            const add = (x) => x + 10;
                            const multiply = (x) => x * 2;
                            const square = (x) => x * x;

                            const composed = compose(square, multiply, add);
                            console.log(composed(5)); // ((5+10)*2)^2 = 2400

                            const piped = pipe(add, multiply, square);
                            console.log(piped(5)); // ((5+10)*2)^2 = 2400`,
                    },
                    {
                        type: 'highlight',
                        text: `compose applies functions right-to-left. pipe applies left-to-right. Both create a single function from multiple small functions.`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `In Archer Review, we could have used composition for data transformation pipelines. We often chained operations on user data - this is composition.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `A factory assembly line. Each station (function) does one job (transformation). The output of one station becomes input for the next. The final station outputs the finished product. Composition is this pipeline.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Function composition combines multiple functions into a data pipeline. ',
                            'The output of one function becomes input for the next. We implement compose (right-to-left) and pipe (left-to-right) to create single functions from small ones. ',
                            'Composition makes code more modular, readable, and testable. Each function does one thing, and composing them creates complex behavior. ',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['composition', 'pipe', 'compose', 'function programming', 'data pipeline'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Function composition na, rendu or athukku mela functions ah serthu, oru pudhu function create panra technique. Oru function oda output, adutha function oda input aagum. compose(f, g)(x) na f(g(x)).',
                            'Idhula small small functions ah, ovvoru function um oru vela mattum panna mari ezhudhuvom. Apram andha functions ah serthu, complex logic create pannuvom. Idhu code ah clean ah, reusable ah vachukka help pannum.',
                            'compose() right to left order la run aagum. pipe() left to right order la run aagum. Rendum same concept dhaan, order mattum dhaan difference.',
                            'Idhu reduce() and closure use panni implement pannuvom. Use cases: data transformation, middleware, string processing, and currying oda serthu use pannuvom.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Without composition vs With composition**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Without composition: Functions ah nested ah call pannuvom. `f(g(h(x)))`. Idhu padikka kashtama irukkum.',
                            'With composition: Functions ah serthu, oru pudhu function create pannuvom. `compose(f, g, h)(x)`.',
                            'Rendu la um result same dhaan. Composition code ah readable ah vachukkum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const add5 = (x) => x + 5;
        const double = (x) => x * 2;
        const square = (x) => x * x;

        // Without composition (nested calls)
        console.log(square(double(add5(2)))); // 196

        // Manual composition (two functions)
        const compose2 = (f, g) => (x) => f(g(x));

        const doubleThenAdd5 = compose2(add5, double);
        console.log(doubleThenAdd5(3)); // 11  (double(3) = 6, add5(6) = 11)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`square(double(add5(2)))` la mudhalla `add5(2)` = 7, apram `double(7)` = 14, apram `square(14)` = 196.',
                            '`compose2(add5, double)` oru pudhu function return pannum. Adhu mudhalla `double` run pannum, apram `add5` run pannum.',
                            'Right to left order: kadaisi function mudhalla run aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**compose() function (right to left)**',
                    },
                    {
                        type: 'code',
                        text: `const compose = (...fns) => (x) =>
        fns.reduceRight((acc, fn) => fn(acc), x);

        const add5 = (x) => x + 5;
        const double = (x) => x * 2;
        const square = (x) => x * x;

        const calculate = compose(square, double, add5);

        console.log(calculate(2)); // 196
        // Order: add5(2) = 7 -> double(7) = 14 -> square(14) = 196`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`...fns` use panni, ethanai functions venaalum edukkalam.',
                            '`reduceRight` array ah right to left order la process pannum.',
                            '`acc` (accumulator) la previous function oda output irukkum. Adhu adutha function ku input aagum.',
                            'Initial value `x`, so mudhal function ku `x` input aagum.',
                            '`compose(square, double, add5)` la mudhalla `add5` run aagum, kadaisila `square`.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**pipe() function (left to right)**',
                    },
                    {
                        type: 'code',
                        text: `const pipe = (...fns) => (x) =>
        fns.reduce((acc, fn) => fn(acc), x);

        const calculate = pipe(add5, double, square);

        console.log(calculate(2)); // 196
        // Order: add5(2) = 7 -> double(7) = 14 -> square(14) = 196`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`pipe` `reduce` use pannum, so left to right order la run aagum.',
                            'Functions eppadi ezhudhirukkom, appadiye order la run aagum. Idhu padikka easy.',
                            '`compose` and `pipe` result same dhaan, aana functions order maarum.',
                            'Neraya developers `pipe` ah prefer pannuvaanga, because reading order and execution order same.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: String processing**',
                    },
                    {
                        type: 'paragraph',
                        text: 'User name ah clean pannanum. Spaces remove pannanum, lowercase ah maathanum, apram first letter ah capital pannanum. Ovvoru step um oru small function. Apram ellathayum pipe use panni serthukalam.',
                    },
                    {
                        type: 'code',
                        text: `const trim = (str) => str.trim();
        const toLowerCase = (str) => str.toLowerCase();
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

        const formatName = pipe(trim, toLowerCase, capitalize);

        console.log(formatName("   rAVI  "));   // "Ravi"
        console.log(formatName("  KUMAR "));    // "Kumar"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ovvoru function um oru vela mattum pannum. Test panna easy.',
                            '`formatName` ah ethanai idathula venaalum reuse pannalam.',
                            'Pudhu step venum na, `pipe` la oru function add pannina podhum.',
                            'Idhu dhaan composition oda main advantage.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Composition with currying**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Composition la ovvoru function um oru argument dhaan edukkum. Adhunaala multiple arguments irukkura function ah currying use panni, one argument function ah maathi, composition la use pannalam.',
                    },
                    {
                        type: 'code',
                        text: `const add = (a) => (b) => a + b;
        const multiply = (a) => (b) => a * b;

        const calculate = pipe(add(5), multiply(2));

        console.log(calculate(3)); // 16
        // add(5)(3) = 8 -> multiply(2)(8) = 16

        // Array data transformation
        const users = [
        { name: "Ravi", age: 25 },
        { name: "Kumar", age: 17 },
        { name: "Arun", age: 30 },
        ];

        const filterAdults = (list) => list.filter((u) => u.age >= 18);
        const getNames = (list) => list.map((u) => u.name);
        const joinNames = (names) => names.join(", ");

        const adultNames = pipe(filterAdults, getNames, joinNames);

        console.log(adultNames(users)); // "Ravi, Arun"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`add(5)` oru function return pannum, adhu one argument edukkum. So `pipe` la use pannalam.',
                            'Array data ah step by step transform panna, composition romba useful.',
                            'Idhu dhaan currying and composition rendukkum irukkura connection.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Async composition (Promise)**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Functions async na, normal `pipe` work aagaadhu. Because function Promise return pannum. Idhuku `await` use panni async pipe ezhudhalam.',
                    },
                    {
                        type: 'code',
                        text: `const pipeAsync = (...fns) => (x) =>
        fns.reduce((acc, fn) => acc.then(fn), Promise.resolve(x));

        const fetchUser = async (id) => ({ id, name: "Ravi" });
        const getName = (user) => user.name;
        const greet = (name) => "Hello " + name;

        const process = pipeAsync(fetchUser, getName, greet);

        process(1).then(console.log); // "Hello Ravi"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`acc.then(fn)` use panni, previous Promise mudinja apram adutha function run aagum.',
                            '`Promise.resolve(x)` initial value ah Promise ah maathum.',
                            'Sync and async functions rendaiyum idhula mix pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, without vs with composition, compose, pipe, example.',
                            '“Function composition na functions ah serthu pudhu function create panradhu. Oru function oda output, adutha function oda input aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            '`compose` and `pipe` ezhudha theriyanum. `reduceRight` and `reduce` use panradhu dhaan main logic. Interview la idha romba ketpaanga.',
                            'compose right to left, pipe left to right nu clear ah sollunga. Idhula neraya per confuse aaguvaanga.',
                            'Composition la ovvoru function um one argument dhaan edukkum nu sollunga. Multiple arguments na currying use pannuvom. Idhu senior level answer.',
                            'Async functions ku `pipeAsync` venum nu mention pannunga.',
                            'Idhu currying, closure, and higher-order functions oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Output of one is input of next”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-30',
        topicId: 'javascript',
        title: 'What are pure functions?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A pure function always returns the same output for the same input and has no side effects. ',
                            "It doesn't modify external state or depend on external state. Pure functions are easier to test, reason about, and combine. ",
                            'This is a core principle of functional programming. ',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'A pure function has two criteria:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Deterministic:** same inputs always produce same outputs. ',
                            "**No side effects:** doesn't modify external state, doesn't perform I/O, doesn't modify arguments. Benefits: easy to test (no setup needed), memoizable (cache results), safe to parallelize, easier to debug (no global state interference). Not pure: functions with random(), Date.now(), API calls, console.log(), modifying global variables, modifying arguments. In React: component render functions should be pure (same props = same output). Redux reducers must be pure. Contrast with impure functions which make code harder to test and reason about. ",
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// PURE - same input always same output, no side effects
                            const add = (a, b) => a + b;
                            const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
                            const double = (arr) => arr.map(x => x * 2); // doesn't modify arr

                            // IMPURE - depends on external state
                            let total = 0;
                            const addToTotal = (n) => { // impure - modifies external state
                            total += n;
                            return total;
                            };
                            const getRandomUser = () => fetch('/api/random'); // impure - I/O
                            const mutateArray = (arr) => { // impure - modifies argument
                            arr.push(1);
                            return arr;
                            };`,
                    },
                    {
                        type: 'highlight',
                        text: `Pure functions (add, capitalize, double) have no side effects and are deterministic. Impure functions modify state or do I/O.`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `In Archer Review, we wrote pure reducer functions for state management. Pure component logic made testing easy - just pass props, check output.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `A pure vending machine always gives the same snack for the same coin (input). An impure vending machine sometimes gives different snacks, sometimes takes your coin without giving anything, and talks to a manager (side effects).`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Pure functions always return the same output for the same input and have no side effects. ',
                            "They don't modify external state or depend on it. ",
                            'Pure functions are easier to test, reason about, and parallelize. ',
                            'In React, render functions should be pure - same props should always produce the same output. ',
                            'Redux reducers must be pure. Pure functions are a core principle of functional programming. ',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['pure functions', 'side effects', 'deterministic', 'functional programming', 'testing'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Pure function na, same input kudutha eppavum same output return pannum, and veliya entha side effect um create pannaadha function. Rendu rules dhaan: same input, same output, and no side effects.',
                            'Side effect na function kulla irundhu veliya irukkura edhaavadhu ah maathurathu. Example: global variable maathurathu, input object ah mutate pannurathu, API call, DOM maathurathu, console.log, file write.',
                            'Pure function Math.random(), Date.now() maari values ah depend panna koodadhu, because adhu same input ku different output kudukkum. Veliya irukkura variable ah read panni result calculate panna, adhuvum impure.',
                            'Benefits: test panna easy, predict panna easy, debug panna easy, caching (memoization) pannalam. React and Redux la pure functions romba important.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Rule 1: Same input, same output**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function result input arguments ah mattum depend pannanum.',
                            'Neenga ethanai dhadava call pannaalum, same arguments ku same result dhaan varanum.',
                            'Veliya irukkura variable, time, random value ah depend panna, adhu pure illa.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Pure
        function add(a, b) {
        return a + b;
        }
        add(2, 3); // 5 (eppavum 5)

        // Impure (veliya irukkura variable depend pannudhu)
        let tax = 10;
        function addTax(price) {
        return price + tax;
        }
        addTax(100); // 110
        tax = 20;
        addTax(100); // 120 (same input, different output)

        // Impure (random)
        function randomAdd(a) {
        return a + Math.random();
        }`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`add` input mattum dhaan use pannum, so eppavum same result.',
                            '`addTax` veliya irukkura `tax` ah depend pannudhu. `tax` maaritha, same input ku different output varum.',
                            '`randomAdd` ku same input kudutha kooda, result maarum.',
                            'Fix: `tax` ah um argument ah pass pannunga. `addTax(price, tax)`.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Rule 2: No side effects**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function kulla irundhu veliya irukkura edhaiyum maatha koodadhu.',
                            'Common side effects: global variable modify, input argument mutate, API call, DOM update, `console.log`, `localStorage` write, timer.',
                            'Function oda result ah return pannradhu mattum dhaan function oda velai.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Impure (global variable maathudhu)
        let count = 0;
        function increment() {
        count++;
        }

        // Impure (input array ah mutate pannudhu)
        function addItem(arr, item) {
        arr.push(item);
        return arr;
        }

        const list = [1, 2];
        addItem(list, 3);
        console.log(list); // [1, 2, 3] (original maariduchu)

        // Pure (pudhu array return pannudhu)
        function addItemPure(arr, item) {
        return [...arr, item];
        }

        const list2 = [1, 2];
        const newList = addItemPure(list2, 3);
        console.log(list2);   // [1, 2] (original safe)
        console.log(newList); // [1, 2, 3]`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`increment` global `count` ah maathudhu, so side effect.',
                            '`addItem` input array ah `push` panni mutate pannudhu. Original array maariduchu.',
                            '`addItemPure` spread use panni pudhu array return pannudhu. Original ku effect illa.',
                            'Pure function la input ah eppavum mutate pannaadhinga. Pudhu value return pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Pure vs Impure (quick comparison)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Pure: `arr.map()`, `arr.filter()`, `arr.slice()`, `arr.concat()`, spread operator, `Math.max()`.',
                            'Impure: `arr.push()`, `arr.pop()`, `arr.splice()`, `arr.sort()`, `arr.reverse()` (original array ah mutate pannum).',
                            'Impure: `Math.random()`, `Date.now()`, `fetch()`, `console.log()`, DOM methods.',
                            'Note: `arr.sort()` original array ah mutate pannum. Pure ah vena na, `[...arr].sort()` use pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why pure functions? (benefits)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Test panna easy: Input kudutha, output check pannina podhum. Mock or setup thevai illa.',
                            'Predictable: Same input ku same output, so bugs find panna easy.',
                            'Memoization: Same input ku result cache pannalam, because result eppavum same.',
                            'Parallel safe: Shared data maathaadhunaala, multiple threads la safe ah run pannalam.',
                            'Reusable and composable: Function composition ku pure functions dhaan best.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const memoize = (fn) => {
        const cache = {};
        return (n) => {
            if (n in cache) return cache[n];
            cache[n] = fn(n);
            return cache[n];
        };
        };

        const square = (n) => n * n; // pure

        const fastSquare = memoize(square);
        fastSquare(5); // calculate aagum
        fastSquare(5); // cache la irundhu varum`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`square` pure, so same input ku eppavum same result.',
                            'Adhunaala result ah cache pannalam, safe ah.',
                            'Impure function ku memoization panna, wrong result varalaam.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: React and Redux**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux la reducer oru pure function. Current state and action kudutha, pudhu state return pannum. Old state ah mutate pannaadhu. React component um same props ku same UI return pannanum.',
                    },
                    {
                        type: 'code',
                        text: `// Pure reducer
        function cartReducer(state, action) {
        switch (action.type) {
            case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.item],
            };
            default:
            return state;
        }
        }

        const state = { items: ["apple"] };
        const newState = cartReducer(state, { type: "ADD_ITEM", item: "banana" });

        console.log(state.items);    // ["apple"] (original safe)
        console.log(newState.items); // ["apple", "banana"]`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reducer `state.items.push()` use panna koodadhu. Adhu mutation.',
                            'Spread use panni pudhu object and pudhu array return pannrom.',
                            'React `state` maariduchaa nu reference compare panni check pannum. Mutate pannina, React maatram theriyaadhu, UI update aagaadhu.',
                            'Idhu dhaan pure function oda real-world importance.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Impure functions thevaiyaa?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ellaa function um pure ah irukka mudiyaadhu. API call, DOM update, database write ellam side effects dhaan, aana app ku thevai.',
                            'Best practice: Business logic ah pure functions la vechukkunga. Side effects ah oru idathula (example: `useEffect`, event handler) isolate pannunga.',
                            'Idhunaala code la bigger part test panna easy ah irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, two rules, pure vs impure example, benefits, real-world use.',
                            '“Pure function na same input ku eppavum same output kudukkum, and side effects create pannaadhu” nu kandippa sollunga. Idhu dhaan core point.',
                            'Side effects list sollunga: global variable, input mutate, API call, DOM, console.log. Interview la idha romba ketpaanga.',
                            '`push()` vs spread, `sort()` mutation maari array methods example kaattunga. Idhula neraya per mistake pannuvaanga.',
                            'Benefits mention pannunga: testing, memoization, predictability.',
                            'React and Redux reducer pure function nu sollunga. Idhu senior level answer.',
                            'Ellaa function um pure ah irukka mudiyaadhu, side effects ah isolate pannanum nu sollunga.',
                            'Idhu immutability, function composition, and memoization oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Same in, same out, no side effects”.',
                        ],
                    },
                ],
            },
        ],
    }),
];
