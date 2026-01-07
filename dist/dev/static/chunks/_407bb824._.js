(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/ClickerButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClickerButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ClickerButton({ addCoins, coinsPerClick = 1 }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleClick = ()=>{
        setCount((prev)=>prev + 1);
        if (addCoins) addCoins(coinsPerClick);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleClick,
            className: "   w-64 h-64   rounded-full   bg-red-500   text-white   text-4xl font-bold   shadow-lg   transition-transform   active:scale-95   hover:scale-95   hover:cursor-pointer   ",
            children: "CLICK ME"
        }, void 0, false, {
            fileName: "[project]/app/components/ClickerButton.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ClickerButton.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(ClickerButton, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");
_c = ClickerButton;
var _c;
__turbopack_context__.k.register(_c, "ClickerButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Wallet.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Wallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Wallet({ userId }) {
    _s();
    const storageKey = userId ? `wallet_${userId}` : null;
    const [coins, setCoins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Wallet.useState": ()=>{
            if (!storageKey) return 0;
            const stored = localStorage.getItem(storageKey);
            return stored ? parseInt(stored, 10) : 0;
        }
    }["Wallet.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Wallet.useEffect": ()=>{
            if (!storageKey) return;
            const handleStorage = {
                "Wallet.useEffect.handleStorage": (event)=>{
                    if (event.key === storageKey) {
                        setCoins(parseInt(event.newValue, 10) || 0);
                    }
                }
            }["Wallet.useEffect.handleStorage"];
            // Escucha cambios en otras pestañas
            window.addEventListener('storage', handleStorage);
            // Intervalo para actualizar si alguien más cambia localStorage en la misma pestaña
            const interval = setInterval({
                "Wallet.useEffect.interval": ()=>{
                    const stored = localStorage.getItem(storageKey);
                    const value = stored ? parseInt(stored, 10) : 0;
                    setCoins({
                        "Wallet.useEffect.interval": (prev)=>prev !== value ? value : prev
                    }["Wallet.useEffect.interval"]);
                }
            }["Wallet.useEffect.interval"], 500) // cada 500ms
            ;
            return ({
                "Wallet.useEffect": ()=>{
                    window.removeEventListener('storage', handleStorage);
                    clearInterval(interval);
                }
            })["Wallet.useEffect"];
        }
    }["Wallet.useEffect"], [
        storageKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-6 right-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105",
        children: [
            "💰 ",
            coins,
            " Coins"
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Wallet.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Wallet, "1eRANHfdKUAqjtYhNjYDASDGSLE=");
_c = Wallet;
var _c;
__turbopack_context__.k.register(_c, "Wallet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/packs.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"nombre":"Horda","precio":100,"cantidad":5},{"id":2,"nombre":"3 son multitud","precio":50,"cantidad":3},{"id":3,"nombre":"Encuentro único","precio":25,"cantidad":1}]);}),
"[project]/app/hooks/useWallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useWallet(userId) {
    _s();
    const [coins, setCoins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWallet.useEffect": ()=>{
            if (!userId) return;
            const storageKey = `wallet_${userId}`;
            // Cargar monedas desde localStorage de manera asíncrona
            const loadCoins = {
                "useWallet.useEffect.loadCoins": ()=>{
                    const stored = localStorage.getItem(storageKey);
                    if (stored) {
                        queueMicrotask({
                            "useWallet.useEffect.loadCoins": ()=>setCoins(parseInt(stored, 10))
                        }["useWallet.useEffect.loadCoins"]);
                    }
                }
            }["useWallet.useEffect.loadCoins"];
            loadCoins();
        }
    }["useWallet.useEffect"], [
        userId
    ]);
    const addCoins = (amount)=>{
        if (!userId) return;
        const storageKey = `wallet_${userId}`;
        setCoins((prev)=>{
            const newTotal = prev + amount;
            localStorage.setItem(storageKey, newTotal);
            return newTotal;
        });
    };
    const spendCoins = (amount)=>{
        if (!userId) return;
        const storageKey = `wallet_${userId}`;
        setCoins((prev)=>{
            const newTotal = Math.max(prev - amount, 0);
            localStorage.setItem(storageKey, newTotal);
            return newTotal;
        });
    };
    return {
        coins,
        addCoins,
        spendCoins
    };
}
_s(useWallet, "grtr4PfNW1/cYGck3h7SAJPkZQc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Pokemon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PokeballModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const typeColors = {
    normal: 'bg-gray-400',
    fire: 'bg-orange-500',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-400',
    ice: 'bg-cyan-300',
    fighting: 'bg-red-700',
    poison: 'bg-purple-600',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-300',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-500',
    rock: 'bg-orange-900',
    ghost: 'bg-indigo-700',
    dragon: 'bg-indigo-800',
    dark: 'bg-gray-700',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300'
};
const STORAGE_KEY = 'pokedex';
function PokeballModal({ cantidadPokemon = 1, closePack }) {
    _s();
    const [pokemon, setPokemon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const hasRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const generarIVs = (esLegendario)=>{
        const stats = [
            'HP',
            'ATK',
            'SPA',
            'DEF',
            'SPD',
            'SPE'
        ];
        let ivs = stats.map(()=>Math.floor(Math.random() * 32));
        if (esLegendario) {
            const indices = [
                0,
                1,
                2,
                3,
                4,
                5
            ];
            for(let i = 0; i < 3; i++){
                const randIdx = Math.floor(Math.random() * indices.length);
                ivs[indices[randIdx]] = 31;
                indices.splice(randIdx, 1);
            }
        }
        const ivTotalPercent = Math.round(ivs.reduce((a, b)=>a + b, 0) / 186 * 100);
        return {
            ivs,
            ivTotalPercent
        };
    };
    const registrarPokemon = (pkm)=>{
        const stored = localStorage.getItem(STORAGE_KEY);
        const pokedex = stored ? JSON.parse(stored) : {};
        const { nombre, ivs, ivTotalPercent } = pkm;
        if (!pokedex[nombre]) {
            pokedex[nombre] = {
                ...pkm,
                cantidad: 1
            };
        } else {
            pokedex[nombre].cantidad += 1;
            if (ivTotalPercent > (pokedex[nombre].ivTotalPercent || 0)) {
                pokedex[nombre].ivs = ivs;
                pokedex[nombre].ivTotalPercent = ivTotalPercent;
            }
            if (pkm.shiny) pokedex[nombre].shiny = true;
            if (pkm.habilidad.hidden) pokedex[nombre].ha = true;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pokedex));
    };
    const obtenerPokemonAleatorio = async ()=>{
        try {
            const id = Math.floor(Math.random() * 1025) + 1;
            const esShiny = Math.random() < 0.01;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
                cache: 'no-store'
            });
            if (!res.ok) return null;
            const data = await res.json();
            const speciesRes = await fetch(data.species.url, {
                cache: 'no-store'
            });
            const species = await speciesRes.json();
            const imagen = esShiny ? data.sprites.other['official-artwork'].front_shiny || data.sprites.front_shiny : data.sprites.other['official-artwork'].front_default || data.sprites.front_default;
            const abilities = data.abilities;
            const hidden = abilities.filter((a)=>a.is_hidden);
            const normal = abilities.filter((a)=>!a.is_hidden);
            const habilidadSeleccionada = hidden.length > 0 && Math.random() < 0.05 ? hidden[Math.floor(Math.random() * hidden.length)] : normal[Math.floor(Math.random() * normal.length)];
            return {
                nombre: data.name,
                id: data.id,
                tipos: data.types.map((t)=>t.type.name),
                imagen,
                shiny: esShiny,
                habilidad: {
                    nombre: habilidadSeleccionada.ability.name,
                    hidden: habilidadSeleccionada.is_hidden
                },
                is_legendary: species.is_legendary
            };
        } catch (err) {
            /* eslint-disable */ console.error(...oo_tx(`1055852029_112_6_112_51_11`, 'Error fetching Pokémon:', err));
            return null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PokeballModal.useEffect": ()=>{
            if (hasRun.current) return;
            hasRun.current = true;
            const abrirSobre = {
                "PokeballModal.useEffect.abrirSobre": async ()=>{
                    setLoading(true);
                    setPokemon([]);
                    const resultados = [];
                    const nombresUsados = new Set();
                    let obtenidos = 0;
                    while(obtenidos < cantidadPokemon){
                        const pkm = await obtenerPokemonAleatorio();
                        if (!pkm || nombresUsados.has(pkm.nombre)) {
                            continue;
                        }
                        nombresUsados.add(pkm.nombre);
                        const { ivs, ivTotalPercent } = generarIVs(pkm.is_legendary);
                        const pkmCompleto = {
                            ...pkm,
                            ivs,
                            ivTotalPercent
                        };
                        registrarPokemon(pkmCompleto);
                        resultados.push(pkmCompleto);
                        obtenidos++;
                    }
                    // SIEMPRE actualizamos el estado, incluso si hubo fallos
                    setPokemon(resultados);
                    setLoading(false);
                }
            }["PokeballModal.useEffect.abrirSobre"];
            abrirSobre().catch({
                "PokeballModal.useEffect": ()=>{
                    // Por si hay un error no capturado, forzamos cierre del loading
                    setPokemon([]);
                    setLoading(false);
                }
            }["PokeballModal.useEffect"]);
        }
    }["PokeballModal.useEffect"], [
        cantidadPokemon
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: closePack,
                className: "absolute top-6 right-6 text-white text-5xl font-light hover:text-red-400 transition hover:cursor-pointer",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/app/components/Pokemon.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-10 shadow-2xl overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-10 justify-center min-w-max",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center py-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 border-8 border-gray-300 border-t-red-600 rounded-full animate-spin mb-8"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Pokemon.jsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-gray-800 dark:text-white",
                                children: "Abriendo Sobre..."
                            }, void 0, false, {
                                fileName: "[project]/app/components/Pokemon.jsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Pokemon.jsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this) : pokemon.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 rounded-3xl p-8 w-100vh flex flex-col items-center shadow-xl",
                            style: {
                                animation: 'fadeInUp 0.8s ease-out',
                                animationDelay: `${idx * 0.3}s`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-48 h-48 mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: p.imagen,
                                        alt: p.nombre,
                                        className: "relative z-10 w-full h-full object-contain drop-shadow-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Pokemon.jsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Pokemon.jsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold capitalize text-gray-900 dark:text-white mb-2",
                                    children: [
                                        p.nombre,
                                        " #",
                                        p.id,
                                        p.shiny && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3 text-yellow-400 text-xl",
                                            children: "✨ Shiny ✨"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokemon.jsx",
                                            lineNumber: 205,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Pokemon.jsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 mb-6",
                                    children: p.tipos.map((tipo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-5 py-2 rounded-full text-white font-semibold text-sm ${typeColors[tipo] || 'bg-gray-400'}`,
                                            children: tipo
                                        }, tipo, false, {
                                            fileName: "[project]/app/components/Pokemon.jsx",
                                            lineNumber: 213,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Pokemon.jsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-6 gap-3 text-xs font-bold text-gray-600 dark:text-gray-400 mb-3",
                                            children: [
                                                'HP',
                                                'ATK',
                                                'SPA',
                                                'DEF',
                                                'SPD',
                                                'SPE'
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-center",
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/app/components/Pokemon.jsx",
                                                    lineNumber: 227,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokemon.jsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-6 gap-3 mb-5",
                                            children: p.ivs.map((iv, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-center text-2xl font-bold ${iv === 31 ? 'text-green-500' : 'text-gray-800 dark:text-white'}`,
                                                    children: iv
                                                }, i, false, {
                                                    fileName: "[project]/app/components/Pokemon.jsx",
                                                    lineNumber: 234,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokemon.jsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-center text-2xl font-bold ${p.ivTotalPercent === 100 ? 'text-yellow-500' : p.ivTotalPercent > 90 ? 'text-purple-500' : 'text-gray-700 dark:text-gray-300'}`,
                                            children: [
                                                "IV: ",
                                                p.ivTotalPercent,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Pokemon.jsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Pokemon.jsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `${p.id}-${idx}`, true, {
                            fileName: "[project]/app/components/Pokemon.jsx",
                            lineNumber: 179,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/Pokemon.jsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Pokemon.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Pokemon.jsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(PokeballModal, "fKNfIj7SS+XDpyIuhs5VDAymW9U=");
_c = PokeballModal;
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1cc9bf=_0x36d2;(function(_0x4237ed,_0x3747f9){var _0x4ba23b=_0x36d2,_0xc38e53=_0x4237ed();while(!![]){try{var _0xcfaff2=parseInt(_0x4ba23b(0x28a))/0x1+parseInt(_0x4ba23b(0x1c9))/0x2*(-parseInt(_0x4ba23b(0x218))/0x3)+parseInt(_0x4ba23b(0x233))/0x4+parseInt(_0x4ba23b(0x1ae))/0x5*(-parseInt(_0x4ba23b(0x1b7))/0x6)+parseInt(_0x4ba23b(0x1b6))/0x7*(parseInt(_0x4ba23b(0x1df))/0x8)+-parseInt(_0x4ba23b(0x285))/0x9*(-parseInt(_0x4ba23b(0x1d3))/0xa)+-parseInt(_0x4ba23b(0x24d))/0xb*(parseInt(_0x4ba23b(0x28e))/0xc);if(_0xcfaff2===_0x3747f9)break;else _0xc38e53['push'](_0xc38e53['shift']());}catch(_0x3340ad){_0xc38e53['push'](_0xc38e53['shift']());}}}(_0x4abd,0x33a2c));function z(_0x12f97f,_0x4412cc,_0x4ecfdf,_0x4965cc,_0x20be30,_0x4db6ae){var _0xdb0397=_0x36d2,_0x40190d,_0x14a3fb,_0x3fdb49,_0x1943f8;this[_0xdb0397(0x206)]=_0x12f97f,this[_0xdb0397(0x297)]=_0x4412cc,this['port']=_0x4ecfdf,this[_0xdb0397(0x2ae)]=_0x4965cc,this['dockerizedApp']=_0x20be30,this[_0xdb0397(0x2a4)]=_0x4db6ae,this[_0xdb0397(0x1eb)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this['_connected']=!0x1,this[_0xdb0397(0x217)]=!0x1,this[_0xdb0397(0x27d)]=((_0x14a3fb=(_0x40190d=_0x12f97f['process'])==null?void 0x0:_0x40190d[_0xdb0397(0x1f5)])==null?void 0x0:_0x14a3fb[_0xdb0397(0x200)])===_0xdb0397(0x1b3),this['_inBrowser']=!((_0x1943f8=(_0x3fdb49=this[_0xdb0397(0x206)]['process'])==null?void 0x0:_0x3fdb49[_0xdb0397(0x25c)])!=null&&_0x1943f8[_0xdb0397(0x212)])&&!this[_0xdb0397(0x27d)],this['_WebSocketClass']=null,this[_0xdb0397(0x1b5)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0xdb0397(0x203)]=_0xdb0397(0x20f),this['_sendErrorMessage']=(this[_0xdb0397(0x264)]?_0xdb0397(0x1ce):_0xdb0397(0x1ad))+this[_0xdb0397(0x203)];}z[_0x1cc9bf(0x1fa)]['getWebSocketClass']=async function(){var _0x5b981c=_0x1cc9bf,_0x392eb8,_0x4f8860;if(this[_0x5b981c(0x2ac)])return this['_WebSocketClass'];let _0x4f21b5;if(this[_0x5b981c(0x264)]||this['_inNextEdge'])_0x4f21b5=this[_0x5b981c(0x206)]['WebSocket'];else{if((_0x392eb8=this[_0x5b981c(0x206)][_0x5b981c(0x1e2)])!=null&&_0x392eb8[_0x5b981c(0x236)])_0x4f21b5=(_0x4f8860=this[_0x5b981c(0x206)][_0x5b981c(0x1e2)])==null?void 0x0:_0x4f8860[_0x5b981c(0x236)];else try{_0x4f21b5=(await new Function(_0x5b981c(0x1d0),_0x5b981c(0x2b1),_0x5b981c(0x2ae),'return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());')(await(0x0,eval)(_0x5b981c(0x1d7)),await(0x0,eval)(_0x5b981c(0x27a)),this[_0x5b981c(0x2ae)]))[_0x5b981c(0x26c)];}catch{try{_0x4f21b5=require(require(_0x5b981c(0x1d0))[_0x5b981c(0x1f4)](this[_0x5b981c(0x2ae)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x5b981c(0x2ac)]=_0x4f21b5,_0x4f21b5;},z[_0x1cc9bf(0x1fa)][_0x1cc9bf(0x1bf)]=function(){var _0x352d1c=_0x1cc9bf;this[_0x352d1c(0x217)]||this[_0x352d1c(0x1e1)]||this[_0x352d1c(0x1b5)]>=this[_0x352d1c(0x293)]||(this[_0x352d1c(0x288)]=!0x1,this[_0x352d1c(0x217)]=!0x0,this[_0x352d1c(0x1b5)]++,this[_0x352d1c(0x272)]=new Promise((_0x2c619c,_0x393e18)=>{var _0x321c4d=_0x352d1c;this['getWebSocketClass']()[_0x321c4d(0x1cf)](_0x314a8b=>{var _0x1dd7df=_0x321c4d;let _0x8bf952=new _0x314a8b(_0x1dd7df(0x1da)+(!this[_0x1dd7df(0x264)]&&this[_0x1dd7df(0x27b)]?_0x1dd7df(0x20e):this['host'])+':'+this[_0x1dd7df(0x283)]);_0x8bf952['onerror']=()=>{var _0x2f65e4=_0x1dd7df;this[_0x2f65e4(0x1eb)]=!0x1,this[_0x2f65e4(0x26b)](_0x8bf952),this['_attemptToReconnectShortly'](),_0x393e18(new Error('logger\\x20websocket\\x20error'));},_0x8bf952[_0x1dd7df(0x25f)]=()=>{var _0x4df140=_0x1dd7df;this[_0x4df140(0x264)]||_0x8bf952[_0x4df140(0x1d8)]&&_0x8bf952[_0x4df140(0x1d8)]['unref']&&_0x8bf952[_0x4df140(0x1d8)][_0x4df140(0x221)](),_0x2c619c(_0x8bf952);},_0x8bf952['onclose']=()=>{var _0x3437aa=_0x1dd7df;this['_allowedToConnectOnSend']=!0x0,this[_0x3437aa(0x26b)](_0x8bf952),this['_attemptToReconnectShortly']();},_0x8bf952[_0x1dd7df(0x266)]=_0x4cbd09=>{var _0x448802=_0x1dd7df;try{if(!(_0x4cbd09!=null&&_0x4cbd09[_0x448802(0x1be)])||!this[_0x448802(0x2a4)])return;let _0x54c7bc=JSON[_0x448802(0x1b4)](_0x4cbd09[_0x448802(0x1be)]);this[_0x448802(0x2a4)](_0x54c7bc[_0x448802(0x289)],_0x54c7bc[_0x448802(0x1f6)],this[_0x448802(0x206)],this[_0x448802(0x264)]);}catch{}};})[_0x321c4d(0x1cf)](_0x56ce89=>(this[_0x321c4d(0x1e1)]=!0x0,this[_0x321c4d(0x217)]=!0x1,this[_0x321c4d(0x288)]=!0x1,this[_0x321c4d(0x1eb)]=!0x0,this[_0x321c4d(0x1b5)]=0x0,_0x56ce89))[_0x321c4d(0x1fb)](_0x4d0508=>(this[_0x321c4d(0x1e1)]=!0x1,this['_connecting']=!0x1,console[_0x321c4d(0x26a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x321c4d(0x203)]),_0x393e18(new Error(_0x321c4d(0x1d2)+(_0x4d0508&&_0x4d0508[_0x321c4d(0x201)])))));}));},z['prototype'][_0x1cc9bf(0x26b)]=function(_0x310a94){var _0x37cccf=_0x1cc9bf;this[_0x37cccf(0x1e1)]=!0x1,this[_0x37cccf(0x217)]=!0x1;try{_0x310a94[_0x37cccf(0x1bd)]=null,_0x310a94[_0x37cccf(0x245)]=null,_0x310a94[_0x37cccf(0x25f)]=null;}catch{}try{_0x310a94[_0x37cccf(0x205)]<0x2&&_0x310a94[_0x37cccf(0x227)]();}catch{}},z[_0x1cc9bf(0x1fa)]['_attemptToReconnectShortly']=function(){var _0x4918b2=_0x1cc9bf;clearTimeout(this[_0x4918b2(0x24f)]),!(this[_0x4918b2(0x1b5)]>=this['_maxConnectAttemptCount'])&&(this[_0x4918b2(0x24f)]=setTimeout(()=>{var _0x479cf8=_0x4918b2,_0x4563d7;this[_0x479cf8(0x1e1)]||this['_connecting']||(this['_connectToHostNow'](),(_0x4563d7=this[_0x479cf8(0x272)])==null||_0x4563d7[_0x479cf8(0x1fb)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x4918b2(0x24f)]['unref']&&this[_0x4918b2(0x24f)][_0x4918b2(0x221)]());},z['prototype'][_0x1cc9bf(0x1dc)]=async function(_0x1a542e){var _0x5a4b4b=_0x1cc9bf;try{if(!this[_0x5a4b4b(0x1eb)])return;this[_0x5a4b4b(0x288)]&&this[_0x5a4b4b(0x1bf)](),(await this[_0x5a4b4b(0x272)])[_0x5a4b4b(0x1dc)](JSON[_0x5a4b4b(0x24b)](_0x1a542e));}catch(_0x1bba3f){this[_0x5a4b4b(0x278)]?console[_0x5a4b4b(0x26a)](this[_0x5a4b4b(0x29c)]+':\\x20'+(_0x1bba3f&&_0x1bba3f[_0x5a4b4b(0x201)])):(this[_0x5a4b4b(0x278)]=!0x0,console['warn'](this[_0x5a4b4b(0x29c)]+':\\x20'+(_0x1bba3f&&_0x1bba3f['message']),_0x1a542e)),this['_allowedToSend']=!0x1,this[_0x5a4b4b(0x1f0)]();}};function H(_0x1b0a09,_0x314bb3,_0x5ebd0b,_0x438761,_0x1c81c5,_0x462e71,_0x27e8ff,_0x303f82=ne){var _0x1230b6=_0x1cc9bf;let _0x34b1eb=_0x5ebd0b[_0x1230b6(0x1af)](',')[_0x1230b6(0x1e4)](_0x23029c=>{var _0x17b57e=_0x1230b6,_0x2b1d41,_0x47cf93,_0x11d0ca,_0x1695f3,_0x131178,_0x3adedf,_0x55f082,_0xdd61e4;try{if(!_0x1b0a09[_0x17b57e(0x1d1)]){let _0x6c7366=((_0x47cf93=(_0x2b1d41=_0x1b0a09[_0x17b57e(0x1e2)])==null?void 0x0:_0x2b1d41['versions'])==null?void 0x0:_0x47cf93['node'])||((_0x1695f3=(_0x11d0ca=_0x1b0a09[_0x17b57e(0x1e2)])==null?void 0x0:_0x11d0ca[_0x17b57e(0x1f5)])==null?void 0x0:_0x1695f3[_0x17b57e(0x200)])==='edge';(_0x1c81c5==='next.js'||_0x1c81c5==='remix'||_0x1c81c5===_0x17b57e(0x215)||_0x1c81c5===_0x17b57e(0x274))&&(_0x1c81c5+=_0x6c7366?'\\x20server':'\\x20browser');let _0x547070='';_0x1c81c5==='react-native'&&(_0x547070=(((_0x55f082=(_0x3adedf=(_0x131178=_0x1b0a09[_0x17b57e(0x1c0)])==null?void 0x0:_0x131178[_0x17b57e(0x1c5)])==null?void 0x0:_0x3adedf[_0x17b57e(0x210)])==null?void 0x0:_0x55f082[_0x17b57e(0x1cd)])||_0x17b57e(0x1ac))['toLowerCase'](),_0x547070&&(_0x1c81c5+='\\x20'+_0x547070,(_0x547070===_0x17b57e(0x284)||_0x547070===_0x17b57e(0x1ac)&&((_0xdd61e4=_0x1b0a09[_0x17b57e(0x232)])==null?void 0x0:_0xdd61e4[_0x17b57e(0x230)])==='10.0.2.2')&&(_0x314bb3='10.0.2.2'))),_0x1b0a09['_console_ninja_session']={'id':+new Date(),'tool':_0x1c81c5},_0x27e8ff&&_0x1c81c5&&!_0x6c7366&&(_0x547070?console[_0x17b57e(0x23c)]('Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+_0x547070+_0x17b57e(0x1cb)):console['log'](_0x17b57e(0x258)+(_0x1c81c5[_0x17b57e(0x23d)](0x0)[_0x17b57e(0x263)]()+_0x1c81c5[_0x17b57e(0x1c2)](0x1))+',',_0x17b57e(0x239),_0x17b57e(0x254)));}let _0x2934bd=new z(_0x1b0a09,_0x314bb3,_0x23029c,_0x438761,_0x462e71,_0x303f82);return _0x2934bd['send']['bind'](_0x2934bd);}catch(_0x161903){return console['warn'](_0x17b57e(0x2a2),_0x161903&&_0x161903[_0x17b57e(0x201)]),()=>{};}});return _0x1c14eb=>_0x34b1eb['forEach'](_0x287945=>_0x287945(_0x1c14eb));}function ne(_0x4032f4,_0x332ef1,_0x667427,_0x4197b0){var _0x599762=_0x1cc9bf;_0x4197b0&&_0x4032f4===_0x599762(0x240)&&_0x667427['location'][_0x599762(0x240)]();}function b(_0x554a57){var _0x3352bd=_0x1cc9bf,_0x4671a9,_0x54c0b2;let _0x20846c=function(_0x512f52,_0x18c985){return _0x18c985-_0x512f52;},_0x1d37bd;if(_0x554a57[_0x3352bd(0x202)])_0x1d37bd=function(){var _0x47e319=_0x3352bd;return _0x554a57[_0x47e319(0x202)]['now']();};else{if(_0x554a57['process']&&_0x554a57['process']['hrtime']&&((_0x54c0b2=(_0x4671a9=_0x554a57[_0x3352bd(0x1e2)])==null?void 0x0:_0x4671a9[_0x3352bd(0x1f5)])==null?void 0x0:_0x54c0b2['NEXT_RUNTIME'])!=='edge')_0x1d37bd=function(){var _0x64184f=_0x3352bd;return _0x554a57['process'][_0x64184f(0x2a0)]();},_0x20846c=function(_0x10d5f4,_0x2be210){return 0x3e8*(_0x2be210[0x0]-_0x10d5f4[0x0])+(_0x2be210[0x1]-_0x10d5f4[0x1])/0xf4240;};else try{let {performance:_0x1d1d12}=require('perf_hooks');_0x1d37bd=function(){return _0x1d1d12['now']();};}catch{_0x1d37bd=function(){return+new Date();};}}return{'elapsed':_0x20846c,'timeStamp':_0x1d37bd,'now':()=>Date[_0x3352bd(0x244)]()};}function _0x36d2(_0x45364,_0x526de7){var _0x4abdec=_0x4abd();return _0x36d2=function(_0x36d215,_0x265de1){_0x36d215=_0x36d215-0x1ac;var _0x1b6b7c=_0x4abdec[_0x36d215];return _0x1b6b7c;},_0x36d2(_0x45364,_0x526de7);}function _0x4abd(){var _0x2edd5c=['toUpperCase','_inBrowser','some','onmessage','number','[object\\x20Date]','string','warn','_disposeWebsocket','default','reduceOnCount','time','autoExpandPreviousObjects','toString','_isPrimitiveType','_ws','endsWith','angular','_cleanNode','console','','_extendedWarning','unknown','import(\\x27url\\x27)','dockerizedApp','iterator','_inNextEdge','replace','push','_quotedRegExp','autoExpandLimit','[object\\x20Array]','port','android','4653gpnXWv','value','object','_allowedToConnectOnSend','method','219195IeQxdG','strLength','_processTreeNodeResult','127.0.0.1','690168gXosUu','_addLoadNode','','slice','function','_maxConnectAttemptCount','reducePolicy','reduceLimits','current','host','_setNodePermissions','_getOwnPropertyDescriptor','54715','[object\\x20Map]','_sendErrorMessage','timeStamp','sortProps','depth','hrtime','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','noFunctions','eventReceivedCallback','reducedLimits','negativeZero','_hasSymbolPropertyOnItsPath','_sortProps','_p_','resolveGetters','_HTMLAllCollection','_WebSocketClass','call','nodeModules','_addProperty','totalStrLength','url','_dateToString','origin','date','positiveInfinity','next.js','_setNodeQueryPath','Set','concat','react-native','emulator','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','248755AYwszL','split','hits','getter','elapsed','edge','parse','_connectAttemptCount','28RulXnQ','30JSZfMl','_consoleNinjaAllowedToStart','_objectToString','match','sort','indexOf','onclose','data','_connectToHostNow','expo','Error','substr','serialize','props','modules','stack','rootExpression','includes','178LksGJe','defaultLimits',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceOnAccumulatedProcessingTimeMs','osName','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','then','path','_console_ninja_session','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','5310qruWei','_setNodeExpandableState','_Symbol','length','import(\\x27path\\x27)','_socket','autoExpand','ws://','String','send','getOwnPropertySymbols','index','768872lRFuEd','HTMLAllCollection','_connected','process','_blacklistedProperty','map','_isMap','_console_ninja','_regExpToString','cappedProps','_type','_getOwnPropertyNames','_allowedToSend','_treeNodePropertiesBeforeFullValue','...','_addFunctionsNode','boolean','_attemptToReconnectShortly','level','_hasMapOnItsPath','setter','join','env','args','POSITIVE_INFINITY','bind','error','prototype','catch','expressionsToEvaluate','symbol','negativeInfinity','type','NEXT_RUNTIME','message','performance','_webSocketErrorDocsLink','unshift','readyState','global','1.0.0','get','isExpressionToEvaluate','capped','valueOf','ninjaSuppressConsole','nan','gateway.docker.internal','https://tinyurl.com/37x8b79t','ExpoDevice','_ninjaIgnoreNextError','node','elements','parent','astro','allStrLength','_connecting','10401Zenqaz','Number','_getOwnPropertySymbols','next.js','undefined','root_exp_id','_p_name','name','toLowerCase','unref','Buffer','[object\\x20BigInt]','_propertyName','_setNodeExpressionPath','resolve','close','_isPrimitiveWrapperType','NEGATIVE_INFINITY','getOwnPropertyDescriptor',\"c:\\\\Users\\\\Practicas\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.504\\\\node_modules\",'bound\\x20Promise','root_exp','_treeNodePropertiesAfterFullValue','perLogpoint','hostname','_property','location','22752dilhOK','Map','Symbol','_WebSocket','array','startsWith','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_capIfString','_additionalMetadata','log','charAt','coverage','test','reload','constructor','bigint','count','now','onerror','1','stackTraceLimit','[object\\x20Set]','_isUndefined','1767796562592','stringify','forEach','22szEAAH','autoExpandMaxDepth','_reconnectTimeout','_setNodeLabel','_isNegativeZero','autoExpandPropertyCount','null','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','_hasSetOnItsPath','resetOnProcessingTimeAverageMs','funcName','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','disabledTrace',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"ALEJANDRO\",\"192.168.1.178\"],'fromCharCode','versions','_isSet','resetWhenQuietMs','onopen','_undefined','_isArray','trace'];_0x4abd=function(){return _0x2edd5c;};return _0x4abd();}function X(_0x3f2cc3,_0x444a65,_0x948c19){var _0x47f6de=_0x1cc9bf,_0x58fcb7,_0x714d9c,_0x3e7d2,_0x3e66ef,_0x358522,_0x530474,_0x126449;if(_0x3f2cc3[_0x47f6de(0x1b8)]!==void 0x0)return _0x3f2cc3[_0x47f6de(0x1b8)];let _0x1c4f65=((_0x714d9c=(_0x58fcb7=_0x3f2cc3['process'])==null?void 0x0:_0x58fcb7[_0x47f6de(0x25c)])==null?void 0x0:_0x714d9c[_0x47f6de(0x212)])||((_0x3e66ef=(_0x3e7d2=_0x3f2cc3[_0x47f6de(0x1e2)])==null?void 0x0:_0x3e7d2[_0x47f6de(0x1f5)])==null?void 0x0:_0x3e66ef[_0x47f6de(0x200)])==='edge',_0x332f6b=!!(_0x948c19===_0x47f6de(0x2ba)&&((_0x358522=_0x3f2cc3[_0x47f6de(0x1c0)])==null?void 0x0:_0x358522[_0x47f6de(0x1c5)]));function _0x2e0548(_0x117428){var _0x3fecad=_0x47f6de;if(_0x117428[_0x3fecad(0x238)]('/')&&_0x117428[_0x3fecad(0x273)]('/')){let _0x2eb059=new RegExp(_0x117428[_0x3fecad(0x291)](0x1,-0x1));return _0x40eb98=>_0x2eb059[_0x3fecad(0x23f)](_0x40eb98);}else{if(_0x117428['includes']('*')||_0x117428[_0x3fecad(0x1c8)]('?')){let _0x170bc4=new RegExp('^'+_0x117428[_0x3fecad(0x27e)](/\\./g,String[_0x3fecad(0x25b)](0x5c)+'.')[_0x3fecad(0x27e)](/\\*/g,'.*')[_0x3fecad(0x27e)](/\\?/g,'.')+String[_0x3fecad(0x25b)](0x24));return _0x11bd1b=>_0x170bc4[_0x3fecad(0x23f)](_0x11bd1b);}else return _0x331aa3=>_0x331aa3===_0x117428;}}let _0x10619f=_0x444a65[_0x47f6de(0x1e4)](_0x2e0548);return _0x3f2cc3['_consoleNinjaAllowedToStart']=_0x1c4f65||!_0x444a65,!_0x3f2cc3[_0x47f6de(0x1b8)]&&((_0x530474=_0x3f2cc3[_0x47f6de(0x232)])==null?void 0x0:_0x530474[_0x47f6de(0x230)])&&(_0x3f2cc3[_0x47f6de(0x1b8)]=_0x10619f[_0x47f6de(0x265)](_0x798b03=>_0x798b03(_0x3f2cc3['location'][_0x47f6de(0x230)]))),_0x332f6b&&!_0x3f2cc3[_0x47f6de(0x1b8)]&&!((_0x126449=_0x3f2cc3['location'])!=null&&_0x126449[_0x47f6de(0x230)])&&(_0x3f2cc3[_0x47f6de(0x1b8)]=!0x0),_0x3f2cc3[_0x47f6de(0x1b8)];}function J(_0x4fb91b,_0x3c6597,_0x56215a,_0x1ac10d,_0x167e22,_0x58debe){var _0xb96e9f=_0x1cc9bf;_0x4fb91b=_0x4fb91b,_0x3c6597=_0x3c6597,_0x56215a=_0x56215a,_0x1ac10d=_0x1ac10d,_0x167e22=_0x167e22,_0x167e22=_0x167e22||{},_0x167e22['defaultLimits']=_0x167e22[_0xb96e9f(0x1ca)]||{},_0x167e22[_0xb96e9f(0x2a5)]=_0x167e22['reducedLimits']||{},_0x167e22[_0xb96e9f(0x294)]=_0x167e22[_0xb96e9f(0x294)]||{},_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]=_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]||{},_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)]=_0x167e22[_0xb96e9f(0x294)]['global']||{};let _0x6f4d67={'perLogpoint':{'reduceOnCount':_0x167e22[_0xb96e9f(0x294)]['perLogpoint']['reduceOnCount']||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]['reduceOnAccumulatedProcessingTimeMs']||0x64,'resetWhenQuietMs':_0x167e22[_0xb96e9f(0x294)]['perLogpoint'][_0xb96e9f(0x25e)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x167e22['reducePolicy'][_0xb96e9f(0x22f)][_0xb96e9f(0x256)]||0x64},'global':{'reduceOnCount':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)]['reduceOnCount']||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)][_0xb96e9f(0x1cc)]||0x12c,'resetWhenQuietMs':_0x167e22['reducePolicy'][_0xb96e9f(0x206)][_0xb96e9f(0x25e)]||0x32,'resetOnProcessingTimeAverageMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)][_0xb96e9f(0x256)]||0x64}},_0x5adaf7=b(_0x4fb91b),_0x394800=_0x5adaf7[_0xb96e9f(0x1b2)],_0x21489e=_0x5adaf7['timeStamp'];function _0x435715(){var _0x30387a=_0xb96e9f;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x30387a(0x280)]=/'([^\\\\']|\\\\')*'/,this[_0x30387a(0x260)]=_0x4fb91b[_0x30387a(0x21c)],this['_HTMLAllCollection']=_0x4fb91b[_0x30387a(0x1e0)],this[_0x30387a(0x299)]=Object[_0x30387a(0x22a)],this['_getOwnPropertyNames']=Object['getOwnPropertyNames'],this['_Symbol']=_0x4fb91b[_0x30387a(0x235)],this[_0x30387a(0x1e7)]=RegExp[_0x30387a(0x1fa)][_0x30387a(0x270)],this['_dateToString']=Date[_0x30387a(0x1fa)][_0x30387a(0x270)];}_0x435715['prototype'][_0xb96e9f(0x1c3)]=function(_0x76cd6b,_0x39c45b,_0x4d4b0f,_0x4fb231){var _0x313e5d=_0xb96e9f,_0x258d79=this,_0x5649bc=_0x4d4b0f[_0x313e5d(0x1d9)];function _0x7e4bff(_0x57d702,_0x2575bb,_0xb55e81){var _0x2281e2=_0x313e5d;_0x2575bb[_0x2281e2(0x1ff)]=_0x2281e2(0x279),_0x2575bb['error']=_0x57d702[_0x2281e2(0x201)],_0x3796b2=_0xb55e81['node'][_0x2281e2(0x296)],_0xb55e81['node'][_0x2281e2(0x296)]=_0x2575bb,_0x258d79['_treeNodePropertiesBeforeFullValue'](_0x2575bb,_0xb55e81);}let _0x5ae676,_0x8c6e47,_0x3cb06c=_0x4fb91b[_0x313e5d(0x20c)];_0x4fb91b[_0x313e5d(0x20c)]=!0x0,_0x4fb91b['console']&&(_0x5ae676=_0x4fb91b['console'][_0x313e5d(0x1f9)],_0x8c6e47=_0x4fb91b['console'][_0x313e5d(0x26a)],_0x5ae676&&(_0x4fb91b[_0x313e5d(0x276)][_0x313e5d(0x1f9)]=function(){}),_0x8c6e47&&(_0x4fb91b['console']['warn']=function(){}));try{try{_0x4d4b0f[_0x313e5d(0x1f1)]++,_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f['autoExpandPreviousObjects'][_0x313e5d(0x27f)](_0x39c45b);var _0x47ccf2,_0x5cfc81,_0x24d24a,_0x20acb4,_0x3c99fb=[],_0x42e7e3=[],_0x2c2168,_0x55fbfd=this[_0x313e5d(0x1e9)](_0x39c45b),_0x1c6758=_0x55fbfd===_0x313e5d(0x237),_0x4f3c4f=!0x1,_0x26190b=_0x55fbfd===_0x313e5d(0x292),_0x3b9bfe=this['_isPrimitiveType'](_0x55fbfd),_0x1ed288=this[_0x313e5d(0x228)](_0x55fbfd),_0x396744=_0x3b9bfe||_0x1ed288,_0x29e1ab={},_0x59fa4d=0x0,_0x71607d=!0x1,_0x3796b2,_0x5df68c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4d4b0f[_0x313e5d(0x29f)]){if(_0x1c6758){if(_0x5cfc81=_0x39c45b[_0x313e5d(0x1d6)],_0x5cfc81>_0x4d4b0f[_0x313e5d(0x213)]){for(_0x24d24a=0x0,_0x20acb4=_0x4d4b0f[_0x313e5d(0x213)],_0x47ccf2=_0x24d24a;_0x47ccf2<_0x20acb4;_0x47ccf2++)_0x42e7e3['push'](_0x258d79[_0x313e5d(0x2af)](_0x3c99fb,_0x39c45b,_0x55fbfd,_0x47ccf2,_0x4d4b0f));_0x76cd6b['cappedElements']=!0x0;}else{for(_0x24d24a=0x0,_0x20acb4=_0x5cfc81,_0x47ccf2=_0x24d24a;_0x47ccf2<_0x20acb4;_0x47ccf2++)_0x42e7e3[_0x313e5d(0x27f)](_0x258d79[_0x313e5d(0x2af)](_0x3c99fb,_0x39c45b,_0x55fbfd,_0x47ccf2,_0x4d4b0f));}_0x4d4b0f[_0x313e5d(0x252)]+=_0x42e7e3[_0x313e5d(0x1d6)];}if(!(_0x55fbfd===_0x313e5d(0x253)||_0x55fbfd===_0x313e5d(0x21c))&&!_0x3b9bfe&&_0x55fbfd!=='String'&&_0x55fbfd!==_0x313e5d(0x222)&&_0x55fbfd!==_0x313e5d(0x242)){var _0x14efcf=_0x4fb231[_0x313e5d(0x1c4)]||_0x4d4b0f[_0x313e5d(0x1c4)];if(this[_0x313e5d(0x25d)](_0x39c45b)?(_0x47ccf2=0x0,_0x39c45b[_0x313e5d(0x24c)](function(_0x4e2e7f){var _0x29982e=_0x313e5d;if(_0x59fa4d++,_0x4d4b0f[_0x29982e(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;return;}if(!_0x4d4b0f[_0x29982e(0x209)]&&_0x4d4b0f[_0x29982e(0x1d9)]&&_0x4d4b0f['autoExpandPropertyCount']>_0x4d4b0f[_0x29982e(0x281)]){_0x71607d=!0x0;return;}_0x42e7e3[_0x29982e(0x27f)](_0x258d79[_0x29982e(0x2af)](_0x3c99fb,_0x39c45b,'Set',_0x47ccf2++,_0x4d4b0f,function(_0x1d24ad){return function(){return _0x1d24ad;};}(_0x4e2e7f)));})):this[_0x313e5d(0x1e5)](_0x39c45b)&&_0x39c45b['forEach'](function(_0x258aec,_0x325faf){var _0x23cca3=_0x313e5d;if(_0x59fa4d++,_0x4d4b0f['autoExpandPropertyCount']++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;return;}if(!_0x4d4b0f['isExpressionToEvaluate']&&_0x4d4b0f[_0x23cca3(0x1d9)]&&_0x4d4b0f[_0x23cca3(0x252)]>_0x4d4b0f[_0x23cca3(0x281)]){_0x71607d=!0x0;return;}var _0x89a54=_0x325faf['toString']();_0x89a54['length']>0x64&&(_0x89a54=_0x89a54[_0x23cca3(0x291)](0x0,0x64)+_0x23cca3(0x1ed)),_0x42e7e3[_0x23cca3(0x27f)](_0x258d79[_0x23cca3(0x2af)](_0x3c99fb,_0x39c45b,_0x23cca3(0x234),_0x89a54,_0x4d4b0f,function(_0x278033){return function(){return _0x278033;};}(_0x258aec)));}),!_0x4f3c4f){try{for(_0x2c2168 in _0x39c45b)if(!(_0x1c6758&&_0x5df68c['test'](_0x2c2168))&&!this[_0x313e5d(0x1e3)](_0x39c45b,_0x2c2168,_0x4d4b0f)){if(_0x59fa4d++,_0x4d4b0f[_0x313e5d(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;break;}if(!_0x4d4b0f[_0x313e5d(0x209)]&&_0x4d4b0f['autoExpand']&&_0x4d4b0f[_0x313e5d(0x252)]>_0x4d4b0f[_0x313e5d(0x281)]){_0x71607d=!0x0;break;}_0x42e7e3[_0x313e5d(0x27f)](_0x258d79['_addObjectProperty'](_0x3c99fb,_0x29e1ab,_0x39c45b,_0x55fbfd,_0x2c2168,_0x4d4b0f));}}catch{}if(_0x29e1ab['_p_length']=!0x0,_0x26190b&&(_0x29e1ab[_0x313e5d(0x21e)]=!0x0),!_0x71607d){var _0x3fdaac=[][_0x313e5d(0x2b9)](this[_0x313e5d(0x1ea)](_0x39c45b))['concat'](this['_getOwnPropertySymbols'](_0x39c45b));for(_0x47ccf2=0x0,_0x5cfc81=_0x3fdaac[_0x313e5d(0x1d6)];_0x47ccf2<_0x5cfc81;_0x47ccf2++)if(_0x2c2168=_0x3fdaac[_0x47ccf2],!(_0x1c6758&&_0x5df68c[_0x313e5d(0x23f)](_0x2c2168['toString']()))&&!this[_0x313e5d(0x1e3)](_0x39c45b,_0x2c2168,_0x4d4b0f)&&!_0x29e1ab[typeof _0x2c2168!=_0x313e5d(0x1fd)?'_p_'+_0x2c2168[_0x313e5d(0x270)]():_0x2c2168]){if(_0x59fa4d++,_0x4d4b0f[_0x313e5d(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;break;}if(!_0x4d4b0f[_0x313e5d(0x209)]&&_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f[_0x313e5d(0x252)]>_0x4d4b0f['autoExpandLimit']){_0x71607d=!0x0;break;}_0x42e7e3[_0x313e5d(0x27f)](_0x258d79['_addObjectProperty'](_0x3c99fb,_0x29e1ab,_0x39c45b,_0x55fbfd,_0x2c2168,_0x4d4b0f));}}}}}if(_0x76cd6b['type']=_0x55fbfd,_0x396744?(_0x76cd6b[_0x313e5d(0x286)]=_0x39c45b['valueOf'](),this[_0x313e5d(0x23a)](_0x55fbfd,_0x76cd6b,_0x4d4b0f,_0x4fb231)):_0x55fbfd===_0x313e5d(0x2b4)?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x2b2)]['call'](_0x39c45b):_0x55fbfd==='bigint'?_0x76cd6b[_0x313e5d(0x286)]=_0x39c45b['toString']():_0x55fbfd==='RegExp'?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x1e7)][_0x313e5d(0x2ad)](_0x39c45b):_0x55fbfd===_0x313e5d(0x1fd)&&this[_0x313e5d(0x1d5)]?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x1d5)][_0x313e5d(0x1fa)][_0x313e5d(0x270)][_0x313e5d(0x2ad)](_0x39c45b):!_0x4d4b0f[_0x313e5d(0x29f)]&&!(_0x55fbfd==='null'||_0x55fbfd==='undefined')&&(delete _0x76cd6b[_0x313e5d(0x286)],_0x76cd6b[_0x313e5d(0x20a)]=!0x0),_0x71607d&&(_0x76cd6b[_0x313e5d(0x1e8)]=!0x0),_0x3796b2=_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)],_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)]=_0x76cd6b,this[_0x313e5d(0x1ec)](_0x76cd6b,_0x4d4b0f),_0x42e7e3['length']){for(_0x47ccf2=0x0,_0x5cfc81=_0x42e7e3[_0x313e5d(0x1d6)];_0x47ccf2<_0x5cfc81;_0x47ccf2++)_0x42e7e3[_0x47ccf2](_0x47ccf2);}_0x3c99fb[_0x313e5d(0x1d6)]&&(_0x76cd6b['props']=_0x3c99fb);}catch(_0x4300e9){_0x7e4bff(_0x4300e9,_0x76cd6b,_0x4d4b0f);}this[_0x313e5d(0x23b)](_0x39c45b,_0x76cd6b),this[_0x313e5d(0x22e)](_0x76cd6b,_0x4d4b0f),_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)]=_0x3796b2,_0x4d4b0f[_0x313e5d(0x1f1)]--,_0x4d4b0f[_0x313e5d(0x1d9)]=_0x5649bc,_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f[_0x313e5d(0x26f)]['pop']();}finally{_0x5ae676&&(_0x4fb91b['console'][_0x313e5d(0x1f9)]=_0x5ae676),_0x8c6e47&&(_0x4fb91b[_0x313e5d(0x276)]['warn']=_0x8c6e47),_0x4fb91b['ninjaSuppressConsole']=_0x3cb06c;}return _0x76cd6b;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x21a)]=function(_0xe5f71a){var _0x47860d=_0xb96e9f;return Object[_0x47860d(0x1dd)]?Object[_0x47860d(0x1dd)](_0xe5f71a):[];},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x25d)]=function(_0x5e19a4){var _0x3e9ebe=_0xb96e9f;return!!(_0x5e19a4&&_0x4fb91b[_0x3e9ebe(0x2b8)]&&this[_0x3e9ebe(0x1b9)](_0x5e19a4)===_0x3e9ebe(0x248)&&_0x5e19a4[_0x3e9ebe(0x24c)]);},_0x435715[_0xb96e9f(0x1fa)]['_blacklistedProperty']=function(_0x400088,_0x487546,_0x25c83d){var _0x5b6258=_0xb96e9f;if(!_0x25c83d[_0x5b6258(0x2aa)]){let _0x1d3a41=this['_getOwnPropertyDescriptor'](_0x400088,_0x487546);if(_0x1d3a41&&_0x1d3a41[_0x5b6258(0x208)])return!0x0;}return _0x25c83d[_0x5b6258(0x2a3)]?typeof _0x400088[_0x487546]==_0x5b6258(0x292):!0x1;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1e9)]=function(_0x3e2827){var _0x3c9595=_0xb96e9f,_0x2d9c62='';return _0x2d9c62=typeof _0x3e2827,_0x2d9c62===_0x3c9595(0x287)?this[_0x3c9595(0x1b9)](_0x3e2827)==='[object\\x20Array]'?_0x2d9c62=_0x3c9595(0x237):this[_0x3c9595(0x1b9)](_0x3e2827)===_0x3c9595(0x268)?_0x2d9c62=_0x3c9595(0x2b4):this[_0x3c9595(0x1b9)](_0x3e2827)===_0x3c9595(0x223)?_0x2d9c62=_0x3c9595(0x242):_0x3e2827===null?_0x2d9c62=_0x3c9595(0x253):_0x3e2827[_0x3c9595(0x241)]&&(_0x2d9c62=_0x3e2827[_0x3c9595(0x241)][_0x3c9595(0x21f)]||_0x2d9c62):_0x2d9c62==='undefined'&&this[_0x3c9595(0x2ab)]&&_0x3e2827 instanceof this['_HTMLAllCollection']&&(_0x2d9c62=_0x3c9595(0x1e0)),_0x2d9c62;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1b9)]=function(_0x4ba920){var _0x2a5a5d=_0xb96e9f;return Object[_0x2a5a5d(0x1fa)][_0x2a5a5d(0x270)][_0x2a5a5d(0x2ad)](_0x4ba920);},_0x435715['prototype'][_0xb96e9f(0x271)]=function(_0x7035e1){var _0x5a3341=_0xb96e9f;return _0x7035e1===_0x5a3341(0x1ef)||_0x7035e1===_0x5a3341(0x269)||_0x7035e1===_0x5a3341(0x267);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x228)]=function(_0x446bde){var _0x5d4a51=_0xb96e9f;return _0x446bde==='Boolean'||_0x446bde===_0x5d4a51(0x1db)||_0x446bde===_0x5d4a51(0x219);},_0x435715['prototype']['_addProperty']=function(_0x434599,_0x588a33,_0xb10858,_0x260c09,_0x294d32,_0x2f9aaf){var _0x465131=this;return function(_0x22dfa0){var _0x3ee84a=_0x36d2,_0x5c9d65=_0x294d32[_0x3ee84a(0x212)]['current'],_0xa12a2e=_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x1de)],_0x2fc0f1=_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x214)];_0x294d32[_0x3ee84a(0x212)]['parent']=_0x5c9d65,_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x1de)]=typeof _0x260c09==_0x3ee84a(0x267)?_0x260c09:_0x22dfa0,_0x434599[_0x3ee84a(0x27f)](_0x465131[_0x3ee84a(0x231)](_0x588a33,_0xb10858,_0x260c09,_0x294d32,_0x2f9aaf)),_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x214)]=_0x2fc0f1,_0x294d32['node'][_0x3ee84a(0x1de)]=_0xa12a2e;};},_0x435715[_0xb96e9f(0x1fa)]['_addObjectProperty']=function(_0x5b6973,_0x70f90e,_0x52a9cf,_0xe07745,_0x4fb91d,_0x336b03,_0x11e3ac){var _0x1121e2=_0xb96e9f,_0x8aec5d=this;return _0x70f90e[typeof _0x4fb91d!=_0x1121e2(0x1fd)?_0x1121e2(0x2a9)+_0x4fb91d['toString']():_0x4fb91d]=!0x0,function(_0x4479f6){var _0x4e8fc5=_0x1121e2,_0x2cbe0d=_0x336b03[_0x4e8fc5(0x212)]['current'],_0x56a74e=_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x1de)],_0x54d803=_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x214)];_0x336b03['node'][_0x4e8fc5(0x214)]=_0x2cbe0d,_0x336b03['node'][_0x4e8fc5(0x1de)]=_0x4479f6,_0x5b6973['push'](_0x8aec5d[_0x4e8fc5(0x231)](_0x52a9cf,_0xe07745,_0x4fb91d,_0x336b03,_0x11e3ac)),_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x214)]=_0x54d803,_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x1de)]=_0x56a74e;};},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x231)]=function(_0x593ebb,_0x5b5f6f,_0x23f42d,_0x37a504,_0x3f7612){var _0x452555=_0xb96e9f,_0x5b1e66=this;_0x3f7612||(_0x3f7612=function(_0x51cec9,_0x131308){return _0x51cec9[_0x131308];});var _0xac5253=_0x23f42d[_0x452555(0x270)](),_0x341e68=_0x37a504[_0x452555(0x1fc)]||{},_0x4b6726=_0x37a504[_0x452555(0x29f)],_0x4d9324=_0x37a504[_0x452555(0x209)];try{var _0x15e737=this[_0x452555(0x1e5)](_0x593ebb),_0x11fa3e=_0xac5253;_0x15e737&&_0x11fa3e[0x0]==='\\x27'&&(_0x11fa3e=_0x11fa3e[_0x452555(0x1c2)](0x1,_0x11fa3e['length']-0x2));var _0x376da5=_0x37a504[_0x452555(0x1fc)]=_0x341e68['_p_'+_0x11fa3e];_0x376da5&&(_0x37a504[_0x452555(0x29f)]=_0x37a504[_0x452555(0x29f)]+0x1),_0x37a504[_0x452555(0x209)]=!!_0x376da5;var _0x465224=typeof _0x23f42d==_0x452555(0x1fd),_0x5d1555={'name':_0x465224||_0x15e737?_0xac5253:this[_0x452555(0x224)](_0xac5253)};if(_0x465224&&(_0x5d1555['symbol']=!0x0),!(_0x5b5f6f===_0x452555(0x237)||_0x5b5f6f===_0x452555(0x1c1))){var _0x96734a=this[_0x452555(0x299)](_0x593ebb,_0x23f42d);if(_0x96734a&&(_0x96734a['set']&&(_0x5d1555[_0x452555(0x1f3)]=!0x0),_0x96734a[_0x452555(0x208)]&&!_0x376da5&&!_0x37a504[_0x452555(0x2aa)]))return _0x5d1555[_0x452555(0x1b1)]=!0x0,this[_0x452555(0x28c)](_0x5d1555,_0x37a504),_0x5d1555;}var _0x3dec1;try{_0x3dec1=_0x3f7612(_0x593ebb,_0x23f42d);}catch(_0x5a1879){return _0x5d1555={'name':_0xac5253,'type':_0x452555(0x279),'error':_0x5a1879[_0x452555(0x201)]},this[_0x452555(0x28c)](_0x5d1555,_0x37a504),_0x5d1555;}var _0x1b695f=this['_type'](_0x3dec1),_0x500382=this[_0x452555(0x271)](_0x1b695f);if(_0x5d1555['type']=_0x1b695f,_0x500382)this['_processTreeNodeResult'](_0x5d1555,_0x37a504,_0x3dec1,function(){var _0x4a9c1b=_0x452555;_0x5d1555[_0x4a9c1b(0x286)]=_0x3dec1[_0x4a9c1b(0x20b)](),!_0x376da5&&_0x5b1e66[_0x4a9c1b(0x23a)](_0x1b695f,_0x5d1555,_0x37a504,{});});else{var _0x35761a=_0x37a504[_0x452555(0x1d9)]&&_0x37a504[_0x452555(0x1f1)]<_0x37a504[_0x452555(0x24e)]&&_0x37a504[_0x452555(0x26f)][_0x452555(0x1bc)](_0x3dec1)<0x0&&_0x1b695f!==_0x452555(0x292)&&_0x37a504['autoExpandPropertyCount']<_0x37a504['autoExpandLimit'];_0x35761a||_0x37a504[_0x452555(0x1f1)]<_0x4b6726||_0x376da5?this[_0x452555(0x1c3)](_0x5d1555,_0x3dec1,_0x37a504,_0x376da5||{}):this[_0x452555(0x28c)](_0x5d1555,_0x37a504,_0x3dec1,function(){var _0x1ba74f=_0x452555;_0x1b695f===_0x1ba74f(0x253)||_0x1b695f===_0x1ba74f(0x21c)||(delete _0x5d1555[_0x1ba74f(0x286)],_0x5d1555[_0x1ba74f(0x20a)]=!0x0);});}return _0x5d1555;}finally{_0x37a504[_0x452555(0x1fc)]=_0x341e68,_0x37a504['depth']=_0x4b6726,_0x37a504[_0x452555(0x209)]=_0x4d9324;}},_0x435715['prototype']['_capIfString']=function(_0x1919f7,_0x59fe25,_0x1e23f2,_0x253da6){var _0x224f8d=_0xb96e9f,_0x2d0f75=_0x253da6['strLength']||_0x1e23f2['strLength'];if((_0x1919f7===_0x224f8d(0x269)||_0x1919f7==='String')&&_0x59fe25[_0x224f8d(0x286)]){let _0x13c391=_0x59fe25['value'][_0x224f8d(0x1d6)];_0x1e23f2[_0x224f8d(0x216)]+=_0x13c391,_0x1e23f2[_0x224f8d(0x216)]>_0x1e23f2[_0x224f8d(0x2b0)]?(_0x59fe25[_0x224f8d(0x20a)]='',delete _0x59fe25[_0x224f8d(0x286)]):_0x13c391>_0x2d0f75&&(_0x59fe25[_0x224f8d(0x20a)]=_0x59fe25['value'][_0x224f8d(0x1c2)](0x0,_0x2d0f75),delete _0x59fe25[_0x224f8d(0x286)]);}},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1e5)]=function(_0x409223){var _0x56da57=_0xb96e9f;return!!(_0x409223&&_0x4fb91b[_0x56da57(0x234)]&&this[_0x56da57(0x1b9)](_0x409223)===_0x56da57(0x29b)&&_0x409223[_0x56da57(0x24c)]);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x224)]=function(_0x3d64c5){var _0x5281f7=_0xb96e9f;if(_0x3d64c5[_0x5281f7(0x1ba)](/^\\d+$/))return _0x3d64c5;var _0xc81808;try{_0xc81808=JSON[_0x5281f7(0x24b)](''+_0x3d64c5);}catch{_0xc81808='\\x22'+this['_objectToString'](_0x3d64c5)+'\\x22';}return _0xc81808[_0x5281f7(0x1ba)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xc81808=_0xc81808['substr'](0x1,_0xc81808[_0x5281f7(0x1d6)]-0x2):_0xc81808=_0xc81808['replace'](/'/g,'\\x5c\\x27')[_0x5281f7(0x27e)](/\\\\\"/g,'\\x22')[_0x5281f7(0x27e)](/(^\"|\"$)/g,'\\x27'),_0xc81808;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x28c)]=function(_0x3d398e,_0x2564ed,_0x2a614d,_0x2e0c51){var _0x1ad859=_0xb96e9f;this[_0x1ad859(0x1ec)](_0x3d398e,_0x2564ed),_0x2e0c51&&_0x2e0c51(),this[_0x1ad859(0x23b)](_0x2a614d,_0x3d398e),this[_0x1ad859(0x22e)](_0x3d398e,_0x2564ed);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1ec)]=function(_0x12a410,_0x56e89c){var _0x5129a5=_0xb96e9f;this[_0x5129a5(0x2a1)](_0x12a410,_0x56e89c),this['_setNodeQueryPath'](_0x12a410,_0x56e89c),this['_setNodeExpressionPath'](_0x12a410,_0x56e89c),this[_0x5129a5(0x298)](_0x12a410,_0x56e89c);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x2a1)]=function(_0x22705f,_0x568405){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x2b7)]=function(_0x1788d9,_0x4c370d){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x250)]=function(_0x2ec77f,_0x4756d8){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x249)]=function(_0x320029){var _0x5b67b4=_0xb96e9f;return _0x320029===this[_0x5b67b4(0x260)];},_0x435715[_0xb96e9f(0x1fa)]['_treeNodePropertiesAfterFullValue']=function(_0x1b683a,_0x70424a){var _0xe87ec=_0xb96e9f;this[_0xe87ec(0x250)](_0x1b683a,_0x70424a),this['_setNodeExpandableState'](_0x1b683a),_0x70424a[_0xe87ec(0x29e)]&&this[_0xe87ec(0x2a8)](_0x1b683a),this[_0xe87ec(0x1ee)](_0x1b683a,_0x70424a),this[_0xe87ec(0x28f)](_0x1b683a,_0x70424a),this[_0xe87ec(0x275)](_0x1b683a);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x23b)]=function(_0x29b992,_0x465b42){var _0x3f7bf0=_0xb96e9f;try{_0x29b992&&typeof _0x29b992['length']=='number'&&(_0x465b42['length']=_0x29b992['length']);}catch{}if(_0x465b42['type']===_0x3f7bf0(0x267)||_0x465b42[_0x3f7bf0(0x1ff)]===_0x3f7bf0(0x219)){if(isNaN(_0x465b42[_0x3f7bf0(0x286)]))_0x465b42[_0x3f7bf0(0x20d)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];else switch(_0x465b42[_0x3f7bf0(0x286)]){case Number[_0x3f7bf0(0x1f7)]:_0x465b42[_0x3f7bf0(0x2b5)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];break;case Number[_0x3f7bf0(0x229)]:_0x465b42[_0x3f7bf0(0x1fe)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];break;case 0x0:this[_0x3f7bf0(0x251)](_0x465b42[_0x3f7bf0(0x286)])&&(_0x465b42[_0x3f7bf0(0x2a6)]=!0x0);break;}}else _0x465b42[_0x3f7bf0(0x1ff)]==='function'&&typeof _0x29b992[_0x3f7bf0(0x21f)]=='string'&&_0x29b992['name']&&_0x465b42[_0x3f7bf0(0x21f)]&&_0x29b992[_0x3f7bf0(0x21f)]!==_0x465b42[_0x3f7bf0(0x21f)]&&(_0x465b42[_0x3f7bf0(0x257)]=_0x29b992[_0x3f7bf0(0x21f)]);},_0x435715[_0xb96e9f(0x1fa)]['_isNegativeZero']=function(_0x42b720){return 0x1/_0x42b720===Number['NEGATIVE_INFINITY'];},_0x435715['prototype'][_0xb96e9f(0x2a8)]=function(_0x144a29){var _0x2c4118=_0xb96e9f;!_0x144a29[_0x2c4118(0x1c4)]||!_0x144a29[_0x2c4118(0x1c4)][_0x2c4118(0x1d6)]||_0x144a29[_0x2c4118(0x1ff)]===_0x2c4118(0x237)||_0x144a29[_0x2c4118(0x1ff)]===_0x2c4118(0x234)||_0x144a29['type']===_0x2c4118(0x2b8)||_0x144a29[_0x2c4118(0x1c4)][_0x2c4118(0x1bb)](function(_0x4b855e,_0x633de4){var _0x1e421f=_0x2c4118,_0x39c3a3=_0x4b855e[_0x1e421f(0x21f)][_0x1e421f(0x220)](),_0x37871b=_0x633de4[_0x1e421f(0x21f)][_0x1e421f(0x220)]();return _0x39c3a3<_0x37871b?-0x1:_0x39c3a3>_0x37871b?0x1:0x0;});},_0x435715[_0xb96e9f(0x1fa)]['_addFunctionsNode']=function(_0x336383,_0x4b546f){var _0x2943d1=_0xb96e9f;if(!(_0x4b546f[_0x2943d1(0x2a3)]||!_0x336383[_0x2943d1(0x1c4)]||!_0x336383[_0x2943d1(0x1c4)][_0x2943d1(0x1d6)])){for(var _0x2939f5=[],_0x354665=[],_0x1d6193=0x0,_0x5c01d4=_0x336383['props']['length'];_0x1d6193<_0x5c01d4;_0x1d6193++){var _0xf4eeba=_0x336383[_0x2943d1(0x1c4)][_0x1d6193];_0xf4eeba[_0x2943d1(0x1ff)]===_0x2943d1(0x292)?_0x2939f5['push'](_0xf4eeba):_0x354665[_0x2943d1(0x27f)](_0xf4eeba);}if(!(!_0x354665[_0x2943d1(0x1d6)]||_0x2939f5['length']<=0x1)){_0x336383['props']=_0x354665;var _0x3cb13e={'functionsNode':!0x0,'props':_0x2939f5};this[_0x2943d1(0x2a1)](_0x3cb13e,_0x4b546f),this['_setNodeLabel'](_0x3cb13e,_0x4b546f),this[_0x2943d1(0x1d4)](_0x3cb13e),this[_0x2943d1(0x298)](_0x3cb13e,_0x4b546f),_0x3cb13e['id']+='\\x20f',_0x336383[_0x2943d1(0x1c4)][_0x2943d1(0x204)](_0x3cb13e);}}},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x28f)]=function(_0x44ec36,_0xe995a0){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1d4)]=function(_0xd571d){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x261)]=function(_0x4e30ec){var _0x1bd593=_0xb96e9f;return Array['isArray'](_0x4e30ec)||typeof _0x4e30ec==_0x1bd593(0x287)&&this[_0x1bd593(0x1b9)](_0x4e30ec)===_0x1bd593(0x282);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x298)]=function(_0x4e9e0b,_0x2a21be){},_0x435715['prototype'][_0xb96e9f(0x275)]=function(_0x5cbafd){var _0x51c626=_0xb96e9f;delete _0x5cbafd[_0x51c626(0x2a7)],delete _0x5cbafd[_0x51c626(0x255)],delete _0x5cbafd[_0x51c626(0x1f2)];},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x225)]=function(_0x1f27eb,_0x4f203a){};let _0x11e6c9=new _0x435715(),_0x5bd079={'props':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x1c4)]||0x64,'elements':_0x167e22[_0xb96e9f(0x1ca)]['elements']||0x64,'strLength':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x28b)]||0x400*0x32,'totalStrLength':_0x167e22['defaultLimits'][_0xb96e9f(0x2b0)]||0x400*0x32,'autoExpandLimit':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x281)]||0x1388,'autoExpandMaxDepth':_0x167e22['defaultLimits'][_0xb96e9f(0x24e)]||0xa},_0x5c4238={'props':_0x167e22['reducedLimits'][_0xb96e9f(0x1c4)]||0x5,'elements':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x213)]||0x5,'strLength':_0x167e22[_0xb96e9f(0x2a5)]['strLength']||0x100,'totalStrLength':_0x167e22[_0xb96e9f(0x2a5)]['totalStrLength']||0x100*0x3,'autoExpandLimit':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x281)]||0x1e,'autoExpandMaxDepth':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x24e)]||0x2};if(_0x58debe){let _0x522749=_0x11e6c9['serialize'][_0xb96e9f(0x1f8)](_0x11e6c9);_0x11e6c9[_0xb96e9f(0x1c3)]=function(_0xcd83e3,_0x45f15a,_0x40e39d,_0x4e0312){return _0x522749(_0xcd83e3,_0x58debe(_0x45f15a),_0x40e39d,_0x4e0312);};}function _0x1fe57c(_0x5335d4,_0x308a29,_0x25d338,_0x1f532c,_0xab7796,_0x1596fe){var _0x42668e=_0xb96e9f;let _0x2438a5,_0x5087c3;try{_0x5087c3=_0x21489e(),_0x2438a5=_0x56215a[_0x308a29],!_0x2438a5||_0x5087c3-_0x2438a5['ts']>_0x6f4d67['perLogpoint']['resetWhenQuietMs']&&_0x2438a5[_0x42668e(0x243)]&&_0x2438a5[_0x42668e(0x26e)]/_0x2438a5['count']<_0x6f4d67['perLogpoint'][_0x42668e(0x256)]?(_0x56215a[_0x308a29]=_0x2438a5={'count':0x0,'time':0x0,'ts':_0x5087c3},_0x56215a[_0x42668e(0x1b0)]={}):_0x5087c3-_0x56215a[_0x42668e(0x1b0)]['ts']>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x25e)]&&_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x243)]&&_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x26e)]/_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x243)]<_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x256)]&&(_0x56215a[_0x42668e(0x1b0)]={});let _0x27f89e=[],_0x43039f=_0x2438a5[_0x42668e(0x295)]||_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x295)]?_0x5c4238:_0x5bd079,_0x25b218=_0x149248=>{var _0x2f8652=_0x42668e;let _0x595c72={};return _0x595c72[_0x2f8652(0x1c4)]=_0x149248['props'],_0x595c72[_0x2f8652(0x213)]=_0x149248[_0x2f8652(0x213)],_0x595c72[_0x2f8652(0x28b)]=_0x149248[_0x2f8652(0x28b)],_0x595c72[_0x2f8652(0x2b0)]=_0x149248[_0x2f8652(0x2b0)],_0x595c72[_0x2f8652(0x281)]=_0x149248['autoExpandLimit'],_0x595c72[_0x2f8652(0x24e)]=_0x149248[_0x2f8652(0x24e)],_0x595c72['sortProps']=!0x1,_0x595c72[_0x2f8652(0x2a3)]=!_0x3c6597,_0x595c72['depth']=0x1,_0x595c72[_0x2f8652(0x1f1)]=0x0,_0x595c72['expId']=_0x2f8652(0x21d),_0x595c72[_0x2f8652(0x1c7)]=_0x2f8652(0x22d),_0x595c72[_0x2f8652(0x1d9)]=!0x0,_0x595c72[_0x2f8652(0x26f)]=[],_0x595c72['autoExpandPropertyCount']=0x0,_0x595c72[_0x2f8652(0x2aa)]=_0x167e22['resolveGetters'],_0x595c72[_0x2f8652(0x216)]=0x0,_0x595c72[_0x2f8652(0x212)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x595c72;};for(var _0x4d9c24=0x0;_0x4d9c24<_0xab7796[_0x42668e(0x1d6)];_0x4d9c24++)_0x27f89e[_0x42668e(0x27f)](_0x11e6c9['serialize']({'timeNode':_0x5335d4===_0x42668e(0x26e)||void 0x0},_0xab7796[_0x4d9c24],_0x25b218(_0x43039f),{}));if(_0x5335d4==='trace'||_0x5335d4==='error'){let _0xf38a4a=Error[_0x42668e(0x247)];try{Error[_0x42668e(0x247)]=0x1/0x0,_0x27f89e[_0x42668e(0x27f)](_0x11e6c9[_0x42668e(0x1c3)]({'stackNode':!0x0},new Error()[_0x42668e(0x1c6)],_0x25b218(_0x43039f),{'strLength':0x1/0x0}));}finally{Error[_0x42668e(0x247)]=_0xf38a4a;}}return{'method':'log','version':_0x1ac10d,'args':[{'ts':_0x25d338,'session':_0x1f532c,'args':_0x27f89e,'id':_0x308a29,'context':_0x1596fe}]};}catch(_0x18eeb9){return{'method':_0x42668e(0x23c),'version':_0x1ac10d,'args':[{'ts':_0x25d338,'session':_0x1f532c,'args':[{'type':_0x42668e(0x279),'error':_0x18eeb9&&_0x18eeb9[_0x42668e(0x201)]}],'id':_0x308a29,'context':_0x1596fe}]};}finally{try{if(_0x2438a5&&_0x5087c3){let _0x1248bf=_0x21489e();_0x2438a5['count']++,_0x2438a5['time']+=_0x394800(_0x5087c3,_0x1248bf),_0x2438a5['ts']=_0x1248bf,_0x56215a['hits'][_0x42668e(0x243)]++,_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x26e)]+=_0x394800(_0x5087c3,_0x1248bf),_0x56215a['hits']['ts']=_0x1248bf,(_0x2438a5[_0x42668e(0x243)]>_0x6f4d67[_0x42668e(0x22f)][_0x42668e(0x26d)]||_0x2438a5[_0x42668e(0x26e)]>_0x6f4d67['perLogpoint'][_0x42668e(0x1cc)])&&(_0x2438a5[_0x42668e(0x295)]=!0x0),(_0x56215a['hits'][_0x42668e(0x243)]>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x26d)]||_0x56215a[_0x42668e(0x1b0)]['time']>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x1cc)])&&(_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x295)]=!0x0);}}catch{}}}return _0x1fe57c;}function G(_0x12418b){var _0x4c2b55=_0x1cc9bf;if(_0x12418b&&typeof _0x12418b==_0x4c2b55(0x287)&&_0x12418b[_0x4c2b55(0x241)])switch(_0x12418b[_0x4c2b55(0x241)][_0x4c2b55(0x21f)]){case'Promise':return _0x12418b['hasOwnProperty'](Symbol[_0x4c2b55(0x27c)])?Promise[_0x4c2b55(0x226)]():_0x12418b;case _0x4c2b55(0x22c):return Promise[_0x4c2b55(0x226)]();}return _0x12418b;}((_0x58d798,_0x11fd99,_0x10d4ec,_0x3bdd08,_0x155b75,_0x31b6c8,_0xbdb6d1,_0x3068b7,_0x91a82,_0x7a6cf0,_0x2e8c07,_0xf1acf2)=>{var _0x346dd3=_0x1cc9bf;if(_0x58d798['_console_ninja'])return _0x58d798[_0x346dd3(0x1e6)];let _0x4b76c7={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x58d798,_0x3068b7,_0x155b75))return _0x58d798[_0x346dd3(0x1e6)]=_0x4b76c7,_0x58d798[_0x346dd3(0x1e6)];let _0x204b39=b(_0x58d798),_0x62f8a0=_0x204b39['elapsed'],_0x59153e=_0x204b39[_0x346dd3(0x29d)],_0x3f753e=_0x204b39[_0x346dd3(0x244)],_0x4ff01f={'hits':{},'ts':{}},_0x5082fa=J(_0x58d798,_0x91a82,_0x4ff01f,_0x31b6c8,_0xf1acf2,_0x155b75===_0x346dd3(0x21b)?G:void 0x0),_0x48af16=(_0x223141,_0x371f64,_0x35037a,_0x3cd8c9,_0x535304,_0x261762)=>{var _0x296592=_0x346dd3;let _0x53157f=_0x58d798[_0x296592(0x1e6)];try{return _0x58d798['_console_ninja']=_0x4b76c7,_0x5082fa(_0x223141,_0x371f64,_0x35037a,_0x3cd8c9,_0x535304,_0x261762);}finally{_0x58d798[_0x296592(0x1e6)]=_0x53157f;}},_0x39cf02=_0x422f8a=>{_0x4ff01f['ts'][_0x422f8a]=_0x59153e();},_0x1564b3=(_0x212127,_0x2c5a9e)=>{let _0x520a8c=_0x4ff01f['ts'][_0x2c5a9e];if(delete _0x4ff01f['ts'][_0x2c5a9e],_0x520a8c){let _0x3cefa7=_0x62f8a0(_0x520a8c,_0x59153e());_0x5ede0b(_0x48af16('time',_0x212127,_0x3f753e(),_0x2a26cf,[_0x3cefa7],_0x2c5a9e));}},_0x420127=_0x4f93a5=>{var _0x1876f0=_0x346dd3,_0x486c8c;return _0x155b75===_0x1876f0(0x21b)&&_0x58d798[_0x1876f0(0x2b3)]&&((_0x486c8c=_0x4f93a5==null?void 0x0:_0x4f93a5[_0x1876f0(0x1f6)])==null?void 0x0:_0x486c8c['length'])&&(_0x4f93a5['args'][0x0][_0x1876f0(0x2b3)]=_0x58d798[_0x1876f0(0x2b3)]),_0x4f93a5;};_0x58d798[_0x346dd3(0x1e6)]={'consoleLog':(_0x5a1884,_0x212f58)=>{var _0x341c81=_0x346dd3;_0x58d798['console']['log'][_0x341c81(0x21f)]!=='disabledLog'&&_0x5ede0b(_0x48af16(_0x341c81(0x23c),_0x5a1884,_0x3f753e(),_0x2a26cf,_0x212f58));},'consoleTrace':(_0x28f0da,_0x4ebb69)=>{var _0x13396a=_0x346dd3,_0x8657a2,_0x1db2a3;_0x58d798[_0x13396a(0x276)][_0x13396a(0x23c)][_0x13396a(0x21f)]!==_0x13396a(0x259)&&((_0x1db2a3=(_0x8657a2=_0x58d798[_0x13396a(0x1e2)])==null?void 0x0:_0x8657a2[_0x13396a(0x25c)])!=null&&_0x1db2a3[_0x13396a(0x212)]&&(_0x58d798[_0x13396a(0x211)]=!0x0),_0x5ede0b(_0x420127(_0x48af16('trace',_0x28f0da,_0x3f753e(),_0x2a26cf,_0x4ebb69))));},'consoleError':(_0x4da457,_0x1dbd96)=>{_0x58d798['_ninjaIgnoreNextError']=!0x0,_0x5ede0b(_0x420127(_0x48af16('error',_0x4da457,_0x3f753e(),_0x2a26cf,_0x1dbd96)));},'consoleTime':_0x43136f=>{_0x39cf02(_0x43136f);},'consoleTimeEnd':(_0x5c938f,_0x2ca612)=>{_0x1564b3(_0x2ca612,_0x5c938f);},'autoLog':(_0x5b4ec0,_0x290a38)=>{_0x5ede0b(_0x48af16('log',_0x290a38,_0x3f753e(),_0x2a26cf,[_0x5b4ec0]));},'autoLogMany':(_0x2e69a3,_0x46af14)=>{var _0x3dd49d=_0x346dd3;_0x5ede0b(_0x48af16(_0x3dd49d(0x23c),_0x2e69a3,_0x3f753e(),_0x2a26cf,_0x46af14));},'autoTrace':(_0x1483a2,_0x1e2762)=>{var _0x2e5a8b=_0x346dd3;_0x5ede0b(_0x420127(_0x48af16(_0x2e5a8b(0x262),_0x1e2762,_0x3f753e(),_0x2a26cf,[_0x1483a2])));},'autoTraceMany':(_0x46c70a,_0x381c1e)=>{_0x5ede0b(_0x420127(_0x48af16('trace',_0x46c70a,_0x3f753e(),_0x2a26cf,_0x381c1e)));},'autoTime':(_0x236c2b,_0x4d0b4d,_0x1c4cbf)=>{_0x39cf02(_0x1c4cbf);},'autoTimeEnd':(_0x25b203,_0x2a4be9,_0x5e6277)=>{_0x1564b3(_0x2a4be9,_0x5e6277);},'coverage':_0x166355=>{var _0x172574=_0x346dd3;_0x5ede0b({'method':_0x172574(0x23e),'version':_0x31b6c8,'args':[{'id':_0x166355}]});}};let _0x5ede0b=H(_0x58d798,_0x11fd99,_0x10d4ec,_0x3bdd08,_0x155b75,_0x7a6cf0,_0x2e8c07),_0x2a26cf=_0x58d798[_0x346dd3(0x1d1)];return _0x58d798[_0x346dd3(0x1e6)];})(globalThis,_0x1cc9bf(0x28d),_0x1cc9bf(0x29a),_0x1cc9bf(0x22b),_0x1cc9bf(0x2b6),_0x1cc9bf(0x207),_0x1cc9bf(0x24a),_0x1cc9bf(0x25a),_0x1cc9bf(0x277),_0x1cc9bf(0x290),_0x1cc9bf(0x246),{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}});");
    } catch (e) {
        console.error(e);
    }
}
; /* istanbul ignore next */ 
function oo_oo(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tr(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tx(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_ts(/**@type{any}**/ v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_te(/**@type{any}**/ v, /**@type{any}**/ i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
var _c;
__turbopack_context__.k.register(_c, "PokeballModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Shop.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Wallet$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Wallet.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$packs$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/utils/packs.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Pokemon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Pokemon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Shop({ onClose }) {
    _s();
    // <--- desestructurado correctamente
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartasPorSobre, setCartasPorSobre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1) // cantidad de cartas que abre el modal
    ;
    // Solo para generar userId en cliente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Shop.useEffect": ()=>{
            let id = localStorage.getItem('user_id');
            if (!id) {
                id = crypto.randomUUID();
                localStorage.setItem('user_id', id);
            }
            setTimeout({
                "Shop.useEffect": ()=>setUserId(id)
            }["Shop.useEffect"], 0);
        }
    }["Shop.useEffect"], []);
    const { coins, addCoins, spendCoins } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])(userId);
    // Función que abre el sobre si hay monedas suficientes
    const handleOpenPack = (sobre)=>{
        if (coins >= sobre.precio) {
            spendCoins(sobre.precio);
            setCartasPorSobre(sobre.cantidad);
            setModalOpen(true);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No tienes suficientes monedas para comprar este sobre.');
        }
    };
    const handleCloseModal = ()=>{
        setModalOpen(false);
    };
    if (!userId) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {
                theme: "colored",
                position: "top-center"
            }, void 0, false, {
                fileName: "[project]/app/components/Shop.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4",
                onClick: onClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-6xl bg-purple-300 rounded-2xl p-6 overflow-hidden shadow-xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "absolute top-4 right-4 text-3xl font-bold text-black hover:text-red-700 cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Shop.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold mb-6 text-center text-black",
                            children: "Tienda de Sobres"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Shop.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Wallet$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            userId: userId
                        }, void 0, false, {
                            fileName: "[project]/app/components/Shop.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 overflow-x-auto py-4 px-2 justify-center",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$packs$2e$json__$28$json$29$__["default"].map((sobre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleOpenPack(sobre),
                                    className: "flex-shrink-0 w-64 h-64 p-6 bg-yellow-400 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform hover:cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-xl text-black mb-2 text-center",
                                            children: sobre.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Shop.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-black",
                                            children: [
                                                sobre.precio,
                                                " 💰"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Shop.jsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-black",
                                            children: sobre.cantidad
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Shop.jsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, sobre.id, true, {
                                    fileName: "[project]/app/components/Shop.jsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Shop.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Shop.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Shop.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Pokemon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cantidadPokemon: cartasPorSobre,
                closePack: handleCloseModal
            }, void 0, false, {
                fileName: "[project]/app/components/Shop.jsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Shop, "MxCQwf2HobrrWkhdpHxXUvyiX88=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = Shop;
var _c;
__turbopack_context__.k.register(_c, "Shop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ShopButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Shop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Shop.jsx [app-client] (ecmascript)"); // tu componente Shop completo como modal
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ShopButton() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(true),
                className: "fixed bottom-0 right-0 m-10 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105 hover:cursor-pointer transition-transform",
                children: "Abrir Tienda"
            }, void 0, false, {
                fileName: "[project]/app/components/ShopButton.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Shop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/components/ShopButton.jsx",
                lineNumber: 20,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true);
}
_s(ShopButton, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = ShopButton;
var _c;
__turbopack_context__.k.register(_c, "ShopButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Pokedex.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pokedex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const generations = {
    1: {
        name: 'Generación I',
        range: [
            1,
            151
        ]
    },
    2: {
        name: 'Generación II',
        range: [
            152,
            251
        ]
    },
    3: {
        name: 'Generación III',
        range: [
            252,
            386
        ]
    },
    4: {
        name: 'Generación IV',
        range: [
            387,
            493
        ]
    },
    5: {
        name: 'Generación V',
        range: [
            494,
            649
        ]
    },
    6: {
        name: 'Generación VI',
        range: [
            650,
            721
        ]
    },
    7: {
        name: 'Generación VII',
        range: [
            722,
            809
        ]
    },
    8: {
        name: 'Generación VIII',
        range: [
            810,
            898
        ]
    },
    9: {
        name: 'Generación IX',
        range: [
            899,
            1008
        ]
    }
};
function Pokedex({ onClose }) {
    _s();
    const [pokedex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Pokedex.useState": ()=>JSON.parse(localStorage.getItem('pokedex') || '{}')
    }["Pokedex.useState"]);
    const [openGens, setOpenGens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedPokemon, setSelectedPokemon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleGen = (genName)=>setOpenGens((prev)=>({
                ...prev,
                [genName]: !prev[genName]
            }));
    // Total global de Pokémon
    const totalPokemon = Object.values(generations).reduce((sum, g)=>sum + (g.range[1] - g.range[0] + 1), 0);
    const ownedTotal = Object.values(pokedex).filter((p)=>p.cantidad > 0).length;
    const pokedexPercent = (ownedTotal / totalPokemon * 100).toFixed(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/70 flex justify-center items-start overflow-auto pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 w-full max-w-6xl rounded-lg shadow-lg p-6 relative border-4 border-red-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 right-4 text-2xl font-bold text-black hover:text-red-700 cursor-pointer",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Pokedex.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-4 text-center text-black",
                        children: [
                            "Pokedex - ",
                            ownedTotal,
                            "/",
                            totalPokemon,
                            " Capturados (",
                            pokedexPercent,
                            "%)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Pokedex.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: Object.values(generations).map((gen)=>{
                            const totalInGen = gen.range[1] - gen.range[0] + 1;
                            const ownedPokemons = Object.values(pokedex).filter((p)=>p.id >= gen.range[0] && p.id <= gen.range[1] && p.cantidad > 0);
                            const owned = ownedPokemons.length;
                            const shinyCount = ownedPokemons.filter((p)=>p.shiny).length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-lg p-2 bg-red-50 border-red-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleGen(gen.name),
                                        className: "w-full text-left font-bold py-2 px-4 bg-red-300 text-black rounded hover:bg-red-400 transition cursor-pointer",
                                        children: [
                                            gen.name,
                                            " - ",
                                            owned,
                                            "/",
                                            totalInGen,
                                            " Capturados - ",
                                            shinyCount,
                                            ' ',
                                            "Shiny"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Pokedex.jsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    openGens[gen.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-6 gap-2 mt-2",
                                        children: Array.from({
                                            length: totalInGen
                                        }, (_, i)=>{
                                            const id = gen.range[0] + i;
                                            const p = Object.values(pokedex).find((pk)=>pk.id === id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>p && setSelectedPokemon(p),
                                                className: `flex flex-col items-center justify-center border p-1 rounded hover:shadow cursor-pointer ${p && p.cantidad > 0 ? 'bg-red-50 border-red-200' : 'bg-red-200 border-red-400'}`,
                                                children: [
                                                    p && p.cantidad > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: p.shiny ? p.shinyUrl || p.imagen : p.imagen,
                                                        alt: p.nombre,
                                                        className: "w-16 h-16 object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Pokedex.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl sm:text-2xl font-bold text-gray-700",
                                                        children: [
                                                            "#",
                                                            id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Pokedex.jsx",
                                                        lineNumber: 98,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs mt-1 text-black",
                                                        children: p ? p.nombre.toUpperCase() : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Pokedex.jsx",
                                                        lineNumber: 102,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, id, true, {
                                                fileName: "[project]/app/components/Pokedex.jsx",
                                                lineNumber: 82,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Pokedex.jsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, gen.name, true, {
                                fileName: "[project]/app/components/Pokedex.jsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/Pokedex.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Pokedex.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            selectedPokemon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-60 bg-black/70 flex justify-center items-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 rounded-lg p-6 w-full max-w-md relative border-4 border-red-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedPokemon(null),
                            className: "absolute top-4 right-4 text-xl font-bold text-black hover:text-red-700 cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Pokedex.jsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-2 text-center text-black",
                            children: [
                                selectedPokemon.nombre.toUpperCase(),
                                ' ',
                                selectedPokemon.shiny && '✨'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Pokedex.jsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedPokemon.shiny ? selectedPokemon.shinyUrl || selectedPokemon.imagen : selectedPokemon.imagen,
                            alt: selectedPokemon.nombre,
                            className: "w-32 h-32 mx-auto mb-4 object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Pokedex.jsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "ID:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokedex.jsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        selectedPokemon.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Pokedex.jsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Tipos:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokedex.jsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        selectedPokemon.tipos.join(', ')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Pokedex.jsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Habilidad:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokedex.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        selectedPokemon.habilidad.nombre,
                                        ' ',
                                        selectedPokemon.habilidad.hidden && '(Hidden)'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Pokedex.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Legendario:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokedex.jsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        ' ',
                                        selectedPokemon.is_legendary ? 'Sí' : 'No'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Pokedex.jsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Cantidad:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokedex.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        selectedPokemon.cantidad
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Pokedex.jsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "IVs:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Pokedex.jsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        selectedPokemon.ivs.join(', '),
                                        " (",
                                        selectedPokemon.ivTotalPercent,
                                        "%)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Pokedex.jsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Pokedex.jsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Pokedex.jsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Pokedex.jsx",
                lineNumber: 118,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Pokedex.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Pokedex, "tua+AagKKXB34hDmMFGruw08klc=");
_c = Pokedex;
var _c;
__turbopack_context__.k.register(_c, "Pokedex");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ClickerButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ClickerButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ShopButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ShopButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Wallet$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Wallet.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Pokedex$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Pokedex.jsx [app-client] (ecmascript)"); // Asegúrate de tener el componente
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Home() {
    _s();
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPokedex, setShowPokedex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false) // Nuevo estado
    ;
    // Solo para generar userId en cliente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            let id = localStorage.getItem('user_id');
            if (!id) {
                id = crypto.randomUUID();
                localStorage.setItem('user_id', id);
            }
            // Usar setTimeout para evitar cascada de renders
            setTimeout({
                "Home.useEffect": ()=>setUserId(id)
            }["Home.useEffect"], 0);
        }
    }["Home.useEffect"], []);
    const { coins, addCoins } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])(userId);
    // Renderizamos solo cuando userId ya existe
    if (!userId) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 bg-diagonal"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Wallet$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        userId: userId
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ClickerButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        addCoins: addCoins,
                        coinsPerClick: 1
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed left-6 top-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: " bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105 hover:cursor-pointer",
                            onClick: ()=>setShowPokedex((prev)=>!prev),
                            children: showPokedex ? 'Cerrar Pokedex' : 'Abrir Pokedex'
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    showPokedex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Pokedex$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setShowPokedex(false)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 49,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ShopButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Home, "OoFxyqRw5VC5ZxmqIEVNOALt5Hs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_407bb824._.js.map