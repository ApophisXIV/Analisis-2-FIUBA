import { writable } from "svelte/store";

export const cards_state_db = writable(localStorage.getItem("an2_cards_state_db") || "[]");
cards_state_db.subscribe((cards) => localStorage.setItem("an2_cards_state_db", cards));

export let theme = writable(localStorage.getItem("an2_theme") || "cupcake");
theme.subscribe((v) => localStorage.setItem("an2_theme", v));