import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'js-16',
        topicId: 'javascript',
        title: 'What is event delegation?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Event delegation is when you put one event listener on a parent element instead of many listeners on child elements. ',
                            'When a child is clicked, the event bubbles up to the parent where the listener catches it. ',
                            'This is more efficient because you have fewer listeners. ',
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
                            'Event delegation is a technique where a single event listener on a parent element handles events from child elements. ',
                            'The event bubbles from the target through parent elements. ',
                            'The listener uses event.target to identify which child triggered the event. ',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Benefits:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Better performance** - fewer listeners in memory.',
                            '**Handles dynamic children** - children added later still work.',
                            '**Simpler code -** one listener instead of many. `Limitations:` not all events bubble (focus, load, scroll), event.target vs event.currentTarget distinction. `Advanced:` event.stopPropagation() stops bubbling, preventing delegation. ',
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
                        text: `// Instead of many listeners
                            document.getElementById('list').addEventListener('click', (e) => {
                            if (e.target.tagName === 'LI') {
                                console.log('Clicked:', e.target.textContent);
                                e.target.classList.add('active');
                            }
                            });
                            // Old way - one listener per item
                            // document.querySelectorAll('li').forEach(item => {
                            //   item.addEventListener('click', handler);
                            // });`,
                    },
                    {
                        type: 'highlight',
                        text: 'One listener on the parent catches clicks from any child LI. e.target identifies which LI was clicked. Much more efficient than listeners on all LI elements.',
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
                        text: `In Archer Review, we had lists of form fields. Instead of attaching listeners to each field, we used event delegation on the form. When fields changed, we caught it with one listener. This was especially useful when adding/removing fields dynamically.`,
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
                            'Event delegation is putting one listener on a parent element to handle events from children. ',
                            'When a child is clicked, the event bubbles to the parent. ',
                            "The parent's listener uses event.target to identify which child triggered it. ",
                            'This is more efficient than many listeners, and it works with dynamically added children. ',
                            'Not all events bubble though.',
                        ],
                    },
                ],
            },
        ],
        interviewAnswerTamil: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Interview Answer',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Event Delegation என்பது ஒவ்வொரு child element-க்கும் தனித்தனியாக event listener வைப்பதற்குப் பதிலாக, ஒரு parent element-ல் மட்டும் event listener வைக்கும் முறையாகும். அந்த listener மூலம் child elements-ல் ஏற்படும் events-ஐ கையாளலாம்.',
                            'ஒரு child element-ஐ click செய்யும்போது, அந்த event Event Bubbling மூலம் parent element-க்கும் செல்லும்.',
                            'Parent element-ல் உள்ள event listener, event.target-ஐப் பயன்படுத்தி எந்த child element-ல் event ஏற்பட்டது என்பதைக் கண்டறியும்.',
                            'ஒவ்வொரு child element-க்கும் தனித்தனியாக event listeners வைப்பதைவிட இந்த முறை திறமையானது. மேலும், புதிதாக child elements சேர்க்கப்பட்டாலும் இது வேலை செய்யும்.',
                            'ஆனால், எல்லா events-ம் bubble ஆகாது.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Simple Understanding',
                    },
                    {
                        type: 'code',
                        text: `document.querySelector("#parent").addEventListener("click", (event) => {
                            if (event.target.tagName === "BUTTON") {
                                console.log(event.target.textContent);
                            }
                            });`,
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'இங்கே என்ன நடக்கிறது?',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'parent element-ல் ஒரே ஒரு click listener வைத்துள்ளோம்.',
                            'அந்த parent-க்குள் இருக்கும் button-ஐ click செய்தால், event parent-க்கு வரும்.',
                            'event.target மூலம் எந்த button click செய்யப்பட்டது என்பதைக் கண்டறிகிறோம்.',
                            'அந்த button-ல் உள்ள text-ஐ console-ல் காட்டுகிறோம்.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'நினைவில் வைத்துக்கொள்ளுங்கள்',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Event Delegation → Parent-ல் ஒரே listener வைத்து child events-ஐ கையாள்வது.',
                            'Event Bubbling → Child-ல் ஏற்பட்ட event, parent-ஐ நோக்கிச் செல்வது.',
                            'event.target → உண்மையில் event ஏற்பட்ட element-ஐக் கண்டறிய உதவும்.',
                            'நன்மை → குறைவான event listeners; புதிதாகச் சேர்க்கப்படும் child elements-க்கும் ஆதரவு.',
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
                            'event delegation',
                            'event bubbling',
                            'event target',
                            'performance',
                            'dynamic elements',
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
                            'Event delegation na ovvoru child element ku separate event listener add pannaama, oru parent element ku mattum oru listener add panni, ellaa child elements oda events ah handle panra technique.',
                            'Idhu event bubbling naala work aagum. Child element la oru event nadandha, adhu mela mela parent ku bubble aagum. Parent la irukkura listener andha event ah catch pannum.',
                            'Entha child click aachu nu therinjukka, event.target use pannuvom.',
                            'Idhunaala memory save aagum, and dynamic ah add aagura pudhu elements ku um listener thaniya add panna thevai illa.',
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
                        text: '**Event bubbling (base concept)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Oru element la event nadandha, adhu mudhalla andha element la run aagum.',
                            'Apram adhoda parent ku, apram parent oda parent ku, appadiye document vara mela pogum. Idhu dhaan bubbling.',
                            'Event delegation idha use panni dhaan work aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Child elements ku badhila, common parent ku oru listener add pannuvom.',
                            'Child click aanadhum, event bubble aagi parent ku varum.',
                            'Parent listener la `event.target` check panni, entha child click aachu nu therinjukkalam.',
                            'Venum na `event.target.matches()` or `event.target.closest()` use panni, specific element ku mattum handle pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why it is useful**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Memory save aagum. 100 items ku 100 listeners ku badhila, oru listener podhum.',
                            'Dynamic elements: Later add aagura pudhu elements ku um automatic ah work aagum.',
                            'Code simple ah irukkum, listeners add and remove panna thevai illa.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example**',
                    },
                    {
                        type: 'code',
                        text: `<ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        </ul>

        <script>
        // Without delegation (every li ku separate listener)
        document.querySelectorAll("#list li").forEach((li) => {
            li.addEventListener("click", () => {
            console.log("Clicked:", li.textContent);
            });
        });

        // With delegation (parent ku mattum oru listener)
        document.getElementById("list").addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
            console.log("Clicked:", event.target.textContent);
            }
        });
        </script>`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mudhalla example la 3 li ku 3 listeners add aagum.',
                            'Rendavadhu example la `ul` ku mattum oru listener dhaan.',
                            'Li click panna, event `ul` ku bubble aagum. `event.target` la entha li click aachu nu theriyum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Todo list (dynamic items)**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Todo app la user pudhu tasks add pannuvaanga, delete button um click pannuvaanga. Pudhu task add aagumbodhu ovvoru dhadavayum listener add panna venam. Parent ku oru listener irundha podhum.',
                    },
                    {
                        type: 'code',
                        text: `<ul id="todoList"></ul>
        <button id="addBtn">Add Task</button>

        <script>
        const todoList = document.getElementById("todoList");
        let count = 0;

        document.getElementById("addBtn").addEventListener("click", () => {
            count++;
            const li = document.createElement("li");
            li.innerHTML = "Task " + count + ' <button class="delete">Delete</button>';
            todoList.appendChild(li);
        });

        // Oru listener, ellaa delete buttons ku (existing and future)
        todoList.addEventListener("click", (event) => {
            if (event.target.matches(".delete")) {
            event.target.closest("li").remove();
            }
        });
        </script>`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Pudhu task add aagumbodhu, adhukku thaniya listener add panna thevai illa.',
                            '`event.target.matches(".delete")` use panni, delete button click aana mattum handle pannum.',
                            '`closest("li")` use panni, andha button oda parent `li` ah edutthu remove pannalam.',
                            'Delegation illama, ovvoru pudhu task kum listener add pannanum. Idhu dhaan problem.',
                        ],
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
                            'Idha order la sollunga: definition, event bubbling, how it works, why useful, example.',
                            '“Child ku badhila parent ku oru listener add pannuvom, event bubbling naala child events um parent ku varum” nu kandippa sollunga. Idhu dhaan core point.',
                            '`event.target` vs `event.currentTarget` difference sollunga. target na actual click aana element, currentTarget na listener add pannina element.',
                            'Dynamic elements ku um work aagum nu mention pannunga. Idhu dhaan main advantage.',
                            'Limitation: `focus`, `blur` maari events bubble aagaadhu. `stopPropagation()` use panna delegation break aagum.',
                            'Idhu event bubbling and event capturing oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “One parent listener, many children handled”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-17',
        topicId: 'javascript',
        title: 'What is event bubbling and capturing?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'When an event happens on an element, it travels up through parent elements. ',
                            'This is event bubbling. The event starts at the target element and bubbles up. ',
                            "There's also event capturing - the event starts from the top and travels down to the target. Capturing happens before bubbling. Most events use bubbling. ",
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
                        text: 'Event propagation has three phases:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Capturing Phase:** event travels from window down to the target element. Listeners registered with capture:true catch it here. ',
                            '**Target Phase:** event reaches the target element.',
                            '**Bubbling Phase:** event travels from target back up to window. Normal listeners catch it here. stopPropagation() stops the event from traveling further. stopImmediatePropagation() prevents other listeners on the same element from running. preventDefault() prevents default browser behavior. Not all events bubble (focus, load, scroll, mouseenter). Use capturing when you need to intercept before target (rare).',
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
                        text: `document.addEventListener('click', () => {
                            console.log('Capturing');
                            }, true); // capture phase

                            document.getElementById('button').addEventListener('click', (e) => {
                            console.log('Target');
                            e.stopPropagation(); // stops bubbling
                            });

                            document.addEventListener('click', () => {
                            console.log('Bubbling');
                            }, false); // bubble phase
                            // Output: Capturing, Target (Bubbling prevented)`,
                    },
                    {
                        type: 'highlight',
                        text: 'Capturing runs first (true parameter), then target, then bubbling. stopPropagation() prevents the bubbling listener from running.',
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
                        text: `In Archer Review, we used event bubbling for form events. A parent form listener caught changes from all inputs. We also used stopPropagation() in buttons to prevent bubbling when we needed specific behavior.`,
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
                        text: `A stone drops in water. Capturing: water travels down to where the stone landed. Target: the stone splashes. Bubbling: ripples travel up to the surface. Event listeners on the surface (bubbling) see the ripples. Listeners underwater (capturing) see the stone arriving.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'Event propagation has three phases:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Capturing:** event travels from top down to the target. ',
                            '**Target:** event at the element. ',
                            "**Bubbling:** event travels from target up to the top. Most events use bubbling, and that's what event delegation relies on. `stopPropagation()` stops the event from traveling. Not all events bubble - focus, load, and scroll don't bubble. ",
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
                        items: ['event bubbling', 'stopPropagation', 'event capturing', 'phases', 'target element'],
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
                            'Event bubbling and capturing na oru element la event nadakkumbodhu, andha event DOM tree la eppadi travel aagum nu sollura rendu phases.',
                            'Capturing phase la event document la irundhu start aagi, keezha target element vara pogum (top to bottom). Bubbling phase la event target element la irundhu start aagi, mela document vara pogum (bottom to top).',
                            'Default ah event listeners bubbling phase la dhaan run aagum. Capturing phase la run panna venum na, addEventListener oda moonavadhu argument ah true kudukkanum.',
                            'Event travel aagurathai stopPropagation() use panni stop pannalam. Event delegation idha base ah vechu dhaan work aagum.',
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
                        text: '**Three phases of an event**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Phase 1, Capturing: Event document la irundhu start aagi, target element ku keezha pogum.',
                            'Phase 2, Target: Event actual target element ku vandhu serum.',
                            'Phase 3, Bubbling: Event target element la irundhu start aagi, mela document vara pogum.',
                            'Oru event ku indha moonu phases um nadakkum. Namma listener ah entha phase la add pannurom nu dhaan difference.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Event bubbling**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Child element la event nadandha, adhu mudhalla child listener ah run pannum.',
                            'Apram parent listener, apram parent oda parent listener, appadiye document vara mela pogum.',
                            'Idhu default behavior. `addEventListener("click", fn)` nu potta, bubbling phase la dhaan run aagum.',
                            'Event delegation idha use panni dhaan work aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Event capturing**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Event document la irundhu start aagi, target element ku keezha pogum. Bubbling ku opposite direction.',
                            'Capturing phase la listener run panna, moonavadhu argument ah `true` or `{ capture: true }` kudukkanum.',
                            'Idhu rarely use pannuvom. Event ah target ku reach aagurathukku munnadiye intercept panna venum na use aagum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example**',
                    },
                    {
                        type: 'code',
                        text: `<div id="grandparent">
        <div id="parent">
            <button id="child">Click</button>
        </div>
        </div>

        <script>
        const grandparent = document.getElementById("grandparent");
        const parent = document.getElementById("parent");
        const child = document.getElementById("child");

        // Bubbling (default)
        grandparent.addEventListener("click", () => console.log("grandparent bubbling"));
        parent.addEventListener("click", () => console.log("parent bubbling"));
        child.addEventListener("click", () => console.log("child bubbling"));

        // Capturing (third argument true)
        grandparent.addEventListener("click", () => console.log("grandparent capturing"), true);
        parent.addEventListener("click", () => console.log("parent capturing"), true);
        child.addEventListener("click", () => console.log("child capturing"), true);

        // Button click panna output:
        // grandparent capturing
        // parent capturing
        // child capturing
        // child bubbling
        // parent bubbling
        // grandparent bubbling
        </script>`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Button click panna, mudhalla capturing phase run aagum: grandparent, parent, child (top to bottom).',
                            'Apram bubbling phase run aagum: child, parent, grandparent (bottom to top).',
                            'Target element la capturing and bubbling listeners rendum irundha, adhu register pannina order la run aagum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Modal close on outside click**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Modal la user content ah click panna modal close aaga koodadhu. Aana overlay (modal veliya irukkura area) click panna close aaganum. Idhuku bubbling and stopPropagation() use pannalam.',
                    },
                    {
                        type: 'code',
                        text: `<div id="overlay">
        <div id="modal">
            <p>Modal content</p>
            <button id="closeBtn">Close</button>
        </div>
        </div>

        <script>
        const overlay = document.getElementById("overlay");
        const modal = document.getElementById("modal");

        // Overlay click panna modal close aagum
        overlay.addEventListener("click", () => {
            overlay.style.display = "none";
        });

        // Modal kulla click panna, event overlay ku bubble aagama stop pannrom
        modal.addEventListener("click", (event) => {
            event.stopPropagation();
        });
        </script>`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Modal kulla click panna, event bubble aagi overlay ku pogum, so modal close aagidum. Idhu problem.',
                            '`event.stopPropagation()` use panna, event modal la stop aagum, overlay ku pogaadhu.',
                            'Idhu work aaga reason, event bubbling dhaan.',
                            'Better approach: overlay listener la `event.target === overlay` check pannalam. Appo stopPropagation thevai illa.',
                        ],
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
                            'Idha order la sollunga: three phases, bubbling, capturing, example.',
                            '“Capturing top to bottom, bubbling bottom to top, default ah listeners bubbling phase la run aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Output order example (capturing first, apram bubbling) interview la romba ketpaanga. Idha practice pannunga.',
                            '`stopPropagation()` vs `preventDefault()` difference sollunga. stopPropagation event travel ah stop pannum, preventDefault browser oda default action ah stop pannum.',
                            '`event.target` vs `event.currentTarget` difference mention pannunga.',
                            'Idhu event delegation oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Capture down, Bubble up”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-18',
        topicId: 'javascript',
        title: 'What is debouncing?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Debouncing is a technique to delay a function until a certain amount of time has passed without the event firing again. ',
                            'When something triggers multiple times quickly (like typing), debouncing waits until the user stops, then runs the function once. ',
                            'This reduces unnecessary function calls. ',
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
                            'Debouncing delays function execution until a specified time has elapsed without the triggering event firing again. ',
                            '**Use cases:** search input (wait until user stops typing), window resize (wait until resize stops), form validation (validate after user stops typing). ',
                            '**Implementation:** track a timeout, clear it if the event fires again before the delay, run the function only when the delay completes. ',
                            '**Solves:** expensive operations triggered too many times (API calls, computations). ',
                            '**Downside:** delayed execution. ',
                            '**Common mistake:** not clearing timeout on cleanup. ',
                            '**In React:** useCallback with useRef for timeout management, or custom hooks. ',
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
                        text: `const debounceFunc = ((fn, delay) => {
                                let timer;

                                return (...args) => {
                                    clearTimeout(timer);
                                    timer = setTimeout(() =>{
                                    fn(...args)
                                    }, delay);
                                };
                            })

                            const handleSearch = ((e) => {
                                const value = e.target.value;
                                setSearch(value);
                                debounceFunc((value) => {
                                console.log("API Response", value) 
                                },500)
                            });
                            const debouncedSearch = debounce((query) => {
                            console.log('Searching:', query);
                            }, 500);
                            input.addEventListener('input', (e) => debouncedSearch(e.target.value));`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each input clears the previous timeout and sets a new one. After 500ms without input, the search function runs once.',
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
                        text: `In Archer Review, we debounced search input. As users typed, we didn't make API calls immediately. We waited 500ms after they stopped typing, then searched once. This massively reduced API calls and server load.`,
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
                        text: `You're waiting for a friend. Every time you think they're arriving, you wait another 5 minutes. Only when 5 minutes pass without seeing them do you go check. Debouncing is like this - delay until there's a quiet moment.`,
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
                            'Debouncing is delaying function execution until after a certain time passes without the event firing. ',
                            'When you type in a search box, debouncing waits until you stop typing, then makes one API call instead of calling for each keystroke. ',
                            "It's used for search, resize, and form validation. ",
                            'The trade-off is a small delay in execution. ',
                            'Implement with setTimeout and clear the timeout if the event fires again. ',
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
                        items: ['debounce', 'setTimeout', 'clearTimeout', 'search input', 'delay', 'reduce calls'],
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
                            'Debouncing na oru function ah, last event nadandhu konjam time wait pannina apram dhaan run panra technique. Andha time kulla thirumba event vandha, timer reset aagidum.',
                            'Idhu frequently nadakkura events (typing, resize, scroll) ku function ah thirumba thirumba run aagama thadukka use aagum.',
                            'Idhu setTimeout and clearTimeout use panni implement pannuvom. Ovvoru dhadava event vandhaalum, munnadi irukkura timer ah clear pannitu, pudhu timer start pannuvom.',
                            'Use cases: search box la type pannumbodhu API call, window resize handling, form validation.',
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
                        text: '**Problem (debouncing illama)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Search box la user "hello" nu type panna, 5 letters ku 5 API calls pogum.',
                            'Idhu unnecessary requests, server load adhigam, performance kammi.',
                            'Namma ku user type panni mudikkura varaikkum wait pannitu, oru dhadava mattum API call panna podhum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Event vandha, oru timer start pannuvom (example 500ms).',
                            'Andha 500ms kulla thirumba event vandha, munnadi irukkura timer ah clear pannitu, pudhu timer start pannuvom.',
                            'Event varaama 500ms mudinjaa dhaan, function run aagum.',
                            'So user type pannitte irundha function run aagaadhu, nirutthina apram dhaan run aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (debounce function)**',
                    },
                    {
                        type: 'code',
                        text: `function debounce(fn, delay) {
        let timer;

        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
            fn.apply(this, args);
            }, delay);
        };
        }

        function sayHi() {
        console.log("Function called");
        }

        const debouncedHi = debounce(sayHi, 500);

        debouncedHi();
        debouncedHi();
        debouncedHi();
        // 500ms apram oru dhadava mattum "Function called" print aagum`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`debounce` oru function ah receive panni, pudhu function return pannum.',
                            '`timer` variable closure naala remember aagum. Ovvoru call kum same `timer` dhaan use aagum.',
                            'Ovvoru call la `clearTimeout(timer)` munnadi irukkura timer ah cancel pannum.',
                            'Moonu dhadava call pannaalum, kadaisi call oda timer mattum dhaan complete aagum, so oru dhadava dhaan run aagum.',
                            '`fn.apply(this, args)` use panni, original function ku `this` and arguments ah pass pannrom.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Search box API call**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Search box la user type pannumbodhu, ovvoru letter kum API call pogaama, user type panradhu nirutthina 500ms apram dhaan API call pogum.',
                    },
                    {
                        type: 'code',
                        text: `<input id="search" placeholder="Search..." />

        <script>
        function debounce(fn, delay) {
            let timer;
            return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
            };
        }

        function searchAPI(query) {
            console.log("API call for:", query);
        }

        const debouncedSearch = debounce((event) => {
            searchAPI(event.target.value);
        }, 500);

        document.getElementById("search").addEventListener("input", debouncedSearch);

        // "hello" nu type panna, 5 API calls illa.
        // Type panradhu nirutthina 500ms apram, oru dhadava mattum: "API call for: hello"
        </script>`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'User ovvoru letter type pannumbodhum `input` event fire aagum.',
                            'Debounce function munnadi irukkura timer ah clear pannitu, pudhu timer start pannum.',
                            'User type panradhu nirutthina 500ms apram dhaan `searchAPI` run aagum.',
                            'Result: 5 API calls ku badhila, oru API call dhaan.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Debouncing vs Throttling**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Debouncing: Event nadakkurathu nindra apram, wait pannitu oru dhadava run aagum. Example: search box.',
                            'Throttling: Event continuous ah nadandhaalum, oru fixed time interval la oru dhadava dhaan run aagum. Example: scroll event, 1 second ku oru dhadava.',
                            'Simple ah: Debounce = "nirutthu, apram run". Throttle = "run, aana oru time ku oru dhadava dhaan".',
                        ],
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
                            'Idha order la sollunga: definition, problem, how it works, example, debounce vs throttle.',
                            '“Last event nadandhu delay mudinja apram dhaan function run aagum, naduvula event vandha timer reset aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Debounce function ah whiteboard la ezhudhi, `clearTimeout` and `setTimeout` explain pannunga. Interview la idha romba ketpaanga.',
                            '`timer` variable closure naala remember aagum nu mention pannunga. Idhu deep understanding kaattum.',
                            'Debouncing vs Throttling difference clear ah sollunga. Idhula neraya per confuse aaguvaanga.',
                            'Use cases: search box, window resize, form validation, auto-save.',
                            'Idhu closure and setTimeout oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Wait for silence, then run”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-19',
        topicId: 'javascript',
        title: 'What is throttling?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Throttling is limiting how often a function can run. ',
                            'If a function is triggered many times quickly, throttling ensures it runs at most once every certain time period. ',
                            'Unlike debouncing which waits for quiet, throttling runs regularly at fixed intervals. ',
                            'Use throttling for smooth animations and scroll events. ',
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
                            'Throttling ensures a function runs at most once within a specified time interval, regardless of how many times the triggering event fires. ',
                            '**Implementation:** track last execution time, only run if enough time has passed since last run. ',
                            '**Use cases:** scroll events (update UI every 200ms, not every pixel), mouse move tracking, resize handlers (measure every 200ms), animation frames. ',
                            '**Difference from debounce:** throttle keeps running at intervals; debounce waits for quiet. ',
                            '**Solves:** performance on frequently-fired events. ',
                            '**Alternative:** requestAnimationFrame for animation-based throttling (runs before browser repaint). Throttle guarantees execution at intervals. ',
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
                        text: `function throttle(func, interval) {
                            let lastRun = 0;
                            return function(...args) {
                                const now = Date.now();
                                if (now - lastRun >= interval) {
                                func.apply(this, args);
                                lastRun = now;
                                }
                            };
                            }
                            const throttledScroll = throttle(() => {
                            console.log('Scroll event');
                            }, 200);
                            window.addEventListener('scroll', throttledScroll);`,
                    },
                    {
                        type: 'highlight',
                        text: 'Every scroll event is checked. The function only runs if 200ms has passed since the last run. This limits execution to at most once per 200ms.',
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
                        text: `In Archer Review, we throttled scroll events to detect when the user reached the bottom (infinite scroll). Without throttling, scroll events fire hundreds of times per second. Throttling to every 200ms reduced processing while keeping responsiveness.`,
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
                        text: `You're hitting a nail. You can hit it once every second maximum. No matter how fast you move your hammer, you hit once per second. Throttling is like this - guaranteed minimum time between executions.`,
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
                            'Throttling limits how often a function runs - at most once every X milliseconds. ',
                            'For frequent events like scrolling, throttling ensures smooth performance. ',
                            'We track the last execution time and only run if enough time has passed. ',
                            'Throttling keeps the function running at regular intervals, unlike debouncing which waits for quiet. ',
                            'Use throttle for scroll, mouse move, resize. ',
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
                        items: ['throttle', 'interval', 'frequent events', 'scroll', 'performance'],
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
                            'Throttling na oru function ah, event continuous ah nadandhaalum, oru fixed time interval la oru dhadava mattum run panra technique. Example: 1 second ku oru dhadava dhaan run aagum.',
                            'Idhu frequently nadakkura events (scroll, resize, mouse move) ku function ah thirumba thirumba run aagama thadukka use aagum.',
                            'Idhu timestamp or setTimeout use panni implement pannuvom. Last run aana time ah remember pannitu, delay mudiyura varaikkum next call ah ignore pannuvom.',
                            'Use cases: scroll event handling, window resize, button spam click thadukka, game la key press.',
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
                        text: '**Problem (throttling illama)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'User page scroll pannumbodhu, scroll event oru second la nooru dhadava fire aagum.',
                            'Ovvoru dhadavayum heavy function run aana, page slow aagidum.',
                            'Namma ku scroll nadandhukittu irundhaalum, oru fixed interval la oru dhadava run aana podhum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function run aana time ah `lastRun` nu oru variable la store pannuvom.',
                            'Pudhu event vandha, ippo irukkura time and `lastRun` difference check pannuvom.',
                            'Difference delay vida adhigam na, function run pannuvom, `lastRun` update pannuvom.',
                            'Difference delay vida kammi na, andha event ah ignore pannuvom.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (throttle function)**',
                    },
                    {
                        type: 'code',
                        text: `function throttle(fn, delay) {
        let lastRun = 0;

        return function (...args) {
            const now = Date.now();

            if (now - lastRun >= delay) {
            lastRun = now;
            fn.apply(this, args);
            }
        };
        }

        function sayHi() {
        console.log("Function called");
        }

        const throttledHi = throttle(sayHi, 1000);

        throttledHi(); // run aagum
        throttledHi(); // ignore (1 second kulla)
        throttledHi(); // ignore (1 second kulla)

        setTimeout(throttledHi, 1100); // run aagum (1 second mudinjiduchu)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`throttle` oru function ah receive panni, pudhu function return pannum.',
                            '`lastRun` variable closure naala remember aagum.',
                            'Mudhal call la `now - lastRun` periya number, so function run aagum.',
                            'Adutha rendu calls 1 second kulla vandhadhunaala ignore aagum.',
                            '1100ms apram call pannina, delay mudinjiduchu, so thirumba run aagum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Scroll event**',
                    },
                    {
                        type: 'paragraph',
                        text: 'User scroll pannumbodhu, scroll position track pannanum (example: infinite scroll, "back to top" button). Throttle use panna, ovvoru 1 second ku oru dhadava dhaan check pannum.',
                    },
                    {
                        type: 'code',
                        text: `function throttle(fn, delay) {
        let lastRun = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastRun >= delay) {
            lastRun = now;
            fn.apply(this, args);
            }
        };
        }

        function handleScroll() {
        console.log("Scroll position:", window.scrollY);
        }

        window.addEventListener("scroll", throttle(handleScroll, 1000));

        // Continuous ah scroll pannaalum, 1 second ku oru dhadava dhaan log aagum.`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Throttle illama, scroll pannumbodhu `handleScroll` nooru dhadava run aagum.',
                            'Throttle use panna, 1 second ku oru dhadava dhaan run aagum.',
                            'Idhunaala page smooth ah irukkum, performance um nalla irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Throttling vs Debouncing**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Throttling: Event continuous ah nadandhaalum, oru fixed interval la oru dhadava run aagum. Example: scroll event.',
                            'Debouncing: Event nadakkurathu nindra apram, wait pannitu oru dhadava run aagum. Example: search box.',
                            'Simple ah: Throttle = "run, aana oru time ku oru dhadava dhaan". Debounce = "nirutthu, apram run".',
                            'Example: User 10 seconds continuous ah scroll panna, throttle (1 second) 10 dhadava run aagum. Debounce (1 second) scroll nirutthina apram oru dhadava dhaan run aagum.',
                        ],
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
                            'Idha order la sollunga: definition, problem, how it works, example, throttle vs debounce.',
                            '“Event continuous ah nadandhaalum, oru fixed time interval la oru dhadava dhaan function run aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Throttle function ah whiteboard la ezhudhi, `lastRun` and `Date.now()` explain pannunga. Interview la idha romba ketpaanga.',
                            '`lastRun` variable closure naala remember aagum nu mention pannunga. Idhu deep understanding kaattum.',
                            'Throttling vs Debouncing difference clear ah sollunga. Idhula neraya per confuse aaguvaanga.',
                            'Use cases: scroll, resize, mouse move, button spam click.',
                            'Idhu closure and debouncing oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Run once per interval, ignore the rest”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-20',
        topicId: 'javascript',
        title: 'Implement debounce from scratch.',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Create a debounce function that delays calling a function until a certain time passes without being called again. ',
                            'Store a timeout ID. Each call clears the old timeout and sets a new one. ',
                            'Only the final call actually runs the function. ',
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
                        text: 'A proper debounce implementation must:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Clear previous timeout on each call ',
                            'Set new timeout ',
                            'Handle context (this binding) ',
                            'Handle arguments properly ',
                            '**Optional:** cancel method to clear timeout ',
                            '**Optional:** immediate flag to run on first call ',
                            '**Optional:** leading/trailing edges for start/end execution. Common edge cases: must work with methods (use apply), must handle arguments spread, must clean up on unmount in React. ',
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
                        text: `function debounce(func, delay) {
                            let timeoutId = null;
                            return function debounced(...args) {
                                clearTimeout(timeoutId);
                                timeoutId = setTimeout(() => {
                                func.apply(this, args);
                                }, delay);
                            };
                            }
                            // Usage
                            const handleSearch = debounce((query) => {
                            console.log('Searching for:', query);
                            }, 300);
                            document.getElementById('search').addEventListener('input', (e) => {
                            handleSearch(e.target.value);
                            });`,
                    },
                    {
                        type: 'highlight',
                        text: 'The returned debounced function clears any pending timeout before setting a new one. After 300ms without new calls, the original function runs.',
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
                        text: `In Archer Review, we implemented debounce for form field validation. As users typed, we didn't validate immediately. After 500ms of no typing, we validated the field. This felt natural and reduced validation calls.`,
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
                        text: `You're writing an email. Your computer autosaves. Every keystroke clears the previous autosave timer. Only when you stop typing for 10 seconds does it actually save. Debounce is this autosave behavior.`,
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
                            "A debounce function returns a new function that delays the original function's execution. ",
                            'It clears any existing timeout when called, then sets a new timeout. ',
                            'Only after the delay passes without new calls does the original function run. ',
                            'We use apply() to preserve the this context. ',
                            'This is crucial for reducing API calls on search inputs and form validation. ',
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
                        items: ['debounce function', 'setTimeout', 'clearTimeout', 'search input', 'closure', 'delay'],
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
                            'Debounce from scratch na, oru function ah receive panni, pudhu debounced function return panra utility function ah namma ezhudhanum. Last call nadandhu delay mudinja apram dhaan original function run aagum.',
                            'Idhuku moonu things venum: oru closure variable (timer), clearTimeout, and setTimeout. Ovvoru call la munnadi irukkura timer ah clear pannitu, pudhu timer start pannuvom.',
                            'Arrow function ku own this illa. Adhunaala debounced function ku caller oda this kedaikkaadhu. Ana event handlers la namma event.target use pannuvom, so idhu most cases la problem illa.',
                            'Caller oda this venum na (example: object method), regular function use pannitu fn.apply(this, args) use pannanum.',
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
                        text: '**Step 1: Basic debounce (arrow function)**',
                    },
                    {
                        type: 'code',
                        text: `const debounce = (fn, delay) => {
        let timer;

        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
            fn(...args);
            }, delay);
        };
        };`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`debounce` oru arrow function, `fn` and `delay` receive pannum.',
                            '`timer` variable outer function la irukku, so closure naala ovvoru call kum same `timer` dhaan use aagum.',
                            'Return aagura arrow function dhaan actual debounced function. `...args` use panni ellaa arguments um capture pannrom.',
                            '`clearTimeout(timer)` munnadi schedule aana call ah cancel pannum.',
                            '`setTimeout` use panni, delay apram `fn(...args)` run aagura mari schedule pannrom.',
                            '`fn.apply(this, args)` thevai illa. Arrow function ku own `this` illa, so `fn(...args)` nu direct ah call pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 2: Test pannunga**',
                    },
                    {
                        type: 'code',
                        text: `const log = debounce((msg) => {
        console.log("Called with:", msg);
        }, 500);

        log("a");
        log("b");
        log("c");

        // 500ms apram oru dhadava mattum: "Called with: c"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Moonu dhadava call pannaalum, ovvoru call um munnadi timer ah cancel pannidum.',
                            'Kadaisi call (`"c"`) oda timer mattum complete aagum.',
                            'So output: `"Called with: c"`, oru dhadava mattum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 3: Leading edge option**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Sila time la first call la udane run aaganum, apram delay kulla vara calls ah ignore pannanum. Example: button click, double submit thadukka.',
                    },
                    {
                        type: 'code',
                        text: `const debounce = (fn, delay, immediate = false) => {
        let timer;

        return (...args) => {
            const callNow = immediate && !timer;

            clearTimeout(timer);
            timer = setTimeout(() => {
            timer = null;
            if (!immediate) {
                fn(...args);
            }
            }, delay);

            if (callNow) {
            fn(...args);
            }
        };
        };`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`immediate` true na, first call la udane function run aagum.',
                            '`callNow` check pannum: immediate true and timer illa na dhaan run pannanum.',
                            'Timer mudinjadhum `timer = null` set pannrom, so adutha call ku thirumba udane run aagum.',
                            'Delay kulla vara calls ellaam timer reset pannum, but function run aagaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 4: Cancel method add pannalam**',
                    },
                    {
                        type: 'code',
                        text: `const debounce = (fn, delay) => {
        let timer;

        const debounced = (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
            fn(...args);
            }, delay);
        };

        debounced.cancel = () => {
            clearTimeout(timer);
            timer = null;
        };

        return debounced;
        };

        const save = debounce(() => console.log("Saved"), 1000);

        save();
        save.cancel(); // pending call cancel aachu, "Saved" print aagaadhu`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function um oru object dhaan, so `debounced.cancel` nu property add pannalam.',
                            '`cancel()` pending timer ah clear pannum.',
                            'Use case: React component unmount aagumbodhu, pending debounced call ah cancel pannanum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Arrow function limitation (this)**',
                    },
                    {
                        type: 'code',
                        text: `const user = {
        name: "Ravi",
        greet: debounce(function () {
            console.log(this.name);
        }, 500),
        };

        user.greet(); // undefined (arrow debounce la this lose aachu)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Arrow function ku own `this` illa, so `user.greet()` call pannumbodhu `this = user` nu pass aagaadhu.',
                            'Object method ku debounce use panna venum na, regular function version use pannanum (`fn.apply(this, args)` kooda).',
                            'Event handlers, API calls, and normal functions ku arrow version podhum.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Common mistakes**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`timer` ah inner function kulla declare panna, ovvoru call kum pudhu `timer` create aagum, so debounce work aagaadhu. Timer eppavum outer function la irukkanum.',
                            '`clearTimeout` marandha, ovvoru call um delay apram run aagum, debounce work aagaadhu.',
                            '`...args` marandha, original function ku arguments pass aagaadhu.',
                            'Arrow function la `this` expect pannina, adhu work aagaadhu. Idhu dhaan arrow vs regular main difference.',
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
                            'Idha order la sollunga: approach explain pannunga, basic code ezhudhunga, test pannunga, apram leading edge and cancel mention pannunga.',
                            '“Timer ah closure la vechu, ovvoru call la clearTimeout pannitu, pudhu setTimeout start pannuvom” nu kandippa sollunga. Idhu dhaan core point.',
                            'Arrow function version la `this` kedaikkaadhu nu mention pannunga. Interviewer idha kekka chance irukku.',
                            'Caller oda `this` venum na, regular function and `fn.apply(this, args)` use pannuvom nu sollunga. Idhu senior level answer.',
                            'Closure and arrow function oda connect panni sollunga.',
                            'Throttle from scratch um idhe maari kekkalaam, so adhayum practice pannunga.',
                            'Memory trick: “Clear the old timer, set a new one”.',
                        ],
                    },
                ],
            },
        ],
    }),
];
