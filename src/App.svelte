<script>
    import Hero from "./lib/Hero.svelte";
    import Footer from "./lib/Footer.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import Chapter from "./lib/Chapter.svelte";

    let chapters_list = [];
    fetch("./src/db/db.json")
        .then((response) => response.json())
        .then((data) => (chapters_list = data));
</script>

<Navbar />
<Hero />
<main class="container p-4 m-auto max-w-6xl" id="main">
    <h2 class="text-5xl my-12 text-center font-light">Material de estudio</h2>
    {#each chapters_list as chapter, index}
        <Chapter {chapter} chapter_index={index} />
    {/each}
</main>
<Footer />
