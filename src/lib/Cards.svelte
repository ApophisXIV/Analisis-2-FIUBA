<script>
    import { onMount } from "svelte";
    import { cards_state_db } from "../storage";

    export let card_props;
    export let card_id;
    export let week;

    let is_completed;

    const read_ui_states = () => {
        let states = [];
        document.querySelectorAll(".card").forEach((card) => {
            const card_actual_id = card.getAttribute("id");
            const card_state = card
                .querySelector(".card-state")
                .classList.contains("badge-success");
            states.push({
                id: card_actual_id,
                is_completed: card_actual_id === card_id ? is_completed : card_state,
            });
        });
        return states;
    };

    onMount(() => {
        const db = JSON.parse($cards_state_db);
        if (db.length > 0) is_completed = db.find((item) => item.id === card_id).is_completed;
    });

    const toggle_card_state = (e) => {
        is_completed = ["A", "svg", "BUTTON", "path"].includes(e.target.nodeName)
            ? "true"
            : !is_completed;
        cards_state_db.set(JSON.stringify(read_ui_states()));
    };
</script>

<div class="card max-w-md bg-base-100 shadow-xl" id={card_id}>
    <div class="card-body">
        <h2 class="card-title font-semibold">{card_props.title}</h2>
        <p class="font-light">{card_props.description}</p>
        <div class="card-actions mt-5 justify-between items-end">
            <a
                on:click={toggle_card_state}
                class="btn btn-warning rounded-lg w-24"
                href={card_props.url}
                target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            </a>
            <div>
                <div class="badge font-semibold">
                    Parte {parseInt(week) < 6 ? "1" : "2"} de la materia
                </div>
                <div
                    on:click={toggle_card_state}
                    class="card-state badge-state badge w-12 border-none {is_completed
                        ? 'badge-success'
                        : 'badge-error'}"
                >
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
</div>
