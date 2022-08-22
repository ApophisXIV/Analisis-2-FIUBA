<script>
    import Cards from "./Cards.svelte";
    export let chapter;
    export let chapter_index;
</script>

<section class="mt-20 " id="c{chapter_index + 1}">
    <hr class="border-slate-500 opacity-50" />
    <h2 class="text-3xl font-normal my-2 rounded-md  p-2">
        <span class="text-primary">Capítulo {chapter_index + 1}</span> - {chapter.title}
    </h2>
    <hr class="border-slate-500 opacity-50" />
    <div class="flex flex-wrap gap-4 justify-center mt-5">
        {#each chapter.cards as card, card_index}
            <Cards
                card_props={card}
                week={chapter_index + 1}
                card_id="{chapter_index}_card_{card_index}"
            />
        {/each}
    </div>
</section>
